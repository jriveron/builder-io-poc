import React from 'react';
import CollapsibleText from '../CollapsibleText/CollapsibleText';
import Text from '../Text/Text';
import CalloutSkeleton from './Callout.skeleton';
import type { CalloutProps, CollapsibleProps } from './Callout.types';
import * as S from './Callout.styles';

const CalloutDescription: React.FC<
  CollapsibleProps & { children: React.ReactNode }
> = ({ children, ...props }) => {
  // If the collapsible prop is not provided, we assume it is true as a default,
  // this is needed to avoid introducing a breaking change in the API,
  // as the collapsible prop is not required in the Callout component
  // ⚠️ It will be reworked with the introduction of the translation system
  const isCollapsible = props.collapsible === undefined || props.collapsible;

  if (isCollapsible) {
    {
      return (
        <CollapsibleText
          lines={4}
          showMoreLabel={props.showMoreLabel}
          showLessLabel={props.showLessLabel}
        >
          <Text variant="t2">{children}</Text>
        </CollapsibleText>
      );
    }
  }

  return <Text variant="t2">{children}</Text>;
};

/**
 * Callout is a component used to highlight a message to the user.
 * It can be used to provide additional context or to draw attention to a specific part of the page.
 */
const Callout: React.FC<CalloutProps> = ({
  title,
  description,
  icon,
  intent,
  showSkeleton = false,
  showIcon = true,
  ...props
}) => {
  const IconComponent = S.intentStyleMap[intent].icon;

  if (showSkeleton) {
    return <CalloutSkeleton />;
  }

  return (
    <S.CalloutContainer intent={intent} {...props}>
      {showIcon && (
        <S.CalloutIconWrapper intent={intent}>
          {icon ? icon({ size: 'm' }) : <IconComponent size="m" />}
        </S.CalloutIconWrapper>
      )}

      <S.CalloutContent>
        {title && <S.CalloutTitle intent={intent}>{title}</S.CalloutTitle>}

        <CalloutDescription {...props}>{description}</CalloutDescription>
      </S.CalloutContent>
    </S.CalloutContainer>
  );
};

export default Callout;
