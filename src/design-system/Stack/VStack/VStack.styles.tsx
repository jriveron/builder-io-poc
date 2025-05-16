import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';

import { margins } from '@/design-system/system/variants';
import { contentAlign, contentGap, contentJustify } from '../Stack.styles';
import { StackProps } from '../Stack.types';

export const VStack = styled('div', {
  shouldForwardProp: isPropValid,
})<StackProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  flex-direction: column;
  flex-wrap: wrap;

  // By default, it grows horizontally to fill the container
  ${({ inline }) => !inline && `flex-grow: 1;`}

  // By default, the content is vertically centered in the container
  ${({ horizontalAlign = 'stretch' }) => contentAlign(horizontalAlign)}

  // By default, the content is stretched to fill the container
  ${({ verticalAlign = 'center' }) => contentJustify(verticalAlign)}

  ${contentGap}
  ${margins}
`;
