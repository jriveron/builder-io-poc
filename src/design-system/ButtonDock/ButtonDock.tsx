import React from 'react';

import * as S from './ButtonDock.styles';

const ButtonDock: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default ButtonDock;
