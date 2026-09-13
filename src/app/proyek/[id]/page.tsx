import Link from "next/link";
import { notFound } from "next/navigation";
import ThemeCustomizer from "../../../components/themecustomizer";
import Footer from "../../../components/footer";
import Badge from "../../../components/Badge";
import { daftarProyek } from "../../../data/projects";

interface DetailProyekPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetailProyekPage({
  params,
}: DetailProyekPageProps) {
  const { id } = await params;

  const proyek = daftarProyek.find((item) => item.id === id);

  if (!proyek) {
    notFound();
  }

  return (
    <>
      <ThemeCustomizer />

      <main className="inner-page">
        <section className="projects section">
          <div className="container">
            <div className="section-heading">
              <span>{proyek.id.padStart(2, "0")}</span>
              <h1>{proyek.judul}</h1>
            </div>

            <div className="project-item">
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

                <p>{proyek.deskripsiLengkap}</p>

                <div className="project-tech">
                  {proyek.teknologi.map((teknologi) => (
                    <Badge
                      key={teknologi}
                      label={teknologi}
                    />
                  ))}
                </div>

                <Link
                  href="/proyek"
                  className="project-action"
                >
                  <span>BACK TO PROJECTS</span>
                  <div className="project-arrow">←</div>
                </Link>
              </div>

              <div className="project-hover-line"></div>
            </div>
          </div>
        </section>
      </main>

      <footer>{null}</footer>
    </>
  );
}