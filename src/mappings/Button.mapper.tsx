import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from '@builder.io/dev-tools/figma';
import Button from '@/design-system/Button/Button';
import Tooltip from '@/design-system/Tooltip/Tooltip';
import { IconContainer } from '@/design-system/Button/Button.styles';

// ❖ Button
interface FigmaButtonProps extends BaseFigmaProps {
  Label?: string;
  isFocused?: boolean;
  hasLeadingIcon?: boolean;
  hasTrailingIcon?: boolean;
  hasTooltip?: boolean;
  'Leading Icon'?: ChildrenNode;
  Icon?: ChildrenNode;
  Hierarchy?: 'Primary' | 'Secondary' | 'Tertiary' | 'Ghost' | 'Ghost Compact';
  State?: 'Default' | 'Hover' | 'Pressed' | 'Disabled' | 'Loading';
  Size?: 'M' | 'L' | 'XL';
  Intent?: 'Default' | 'Negative';
  Inverse?: 'False' | 'True';
  FillContainer?: 'False' | 'True';
  hasLabel?: 'True' | 'False';
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: 'Button',
  componentKey: 'e6a7dc5ca8b7780d8ddee724ab95f688ded12906',
  mapper(figma: FigmaButtonProps) {
    // Convert 'True'/'False' strings to booleans
    const fillContainer = figma.FillContainer === 'True';
    const isInverse = figma.Inverse === 'True';

    // Base button props
    const buttonProps = {
      hierarchy: figma.Hierarchy?.toLowerCase() ?? 'primary',
      size: figma.Size?.toLowerCase() ?? 'm',
      state: figma.State?.toLowerCase() ?? 'default',
      intent: figma.Intent?.toLowerCase() ?? 'default',
      inverse: isInverse,
      fillContainer: fillContainer,
    };

    const button = (
      <Button {...buttonProps}>
        {figma.hasLeadingIcon && (
          <IconContainer position="leading">
            {figma['Leading Icon']}
          </IconContainer>
        )}
        {figma.Label}
        {figma.hasTrailingIcon && (
          <IconContainer position="trailing">{figma.Icon}</IconContainer>
        )}
      </Button>
    );

    // Wrap with tooltip if needed
    if (figma.hasTooltip) {
      return <Tooltip content={figma.Label}>{button}</Tooltip>;
    }

    return button;
  },
});
