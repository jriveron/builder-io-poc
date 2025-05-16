import styled from '@emotion/styled';
import { motion } from 'motion/react';

type ContentClampWrapperProps = {
  lines: number;
  isClamped: boolean;
};

export const CollapsibleTextWrapper = styled(motion.div)<ContentClampWrapperProps>`
  display: ${({ isClamped }) => (isClamped ? '-webkit-box' : 'block')};
  -webkit-line-clamp: ${({ lines }) => lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0.8;
`;
