import Link from "next/link";
import ThemeCustomizer from "../../components/themecustomizer";
import CardProyek from "../../components/CardProyek";
import { supabase } from "../../../lib/supabase";
import type { Proyek } from "../../data/projects";

interface ProyekPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

interface SupabaseProyek {
  id: number;
  judul: string;
  kategori: string;
  deskripsi: string;
  teknologi: string;
  gambar: string;
  link: string | null;
}

export default async function ProyekPage({
  searchParams,
}: ProyekPageProps) {
  const { category } = await searchParams;

  const { data, error } = await supabase
    .from("proyek")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Gagal mengambil data proyek:", error);
  }

  const daftarProyek: Proyek[] = (data as SupabaseProyek[] | null)?.map(
    (project) => ({
      id: String(project.id),
      judul: project.judul,
      kategori: project.kategori,
      deskripsiSingkat: project.deskripsi,
      deskripsiLengkap: project.deskripsi,
      teknologi: project.teknologi
        ? project.teknologi.split(",").map((item) => item.trim())
        : [],
      gambar: project.gambar,
    })
  ) ?? [];

  const filteredProjects = category
    ? daftarProyek.filter(
        (project) =>
          project.kategori.toLowerCase() === category.toLowerCase()
      )
    : daftarProyek;

  const categories = [
    {
      label: "ALL",
      value: "",
    },
    {
      label: "WEB",
      value: "full stack application",
    },
    {
      label: "UI / UX",
      value: "ui/ux design",
    },
    {
      label: "IOT",
      value: "internet of things",
    },
  ];

  return (
    <>
      <ThemeCustomizer />

      <main className="inner-page">
        <section id="projects" className="projects section">
          <div className="container">
            <div className="section-heading">
              <span>03</span>
              <h1>Selected Projects</h1>
            </div>

            <div className="projects-header">
              <p>
                Beberapa project yang pernah saya kerjakan untuk
                mengembangkan kemampuan dalam web development,
                full stack, dan teknologi.
              </p>

              <span className="projects-total">
                {String(filteredProjects.length).padStart(2, "0")} PROJECTS
              </span>
            </div>

            <div className="project-filters">
              {categories.map((item) => {
                const isAll = item.value === "";

                const href = isAll
                  ? "/proyek"
                  : `/proyek?category=${encodeURIComponent(
                      item.value
                    )}`;

                const isActive = isAll
                  ? !category
                  : category?.toLowerCase() ===
                    item.value.toLowerCase();

                return (
                  <Link
                    key={item.label}
                    href={href}
                    className={`project-filter ${
                      isActive ? "active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="projects-list">
              {filteredProjects.map((project) => (
                <CardProyek
                  key={project.id}
                  proyek={project}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}