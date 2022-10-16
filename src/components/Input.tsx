import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface InputRootProps {
  children: ReactNode;
}

function InputRoot({ children }: InputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

InputRoot.displayName = 'TextInput.Root';

interface InputIconProps {
  children: ReactNode;
}

function InputIcon({ children }: InputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

InputIcon.displayName = 'TextInput.Icon';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
  return (
    <input className="bg-transparent flex-1 text-gray-100 outline-none text-xs placeholder:text-gray-400" {...props} />
  );
}

Input.displayName = 'TextInput.Input';

export const TextInput = {
  Root: InputRoot,
  Input: Input,
  Icon: InputIcon,
};
