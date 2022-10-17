import clsx from 'clsx';

export interface SeparatorProps {
  className?: string;
}

export function Separator({ className }: SeparatorProps) {
  return (
    <hr
      className={clsx(
        'w-full h-[2px] after:border-gray-800 border-gray-800 before:border-gray-800 my-4',
        {},
        className
      )}
    />
  );
}
