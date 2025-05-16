import { type Theme } from '@emotion/react';
import { ThemeColor } from '../../types/themeKeys';
import { colorProps } from './colorProps';

// Create a type that extracts keys containing "text"
type OnlyTextColors = `semantic${string}Text${string}`;

type ExtractTextColors =
  | ThemeColor<OnlyTextColors>
  | 'semanticColorsWarningDefaultColor' // usage: Hint
  | 'semanticColorsNegativeDefaultColor' // usage: Hint
  | 'semanticColorsPositiveDefaultColor' // usage: Hint
  | 'semanticColorsPrimaryColor' // usage: TopChartTag
  | 'semanticColorsDisabledForegroundColor'; // usage: Toggle Fields

export type TextColorProps = {
  /**
   * The color of the text. It extracts only the text colors from the theme.
   *  * Note:
   *   - `inherit`: uses the value used by the parent.
   *   - `currentColor`: uses the value of the closest defined color property value
   *
   * @default undefined
   */
  color?: ExtractTextColors | 'inherit' | 'currentColor';
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
export const textColor = ({ theme, color }: { theme: Theme } & TextColorProps) => {
  return colorProps<ExtractTextColors>({ theme, color });
};
