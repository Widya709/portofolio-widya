export interface Proyek {
  id: string;
  judul: string;
  kategori: string;
  deskripsiSingkat: string;
  deskripsiLengkap: string;
  teknologi: string[];
  gambar: string;
}

export const daftarProyek: Proyek[] = [
  {
    id: "1",
    judul: "Digital Invoice",
    kategori: "FULL STACK APPLICATION",
    deskripsiSingkat:
      "Aplikasi digital invoice untuk membantu pengelolaan pesanan, pembuatan nota, pembayaran, dan rekap penjualan.",
    deskripsiLengkap:
      "Aplikasi digital invoice untuk membantu pengelolaan pesanan, pembuatan nota, pembayaran, dan rekap penjualan.",
    teknologi: ["Next.js", "TypeScript", "Supabase"],
    gambar: "/digital-invoice.jpg",
  },
  {
    id: "2",
    judul: "Figma Design",
    kategori: "UI/UX DESIGN",
    deskripsiSingkat:
      "Desain antarmuka website portfolio personal yang dibuat di Figma dengan fokus pada layout, visual, typography, dan pengalaman pengguna yang modern.",
    deskripsiLengkap:
      "Desain antarmuka website portfolio personal yang dibuat di Figma dengan fokus pada layout, visual, typography, dan pengalaman pengguna yang modern.",
    teknologi: ["Figma", "UI/UX", "Prototyping"],
    gambar: "/figma-design.jpg",
  },
  {
    id: "3",
    judul: "Flood Detection System",
    kategori: "INTERNET OF THINGS",
    deskripsiSingkat:
      "Sistem pendeteksi banjir berbasis IoT yang memanfaatkan sensor untuk mendeteksi ketinggian air dan memberikan peringatan.",
    deskripsiLengkap:
      "Sistem pendeteksi banjir berbasis IoT yang memanfaatkan sensor untuk mendeteksi ketinggian air dan memberikan peringatan.",
    teknologi: ["ESP32", "IoT", "Sensors"],
    gambar: "/flood-detection.jpg",
  },
];