import { css, Theme, WithTheme } from '@emotion/react';

import {
  BaseButtonProps,
  ButtonIconSize,
  ButtonSize,
  Hierarchy,
} from './Button.types';

type ButtonVariantStyle = {
  color: string;
  borderColor: string;
  backgroundColor: string | { default: string; hover: string; active: string };
  textDecoration?: string | { default: string; hover: string; active: string };
};

/* HELPER FUNCTIONS */
const createStateVariations = (
  propertyName: string,
  value?: string | { default: string; hover: string; active: string }
) => {
  if (!value) {
    return '';
  }
  if (typeof value === 'string') {
    return css`
      ${propertyName}: ${value};
    `;
  }
  return css`
    ${propertyName}: ${value.default};

    &:hover:not(:disabled) {
      ${propertyName}: ${value.hover};
    }

    &:active {
      ${propertyName}: ${value.active};
    }
  `;
};

const buttonVariantStyle = ({
  default: { backgroundColor, borderColor, color, textDecoration },
  disabled,
}: {
  default: ButtonVariantStyle;
  disabled: Partial<ButtonVariantStyle>;
}) => {
  const backgroundStyle = createStateVariations(
    'background-color',
    backgroundColor
  );

  const textDecorationStyle = createStateVariations(
    'text-decoration',
    textDecoration
  );

  const disabledBackgroundColorStyle = createStateVariations(
    'background-color',
    disabled.backgroundColor
  );

  const disabledTextDecorationStyle = createStateVariations(
    'text-decoration',
    disabled.textDecoration
  );

  return css`
    ${backgroundStyle};
    ${textDecorationStyle};
    border: 1px solid ${borderColor};
    color: ${color};

    &:disabled {
      ${disabledBackgroundColorStyle};
      ${disabledTextDecorationStyle};
      border-color: ${disabled.borderColor};
      color: ${disabled.color};
    }
  `;
};

/* BUTTON VARIANTS  */
type ButtonVariants = {
  [H in Hierarchy]: {
    [I in 'default' | 'inverse' | 'negative']: {
      default: ButtonVariantStyle;
      disabled: Partial<ButtonVariantStyle>;
    };
  };
};

