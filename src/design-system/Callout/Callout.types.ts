import { ReactNode } from 'react';

type Intent = 'neutral' | 'informative' | 'alert' | 'positive' | 'warning';

export type CalloutIconSize = 's' | 'm';

export type CollapsibleProps =
  | {
      /**
       * Whether the callout is collapsible or not.
       * When set to `true`, the description will be automatically truncated after 4 lines and a `Show more` button will be displayed.
       *
       * @default true
       */
      collapsible?: true | undefined;
      /**
       * The label of the `Show more` button.
       * It should be a short and descriptive label.
       */
      showMoreLabel: string;
      /**
       * The label of the `Show less` button.
       * It should be a short and descriptive label.
       */
      showLessLabel: string;
    }
  | {
      /**
       * Whether the callout is collapsible or not.
       * When set to `true`, the description will be automatically truncated after 4 lines and a `Show more` button will be displayed.
       */
      collapsible: false;
    };

export type CalloutProps = CollapsibleProps & {
  /**
   * The `className` is forwarded to allow the override of the default styles.
   */
  className?: string;
  /**
   * The description of the callout.
   *
   * **Note:** The description will be automatically truncated after 4 lines and and a `Show more` button will be displayed.
   */
  description: ReactNode;
  /**
   * The replacement icon for the callout.
   * When not provided, the icon will be automatically selected based on the intent.
   *
   * **Note:** Prefer using the icon from the intent to ensure the consistency of the component.
   */
  icon?: (iconProps: { size: CalloutIconSize }) => ReactNode;
  /**
   * Whether to show the icon or not.
   * When set to `false`, the icon will be hidden.
   *
   * @default true
   */
  showIcon?: boolean;
  /**
   * The intent of the callout. It affects the icon and the colors of the component.
   */
  intent: Intent;
  /**
   * If the component should be replaced by its loading state
   *
   * @default false
   */
  showSkeleton?: boolean;
  /**
   * The title of the callout.
   * It is optional and can be used to provide additional context to the user.
   */
  title?: ReactNode;
};
