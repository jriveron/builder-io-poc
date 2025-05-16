import { css, Theme } from '@emotion/react';
import { computeCssProperties, pickProps } from './computeCssProperties';
import { ResponsiveProp } from './responsiveProps';

type SpacingTokenKey = keyof Theme['space'];

export type PaddingProps = Partial<{
  padding: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  paddingX: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  paddingY: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  paddingTop: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  paddingRight: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  paddingBottom: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  paddingLeft: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  p: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  px: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  py: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  pt: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  pr: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  pb: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  pl: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
}>;

type PaddingStyledProps = {
  theme: Theme;
} & PaddingProps;

/**
 * Map associating the css properties with an ordered list of paddingProps
 */
const stylePropertyConfigs = {
  paddingTop: ['paddingTop', 'pt', 'paddingY', 'py', 'padding', 'p'],
  paddingRight: ['paddingRight', 'pr', 'paddingX', 'px', 'padding', 'p'],
  paddingBottom: ['paddingBottom', 'pb', 'paddingY', 'py', 'padding', 'p'],
  paddingLeft: ['paddingLeft', 'pl', 'paddingX', 'px', 'padding', 'p'],
} as const;

/**
 * Emotion function to be called in css template string or directly with emotion theme and props.
 *
 * @example
 * const StyledComp = styled.div<PaddingProps>`
 *   ${paddings}
 * `;
 *
 * @example
 * const Container = styled.div<PaddingProps>(props => ({
 *  ...paddings(props)
 * }));
 */
export const paddings = ({ theme, ...paddingProps }: PaddingStyledProps) => {
  return css(
    computeCssProperties({
      category: 'space',
      cssProperties: {
        paddingTop: pickProps(stylePropertyConfigs.paddingTop, paddingProps, 'space'),
        paddingRight: pickProps(stylePropertyConfigs.paddingRight, paddingProps, 'space'),
        paddingBottom: pickProps(stylePropertyConfigs.paddingBottom, paddingProps, 'space'),
        paddingLeft: pickProps(stylePropertyConfigs.paddingLeft, paddingProps, 'space'),
      },
      theme,
    }),
  );
};
