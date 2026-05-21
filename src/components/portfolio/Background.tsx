export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full bg-accent/15 blur-3xl animate-blob [animation-delay:-5s]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/15 blur-3xl animate-blob [animation-delay:-9s]" />
    </div>
  );
}
