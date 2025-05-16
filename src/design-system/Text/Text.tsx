import React, { ReactNode } from 'react';
import * as S from './Text.styles';
import type {
  MarginProps,
  TextColorProps,
} from '@/design-system/system/variants';
import type { TextVariant, TextWeight } from '@/design-system/system';

type AsSpecific =
  | {
      /**
       * The HTML element to render. It follows the variant if not provided.
       * @default span
       */
      as?: React.ElementType;
    }
  | { as: 'label'; htmlFor: string };

type TextProps = {
  id?: string;
  children: ReactNode;
  /**
   * The class name to apply. Useful for applying custom styling.
   */
  className?: string;
  /**
   * The variant of the text. It affects the font size and the line height.
   */
  variant: TextVariant;
  /**
   * The weight of the text.
   * @default default
   */
  weight?: TextWeight;
} & MarginProps &
  TextColorProps &
  AsSpecific;

const variantMapping = {
  t1: 'span',
  t2: 'span',
  t3: 'span',
} as const;

/**
 *
 * Our Text typefaces are designed for plain text.
 *
 * _Their number is reduced to keep the UI approach simple._
 */
const Text: React.FC<TextProps> = ({
  id,
  as,
  children,
  className,
  variant,
  weight = 'default',
  ...marginProps
}) => {
  const asForwarded = as ? as : variantMapping[variant];
  return (
    <S.Text
      id={id}
      as={asForwarded}
      className={className}
      variant={variant}
      weight={weight}
      {...marginProps}
    >
      {children}
    </S.Text>
  );
};

export default Text;