const buttonVariants = ({
  theme: { colors },
}: WithTheme<unknown, Theme>): ButtonVariants => ({
  primary: {
    default: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesPrimaryDefault,
          hover: colors.semanticSurfacesPrimaryHover,
          active: colors.semanticSurfacesPrimaryPressed,
        },
        borderColor: 'transparent',
        color: colors.semanticColorsTextPrimaryInverse,
      },
      disabled: {
        backgroundColor: colors.semanticColorsDisabledBackgroundColor,
        color: colors.semanticColorsDisabledForegroundColor,
      },
    },
    inverse: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesQuaternaryDefault,
          hover: colors.semanticSurfacesQuaternaryHover,
          active: colors.semanticSurfacesQuaternaryPressed,
        },
        borderColor: 'transparent',
        color: colors.semanticColorsTextPrimary,
      },
      disabled: {
        backgroundColor: colors.semanticColorsDisabledInverseBackgroundColor,
        color: colors.semanticColorsDisabledInverseForegroundColor,
      },
    },
    negative: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesNegativeDefault,
          hover: colors.semanticSurfacesNegativeHover,
          active: colors.semanticSurfacesNegativePressed,
        },
        borderColor: 'transparent',
        color: colors.semanticColorsTextPrimaryInverse,
      },
      disabled: {
        backgroundColor: colors.semanticColorsDisabledBackgroundColor,
        color: colors.semanticColorsDisabledForegroundColor,
      },
    },
  },
  secondary: {
    default: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesSecondaryDefault,
          hover: colors.semanticSurfacesSecondaryHover,
          active: colors.semanticSurfacesSecondaryPressed,
        },
        borderColor: 'transparent',
        color: colors.semanticColorsTextPrimaryInverse,
      },
      disabled: {
        backgroundColor: colors.semanticColorsDisabledBackgroundColor,
        color: colors.semanticColorsDisabledForegroundColor,
      },
    },
    inverse: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesQuaternaryDefault,
          hover: colors.semanticSurfacesQuaternaryHover,
          active: colors.semanticSurfacesQuaternaryPressed,
        },
        borderColor: 'transparent',
        color: colors.semanticColorsTextPrimary,
      },
      disabled: {
        backgroundColor: colors.semanticColorsDisabledInverseBackgroundColor,
        color: colors.semanticColorsDisabledInverseForegroundColor,
      },
    },
    negative: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesNegativeDefault,
          hover: colors.semanticSurfacesNegativeHover,
          active: colors.semanticSurfacesNegativePressed,
        },
        borderColor: 'transparent',
        color: colors.semanticColorsTextPrimaryInverse,
      },
      disabled: {
        backgroundColor: colors.semanticColorsDisabledBackgroundColor,
        color: colors.semanticColorsDisabledForegroundColor,
      },
    },
  },
  tertiary: {
    default: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesTransparentDefault,
          hover: colors.semanticSurfacesTransparentHover,
          active: colors.semanticSurfacesTransparentPressed,
        },
        borderColor: colors.semanticColorsBorderStrongColor,
        color: colors.semanticColorsTextPrimary,
      },
      disabled: {
        backgroundColor: colors.semanticSurfacesTransparentDefault,
        borderColor: colors.semanticColorsDisabledDefaultColor,
        color: colors.semanticColorsDisabledDefaultColor,
      },
    },
    inverse: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesTransparentDefault,
          hover: colors.semanticSurfacesTransparentHover,
          active: colors.semanticSurfacesTransparentPressed,
        },
        borderColor: colors.semanticColorsBorderStrongColor,
        color: colors.semanticColorsTextPrimaryInverse,
      },
      disabled: {
        backgroundColor: colors.semanticSurfacesTransparentDefault,
        color: colors.semanticColorsDisabledInverseDefaultColor,
        borderColor: colors.semanticColorsDisabledInverseDefaultColor,
      },
    },
    negative: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesTransparentDefault,
          hover: colors.semanticSurfacesTransparentHover,
          active: colors.semanticSurfacesTransparentPressed,
        },
        borderColor: colors.semanticColorsBorderStrongColor,
        color: colors.semanticColorsNegativeDefaultColor,
      },
      disabled: {
        backgroundColor: colors.semanticSurfacesTransparentDefault,
        borderColor: colors.semanticColorsDisabledDefaultColor,
        color: colors.semanticColorsDisabledDefaultColor,
      },
    },
  },
  ghost: {
    default: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesTransparentDefault,
          hover: colors.semanticSurfacesTransparentHover,
          active: colors.semanticSurfacesTransparentPressed,
        },
        borderColor: 'transparent',
        color: colors.semanticColorsTextPrimary,
        textDecoration: 'underline',
      },
      disabled: {
        backgroundColor: colors.semanticSurfacesTransparentDefault,
        color: colors.semanticColorsDisabledDefaultColor,
      },
    },
    inverse: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesTransparentDefault,
          hover: colors.semanticSurfacesTransparentHover,
          active: colors.semanticSurfacesTransparentPressed,
        },
        borderColor: 'transparent',
        color: colors.semanticColorsTextPrimaryInverse,
        textDecoration: 'underline',
      },
      disabled: {
        backgroundColor: colors.semanticSurfacesTransparentDefault,
        color: colors.semanticColorsDisabledInverseDefaultColor,
      },
    },
    negative: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesTransparentDefault,
          hover: colors.semanticSurfacesTransparentHover,
          active: colors.semanticSurfacesTransparentPressed,
        },
        borderColor: 'transparent',
        color: colors.semanticColorsNegativeDefaultColor,
        textDecoration: 'underline',
      },
      disabled: {
        backgroundColor: colors.semanticSurfacesTransparentDefault,
        color: colors.semanticColorsDisabledDefaultColor,
      },
    },
  },
  'ghost-compact': {
    default: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesTransparentDefault,
          hover: colors.semanticSurfacesTransparentHover,
          active: colors.semanticSurfacesTransparentPressed,
        },
        borderColor: 'transparent',
        color: colors.semanticColorsTextPrimary,
        textDecoration: 'underline',
      },
      disabled: {
        backgroundColor: colors.semanticSurfacesTransparentDefault,
        color: colors.semanticColorsDisabledDefaultColor,
      },
    },
    inverse: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesTransparentDefault,
          hover: colors.semanticSurfacesTransparentHover,
          active: colors.semanticSurfacesTransparentPressed,
        },
        borderColor: 'transparent',
        color: colors.semanticColorsTextPrimaryInverse,
        textDecoration: 'underline',
      },
      disabled: {
        backgroundColor: colors.semanticSurfacesTransparentDefault,
        color: colors.semanticColorsDisabledInverseDefaultColor,
      },
    },
    negative: {
      default: {
        backgroundColor: {
          default: colors.semanticSurfacesTransparentDefault,
          hover: colors.semanticSurfacesTransparentHover,
          active: colors.semanticSurfacesTransparentPressed,
        },
        borderColor: 'transparent',
        color: colors.semanticColorsNegativeDefaultColor,
        textDecoration: 'underline',
      },
      disabled: {
        backgroundColor: colors.semanticSurfacesTransparentDefault,
        color: colors.semanticColorsDisabledDefaultColor,
      },
    },
  },
});

type ButtonVariantParams = Required<
  Pick<BaseButtonProps, 'hierarchy' | 'intent' | 'inverse'>
>;
export const buttonVariant = ({
  hierarchy,
  intent,
  inverse,
  theme,
}: WithTheme<ButtonVariantParams, Theme>) => {
  const variants = buttonVariants({ theme });
  const variation = inverse
    ? 'inverse'
    : intent === 'negative'
    ? 'negative'
    : 'default';
  const variant = variants[hierarchy][variation];

  return buttonVariantStyle(variant);
};

export const getHeightFromSizeVariant = ({
  size,
  theme,
}: WithTheme<{ size: ButtonSize }, Theme>) =>
  ({
    m: theme.size.semanticSizeInteractiveHeightsS,
    l: theme.size.semanticSizeInteractiveHeightsM,
    xl: theme.size.semanticSizeInteractiveHeightsL,
  }[size]);

/**
 * Remove all the inline spacing from the ghost-compact button.
 */
export const ghostCompactOverride = ({
  hierarchy,
}: {
  hierarchy: Hierarchy;
}) => {
  if (hierarchy === 'ghost-compact') {
    return css`
      padding-inline: 0;
      border-inline: none;
    `;
  }

  return '';
};

export const iconSize = (buttonSize: ButtonSize): ButtonIconSize =>
  buttonSize === 'm' ? 's' : 'm';

export const buttonSizeToAssetWidth = (buttonSize: ButtonSize) =>
  ({
    m: 16,
    l: 20,
    xl: 20, // xl unused for now for assets
  }[buttonSize]);
