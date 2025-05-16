import React from 'react';
import * as TooltipPrimitives from '@radix-ui/react-tooltip';
import * as S from './Tooltip.styles';
import Text from '@/design-system/Text/Text';

type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;

  /**
   * The position of the tooltip relative to the trigger element.
   * @default 'top'
   */
  position?: TooltipPrimitives.TooltipContentProps['side'];
};

// Can't use the theme here because the API doesn't allow for REM values
const OFFSET_SPACING = 1; // coreSpacing03 - 5 (Arrow size)

/**
 * Tooltip component is used to display additional information when hovering or focusing on an element.
 */
const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  ...props
}) => {
  return (
    <TooltipPrimitives.Root>
      <TooltipPrimitives.Trigger asChild>{children}</TooltipPrimitives.Trigger>
      <TooltipPrimitives.Portal>
        <S.TooltipContent
          side={position}
          align="center"
          sideOffset={OFFSET_SPACING}
          {...props}
        >
          <Text variant="t3" color="currentColor">
            {content}
          </Text>
          <TooltipPrimitives.Arrow />
        </S.TooltipContent>
      </TooltipPrimitives.Portal>
    </TooltipPrimitives.Root>
  );
};

export default Tooltip;
