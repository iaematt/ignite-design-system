import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface InputRootProps {
  children: ReactNode;
}

function InputRoot({ children }: InputRootProps) {
  return (
    <div className="py-4 px-3 rounded bg-gray-800 text-gray-100 outline-none text-xs placeholder:text-gray-400 w-full focus:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

export function Input(props: InputProps) {
  return (
    <div className="py-4 px-3 rounded bg-gray-800 text-gray-100 outline-none text-xs placeholder:text-gray-400 w-full focus:ring-2 ring-cyan-300">
      <input className={clsx('')} {...props} />
    </div>
  );
}
