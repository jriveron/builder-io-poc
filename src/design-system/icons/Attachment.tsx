// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type AttachmentIconVariant = 'outlined';
type AttachmentProps = IconProps & { variant?: AttachmentIconVariant };

const AttachmentOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.778 3c-.796 0-1.56.316-2.123.88l-9.19 9.19a5.003 5.003 0 0 0 7.076 7.075l9.19-9.19a1 1 0 0 1 1.414 1.414l-9.19 9.19a7.003 7.003 0 1 1-9.904-9.904l9.19-9.19a5.002 5.002 0 0 1 7.074 7.074l-9.2 9.19a3.001 3.001 0 1 1-4.244-4.244l8.49-8.48a1 1 0 0 1 1.414 1.415l-8.49 8.48a1.003 1.003 0 0 0 .708 1.708 1 1 0 0 0 .708-.293l9.2-9.19A3.004 3.004 0 0 0 15.778 3"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: AttachmentOutlinedIcon,
} as const;

const AttachmentSVG: React.FC<AttachmentProps> = ({
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

const Attachment = styled(AttachmentSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default Attachment;
