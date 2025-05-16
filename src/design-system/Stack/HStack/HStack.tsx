import React, { forwardRef } from 'react';

import * as S from './HStack.styles';
import { HStackProps } from './HStack.types';

/**
 * HStack is a layout component that arranges its children in a horizontal flow.
 * It allows you to control the alignment and spacing between the children using responsive props.
 */
const HStack = forwardRef<HTMLDivElement, HStackProps>(
  ({ children, as, ...props }, ref) => {
    const asForwarded = as ? as : 'div';

    return (
      <S.HStack as={asForwarded} ref={ref} {...props}>
        {children}
      </S.HStack>
    );
  }
);

HStack.displayName = 'HStack';

export default HStack;
