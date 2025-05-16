import React from 'react';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

import {
  type ExtractTastyColors,
  tastyColor,
} from '@/design-system/system/variants/tastyColor';
import { px2rem } from '@/design-system/system/utils';
import loaderAnimation from './Spinner.lottie.json';

const DynamicLottie = dynamic(() => import('lottie-react'), { ssr: false });

type TastyThemeColor = ExtractTastyColors | 'inherit' | 'currentColor';

type SpinnerSize = 's' | 'm' | 'l';
type SpinnerProps = {
  /**
   * Size of the spinner in pixel (transformed in rem on the base of 16px)
   * - s : 16px
   * - m : 20px
   * - l : 24px
   *
   * @default 'm'
   */
  size?: SpinnerSize;
  /**
   * Color token that tint the spinner svg.
   *
   * @default 'semanticColorsTextPrimary'
   */
  color?: TastyThemeColor;
  /**
   * The className to override property
   */
  className?: string;
};

const sizeToRem = (size: SpinnerSize) => px2rem({ s: 16, m: 20, l: 24 }[size]);

type StyledLottieAdditionalProps = {
  size: SpinnerSize;
  color: TastyThemeColor;
};

const Wrapper = styled('div', {
  shouldForwardProp: (propName) => !['size', 'color'].includes(propName),
})<StyledLottieAdditionalProps>`
  width: ${({ size }) => sizeToRem(size)};
  height: ${({ size }) => sizeToRem(size)};

  position: relative;

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) !important;
  }

  svg path {
    fill: ${({ color, theme }) => tastyColor({ theme, color }).color};
    stroke: ${({ color, theme }) => tastyColor({ theme, color }).color};
  }
`;

/**
 * This component can be applied when the user needs to be aware that the interface is waiting for information,
 * a calculation, or that the requested action is being executed.
 */
const Spinner: React.FC<SpinnerProps> = ({
  className,
  size = 'm',
  color = 'semanticColorsTextPrimary',
}) => {
  return (
    <Wrapper
      className={className}
      size={size}
      color={color}
      data-chromatic="ignore"
    >
      <DynamicLottie animationData={loaderAnimation} loop={true} />
    </Wrapper>
  );
};

export default Spinner;
