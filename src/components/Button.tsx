import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({ size = 'md', children, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'bg-cyan-500 hover:bg-cyan-300 transition-colors rounded font-semibold text-black w-full focus:ring-1 ring-white block text-center',
        {
          'py-2 px-3 text-xs': size === 'sm',
          'py-3 px-4 text-sm': size === 'md',
          'py-4 px-5 text-md': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
