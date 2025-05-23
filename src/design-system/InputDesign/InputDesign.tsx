import React, { InputHTMLAttributes, forwardRef } from 'react';
import {
  InputContainer,
  StyledInput,
  InputLabel,
  ErrorMessage,
} from './InputDesign.styles';

export interface InputDesignProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'css'> {
  /**
   * Label for the input field
   */
  label?: string;

  /**
   * Error message to display
   */
  error?: string;

  /**
   * Whether the input is in an error state
   */
  hasError?: boolean;

  /**
   * Additional className for the input
   */
  className?: string;
}

export const InputDesign = forwardRef<HTMLInputElement, InputDesignProps>(
  ({ label, error, hasError, className, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <InputContainer className={className}>
        {label && <InputLabel htmlFor={inputId}>{label}</InputLabel>}
        <StyledInput
          id={inputId}
          ref={ref}
          hasError={hasError || !!error}
          aria-invalid={hasError || !!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <ErrorMessage id={`${inputId}-error`} role="alert">
            {error}
          </ErrorMessage>
        )}
      </InputContainer>
    );
  }
);

InputDesign.displayName = 'InputDesign';

export default InputDesign;
