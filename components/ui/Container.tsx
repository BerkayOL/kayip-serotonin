import type { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'nav';
  children: React.ReactNode;
}

export function Container({
  as: Tag = 'div',
  children,
  className = '',
  ...props
}: ContainerProps) {
  return (
    <Tag className={`ks-container ${className}`} {...props}>
      {children}
    </Tag>
  );
}
