import { Section } from "./Section";
import {
  Settings2, Workflow, FileBarChart, Plug, Factory, Users, Gauge, Zap,
} from "lucide-react";

const services = [
  { i: Settings2, t: "Odoo Customization", d: "Custom modules, fields, views, and business logic that fit your operation." },
  { i: Workflow, t: "ERP Workflow Automation", d: "Server actions, schedulers, and approval flows that remove manual work." },
  { i: FileBarChart, t: "Reporting Solutions", d: "Branded PDF/HTML and analytical Pivot reports for finance & ops." },
  { i: Plug, t: "Odoo Integrations", d: "Reliable sync with accounting, payment, CMS, and external APIs." },
  { i: Factory, t: "Warehouse & Manufacturing", d: "Serial tracking, MRP flows, and stock accuracy at scale." },
  { i: Users, t: "HR & Portal Solutions", d: "Attendance, leaves, and employee/customer portal experiences." },
  { i: Gauge, t: "Business Process Optimization", d: "Map current flows, remove waste, and ship measurable improvements." },
  { i: Zap, t: "ERP Performance Improvements", d: "Query tuning, indexing, and OWL frontend perf for snappier systems." },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>How I can help your <span className="text-gradient">ERP team</span></>}
      subtitle="Engagement-ready services for companies running or rolling out Odoo."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map(({ i: Icon, t, d }) => (
          <div
            key={t}
            className="hover-lift group relative bg-card-gradient border border-border rounded-2xl p-6 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="relative">
              <Icon className="h-6 w-6 text-accent mb-4" />
              <h3 className="font-display font-semibold">{t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
