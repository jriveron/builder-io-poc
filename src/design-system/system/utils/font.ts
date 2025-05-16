const BASE_FONT = 16;

type StringOrNumber = string | number;

/**
 * Convert pixel to rem
 */
export const px2rem = (value: number) => `${value / BASE_FONT}rem`;

/**
 * Convert rem to pixel
 */
export const px2em = (value: number) => `${value / BASE_FONT}em`;

/**
 * Convert rem to pixel. Accepts either a string or number values
 * @example
 * ```tsx
 * rem2em('1rem') // '1em'
 * rem2em('2') // '2em'
 * ```
 */
export const rem2em = (value: StringOrNumber) => {
  if (typeof value === 'number') {
    return `${value}em`;
  }

  const parsed = parseFloat(value);

  if (!value.includes('rem') || isNaN(parsed)) {
    console.warn('rem2em expects a valid value with rem unit');
    return value;
  }

  return value.replace('rem', 'em');
};

/**
 * Convert em to rem. Accepts either a string or number values
 * @example
 * ```tsx
 * em2rem('1em') // '1rem'
 * em2rem('2') // '2rem'
 * ```
 */
export const em2rem = (value: StringOrNumber) => {
  if (typeof value === 'number') {
    return `${value}rem`;
  }

  const parsed = parseFloat(value);

  if (!value.includes('em') || isNaN(parsed)) {
    console.warn('em2rem expects a valid value with em unit');
    return value;
  }

  return value.replace('em', 'rem');
};

/**
 * Convert rem to pixel. Accepts either a string or number values
 * @example
 * ```tsx
 * rem2px('1rem') // '16px'
 * rem2px(2) // '32px'
 * ```
 */
export const rem2px = (value: StringOrNumber) => {
  if (typeof value === 'number') {
    return `${value * BASE_FONT}px`;
  }

  const parsed = parseFloat(value);

  if (!value.includes('rem') || isNaN(parsed)) {
    console.warn('rem2px expects a valid value with rem unit');
    return value;
  }

  return `${parsed * BASE_FONT}px`;
};

/**
 * Convert em to pixel. Accepts either a string or number values
 * @example
 * ```tsx
 * em2px('1em') // '16px'
 * em2px(2) // '32px'
 * ```
 */
export const em2px = (value: StringOrNumber) => {
  if (typeof value === 'number') {
    return `${value * BASE_FONT}px`;
  }

  const parsed = parseFloat(value);

  if (!value.includes('em') || isNaN(parsed)) {
    console.warn('em2px expects a valid value with em unit');
    return value;
  }

  return `${parsed * BASE_FONT}px`;
};
