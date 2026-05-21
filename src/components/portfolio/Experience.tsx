import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Elsewedy Industries",
    role: "Odoo Developer",
    period: "Current",
    location: "Cairo, Egypt",
    summary:
      "Working on multiple enterprise Odoo systems and business platforms across Odoo versions 13 to 18.",
    bullets: [
      "Developed complete custom Odoo modules from scratch",
      "Built Portal Work Permission system for UVenues Mall platform",
      "Developed Service Contract management modules for City Green system",
      "Enhanced HR Attendance workflows and employee tracking processes",
      "Created employee leave portal features and workflow improvements",
      "Customized professional reports for Purchasing and Inventory operations",
      "Enterprise-grade business process automation and ERP optimization",
    ],
    tags: ["Odoo 13–18", "Portal", "HR", "Reporting", "Automation"],
  },
  {
    company: "SERA Group",
    role: "Odoo Developer",
    period: "Apr 2024 — Mar 2026",
    location: "Cairo, Egypt",
    summary: "Large-scale manufacturing and warehouse management workflows.",
    bullets: [
      "Carpet manufacturing ERP workflow — completed and optimized production stages",
      "Mattress manufacturing & warehouse — serial-based issue/receipt in one operation",
      "Retail furniture ERP — reports, validations, and workflow improvements",
      "Designed professional PDF, HTML, and Pivot reports",
    ],
    tags: ["Manufacturing", "Warehouse", "Serials", "Retail"],
  },
  {
    company: "Smart Business (Odoo Partner)",
    role: "Odoo Developer",
    period: "Jan 2025 — Jun 2025",
    location: "Baghdad, Iraq · Part Time",
    summary:
      "ERP implementation and customization for Jawharat Al Ain, Ajyal Baghdad, and Maather.",
    bullets: [
      "Developed and customized ERP workflows for business requirements",
      "Designed professional invoice, warehouse, and receipt report templates",
      "Inventory, sales, purchasing, and reporting enhancements",
      "Client-specific automation and operational improvements",
    ],
    tags: ["Implementation", "Customization", "Reports"],
  },
  {
    company: "GBS (Odoo Partner)",
    role: "Odoo Developer · Part Time",
    period: "Jul 2025 — Nov 2025",
    location: "Remote",
    summary:
      "Integration between Odoo 18 and Takamel accounting system for City Club.",
    bullets: [
      "Built synchronization logic between Odoo and external accounting",
      "Implemented payment processing workflows",
      "Enhanced communication between external systems and Odoo workflows",
    ],
    tags: ["Integration", "Odoo 18", "Accounting"],
  },
  {
    company: "Fast Road Logistics",
    role: "Odoo Developer",
    period: "Earlier",
    location: "Saudi Arabia",
    summary: "Odoo 17 implementation across accounting, inventory, and sales.",
    bullets: [
      "Configured Accounting, Inventory, and Sales modules",
      "Customized invoices and receipt documents",
      "Developed Cheque Management module",
      "Fixed ZATCA integration issues",
    ],
    tags: ["Odoo 17", "ZATCA", "Logistics"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A timeline of <span className="text-gradient">enterprise ERP work</span></>}
      subtitle="Selected roles building production Odoo systems for manufacturing, retail, logistics, and SaaS platforms."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {experiences.map((e) => (
          <div
            key={e.company}
            className="hover-lift bg-card-gradient border border-border rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <Briefcase className="h-3 w-3 text-accent" />
              <span>{e.period} · {e.location}</span>
            </div>
            <h3 className="text-xl font-display font-semibold">{e.company}</h3>
            <p className="text-sm text-primary mt-1">{e.role}</p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{e.summary}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground flex-1">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-left">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {e.tags.map((t) => (
                <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-border bg-secondary/40">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
