import { Section } from "./Section";
import { GraduationCap, Award, Languages } from "lucide-react";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & Credentials"
      title={<>Academic background <span className="text-gradient">& certifications.</span></>}
      subtitle="Formal computer science training paired with continuous professional development."
    >
      <div className="grid lg:grid-cols-3 gap-5">
        {/* Education */}
        <div className="lg:col-span-2 bg-card-gradient border border-border rounded-2xl p-6 hover-lift">
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary shrink-0">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display font-semibold text-lg">
                  BSc in Computer Science
                </h3>
                <span className="text-xs font-mono text-muted-foreground">
                  Sep 2018 – Jul 2022
                </span>
              </div>
              <p className="text-sm text-gradient mt-1">
                Faculty of Computers and Informatics — Zagazig University
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Graduated with a <span className="text-foreground font-medium">Good</span> overall grade and
                an <span className="text-foreground font-medium">Excellent</span> rating on the Graduation Project.
                Coursework in algorithms, databases, software engineering, and operating systems.
              </p>
              <p className="text-xs text-muted-foreground mt-3">📍 Zagazig, Egypt</p>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-card-gradient border border-border rounded-2xl p-6 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-accent">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="font-display font-semibold">Certificates</h3>
          </div>
          <ul className="space-y-3">
            {[
              { t: "Python Essentials & OOP", i: "Cisco" },
              { t: "Soft Skills", i: "Cisco" },
            ].map((c) => (
              <li key={c.t} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <div>
                  <p className="font-medium">{c.t}</p>
                  <p className="text-xs text-muted-foreground">{c.i}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div className="lg:col-span-3 bg-card-gradient border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
              <Languages className="h-5 w-5" />
            </div>
            <h3 className="font-display font-semibold">Languages</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { l: "Arabic", v: "Native", p: 100 },
              { l: "English", v: "Conversational", p: 70 },
            ].map((lng) => (
              <div key={lng.l}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{lng.l}</span>
                  <span className="text-muted-foreground text-xs">{lng.v}</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full"
                    style={{ width: `${lng.p}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
