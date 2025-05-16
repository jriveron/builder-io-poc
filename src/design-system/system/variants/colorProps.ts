import { Theme } from '@emotion/react';
import type { AllThemeColors, ThemeColor } from '@/types/emotion';

export type ColorProps<T> = {
  color?: T | 'inherit' | 'currentColor';
};

/**
 * Emotion function that requires a color prop
 * Apply the raw value or the token value from the theme to the color css property
 * @param theme the tasty emotion theme
 * @param color the text color
 *   - 'inherit': uses the value used by the parent.
 *   - 'currentColor': uses the value of the closest defined color property value
 *   - any tokenValue: uses the value from the theme
 */
export const colorProps = <T extends ThemeColor<AllThemeColors>>({
  theme,
  color,
}: { theme: Theme } & (
  | ColorProps<T>
  | { color: 'inherit' | 'currentColor' }
)) => {
  if (!color) {
    return {};
  }

  if (color === 'inherit' || color === 'currentColor') {
    return { color };
  }

  return { color: theme.colors[color] };
};
