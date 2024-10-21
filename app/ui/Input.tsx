import React, { useState, ChangeEvent, TextareaHTMLAttributes } from 'react';
import { cn } from '@/app/utils/cn'; // Utility to merge classNames

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  input: string; // Custom input value prop
  setInput: (value: string) => void; // Custom input handler
}

const Input: React.FC<InputProps> = ({
  className,
  input, // Use input instead of value
  setInput,
  ...props
}) => {
  const onInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = 'auto'; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height dynamically

    setInput(textarea.value); // Update parent state
  };

  return (
    <textarea
      value={input} // Use input here
      onChange={onInputChange}
      rows={1}
      className={cn(
        'w-full p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500',
        className
      )}
      style={{ overflow: 'hidden' }}
      {...props} // Spread additional props
    />
  );
};

export default Input;
