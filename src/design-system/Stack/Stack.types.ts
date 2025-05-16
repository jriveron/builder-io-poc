import { Theme } from '@emotion/react';
import { MarginProps, ResponsiveProp } from '@/design-system/system/variants';

export type Alignment =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'baseline';

type SpacingTokenKey = keyof Theme['space'];

export type StackProps = MarginProps & {
  /**
   * The gap between the children. Can be expressed using the responsive notation.
   * @example
   *
   * ```jsx
   * <Stack gap={{ xs: 'sm', md: 'lg' }}>
   *  <div>First</div>
   *  <div>Second</div>
   * </Stack>
   *  ```
   */
  gap?: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;

  /**
   * The vertical alignment of the children. Can be expressed using the responsive notation.
   *
   * @example
   *
   *  ```jsx
   * <Stack verticalAlign={{ xs: 'center', md: 'start' }}>
   *  <div>First</div>
   *  <div>Second</div>
   * </Stack>
   * ```
   */
  verticalAlign?: ResponsiveProp<Alignment> | Alignment;

  /**
   * The horizontal alignment of the children. Can be expressed using the responsive notation.
   *
   * @example
   *
   *  ```jsx
   * <Stack horizontalAlign={{ xs: 'center', md: 'start' }}>
   *  <div>First</div>
   *  <div>Second</div>
   * </Stack>
   * ```
   */
  horizontalAlign?: ResponsiveProp<Alignment> | Alignment;

  /**
   * Flag to make the stack an inline-flex container.
   * @default false
   */
  inline?: boolean;
};
