import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/portfolio/Background";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saad Shahin — Odoo Developer & ERP Engineer" },
      {
        name: "description",
        content:
          "Odoo Developer building scalable ERP solutions, enterprise workflows, integrations, and automation systems across Odoo 13–18.",
      },
      { property: "og:title", content: "Saad Shahin — Odoo Developer" },
      {
        property: "og:description",
        content:
          "Enterprise Odoo engineering: custom modules, manufacturing & warehouse workflows, reporting, integrations, and portal systems.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
