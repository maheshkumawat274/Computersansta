import { ReactNode } from 'react';
import { cn } from './utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  title?: string;
  subtitle?: string;
  center?: boolean;
}

export function Section({
  children,
  className = '',
  id,
  containerClassName = '',
  title,
  subtitle,
  center = false
}: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24 overflow-hidden', className)}>
      <div className={cn('w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
        {(title || subtitle) && (
          <div className={cn('mb-12 md:mb-16', center ? 'text-center' : 'text-left')}>
            {subtitle && (
              <span className="inline-block text-indigo-600 font-semibold tracking-wider uppercase text-sm mb-3">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
