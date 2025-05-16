import React, { ReactNode } from 'react';
import * as S from './skeletons.styles';
import { Nbsp } from './skeletons.styles';

import { MarginProps, PaddingProps } from '@/design-system/system/variants';
import { times } from '@/design-system/system/utils';

type SkeletonProps = {
  /** In order to put more OnSkeleton elements */
  children?: ReactNode;
  /** Skeleton can be overridden to match the block size */
  className?: string;
  /** The number of instance of skeleton you want, might be useful when you have multiple block in a list */
  count?: number;
  /** A mandatory value to define the height of the skeleton (not tokenized) */
  height: string;
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
} & MarginProps &
  PaddingProps;

/**
 * Skeleton helps to show what the page will look like when the data is not available yet.
 */
const Skeleton: React.FC<SkeletonProps> = ({
  children,
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
          variant="default"
          {...styleProps}
        >
          {children || <Nbsp />}
        </S.Skeleton>
      ))}
    </>
  );
};

export default Skeleton;
