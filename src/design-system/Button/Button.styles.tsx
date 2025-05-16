import React, { ComponentProps } from 'react';
import styled from '@emotion/styled';
import { css, Theme, WithTheme } from '@emotion/react';
import isPropValid from '@emotion/is-prop-valid';

import Text from '@/design-system/Text/Text';
import { px2rem } from '@/design-system/system/utils';
import { focusRingDefault } from '@/design-system/system';

import {
  buttonVariant,
  getHeightFromSizeVariant,
  ghostCompactOverride,
} from './variants';
import type {
  BehaviorProps,
  BaseButtonProps,
  ButtonSize,
} from './Button.types';

const allowedButtonProps = (propName: string) => {
  if (propName === 'loading') {
    return false;
  }

  return isPropValid(propName);
};

const iconSizeMap = {
  s: 16,
  m: 20,
} as const;

type IconSize = keyof typeof iconSizeMap;

type TextProps = Omit<ComponentProps<typeof Text>, 'variant'>;

type IconContainerProps = BehaviorProps & {
  iconSize: IconSize;
  loading: boolean;
  children?: (size: IconSize) => React.ReactNode;
};

const sizingBehavior = ({ fillContainer }: BehaviorProps) => {
  if (!fillContainer) {
    return '';
  }

  return css`
    width: 100%;
  `;
};

const IconSpacer = styled.span<{ iconSize: IconSize }>`
  width: ${({ iconSize }) => px2rem(iconSizeMap[iconSize])};
`;

export const IconContainer: React.FC<IconContainerProps> = ({
  iconSize,
  fillContainer,
  loading,

  children,
}) => {
  // This is needed to keep the text centered in the button on fillContainer
  // and to keep the aspect ratio of the button when loading (ghost and tertiary buttons)
  const shouldRenderSpacer =
    (fillContainer && children === undefined) || (!!children && loading);

  if (shouldRenderSpacer) {
    return <IconSpacer iconSize={iconSize} />;
  }

  return <>{children && children(iconSize)}</>;
};

export const ButtonLabel = styled(
  (props: TextProps & { loading: boolean; size: ButtonSize }) => {
    return (
      <Text
        {...props}
        variant={props.size === 'm' ? 't2' : 't1'}
        weight="medium"
        color="currentColor"
      />
    );
  }
)`
  flex: 1;
  // This is needed to prevent the text from being visible
  // while the loading spinner is displayed on ghost and tertiary buttons
  opacity: ${({ loading }) => (loading ? 0 : 1)};
`;

const getInlinePaddingFromSizeVariant = ({
  size,
  theme,
}: WithTheme<{ size: ButtonSize }, Theme>) => {
  // This is only for fillContainer=false buttons.
  // Don't be fool by figma, in fillContainer=true, there is no need of bigger padding.
  return {
    m: theme.space.coreSpacing05,
    l: theme.space.coreSpacing06,
    xl: theme.space.coreSpacing07,
  }[size];
};

export const Button = styled('button', {
  shouldForwardProp: allowedButtonProps,
})<Required<BaseButtonProps & BehaviorProps>>(
  ({
    theme,
    loading,
    disabled,
    size,
    fillContainer,
    hierarchy,
    intent,
    inverse,
  }) => css`
    position: relative;
    overflow: hidden;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    display: inline-flex;
    align-items: center;
    padding-inline: ${getInlinePaddingFromSizeVariant({ size, theme })};
    gap: ${theme.space.coreSpacing03};
    transition: background-color ease-out
      ${theme.timing.coreMotionDurationShort}ms;
    // Border color is defined for each variant
    border: ${theme.size.semanticBorderWidthDefault} solid;
    border-radius: ${theme.radii.coreRadiusS};
    // Handle sizing tokens in the future
    min-height: ${getHeightFromSizeVariant({ size, theme })};

    // Prevent the button from being shrunk in flex environment
    ${fillContainer === false &&
    css`
      flex-shrink: 0;
    `}

    // Disable pointer events when loading
    // This is needed to prevent the button from being clicked while loading
    pointer-events: ${loading ? 'none' : 'auto'};

    ${sizingBehavior({ fillContainer })}

    :focus-visible {
      ${focusRingDefault({ theme })}
    }

    ${buttonVariant({ hierarchy, intent, inverse, theme })}

    ${ghostCompactOverride({ hierarchy })}
  `
);

export const SpinnerOverlay = styled.span`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background-color: inherit;
`;
