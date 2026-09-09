const skills = [
  {
    number: "01",
    name: "HTML",
    type: "STRUCTURE",
  },
  {
    number: "02",
    name: "CSS",
    type: "STYLING",
  },
  {
    number: "03",
    name: "JavaScript",
    type: "LANGUAGE",
  },
  {
    number: "04",
    name: "Next.js",
    type: "FRAMEWORK",
  },
  {
    number: "05",
    name: "UI / UX",
    type: "DESIGN",
  },
  {
    number: "06",
    name: "Responsive Design",
    type: "DESIGN",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-heading">
          <span>02</span>
          <h2>Skills</h2>
        </div>

        <div className="skills-header">
          <p>
            Teknologi dan kemampuan yang saya gunakan untuk membuat
            website dan aplikasi digital.
          </p>

          <span>MY SKILLS / 06</span>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.number}>
              <div className="skill-card-top">
                <span>{skill.number}</span>
                <span>{skill.type}</span>
              </div>

              <div className="skill-card-bottom">
                <h3>{skill.name}</h3>
                <span className="skill-arrow">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}