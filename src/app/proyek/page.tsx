import Link from "next/link";
import ThemeCustomizer from "../../components/themecustomizer";
import Footer from "../../components/footer";
import CardProyek from "../../components/CardProyek";
import { supabase } from "@/lib/supabase";

interface ProyekPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function ProyekPage({
  searchParams,
}: ProyekPageProps) {
  const { category } = await searchParams;

  // 1. Ambil data dari Supabase
  const { data: rawProyek, error } = await supabase
    .from("proyek")
    .select("*");

  if (error) {
    console.error("Gagal mengambil data dari Supabase:", error.message);
  }

  // 2. Format data agar cocok dengan props CardProyek & struktur lama
  const daftarProyek = (rawProyek || []).map((item: any) => ({
    id: String(item.id),
    judul: item.judul || "",
    kategori: item.kategori || "",
    deskripsiSingkat: item.deskripsi || "",
    deskripsiLengkap: item.deskripsi || "",
    teknologi: item.teknologi
      ? Array.isArray(item.teknologi)
        ? item.teknologi
        : String(item.teknologi).split(",").map((t: string) => t.trim())
      : [],
    gambar: item.gambar || "/placeholder.jpg",
    link: item.link || "#",
  }));

  // 3. Filter berdasarkan kategori dari URL searchParams
  const filteredProjects = category
    ? daftarProyek.filter(
        (project) =>
          project.kategori.toLowerCase() === category.toLowerCase()
      )
    : daftarProyek;

  const categories = [
    { label: "ALL", value: "" },
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

      <footer>{null}</footer>
    </>
  );
}