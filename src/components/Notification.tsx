import { clsx } from 'clsx';

export interface NotificationProps {
  children: string;
  className?: string;
  type?: 'danger' | 'info' | 'success';
}

export function Notification({ children, className, type = 'info' }: NotificationProps) {
  return (
    <div
      className={clsx(
        'border-2 rounded py-2 px-3',
        {
          'bg-red-300 border-red-400 text-red-800': type === 'danger',
          'bg-sky-300 border-sky-400 text-sky-800': type === 'info',
          'bg-emerald-300 border-emerald-400 text-emerald-800': type === 'success',
        },
        className
      )}
    >
      {children}
    </div>
  );
}
