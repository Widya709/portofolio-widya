import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import ThemeCustomizer from "../components/themecustomizer";
import ScrollReveal from "../components/scrollreveal";

export default function Home() {
  return (
    <>
      <ThemeCustomizer />

      <main>
        <Hero />

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Skills />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <Projects />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Contact />
        </ScrollReveal>
      </main>
    </>
  );
}