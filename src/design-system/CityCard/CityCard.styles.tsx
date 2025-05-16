import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  min-width: 10.5rem;

  a {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;

export const Photo = styled.img`
  object-fit: cover;
  aspect-ratio: 1/1;
  border-radius: ${({ theme }) => theme.radii.coreRadiusL};
`;

export const Content = styled.div`
  padding: ${({ theme }) =>
    `${theme.space.coreSpacing05} ${theme.space.coreSpacing04}`};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  transition: padding-bottom 150ms ease-out;

  &:hover {
    padding-bottom: ${({ theme }) => theme.space.coreSpacing06};
  }

  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  border-radius: ${({ theme }) => theme.radii.coreRadiusL};
  a {
    color: ${({ theme }) => theme.colors.semanticColorsTextPrimaryInverse};
    text-decoration: none;
  }
`;

export const Name = styled.span``;
