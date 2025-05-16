import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { contentAlign, contentGap, contentJustify } from '../Stack.styles';
import { css } from '@emotion/react';

import { HStackProps } from './HStack.types';
import { margins } from '@/design-system/system/variants';

export const HStack = styled('div', {
  shouldForwardProp: isPropValid,
})<HStackProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  flex-direction: row;
  ${({ flexWrap }) =>
    flexWrap &&
    css`
      flex-wrap: wrap;
    `}

  // By default, the content is horizontally aligned to the start of the container
  ${({ horizontalAlign = 'start' }) => contentJustify(horizontalAlign)}

  // By default, the content is vertically centered in the container
  ${({ verticalAlign = 'center' }) => contentAlign(verticalAlign)}

  ${contentGap}
  ${margins}
`;
