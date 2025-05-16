import { css, SerializedStyles, Theme } from '@emotion/react';
import {
  createResponsiveStyle,
  isResponsiveProp,
  ResponsiveProp,
} from './responsiveProps';

type CssPropValue<T extends keyof Theme> =
  | ResponsiveProp<keyof Theme[T]>
  | keyof Theme[T]
  | undefined;

const getToken = <T extends keyof Theme>({
  theme,
  category,
  property,
}: {
  theme: Theme;
  category: T;
  property?: keyof Theme[T];
}) => {
  if (!property) {
    return undefined;
  }

  return theme[category][property] || undefined;
};

/**
 * Pick the first property value that is defined in the props
 */
export const pickProps = <
  T extends string,
  P extends Record<string, unknown>,
  K extends keyof Theme
>(
  propertyOrderedRelatedPropKeys: ReadonlyArray<T>,
  props: P,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  category: K
) => {
  const found = propertyOrderedRelatedPropKeys.find(
    (propKey) => propKey in props
  ) as keyof P | undefined;
  return found ? (props[found] as keyof Theme[typeof category]) : undefined;
};

/**
 * Remove undefined and null css properties
 * Build an array of styles using theme Tokens
 */
export const computeCssProperties = <T extends keyof Theme>({
  category,
  cssProperties,
  theme,
}: {
  category: T;
  cssProperties: {
    [cssProp: string]: CssPropValue<T>;
  };
  theme: Theme;
}) =>
  Object.entries(cssProperties)
    // first filter for the props not defined
    .filter(([, tokenKey]) => !!tokenKey)
    // recreate the css object
    .reduce((acc, [cssProp, tokenKey]) => {
      if (!isResponsiveProp(tokenKey)) {
        const tokenValue = getToken({ theme, category, property: tokenKey });
        return tokenValue ? [...acc, { [cssProp]: tokenValue }] : acc;
      }

      // create static style map for each given breakpoint
      const responsiveStyle = createResponsiveStyle(
        (tokenKey) =>
          css({ [cssProp]: getToken({ theme, category, property: tokenKey }) }),
        tokenKey
      );
      return responsiveStyle ? [...acc, responsiveStyle] : acc;
    }, [] as Array<{ [cssProp: string]: string } | SerializedStyles | string>);
