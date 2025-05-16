import React from 'react';

import Spinner from '@/design-system/Spinner/Spinner';
import Tooltip from '@/design-system/Tooltip/Tooltip';

import { iconSize } from './variants';
import * as S from './Button.styles';
import type { ButtonProps } from './Button.types';

/**
 * Button let users get actions.
 *
 * They are essential for providing clear and actionable calls to action, guiding users through the interface, and helping them complete their goals.
 * They are used to initiate specific tasks, such as submitting forms, navigating to different pages, or performing other actions.
 *
 * This component forward the ref and the props. It adds HTML props according to the `as` (default="button") prop via `react-polymorphed` package.
 */
const Button: React.FC<ButtonProps & { children?: React.ReactNode }> = ({
  children,
  disabled = false,
  fillContainer = false,
  hierarchy,
  intent = 'default',
  inverse = false,
  leadingIcon,
  loading = false,
  size = 'm',
  tooltip,
  tooltipPosition,
  trailingIcon,
  ...props
}) => {
  const ButtonComponent = (
    <S.Button
      {...props}
      aria-busy={loading}
      disabled={disabled}
      fillContainer={fillContainer}
      hierarchy={hierarchy}
      intent={intent}
      inverse={inverse}
      loading={loading}
      size={size}
    >
      <S.IconContainer
        loading={loading}
        iconSize={iconSize(size)}
        fillContainer={fillContainer}
      >
        {leadingIcon}
      </S.IconContainer>

      {children && (
        <S.ButtonLabel loading={loading} size={size}>
          {children}
        </S.ButtonLabel>
      )}

      <S.IconContainer
        loading={loading}
        iconSize={iconSize(size)}
        fillContainer={fillContainer}
      >
        {trailingIcon}
      </S.IconContainer>

      {loading && (
        <S.SpinnerOverlay>
          <Spinner size={iconSize(size)} color="currentColor" />
        </S.SpinnerOverlay>
      )}
    </S.Button>
  );

  if (!tooltip) {
    return ButtonComponent;
  }

  return (
    <Tooltip content={tooltip} position={tooltipPosition}>
      {ButtonComponent}
    </Tooltip>
  );
};

export default Button;
