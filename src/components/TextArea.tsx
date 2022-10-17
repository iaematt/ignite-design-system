import { TextareaHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <textarea
      className={clsx(
        'flex py-2 px-3 rounded outline-none bg-gray-800 w-full focus-within:ring-2 text-xs placeholder:text-gray-400 ring-cyan-300 text-gray-100',
        {},
        className
      )}
      {...props}
    ></textarea>
  );
}
