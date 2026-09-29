import { createSupabaseServerClient } from "../../lib/supabase-server";

export interface ProyekData {
  id?: number;
  judul: string;
  kategori: string;
  deskripsi: string;
  teknologi: string;
  gambar: string;
  link: string | null;
}

export async function getProyek() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("proyek")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getProyekById(id: string) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("proyek")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function createProyek(data: ProyekData) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.from("proyek").insert({
    judul: data.judul,
    kategori: data.kategori,
    deskripsi: data.deskripsi,
    teknologi: data.teknologi,
    gambar: data.gambar,
    link: data.link,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateProyek(
  id: string,
  data: ProyekData
) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase
    .from("proyek")
    .update({
      judul: data.judul,
      kategori: data.kategori,
      deskripsi: data.deskripsi,
      teknologi: data.teknologi,
      gambar: data.gambar,
      link: data.link,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function deleteProyek(id: string) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase
    .from("proyek")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}