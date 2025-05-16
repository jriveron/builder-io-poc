import { type Theme } from '@emotion/react';
import { ThemeColor } from '../../types/themeKeys';
import { colorProps } from './colorProps';

// Create a type that extracts only Tasty core/semantic and component colors
// This will exclude the old Chili colors
export type OnlyTastyColors = `core${string}` | `semantic${string}` | `component${string}`;

export type ExtractTastyColors = ThemeColor<OnlyTastyColors>;

export type TastyColorProps = {
  color?: ExtractTastyColors | 'inherit' | 'currentColor';
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
export const tastyColor = ({ theme, color }: { theme: Theme } & TastyColorProps) => {
  return colorProps<ExtractTastyColors>({ theme, color });
};
