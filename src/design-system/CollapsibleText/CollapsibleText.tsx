import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { MotionConfig } from 'motion/react';

import { ChevronDown, ChevronUp } from '@/design-system/icons';
import * as S from './CollapsibleText.styles';
import useCollapsibleText from './useCollapsibleText';

import Button from '@/design-system/Button/Button';

type CollapsibleTextProps = {
  children: React.ReactNode;
  lines: number;
  showMoreLabel: string;
  showLessLabel: string;
};

/**
 * The **CollapsibleText** component is used to clamp the content to a specific number of lines.
 * It is useful when you want to display a preview of the content and show the full content on user interaction.
 */
const CollapsibleText: React.FC<CollapsibleTextProps> = ({
  children,
  lines,
  showMoreLabel,
  showLessLabel,
}) => {
  const { timing } = useTheme();
  const [collapse, setCollapse] = useState(true);
  const { containerRef, clampHeight, containerHeight, shouldClamp } =
    useCollapsibleText({ lines });

  const variants = {
    expanded: {
      height: !collapse && shouldClamp ? containerHeight : clampHeight,
    },
    collapsed: {
      height: shouldClamp ? clampHeight : 'auto',
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <S.CollapsibleTextWrapper
        isClamped={collapse}
        lines={lines}
        ref={containerRef}
        animate={collapse ? 'collapsed' : 'expanded'}
        variants={variants}
        transition={{
          duration: timing.coreMotionDurationShort / 1000,
          ease: 'easeOut',
        }}
      >
        {children}
      </S.CollapsibleTextWrapper>
      {shouldClamp && (
        <div>
          <Button
            hierarchy="ghost-compact"
            size="m"
            onClick={() => setCollapse(!collapse)}
            trailingIcon={(iconSize) =>
              collapse ? (
                <ChevronDown size={iconSize} />
              ) : (
                <ChevronUp size={iconSize} />
              )
            }
          >
            {collapse ? showMoreLabel : showLessLabel}
          </Button>
        </div>
      )}
    </MotionConfig>
  );
};

export default CollapsibleText;
