# Widya Aulia — Personal Portfolio

## Tentang Project

Website portfolio pribadi yang dibuat untuk menampilkan profil, keahlian, project, dan informasi kontak.

Portfolio ini dibuat menggunakan Next.js dengan desain modern, responsif, serta memiliki Light Mode dan Dark Mode.

## Pembuat

**Nama:** Widya Aulia

**Kelas:** XI RPL

**Sekolah:** SMKN 1 Pasuruan

## Teknologi

- Next.js
- React
- TypeScript
- Tailwind CSS
- CSS
- JavaScript
- Supabase
- PostgreSQL

## Fitur

- Home
- About Me
- Skills
- Selected Projects
- Project Detail
- Contact
- Light Mode
- Dark Mode
- Responsive Design
- Project Category Filter
- Smooth Scroll
- Back to Top
- Supabase Database Integration

## Project

1. Digital Invoice
2. Figma Design
3. Flood Detection System

## Struktur Halaman

- `/` — Home
- `/tentang` — About Me
- `/keahlian` — Skills
- `/proyek` — Projects
- `/proyek/[id]` — Project Detail
- `/kontak` — Contact
- `/test-supabase` — Supabase Connection Test

## Modul 3 — Next.js & Supabase

Pada Modul 3, portfolio ini dikembangkan dengan menghubungkan Next.js dengan Supabase sebagai database cloud.

Data project yang sebelumnya disimpan sebagai data statis pada project kemudian dipindahkan dan disimpan ke dalam database Supabase.

Dengan integrasi ini, halaman Projects mengambil data secara langsung dari database Supabase.

### Supabase

Supabase digunakan sebagai Backend as a Service (BaaS) yang menyediakan database PostgreSQL untuk menyimpan data project portfolio.

Project Supabase yang digunakan memiliki tabel:

`proyek`

### Struktur Tabel `proyek`

| Kolom | Tipe Data | Keterangan |
|---|---|---|
| `id` | int8 | Primary key dan dibuat otomatis |
| `created_at` | timestamptz | Waktu data dibuat |
| `judul` | text | Judul project |
| `deskripsi` | text | Deskripsi project |
| `teknologi` | text | Teknologi yang digunakan |
| `link` | text | Link project atau repository |
| `kategori` | text | Kategori project |
| `gambar` | text | Path gambar project |

### Data Project

Database `proyek` berisi beberapa project portfolio:

- Digital Invoice
- Figma Design
- Flood Detection System

### Row Level Security

Row Level Security (RLS) digunakan pada tabel `proyek`.

Policy yang digunakan adalah:

`Enable read access for all users`

Command:

`SELECT`

Policy tersebut digunakan agar data project dapat dibaca oleh website portfolio.

### Integrasi Next.js dengan Supabase

Supabase dihubungkan dengan Next.js menggunakan package:

```bash
npm install @supabase/supabase-js