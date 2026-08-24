import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = 'outline',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const variantClass = variant === 'primary' ? 'ks-btn-primary' : 'ks-btn-outline';
  return (
    <button className={`ks-btn ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
