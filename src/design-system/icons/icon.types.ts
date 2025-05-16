export const ICON_VARIANTS = {
  outlined: 'Outlined',
  filled: 'Filled',
} as const;

export const ICON_SIZE_MAPPING = {
  s: 'semanticSizeIconS',
  m: 'semanticSizeIconM',
  l: 'semanticSizeIconL',
} as const;

export type IconSize = keyof typeof ICON_SIZE_MAPPING;
export type IconVariant = keyof typeof ICON_VARIANTS;

export const DEFAULT_VARIANT: IconVariant = 'outlined';

export type IconProps = {
  title?: string;
  size?: IconSize;
  className?: string;
};
