import { Section } from "./Section";
import { Cpu, Factory, Warehouse, FileBarChart, Workflow, Plug, Users, Code2 } from "lucide-react";

const specialties = [
  { i: Code2, t: "Custom Development", d: "Module engineering from scratch with clean Odoo architecture." },
  { i: Factory, t: "Manufacturing Workflows", d: "Production logic, serials, validations across MRP stages." },
  { i: Warehouse, t: "Warehouse Management", d: "Stock moves, serial-based receipt/issue, accuracy controls." },
  { i: FileBarChart, t: "Reporting Systems", d: "PDF, HTML, Pivot reports for finance and operations." },
  { i: Workflow, t: "ERP Automation", d: "Server actions, scheduled jobs, and workflow orchestration." },
  { i: Plug, t: "Integrations", d: "External systems, accounting platforms, payment & CMS sync." },
  { i: Users, t: "HR & Portal", d: "Attendance, leaves, employee portals and permission systems." },
  { i: Cpu, t: "Process Optimization", d: "Performance tuning and operational efficiency at scale." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Enterprise ERP engineering, <span className="text-gradient">end to end.</span></>}
      subtitle="Over 2 years of Odoo development across onsite, remote, and part-time engagements with manufacturing, retail, logistics, and SaaS companies. I specialize in turning complex business requirements into reliable, maintainable ERP systems."
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I build enterprise-grade solutions on the Odoo framework — from custom modules
            and OWL components to PostgreSQL-tuned reporting and integrations with
            third-party systems. My work spans manufacturing, warehouse, HR, accounting,
            and portal systems on Odoo versions <span className="text-foreground font-medium">13 through 18</span>.
          </p>
          <p>
            I focus on the parts that matter to operations: clean domain models, correct
            workflow logic, fast reports, and integrations that don't break in production.
            I've shipped systems for carpet and mattress manufacturers, retail furniture,
            logistics, and mall operators.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Python", "Odoo ORM", "PostgreSQL", "OWL", "XML", "JavaScript", "Docker", "Linux"].map((t) => (
              <span key={t} className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-secondary/50">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {specialties.map(({ i: Icon, t, d }) => (
            <div
              key={t}
              className="hover-lift bg-card-gradient border border-border rounded-2xl p-4"
            >
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary mb-3">
                <Icon className="h-4 w-4" />
              </div>
              <p className="font-medium text-sm">{t}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
