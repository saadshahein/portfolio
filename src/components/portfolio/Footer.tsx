export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 mt-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-primary text-primary-foreground text-xs">
            S
          </span>
          <span className="font-display font-semibold">Saad Shahin</span>
          <span className="text-muted-foreground">· Odoo Developer</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Saad Shahin. Crafted with care in Cairo.
        </p>
      </div>
    </footer>
  );
}
