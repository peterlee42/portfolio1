import type { ReactNode } from 'react';

export default function Link({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={className ? className : 'link'}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
}
