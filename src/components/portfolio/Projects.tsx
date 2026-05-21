import { Section } from "./Section";
import {
  Building2, FileSignature, Factory, Layers, Sofa, Plug, Truck, UserCog, FileBarChart,
} from "lucide-react";

const projects = [
  {
    icon: Building2,
    name: "UVenues Mall ERP Enhancements",
    problem: "Mall operator needed a controlled portal for work permission requests by tenants and contractors.",
    solution: "Built a complete Portal Work Permission system with multi-stage approval workflow.",
    tech: ["Odoo 17", "Portal", "OWL", "Python", "PostgreSQL"],
    impact: "Reduced manual approvals and improved compliance tracking across tenants.",
    contrib: "Custom portal views, security rules, approval routing, audit trail.",
  },
  {
    icon: FileSignature,
    name: "City Green Service Contract System",
    problem: "Service operations lacked a structured contract lifecycle inside Odoo.",
    solution: "Developed end-to-end Service Contract management modules with renewals and SLA tracking.",
    tech: ["Odoo", "Python", "XML", "Reporting"],
    impact: "Unified contract lifecycle and increased renewal visibility.",
    contrib: "Domain modeling, state machine, scheduled jobs, dashboards.",
  },
  {
    icon: Factory,
    name: "Carpet Manufacturing Workflow",
    problem: "Standard MRP didn't match carpet production stages and validations.",
    solution: "Completed and optimized the manufacturing flow with custom stages and operational tracking.",
    tech: ["Odoo MRP", "Python", "OWL"],
    impact: "Higher production accuracy and clearer shop-floor visibility.",
    contrib: "Stage customization, validations, production logic, traceability.",
  },
  {
    icon: Layers,
    name: "Mattress Manufacturing & Serial Tracking",
    problem: "Operators needed to issue and receive items by serial in a single operational step.",
    solution: "Developed serial-based issue & receipt workflow inside one process with strict stock validation.",
    tech: ["Odoo Inventory", "Python", "PostgreSQL"],
    impact: "Faster warehouse operations and zero serial drift.",
    contrib: "Custom operation type, serial validation, UX speedups.",
  },
  {
    icon: Sofa,
    name: "Retail Furniture ERP Enhancements",
    problem: "Daily retail operations needed better reports and stricter validations.",
    solution: "Improved reports, workflows, and operational validations for retail furniture.",
    tech: ["Odoo", "QWeb", "Python"],
    impact: "Smoother daily operations and reduced data entry errors.",
    contrib: "Report redesigns, workflow guards, UX improvements.",
  },
  {
    icon: Plug,
    name: "Odoo ↔ Takamel Integration",
    problem: "City Club needed Odoo 18 to sync with the Takamel accounting platform.",
    solution: "Built a bi-directional integration layer with synchronization rules and error recovery.",
    tech: ["Odoo 18", "Python", "REST", "JSON"],
    impact: "Eliminated manual accounting handoffs between systems.",
    contrib: "Auth, sync engine, mapping, retry & monitoring.",
  },
  {
    icon: Truck,
    name: "Logistics & ZATCA Workflow",
    problem: "Saudi logistics implementation hit ZATCA e-invoicing compliance issues.",
    solution: "Fixed ZATCA integration, customized invoices, and shipped a Cheque Management module.",
    tech: ["Odoo 17", "ZATCA", "Python", "QWeb"],
    impact: "Compliant invoicing and a working cheque lifecycle.",
    contrib: "ZATCA fixes, document design, cheque module from scratch.",
  },
  {
    icon: UserCog,
    name: "HR Attendance & Leave Portal",
    problem: "HR processes needed automation and a self-service portal for employees.",
    solution: "Enhanced HR Attendance and built employee leave portal features.",
    tech: ["Odoo HR", "Portal", "OWL", "Python"],
    impact: "Reduced HR admin overhead and improved employee experience.",
    contrib: "Attendance logic, portal flows, validations, notifications.",
  },
  {
    icon: FileBarChart,
    name: "Reporting & Document Automation",
    problem: "Multiple clients needed branded, accurate operational and financial documents.",
    solution: "Designed professional PDF, HTML, and Pivot reports across purchasing, inventory, and sales.",
    tech: ["QWeb", "Python", "PostgreSQL"],
    impact: "Faster reporting cycles and consistent enterprise branding.",
    contrib: "Templates, data layers, performance tuning of report queries.",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Enterprise Projects"
      title={<>Selected <span className="text-gradient">client case studies</span></>}
      subtitle="Production Odoo systems delivered for manufacturing, retail, logistics, mall, and SaaS operators."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map(({ icon: Icon, ...p }) => (
          <article
            key={p.name}
            className="hover-lift relative bg-card-gradient border border-border rounded-2xl p-6 overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-primary/15 blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Case study
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg leading-tight">{p.name}</h3>

              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-accent">Problem</dt>
                  <dd className="text-muted-foreground mt-0.5">{p.problem}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-accent">Solution</dt>
                  <dd className="text-muted-foreground mt-0.5">{p.solution}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-accent">Impact</dt>
                  <dd className="text-muted-foreground mt-0.5">{p.impact}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-accent">Key Contribution</dt>
                  <dd className="text-muted-foreground mt-0.5">{p.contrib}</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-border bg-secondary/40">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
