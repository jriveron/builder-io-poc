import { css, Theme } from '@emotion/react';
import { computeCssProperties, pickProps } from './computeCssProperties';
import { ResponsiveProp } from './responsiveProps';

type SpacingTokenKey = keyof Theme['space'];

export type MarginProps = Partial<{
  margin: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  marginX: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  marginY: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  marginTop: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  marginRight: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  marginBottom: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  marginLeft: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  m: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  mx: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  my: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  mt: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  mr: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  mb: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
  ml: ResponsiveProp<SpacingTokenKey> | SpacingTokenKey;
}>;

type MarginStyledProps = {
  theme: Theme;
} & MarginProps;

/**
 * Map associating the css properties with an ordered list of marginProps
 */
const stylePropertyConfigs = {
  marginTop: ['marginTop', 'mt', 'marginY', 'my', 'margin', 'm'],
  marginRight: ['marginRight', 'mr', 'marginX', 'mx', 'margin', 'm'],
  marginBottom: ['marginBottom', 'mb', 'marginY', 'my', 'margin', 'm'],
  marginLeft: ['marginLeft', 'ml', 'marginX', 'mx', 'margin', 'm'],
} as const;

/**
 * Emotion function to be called in css template string or directly with emotion theme and props.
 *
 * @example
 * const StyledComp = styled.div<MarginProps>`
 *   ${margins}
 * `;
 *
 * @example
 * const Container = styled.div<MarginProps>(props => ({
 *  ...margins(props)
 * }));
 */
export const margins = ({ theme, ...marginProps }: MarginStyledProps) => {
  return css(
    computeCssProperties({
      category: 'space',
      cssProperties: {
        marginTop: pickProps(stylePropertyConfigs.marginTop, marginProps, 'space'),
        marginRight: pickProps(stylePropertyConfigs.marginRight, marginProps, 'space'),
        marginBottom: pickProps(stylePropertyConfigs.marginBottom, marginProps, 'space'),
        marginLeft: pickProps(stylePropertyConfigs.marginLeft, marginProps, 'space'),
      },
      theme,
    }),
  );
};
