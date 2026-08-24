import type { AnchorHTMLAttributes } from 'react';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  /** Show an external link indicator (screen reader text) */
  showIndicator?: boolean;
}

export function ExternalLink({
  href,
  children,
  showIndicator = false,
  className = '',
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
      {showIndicator && (
        <span className="sr-only"> (yeni sekmede açılır)</span>
      )}
    </a>
  );
}
