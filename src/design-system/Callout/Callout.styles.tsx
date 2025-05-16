import React, { ComponentProps } from 'react';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';

import { ExclamationMark, Information, Success } from '@/design-system/icons';
import { px2rem } from '@/design-system/system/utils';
import Skeleton from '@/design-system/Skeleton/Skeleton';
import OnSkeleton from '@/design-system/Skeleton/OnSkeleton';
import { HStack, VStack } from '@/design-system/Stack/Stack';
import Text from '@/design-system/Text/Text';

type Intent = 'neutral' | 'informative' | 'alert' | 'positive' | 'warning';
type ColorTokenKey = keyof Theme['colors'];

type IntentStyle = {
  backgroundColor: ColorTokenKey;
  titleColor: ColorTokenKey;
  icon: React.FC<{ size?: 's' | 'm' | 'l' }>;
};

type CalloutTitleProps = Pick<
  ComponentProps<typeof Text>,
  'children' | 'className'
> &
  IntentProps;

type IntentProps = {
  intent: Intent;
};

export const intentStyleMap: Record<Intent, IntentStyle> = {
  neutral: {
    backgroundColor: 'semanticColorsPageSecondaryBackgroundColor',
    titleColor: 'semanticColorsTextPrimary',
    icon: Information,
  },
  informative: {
    backgroundColor: 'semanticColorsInformationBackgroundColor',
    titleColor: 'semanticColorsInformationForegroundColor',
    icon: Information,
  },
  alert: {
    backgroundColor: 'semanticColorsNegativeBackgroundColor',
    titleColor: 'semanticColorsNegativeForegroundColor',
    icon: ExclamationMark,
  },
  positive: {
    backgroundColor: 'semanticColorsPositiveBackgroundColor',
    titleColor: 'semanticColorsPositiveForegroundColor',
    icon: Success,
  },
  warning: {
    backgroundColor: 'semanticColorsWarningBackgroundColor',
    titleColor: 'semanticColorsWarningForegroundColor',
    icon: ExclamationMark,
  },
};

export const CalloutContainer = styled(
  (props: ComponentProps<typeof HStack> & IntentProps) => {
    return <HStack {...props} verticalAlign="start" gap="coreSpacing04" />;
  }
)`
  background-color: ${({ theme, intent }: { theme: Theme; intent: Intent }) =>
    theme.colors[intentStyleMap[intent].backgroundColor]};
  border-radius: ${({ theme }) => theme.radii.coreRadiusS};
  padding: ${({ theme }) =>
    `${theme.space.coreSpacing05} ${theme.space.coreSpacing06} ${theme.space.coreSpacing05} ${theme.space.coreSpacing05}`};
`;

export const CalloutTitle = styled((props: CalloutTitleProps) => {
  return <Text {...props} variant="t2" weight="medium" />;
})`
  color: ${({ theme, intent }) =>
    theme.colors[intentStyleMap[intent].titleColor]};
`;

export const CalloutIconWrapper = styled.div<IntentProps>`
  margin-top: ${px2rem(1)};
  color: ${({ theme, intent }) =>
    theme.colors[intentStyleMap[intent].titleColor]};
  display: inline-flex;
`;

export const CalloutContent = styled((props: ComponentProps<typeof VStack>) => {
  return <VStack {...props} verticalAlign="start" gap="coreSpacing04" />;
})`
  width: min-content;
  color: ${({ theme }) => theme.colors.semanticColorsTextPrimary};
`;

export const SkeletonContainer = styled(Skeleton)`
  padding: ${({ theme }) =>
    `${theme.space.coreSpacing05} ${theme.space.coreSpacing06} ${theme.space.coreSpacing05} ${theme.space.coreSpacing05}`};
`;

export const SkeletonIcon = styled(OnSkeleton)`
  height: ${px2rem(22)};
  width: ${px2rem(22)};
  flex-grow: 0;
  flex-basis: ${px2rem(22)};
`;

export const SkeletonLastLine = styled(OnSkeleton)`
  width: 25%;
`;

export const SkeletonReadMode = styled(OnSkeleton)`
  max-width: ${px2rem(70)};
`;
