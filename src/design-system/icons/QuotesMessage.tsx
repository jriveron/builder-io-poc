// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type QuotesMessageIconVariant = 'outlined';
type QuotesMessageProps = IconProps & { variant?: QuotesMessageIconVariant };

const QuotesMessageOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 4a1 1 0 0 0-1 1v14.15l1.619-2.024A3 3 0 0 1 7.96 16H19a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.961a1 1 0 0 0-.78.375L4.848 21.29c-.944 1.181-2.849.513-2.849-1zm4.5 3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2c0 .826-.407 1.543-.825 2.1s-.96 1.1-1.44 1.58l-.028.027a1 1 0 0 1-1.414-1.414c.474-.474.89-.892 1.205-1.293H8.5a2 2 0 0 1-2-2zm3 1V8h-1v1zm5-3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h.498c-.316.401-.731.82-1.205 1.293a1 1 0 0 0 1.414 1.414l.028-.027c.48-.48 1.022-1.023 1.44-1.58s.825-1.274.825-2.1V8a2 2 0 0 0-2-2zm1 2v1h-1V8z"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: QuotesMessageOutlinedIcon,
} as const;

const QuotesMessageSVG: React.FC<QuotesMessageProps> = ({
  title,
  variant = 'outlined',
  ...props
}) => {
  const IconComponent = IconVariants[variant];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent {...props}>{title && <title>{title}</title>}</IconComponent>
  );
};

const QuotesMessage = styled(QuotesMessageSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default QuotesMessage;
