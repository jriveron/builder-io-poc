// ✨ This is a generated file.
// Do not make changes here, they will be overwritten on the next update.

import React, { SVGProps } from 'react';
import styled from '@emotion/styled';
import {
  type IconProps,
  type IconVariant,
  ICON_SIZE_MAPPING,
} from './icon.types';

type FriendsOccasionIconVariant = 'outlined';
type FriendsOccasionProps = IconProps & {
  variant?: FriendsOccasionIconVariant;
};

const FriendsOccasionOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.38 1.334c-.456.15-.8.443-.998.846-.094.193-.12.307-.134.58-.017.334.017.486 1.808 8.1q.915 3.902 1.84 7.802c.008.024-.064.159-.16.3-.585.861-.63 1.933-.124 2.898.19.36.691.843 1.09 1.049.873.452 1.485.441 3.097-.055 3.188-.981 6.793-3.37 9.546-6.327 2.374-2.55 3.966-5.069 4.72-7.467.146-.465.151-.499.152-1.08.001-.585-.002-.608-.128-.92-.274-.679-.735-1.201-1.31-1.483-.48-.236-.788-.311-1.28-.309-.6.002-1.028.127-1.49.438l-.266.177-7.782-2.29c-7.065-2.08-7.81-2.292-8.102-2.301a1.7 1.7 0 0 0-.48.042m8.208 4.23c4.36 1.282 7.13 2.115 7.13 2.144.001.089-.365.908-.587 1.312-.293.535-.956 1.53-1.413 2.12a22.7 22.7 0 0 1-4 3.984c-1.232.947-2.532 1.707-3.759 2.196-.463.184-1.195.419-1.222.391-.01-.01-.767-3.195-1.68-7.075s-1.67-7.09-1.683-7.131q-.025-.077.031-.055c.03.01 3.262.962 7.183 2.114M7.711 7.048c-.187.049-.49.314-.594.517-.174.34-.124.786.121 1.081.365.442 1.1.466 1.49.049a1.02 1.02 0 0 0 .037-1.341c-.257-.3-.649-.414-1.054-.306m13.158.302a.78.78 0 0 1 .376.617c.007.328-.377 1.418-.789 2.239-1.374 2.742-3.974 5.739-6.818 7.859-2.03 1.513-4.042 2.521-6.169 3.092-.504.135-.772.096-.995-.144-.3-.323-.293-.728.02-1.035.147-.145.214-.176.605-.277 2.88-.745 5.981-2.717 8.566-5.444 2.093-2.208 3.56-4.488 4.092-6.358.16-.56.636-.795 1.112-.549m-7.158.698c-.187.049-.49.314-.594.517-.174.34-.124.786.121 1.081.365.442 1.1.466 1.49.049a1.02 1.02 0 0 0 .037-1.341c-.257-.3-.649-.414-1.054-.306m-6 5c-.187.049-.49.314-.594.517-.174.34-.124.786.121 1.081.365.442 1.1.466 1.49.049a1.02 1.02 0 0 0 .037-1.341c-.257-.3-.649-.414-1.054-.306"
      clipRule="evenodd"
    />
  </svg>
);

const IconVariants: Partial<
  Record<IconVariant, React.FC<SVGProps<SVGSVGElement>>>
> = {
  outlined: FriendsOccasionOutlinedIcon,
} as const;

const FriendsOccasionSVG: React.FC<FriendsOccasionProps> = ({
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

const FriendsOccasion = styled(FriendsOccasionSVG)(({ size = 'l', theme }) => {
  const iconSizeToken = ICON_SIZE_MAPPING[size];
  const computedIconSize = theme.size[iconSizeToken];
  return { width: computedIconSize, height: computedIconSize };
});

export default FriendsOccasion;
