import React from 'react';
import type { NextPage } from 'next';
import styled from '@emotion/styled';

import { HStack, VStack } from '@/design-system/Stack/Stack';
import Button from '@/design-system/Button/Button';
import Callout from '@/design-system/Callout/Callout';
import { MarginProps, margins } from '@/design-system/system/variants';
import { Chat } from '@/design-system/icons';
import Spinner from '@/design-system/Spinner/Spinner';
import OnSkeleton from '@/design-system/Skeleton/OnSkeleton';
import Skeleton from '@/design-system/Skeleton/Skeleton';
import CollapsibleText from '@/design-system/CollapsibleText/CollapsibleText';
import Text from '@/design-system/Text/Text';
import Heading from '@/design-system/Heading/Heading';

const Box = styled.div<MarginProps>`
  ${margins}
`;

const UIKit: NextPage = () => {
  return (
    <React.Fragment>
      <HStack gap={'coreSpacing04'} marginBottom={'coreSpacing08'}>
        <Button
          size="m"
          hierarchy="primary"
          intent="default"
          onClick={() => {}}
        >
          Primary Button
        </Button>
        <Button
          size="m"
          hierarchy="secondary"
          intent="default"
          onClick={() => {}}
        >
          Secondary Button
        </Button>
        <Button
          size="m"
          hierarchy="tertiary"
          intent="default"
          onClick={() => {}}
        >
          Tertiary Button
        </Button>
        <Button
          size="m"
          hierarchy="tertiary"
          intent="default"
          trailingIcon={(iconSize) => <Chat size={iconSize} />}
          onClick={() => {}}
        >
          Chat with us
        </Button>
      </HStack>
      <Box marginBottom={'coreSpacing08'}>
        <Callout
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et nunc vestibulum ultricies. Suspendisse potenti. Sed sit amet nunc nec libero tincidunt vestibulum ut nec lectus. Integer nec lacus ac metus aliquam tincidunt. Nullam"
          collapsible={false}
          intent="alert"
        />
      </Box>
      <Box marginBottom={'coreSpacing08'}>
        <Callout
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et nunc vestibulum ultricies. Suspendisse potenti. Sed sit vestibulum ut nec lectus. Integer nec lacus ac metus aliquam tincidunt. Nullam"
          collapsible={false}
          intent="neutral"
        />
      </Box>
      <Box marginBottom={'coreSpacing08'}>
        <Callout
          showMoreLabel="Show more"
          showLessLabel="Show less"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et nunc vestibulum ultricies. Suspendisse potenti. Sed sit amet nunc nec libero tincidunt vestibulum ut nec lectus. Integer nec lacus ac metus aliquam tincidunt. Nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et nunc vestibulum ultricies. Suspendisse potenti. Sed sit amet nunc nec libero tincidunt vestibulum ut nec lectus. Integer nec lacus ac metus aliquam tincidunt. Nullam"
          collapsible={true}
          intent="warning"
        />
      </Box>
      <HStack gap={'coreSpacing08'} marginBottom={'coreSpacing08'}>
        <Spinner size="s" />
        <Spinner />
        <Spinner size="l" />
        <Spinner size="s" />
        <Spinner />
        <Spinner size="l" />
        <Spinner size="s" />
        <Spinner />
        <Spinner size="l" />
      </HStack>
      <HStack gap={'coreSpacing08'} marginBottom={'coreSpacing08'}>
        <Skeleton height="min-content" padding="coreSpacing08">
          <VStack gap="coreSpacing04" marginBottom={'coreSpacing08'}>
            <OnSkeleton height={'1rem'} flex="0 1 auto" />
          </VStack>
          <VStack gap="coreSpacing04">
            <OnSkeleton height={'1rem'} flex="0 1 auto" />
          </VStack>
        </Skeleton>
      </HStack>
      <Box marginBottom={'coreSpacing08'}>
        <CollapsibleText
          lines={1}
          showMoreLabel="Show more"
          showLessLabel="Show less"
        >
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus et nunc vestibulum ultricies. Suspendisse potenti. Sed sit
            amet nunc nec libero tincidunt vestibulum ut nec lectus. Integer nec
            lacus ac metus aliquam tincidunt. Nullam
          </span>
        </CollapsibleText>
      </Box>
      <VStack gap={'coreSpacing08'} marginBottom={'coreSpacing08'}>
        <Heading variant="h1" as="h1">
          Lorem ipsum dolor sit amet
        </Heading>
        <Heading variant="h2" as="h2">
          Lorem ipsum dolor sit amet
        </Heading>
        <Heading variant="h3" as="h3">
          Lorem ipsum dolor sit amet
        </Heading>
        <Text variant="t1" as="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text variant="t2" as="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text variant="t3" as="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </VStack>
    </React.Fragment>
  );
};

export default UIKit;
