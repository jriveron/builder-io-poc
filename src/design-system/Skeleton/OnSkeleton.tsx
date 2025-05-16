import React from 'react';
import * as S from './skeletons.styles';

import { MarginProps } from '@/design-system/system/variants';
import { times } from '@/design-system/system/utils';

type OnSkeletonProps = {
  /** OnSkeleton can be overridden to match the block size */
  className?: string;
  /** The number of instance of skeleton you want, might be useful when showing text lines */
  count?: number;
  /** A mandatory value to define the height of the skeleton */
  height: string;
  /**
   * An optional value that should be used a very few time to define the width of the skeleton
   *
   * @default auto
   */
  width?: string;
  /**
   * An optional value for an easier placement in flex container
   *
   * @default 1
   *
   * @example
   * // Two values: flex-grow | flex-basis
   * flex: 1 30px; // 1 1 30px
   *
   * // Two values: flex-grow | flex-shrink
   * flex: 2 2; // 2 2 0%
   *
   * // Three values: flex-grow | flex-shrink | flex-basis
   * flex: 2 2 10%;
   *
   * flex: inherit;
   * flex: initial; // 0 1 auto
   */
  flex?: string;
} & MarginProps;

/**
 * OnSkeleton helps to show what the page will look like when the data is not available yet.
 *
 * It aims to render more atomic component upon "skeletoned" molecule.
 */
const OnSkeleton: React.FC<OnSkeletonProps> = ({
  className,
  count = 1,
  height,
  ...styleProps
}) => {
  return (
    <>
      {times(count, (i: number) => (
        <S.Skeleton
          className={className}
          height={height}
          key={i}
          variant="on"
          {...styleProps}
        >
          &nbsp;
        </S.Skeleton>
      ))}
    </>
  );
};

export default OnSkeleton;
