import { ArrowRight, Download, Mail } from "lucide-react";
import portrait from "@/assets/saad-shahin.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              Available for enterprise Odoo engagements
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Saad Shahin
            </h1>
            <p className="mt-3 text-lg md:text-2xl text-gradient font-display font-medium">
              Odoo Developer · ERP Engineer
            </p>
            <p className="mt-5 max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">
              Building scalable ERP solutions, enterprise workflows, integrations,
              automation systems, and business process optimizations using Odoo.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-elegant hover:opacity-95 transition"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/saad-shahin-cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:border-primary/50 transition"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-secondary transition"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "2+", v: "Years Odoo" },
                { k: "5+", v: "Years Programming" },
                { k: "20+", v: "Enterprise modules" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-2xl md:text-3xl font-display font-semibold text-gradient">
                    {s.k}
                  </dt>
                  <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — creative photo */}
          <div className="relative animate-fade-up [animation-delay:150ms] mx-auto w-full max-w-sm">
            {/* Glow blobs */}
            <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-primary/40 blur-3xl animate-blob" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-accent/40 blur-3xl animate-blob [animation-delay:-7s]" />

            {/* Frame */}
            <div className="relative">
              {/* Decorative rotating gradient ring */}
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-primary opacity-70 blur-[2px]" />
              <div className="relative rounded-[2rem] p-[2px] bg-gradient-primary shadow-elegant">
                <div className="relative rounded-[1.9rem] overflow-hidden bg-background">
                  <img
                    src={portrait}
                    alt="Saad Shahin — Odoo Developer"
                    className="w-full h-[440px] md:h-[520px] object-cover object-top"
                  />
                  {/* Dark mode overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />

                  {/* Corner brackets */}
                  <span className="absolute top-3 left-3 h-6 w-6 border-t-2 border-l-2 border-primary/70 rounded-tl-lg" />
                  <span className="absolute top-3 right-3 h-6 w-6 border-t-2 border-r-2 border-accent/70 rounded-tr-lg" />
                  <span className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-accent/70 rounded-bl-lg" />
                  <span className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-primary/70 rounded-br-lg" />
                </div>
              </div>
            </div>

            {/* Floating chips */}
            <div className="absolute -top-3 -right-3 glass rounded-xl px-3 py-2 text-xs font-mono animate-float shadow-card">
              <span className="text-accent">odoo.</span>module
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
