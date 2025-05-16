import React, { ReactNode } from 'react';
import * as S from './Heading.styles';
import type { HeadingVariant } from './Heading.styles';
import { MarginProps, TextColorProps } from '@/design-system/system/variants';

type HeadingProps = {
  /**
   * The HTML element to render. It follows the variant if not provided.
   */
  as?: React.ElementType;
  children: ReactNode;
  /**
   * The class name to apply. Useful for applying custom styling.
   */
  className?: string;
  /**
   * The size of the Heading. It affects the font size the font weight and the line height.
   */
  variant: HeadingVariant;
} & MarginProps &
  TextColorProps;

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
} as const;

/**
 *
 * Our headings help create a clear hierarchy of information in our interfaces.
 *
 * _Their number is reduced to keep the UI approach simple._
 */
const Heading: React.FC<HeadingProps> = ({
  as,
  children,
  className,
  variant,
  ...props
}) => {
  const asForwarded = as ? as : variantMapping[variant];
  return (
    <S.Heading
      as={asForwarded}
      className={className}
      variant={variant}
      {...props}
    >
      {children}
    </S.Heading>
  );
};

export default Heading;
