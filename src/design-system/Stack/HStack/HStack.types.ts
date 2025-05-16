import { StackProps } from '../Stack.types';

import React from 'react';

export type HStackProps = StackProps & {
  /**
   * The element type to render the HStack as.
   * @default 'div'
   */
  as?: React.ElementType;
  children: React.ReactNode;
  /**
   * The class name to apply to the HStack. Useful for applying custom styling.
   */
  className?: string;
  /**
   * flexWrap sets whether flex items are forced onto one line or can wrap onto multiple lines
   * @default false
   */
  flexWrap?: boolean;
};
