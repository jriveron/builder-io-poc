import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  min-width: 14.25rem;

  border-radius: ${({ theme }) => theme.radii.coreRadiusL};
  border: 1px solid
    ${({ theme }) => theme.colors.semanticColorsBorderSubtleColor};

  transition: box-shadow 150ms ease-out;

  &:hover {
    box-shadow: 0 0.5rem 1.5rem -0.25rem ${({ theme }) => theme.colors.semanticColorsShadowsHighlightAmbientLight},
      0 0.25rem 0.5rem 0
        ${({ theme }) => theme.colors.semanticColorsShadowsHighlightKeyLight};
  }

  a {
    text-decoration: none;
    color: inherit;

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

export const PhotoWrapper = styled.div`
  overflow: hidden;
  border-top-left-radius: ${({ theme }) => theme.radii.coreRadiusL};
  border-top-right-radius: ${({ theme }) => theme.radii.coreRadiusL};
`;
export const Photo = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
`;

export const Header = styled.div`
  display: flex;
  align-items: self-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.coreSpacing02};
`;

export const Rating = styled.p`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.coreSpacing02};
`;

export const Address = styled.p`
  display: flex;
  align-items: self-start;
  gap: ${({ theme }) => theme.space.coreSpacing02};
  margin-top: ${({ theme }) => theme.space.coreSpacing02};
`;

export const Content = styled.div`
  padding: ${({ theme }) =>
    `${theme.space.coreSpacing04} ${theme.space.coreSpacing05}`};
`;
