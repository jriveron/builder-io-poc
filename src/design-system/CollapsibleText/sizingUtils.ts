export const isHTMLElement = (element: unknown): element is HTMLElement => {
  return element instanceof HTMLElement;
};

/**
 * Retrieve the line height calculated from the element box.
 */
export const calculateElementHeight = (element: HTMLElement) => {
  const clonedElement = element.cloneNode(true) as HTMLElement;

  clonedElement.style.visibility = 'hidden';
  clonedElement.style.height = 'auto';

  clonedElement.textContent = 'Aa';

  document.body.appendChild(clonedElement);

  // Get the line height based on the font size
  const lineHeight = clonedElement.offsetHeight;

  document.body.removeChild(clonedElement);

  return lineHeight;
};

export const getLineHeight = (element: HTMLElement) => {
  const lineHeight = getComputedStyle(element).lineHeight;

  if (
    lineHeight === 'normal' ||
    lineHeight === 'unset' ||
    lineHeight === 'initial' ||
    lineHeight === 'inherit'
  ) {
    return calculateElementHeight(element);
  }

  return parseInt(lineHeight);
};
