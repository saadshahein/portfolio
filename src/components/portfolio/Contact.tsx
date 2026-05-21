import { Section } from "./Section";
import { Mail, Github, Linkedin, MessageCircle, MapPin, Phone } from "lucide-react";

const channels = [
  { i: Mail, label: "Email", value: "saad2242000@gmail.com", href: "mailto:saad2242000@gmail.com" },
  { i: Phone, label: "Phone", value: "+20 115 0653018", href: "tel:+201150653018" },
  { i: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/201150653018" },
  { i: Linkedin, label: "LinkedIn", value: "linkedin.com/in/saadshahin", href: "https://linkedin.com/in/saadshahin" },
  { i: Github, label: "GitHub", value: "github.com/saadshahin", href: "https://github.com/saadshahin" },
  { i: MapPin, label: "Location", value: "Cairo, Egypt", href: "#" },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build the <span className="text-gradient">next ERP system</span></>}
      subtitle="Open to senior Odoo roles, enterprise contracts, and integration projects worldwide."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        <div className="relative overflow-hidden rounded-3xl bg-card-gradient border border-border p-8 shadow-elegant">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/25 blur-3xl" />
          <div className="relative">
            <p className="text-sm text-accent uppercase tracking-widest">Available now</p>
            <h3 className="mt-2 text-3xl font-display font-semibold">
              Cairo, Egypt — open globally
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you need a new module, a complex integration, a manufacturing
              workflow, or a full Odoo implementation — I'd love to hear what you're
              building.
            </p>
            <a
              href="mailto:saad2242000@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-95 transition shadow-elegant"
            >
              <Mail className="h-4 w-4" />
              Start a conversation
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {channels.map(({ i: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="hover-lift bg-card-gradient border border-border rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary shrink-0">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="text-sm font-medium truncate">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
