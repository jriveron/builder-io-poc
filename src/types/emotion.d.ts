import '@emotion/react';

import { theme } from '@/design-system/theme';

type DesignSystemTheme = typeof theme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends DesignSystemTheme {}
}

// Create a type that extracts keys containing the given type
type KeysContaining<T, TContains> = {
  [K in keyof T]: K extends TContains ? K : never;
}[keyof T];

export type AllThemeColors = string;

/**
 * Extract the key of the theme that contains the given type
 * @param TContains the type to search in the theme
 * @param TCategory the category of the theme to search in
 */
export type ThemeKey<TContains, TCategory extends keyof Theme> = KeysContaining<
  Theme[TCategory],
  TContains
>;

/**
 * Specialization of ThemeKey for colors
 * By default, it returns all the keys of the colors category
 * @param TContains the type to search in the theme
 */
export type ThemeColor<TContains> = ThemeKey<TContains, 'colors'>;
