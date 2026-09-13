interface Skill {
  number: string;
  name: string;
  type: string;
  href: string;
}

const skills: Skill[] = [
  {
    number: "01",
    name: "HTML",
    type: "STRUCTURE",
    href: "https://html.spec.whatwg.org/",
  },
  {
    number: "02",
    name: "CSS",
    type: "STYLING",
    href: "https://www.w3.org/Style/CSS/",
  },
  {
    number: "03",
    name: "JavaScript",
    type: "LANGUAGE",
    href: "https://ecma-international.org/publications-and-standards/standards/ecma-262/",
  },
  {
    number: "04",
    name: "Next.js",
    type: "FRAMEWORK",
    href: "https://nextjs.org/",
  },
  {
    number: "05",
    name: "UI / UX",
    type: "DESIGN",
    href: "https://www.figma.com/",
  },
  {
    number: "06",
    name: "Responsive Design",
    type: "DESIGN",
    href: "https://www.w3.org/",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container mx-auto w-full max-w-300">
        <div className="section-heading">
          <span>02</span>
          <h2>Skills</h2>
        </div>

        <div className="skills-header flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p>
            Teknologi dan kemampuan yang saya gunakan untuk membuat
            website dan aplikasi digital.
          </p>

          <span>MY SKILLS / 06</span>
        </div>

        <div className="skills-grid grid w-full grid-cols-1 md:grid-cols-2">
          {skills.map((skill) => (
            <a
              key={skill.number}
              href={skill.href}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-card block w-full transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="skill-card-top">
                <span>{skill.number}</span>
                <span>{skill.type}</span>
              </div>

              <div className="skill-card-bottom">
                <h3>{skill.name}</h3>
                <span className="skill-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}