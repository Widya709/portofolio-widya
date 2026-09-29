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

## Modul 4 — Server Actions, CRUD & Admin Panel

Pada Modul 4, portfolio ini dikembangkan lebih lanjut dengan menambahkan fitur Admin Panel untuk mengelola data project secara langsung dari website.

Pada modul ini digunakan Server Actions untuk menjalankan proses Create, Update, dan Delete pada database Supabase.

### Fitur Modul 4

- Admin Login
- Supabase Authentication
- Protected Admin Page
- Middleware
- Create Project
- Read Project
- Update Project
- Delete Project
- Logout
- Admin Project Dashboard
- Server Actions
- Supabase Row Level Security

### Halaman Admin

Halaman admin dibuat terpisah dari halaman portfolio publik.

| Halaman | Fungsi |
|---|---|
| `/admin/login` | Login administrator |
| `/admin/proyek` | Dashboard untuk mengelola project |
| `/admin/proyek/edit/[id]` | Mengubah data project |
| `/admin/proyek/hapus/[id]` | Menghapus project |

Halaman `/admin/proyek` digunakan oleh administrator untuk mengelola data project yang tersimpan di database Supabase.

### Supabase Authentication

Supabase Authentication digunakan untuk proses login administrator.

Akun administrator digunakan untuk mengakses halaman admin yang dilindungi.

Halaman admin tidak dapat diakses oleh pengguna yang belum login.

### Middleware

Middleware digunakan untuk melindungi route `/admin`.

Jika pengguna belum login dan mencoba mengakses halaman admin, pengguna akan diarahkan ke:

`/admin/login`

Jika pengguna yang sudah login membuka halaman login admin, pengguna akan diarahkan ke:

`/admin/proyek`

### Server Actions

Server Actions digunakan untuk menjalankan operasi database dari server.

Operasi yang digunakan pada Modul 4:

- Create project
- Update project
- Delete project

Setelah perubahan data dilakukan, halaman public Projects dan halaman Admin Projects diperbarui menggunakan `revalidatePath()`.

### CRUD Project

Admin dapat mengelola project melalui dashboard.

**Create**

Admin dapat menambahkan project baru dengan mengisi:

- Judul project
- Kategori
- Deskripsi
- Teknologi
- Gambar
- Link project

**Read**

Data project ditampilkan pada halaman Admin Projects dan halaman public Projects.

**Update**

Admin dapat mengubah data project melalui halaman:

`/admin/proyek/edit/[id]`

**Delete**

Admin dapat menghapus project melalui halaman:

`/admin/proyek/hapus/[id]`

### Row Level Security Modul 4

RLS digunakan untuk membatasi akses terhadap tabel `proyek`.

Policy yang digunakan:

| Policy | Command | Akses |
|---|---|---|
| Enable read access for all users | SELECT | Semua pengguna |
| Allow authenticated insert | INSERT | User yang login |
| Allow authenticated update | UPDATE | User yang login |
| Allow authenticated delete | DELETE | User yang login |

Dengan konfigurasi tersebut, data project dapat dibaca oleh website portfolio, sedangkan operasi Create, Update, dan Delete hanya dapat dilakukan oleh pengguna yang telah terautentikasi.

### Struktur Project Modul 4

```text
src/
├── app/
│   ├── admin/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── proyek/
│   │       ├── page.tsx
│   │       ├── edit/
│   │       │   └── [id]/
│   │       │       └── page.tsx
│   │       └── hapus/
│   │           └── [id]/
│   │               └── page.tsx
│   └── proyek/
│       └── page.tsx
│
├── services/
│   └── proyek.ts
│
└── lib/
    ├── supabase.ts
    ├── supabase-server.ts
    └── supabase-browser.ts

middleware.ts