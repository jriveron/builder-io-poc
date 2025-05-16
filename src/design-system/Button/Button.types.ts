import React from 'react';
import { ComponentProps } from 'react';

import Tooltip from '@/design-system/Tooltip/Tooltip';

export const hierarchies = [
  'primary',
  'secondary',
  'tertiary',
  'ghost',
  'ghost-compact',
] as const;
export type Hierarchy = (typeof hierarchies)[number];
export type Intent = 'default' | 'negative';
export const buttonSizes = ['m', 'l', 'xl'] as const;
export type ButtonSize = (typeof buttonSizes)[number];
export type ButtonIconSize = 's' | 'm';

export type BaseButtonProps = {
  /**
   * The `disabled` prop is used to disable the button.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The `hierarchy` gives the button a specific style based on the importance of the action.
   *
   * - `Primary`: High emphasis – For the primary, most important, or most common action on a screen.
   * - `Secondary`: Medium emphasis – For important actions that don’t distract from other onscreen elements.
   * - `Tertiary`: Low emphasis – For optional or supplementary actions with the least amount of prominence.
   * - `Ghost`: Very Low emphasis — With a subtle style, the least invasive variant.
   * - `Ghost-Compact`: Same as ghost but without padding. — Often used to match vertically text paragraph.
   */
  hierarchy: Hierarchy;
  /**
   * The `intent` gives the button a specific style based on the action's outcome.
   * For example, a negative intent can be used for destructive actions.
   * The default intent is used for neutral actions.
   *
   * @default 'default'
   */
  intent?: Intent;
  /**
   * The `inverse` prop is used to invert the button's colors.
   * Useful when the button is used on a dark background.
   *
   * @default false
   */
  inverse?: boolean;
  /**
   * The `loading` prop is used to display a loading spinner inside the button.
   *
   * @default false
   */
  loading?: boolean;
  /**
   * The size of the button.
   *
   * @note The `xl` size should only be used to align height of the button with an aside component like input for example.
   *
   * @default 'm'
   */
  size?: ButtonSize;
  /**
   * onClick is a callback function that is called when the button is clicked.
   * @returns
   */
  onClick: () => void;
};

export type ButtonTooltipProps = {
  /**
   * The `tooltip` prop is used to display a tooltip when hovering the button.
   * It will be displayed on hover and focus.
   */
  tooltip?: ComponentProps<typeof Tooltip>['content'];

  /**
   * The `tooltipPosition` prop is used to define the position of the tooltip.
   *
   * @default 'top'
   */
  tooltipPosition?: ComponentProps<typeof Tooltip>['position'];
};

export type IconProps = {
  /**
   * The functional icon to render inside the button.
   * The size will be automatically adjusted based on the button size.
   *
   * @example
   * ```tsx
   * import { Calendar } from '@/design-system/icons';
   *
   * <Button hierarchy="primary"
   *   trailingIcon={(iconSize) => <Cross size={iconSize} />}
   * >
   *  Book a table
   * </Button>
   * ```
   */
  trailingIcon?: (iconSize: ButtonIconSize) => React.ReactNode;
  /**
   * The decorative icon to render inside the button.
   * The size will be automatically adjusted based on the button size.
   *
   * @example
   * ```tsx
   * import { Favorite } from '@/design-system/icons';
   *
   * <Button hierarchy="primary"
   *   leadingIcon={(iconSize) => <Favorite size={iconSize} />}
   * >
   *  We love TheFork!
   * </Button>
   * ```
   */
  leadingIcon?: (iconSize: ButtonIconSize) => React.ReactNode;
};

export type BehaviorProps = {
  /**
   * The `fillContainer` determines if the button should extend to `fill` its container or `fit` the content.
   *
   * @default 'false'.
   */
  fillContainer?: boolean;
};

export type ButtonProps = BaseButtonProps &
  IconProps &
  BehaviorProps &
  ButtonTooltipProps & {
    /**
     * The `className` prop is used to add custom classes to the button. It can be used to override the default styles.
     */
    className?: string;
  };
