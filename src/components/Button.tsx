import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ size = 'md', children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'bg-cyan-500 hover:bg-cyan-300 transition-colors rounded font-semibold text-black w-full focus:ring-1 ring-white block text-center',
        {
          'py-3 px-2 text-xs': size === 'sm',
          'py-4 px-3 text-sm': size === 'md',
          'py-5 px-4 text-md': size === 'lg',
        }
      )}
    >
      {children}
    </Comp>
  );
}
