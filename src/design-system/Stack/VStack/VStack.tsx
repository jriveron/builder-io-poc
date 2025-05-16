import React, { forwardRef } from 'react';
import { StackProps } from '../Stack.types';
import * as S from './VStack.styles';

type HStackProps = StackProps & {
  children: React.ReactNode;
  /**
   * The class name to apply to the VStack. Useful for applying custom styling.
   */
  className?: string;
  /**
   * The element type to render the VStack as.
   * @default 'div'
   */
  as?: React.ElementType;
};

/**
 * VStack is a layout component that arranges its children in a vertical flow.
 * It allows you to control the alignment and spacing between the children using responsive props.
 */
const VStack = forwardRef<HTMLDivElement, HStackProps>(
  ({ children, as, ...props }, ref) => {
    const asForwarded = as ? as : 'div';

    return (
      <S.VStack as={asForwarded} ref={ref} {...props}>
        {children}
      </S.VStack>
    );
  }
);

VStack.displayName = 'VStack';

export default VStack;
