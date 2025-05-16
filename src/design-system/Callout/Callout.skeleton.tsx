import React from 'react';

import * as S from './Callout.styles';

import { px2rem } from '@/design-system/system/utils';
import OnSkeleton from '@/design-system/Skeleton/OnSkeleton';
import { HStack, VStack } from '@/design-system/Stack/Stack';

const CalloutSkeleton: React.FC = () => {
  return (
    <S.SkeletonContainer height="min-content">
      <HStack verticalAlign="start" gap="coreSpacing04">
        <S.SkeletonIcon height={px2rem(22)} />
        <VStack verticalAlign="start" gap="coreSpacing04">
          {/* title */}
          <OnSkeleton height={px2rem(22)} flex="0 1 auto" />

          {/* text lines */}
          <OnSkeleton height={px2rem(14)} flex="0 1 auto" mt="coreSpacing04" />
          <OnSkeleton height={px2rem(14)} flex="0 1 auto" />
          <S.SkeletonLastLine height={px2rem(14)} flex="0 1 auto" />

          {/* read more */}
          <S.SkeletonReadMode
            height={px2rem(22)}
            flex="0 1 auto"
            mt="coreSpacing04"
          />
        </VStack>
      </HStack>
    </S.SkeletonContainer>
  );
};

export default CalloutSkeleton;
