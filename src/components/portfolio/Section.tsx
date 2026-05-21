import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground mb-4">
            <span className="h-1 w-1 rounded-full bg-accent" />
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
