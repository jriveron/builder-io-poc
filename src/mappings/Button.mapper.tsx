import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from '@builder.io/dev-tools/figma';
import Button from '@/design-system/Button/Button';
import {
  ButtonSize,
  Hierarchy,
  Intent,
} from '@/design-system/Button/Button.types';

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
    const hierarchy = figma.Hierarchy?.toLowerCase().replace(
      /-|\s/g,
      ''
    ) as Hierarchy;

    // Base button props
    const buttonProps = {
      hierarchy: hierarchy ?? 'primary',
      size: (figma.Size?.toLowerCase() as ButtonSize) ?? 'm',
      intent: (figma.Intent?.toLowerCase() as Intent) ?? 'default',
      inverse: isInverse,
      fillContainer: fillContainer,
      onClick: () => {},
      leadingIcon: figma.hasLeadingIcon
        ? () => figma['Leading Icon']
        : undefined,
      trailingIcon: figma.hasTrailingIcon
        ? () => figma['Leading Icon']
        : undefined,
    };

    const button = <Button {...buttonProps}>{figma.Label}</Button>;

    return button;
  },
});
