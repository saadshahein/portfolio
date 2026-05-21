import { Section } from "./Section";
import { Server, Code, Boxes, Wrench } from "lucide-react";

const groups = [
  {
    icon: Server,
    title: "Backend",
    items: ["Python", "Odoo ORM", "PostgreSQL", "SQL"],
  },
  {
    icon: Code,
    title: "Frontend",
    items: ["XML / QWeb", "OWL", "JavaScript", "Bootstrap"],
  },
  {
    icon: Boxes,
    title: "ERP Expertise",
    items: [
      "Inventory", "Manufacturing", "Sales", "Purchase",
      "Accounting", "Reporting", "Workflow Automation", "HR Systems", "Portal Development",
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "Linux", "Docker"],
  },
];

const marquee = [
  "Odoo 18", "Odoo 17", "Odoo 16", "Odoo 15", "Odoo 14", "Odoo 13",
  "PostgreSQL", "Python", "OWL", "XML", "QWeb", "Docker", "Linux", "Git",
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Stack"
      title={<>The <span className="text-gradient">technology stack</span> behind the work</>}
      subtitle="A focused enterprise stack — backend depth, OWL frontend, and the ERP modules I ship to production."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map(({ icon: Icon, title, items }) => (
          <div key={title} className="hover-lift bg-card-gradient border border-border rounded-2xl p-6">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary mb-4">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-display font-semibold">{title}</h3>
            <ul className="mt-4 space-y-2">
              {items.map((it) => (
                <li key={it} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 relative overflow-hidden rounded-2xl glass py-5">
        <div className="flex gap-10 animate-scroll-x whitespace-nowrap font-mono text-sm text-muted-foreground">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {m}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
