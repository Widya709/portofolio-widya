import Link from "next/link";
import type { Proyek } from "../data/projects";

interface CardProyekProps {
  proyek: Proyek;
}

export default function CardProyek({ proyek }: CardProyekProps) {
  return (
    <article className="project-item">
      <div className="project-number">
        {proyek.id.padStart(2, "0")}
      </div>

      <div className="project-visual">
        <div className="project-image">
          <img
            src={proyek.gambar}
            alt={proyek.judul}
            className="project-image-img"
          />
        </div>
      </div>

      <div className="project-main">
        <div className="project-category">
          {proyek.kategori}
        </div>

        <h3>{proyek.judul}</h3>

        <p>{proyek.deskripsiSingkat}</p>

        <div className="project-tech">
          {proyek.teknologi.map((teknologi) => (
            <span key={teknologi}>
              {teknologi}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={`/proyek/${proyek.id}`}
        className="project-action"
      >
        <span>VIEW PROJECT</span>

        <div className="project-arrow">
          ↗
        </div>
      </Link>

      <div className="project-hover-line"></div>
    </article>
  );
}