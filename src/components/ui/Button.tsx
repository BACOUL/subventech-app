import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'outline';
};

export default function Button({ variant='primary', className='', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 transition';
  const styles = {
    primary: 'bg-primary text-white hover:opacity-95 active:opacity-90',
    ghost: 'bg-transparent text-text hover:bg-surface',
    outline: 'bg-transparent text-text border border-border hover:bg-surface/40',
  }[variant];

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
