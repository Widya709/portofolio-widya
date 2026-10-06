import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

const baseUrl = "https://portofolio-widya-nine.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: proyek, error } = await supabase
    .from("proyek")
    .select("id");

  if (error) {
    console.error("Gagal mengambil data proyek:", error.message);
  }

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tentang`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/keahlian`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/proyek`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
    },
  ];

  const projectPages: MetadataRoute.Sitemap =
    proyek?.map((item) => ({
      url: `${baseUrl}/proyek/${item.id}`,
      lastModified: new Date(),
    })) ?? [];

  return [...staticPages, ...projectPages];
}