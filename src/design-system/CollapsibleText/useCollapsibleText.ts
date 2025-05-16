import { debounce } from 'lodash-es';
import { useLayoutEffect, useRef, useState } from 'react';
import { getLineHeight, isHTMLElement } from './sizingUtils';

const DEBOUNCE_TIME = 50;

type UseContentClamp = {
  lines: number;
};

/**
 * This hook is used to determine if the content should be clamped or not.
 * It calculates the height of the content and the height of the container.
 * If the content is higher than the container, it should be clamped.
 */
const useCollapsibleText = ({ lines }: UseContentClamp) => {
  const [shouldClamp, setShouldClamp] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);
  const [clampHeight, setClampHeight] = useState<number | undefined>(undefined);

  const isMounted = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const containerElement = containerRef.current;
    const contentElement = containerElement?.firstChild as HTMLElement;

    if (!containerElement || !contentElement) {
      return;
    }

    // The line height is calculated only once, no need to recalculate it on resize
    const lineHeight = getLineHeight(
      isHTMLElement(contentElement) ? contentElement : containerElement,
    );

    const clampHeight = lineHeight * lines;
    setClampHeight(clampHeight);

    // Handle initial rendering
    if (!isMounted.current) {
      isMounted.current = true;
      setShouldClamp(containerElement.scrollHeight > clampHeight);
      setContainerHeight(containerElement.scrollHeight);
    }

    const handleResize = () => {
      setContainerHeight(containerElement.scrollHeight);
      setShouldClamp(contentElement.offsetHeight > clampHeight);
    };

    const debouncedHandleResize = debounce(handleResize, DEBOUNCE_TIME);

    const observer = new ResizeObserver(debouncedHandleResize);

    observer.observe(containerElement);

    return () => {
      observer.disconnect();
      debouncedHandleResize.cancel();
    };
  }, [lines]);

  return { containerRef, shouldClamp, containerHeight, clampHeight };
};

export default useCollapsibleText;
