"use client";

import Image from "next/image";
import Navbar from "../../components/navbar";
import ThemeCustomizer from "../../components/themecustomizer";
import Footer from "../../components/footer";

const projects = [
  {
    number: "01",
    title: "Digital Invoice",
    category: "FULL STACK APPLICATION",
    description:
      "Aplikasi digital invoice untuk membantu pengelolaan pesanan, pembuatan nota, pembayaran, dan rekap penjualan.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    image: "/digital-invoice.jpg",
  },
  {
    number: "02",
    title: "Figma Design",
    category: "UI/UX DESIGN",
    description:
      "Desain antarmuka website portfolio personal yang dibuat di Figma dengan fokus pada layout, visual, typography, dan pengalaman pengguna yang modern.",
    technologies: ["Figma", "UI/UX", "Prototyping"],
    image: "/figma-design.jpg",
  },
  {
    number: "03",
    title: "Flood Detection System",
    category: "INTERNET OF THINGS",
    description:
      "Sistem pendeteksi banjir berbasis IoT yang memanfaatkan sensor untuk mendeteksi ketinggian air dan memberikan peringatan.",
    technologies: ["ESP32", "IoT", "Sensors"],
    image: "/flood-detection.jpg",
  },
];

function ProjectVisual({ image }: { image: string }) {
  return (
    <div className="project-visual">
      <div className="project-image">
        <Image
          src={image}
          alt="Project preview"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="project-image-img"
        />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">

        {/* HEADING */}
        <div className="section-heading">
          <span>03</span>
          <h2>Selected Projects</h2>
        </div>

        {/* HEADER */}
        <div className="projects-header">
          <p>
            Beberapa project yang pernah saya kerjakan untuk mengembangkan
            kemampuan dalam web development, full stack, dan teknologi.
          </p>

          <span className="projects-total">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        {/* PROJECT LIST */}
        <div className="projects-list">
          {projects.map((project) => (
            <article
              className="project-item"
              key={project.number}
            >
              {/* NOMOR */}
              <div className="project-number">
                {project.number}
              </div>

              {/* FOTO */}
              <ProjectVisual image={project.image} />

              {/* INFORMASI */}
              <div className="project-main">
                <div className="project-category">
                  {project.category}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* VIEW PROJECT */}
              <a
                href="/#home"
                className="project-action"
              >
                <span>VIEW PROJECT</span>

                <div className="project-arrow">
                  ↗
                </div>
              </a>

              {/* HOVER LINE */}
              <div className="project-hover-line"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProyekPage() {
  return (
    <>
      <Navbar />

      <ThemeCustomizer />

      <main className="inner-page">
        <Projects />
      </main>

      <Footer />
    </>
  );
}