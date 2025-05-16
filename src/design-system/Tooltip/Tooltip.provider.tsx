import React from 'react';
import { Provider as RadixTooltipProvider } from '@radix-ui/react-tooltip';
import { useTheme } from '@emotion/react';

const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { timing } = useTheme();
  return (
    <RadixTooltipProvider delayDuration={timing.coreMotionDurationMedium}>
      {children}
    </RadixTooltipProvider>
  );
};

export default TooltipProvider;
