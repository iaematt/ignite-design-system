import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
  outline?: boolean;
  disabled?: boolean;
}

export function Button({
  size = 'md',
  outline = false,
  disabled = false,
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'transition-colors rounded font-semibold w-full block text-center',
        {
          'py-2 px-3 text-xs h-10': size === 'sm',
          'py-3 px-4 text-sm h-12': size === 'md',
          'py-4 px-5 text-md h-14': size === 'lg',
          'bg-cyan-500 hover:bg-cyan-300 text-black focus:ring-1 ring-white': !outline,
          'ring-2 ring-cyan-500 hover:border-cyan-300 text-cyan-500 hover:text-cyan-300': outline,
          'opacity-80 disabled:cursor-not-allowed': disabled,
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </Comp>
  );
}
