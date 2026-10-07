# Widya Aulia — Personal Portfolio

## Tentang Project

Website portfolio pribadi yang dibuat untuk menampilkan profil, keahlian, project, dan informasi kontak.

Portfolio ini dikembangkan menggunakan Next.js dengan desain modern, responsif, serta mendukung Light Mode dan Dark Mode.

## Pembuat

**Nama:** Widya Aulia
**Kelas:** XI RPL
**Sekolah:** SMKN 1 Pasuruan

## Teknologi

* Next.js
* React
* TypeScript
* Tailwind CSS
* CSS
* JavaScript
* Supabase
* PostgreSQL

## Fitur

* Home
* About Me
* Skills
* Selected Projects
* Project Detail
* Contact
* Light Mode
* Dark Mode
* Responsive Design
* Project Category Filter
* Smooth Scroll
* Back to Top
* Supabase Database Integration
* Admin Login
* Admin Project Dashboard
* CRUD Project
* Supabase Authentication
* Protected Admin Page
* Server Actions
* SEO Metadata
* Open Graph
* robots.txt
* sitemap.xml
* Image Optimization

## Project

1. Digital Invoice
2. Figma Design
3. Flood Detection System

## Struktur Halaman

### Public

* `/` — Home
* `/tentang` — About Me
* `/keahlian` — Skills
* `/proyek` — Projects
* `/proyek/[id]` — Project Detail
* `/kontak` — Contact
* `/test-supabase` — Supabase Connection Test

### Admin

* `/admin/login` — Login Administrator
* `/admin/proyek` — Dashboard Project
* `/admin/proyek/edit/[id]` — Edit Project
* `/admin/proyek/hapus/[id]` — Delete Project

---

# Modul 3 — Next.js & Supabase

Pada Modul 3, portfolio dikembangkan dengan menghubungkan Next.js dengan Supabase sebagai database cloud.

Data project yang sebelumnya disimpan sebagai data statis kemudian dipindahkan ke database Supabase.

Dengan integrasi ini, halaman Projects mengambil data secara langsung dari database.

## Supabase

Supabase digunakan sebagai Backend as a Service (BaaS) yang menyediakan database PostgreSQL untuk menyimpan data project portfolio.

Tabel yang digunakan:

`proyek`

## Struktur Tabel `proyek`

| Kolom        | Tipe Data   | Keterangan                      |
| ------------ | ----------- | ------------------------------- |
| `id`         | int8        | Primary key dan dibuat otomatis |
| `created_at` | timestamptz | Waktu data dibuat               |
| `judul`      | text        | Judul project                   |
| `deskripsi`  | text        | Deskripsi project               |
| `teknologi`  | text        | Teknologi yang digunakan        |
| `link`       | text        | Link project atau repository    |
| `kategori`   | text        | Kategori project                |
| `gambar`     | text        | Path gambar project             |

## Data Project

Database `proyek` berisi beberapa project portfolio:

* Digital Invoice
* Figma Design
* Flood Detection System

## Row Level Security

Row Level Security (RLS) digunakan pada tabel `proyek`.

Policy untuk membaca data:

**Policy:** `Enable read access for all users`
**Command:** `SELECT`

Policy tersebut digunakan agar data project dapat dibaca oleh website portfolio.

## Integrasi Next.js dengan Supabase

Supabase dihubungkan dengan Next.js menggunakan package:

```bash
npm install @supabase/supabase-js
```

---

# Modul 4 — Server Actions, CRUD & Admin Panel

Pada Modul 4, portfolio dikembangkan lebih lanjut dengan menambahkan Admin Panel untuk mengelola data project secara langsung melalui website.

Pada modul ini digunakan Supabase Authentication, Middleware, Server Actions, CRUD, dan Row Level Security.

## Fitur Modul 4

* Admin Login
* Supabase Authentication
* Protected Admin Page
* Middleware
* Create Project
* Read Project
* Update Project
* Delete Project
* Logout
* Admin Project Dashboard
* Server Actions
* Supabase Row Level Security

## Halaman Admin

| Halaman                    | Fungsi                            |
| -------------------------- | --------------------------------- |
| `/admin/login`             | Login administrator               |
| `/admin/proyek`            | Dashboard untuk mengelola project |
| `/admin/proyek/edit/[id]`  | Mengubah data project             |
| `/admin/proyek/hapus/[id]` | Menghapus project                 |

Halaman `/admin/proyek` digunakan administrator untuk mengelola data project yang tersimpan di database Supabase.

## Supabase Authentication

Supabase Authentication digunakan untuk proses login administrator.

Akun administrator digunakan untuk mengakses halaman admin yang dilindungi.

Pengguna yang belum login tidak dapat mengakses halaman admin.

## Middleware

Middleware digunakan untuk melindungi route `/admin`.

Jika pengguna belum login dan mencoba mengakses halaman admin, pengguna akan diarahkan ke:

`/admin/login`

Jika pengguna yang sudah login membuka halaman login admin, pengguna akan diarahkan ke:

`/admin/proyek`

## Server Actions

Server Actions digunakan untuk menjalankan operasi database dari server.

Operasi yang digunakan:

* Create Project
* Update Project
* Delete Project

Setelah perubahan data dilakukan, halaman public Projects dan Admin Projects diperbarui menggunakan `revalidatePath()`.

## CRUD Project

### Create

Admin dapat menambahkan project baru dengan mengisi:

* Judul project
* Kategori
* Deskripsi
* Teknologi
* Gambar
* Link project

### Read

Data project ditampilkan pada:

* Halaman public Projects
* Halaman Admin Projects

### Update

Admin dapat mengubah data project melalui:

`/admin/proyek/edit/[id]`

### Delete

Admin dapat menghapus project melalui:

`/admin/proyek/hapus/[id]`

## Row Level Security Modul 4

RLS digunakan untuk membatasi akses terhadap tabel `proyek`.

| Policy                           | Command | Akses           |
| -------------------------------- | ------- | --------------- |
| Enable read access for all users | SELECT  | Semua pengguna  |
| Allow authenticated insert       | INSERT  | User yang login |
| Allow authenticated update       | UPDATE  | User yang login |
| Allow authenticated delete       | DELETE  | User yang login |

Dengan konfigurasi tersebut, data project dapat dibaca oleh website portfolio, sedangkan operasi Create, Update, dan Delete hanya dapat dilakukan oleh pengguna yang telah terautentikasi.

## Struktur Project Modul 4

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
│   │
│   └── proyek/
│       └── page.tsx
│
├── services/
│   └── proyek.ts
│
├── lib/
│   ├── supabase.ts
│   ├── supabase-server.ts
│   └── supabase-browser.ts
│
└── middleware.ts
```

---

# Modul 5 — SEO, Metadata, Open Graph & Image Optimization

Pada Modul 5, portfolio dioptimalkan agar lebih baik dalam hal SEO, metadata, Open Graph, crawling mesin pencari, sitemap, dan performa gambar.

## Fitur Modul 5

* Static Metadata
* Dynamic Metadata
* Open Graph Image
* robots.txt
* Dynamic sitemap.xml
* Image Optimization
* Descriptive Image `alt`
* Lighthouse Testing

## Metadata

Metadata ditambahkan pada `layout.tsx` untuk memberikan informasi mengenai website kepada mesin pencari dan platform yang menggunakan metadata.

Metadata utama meliputi:

* Title
* Description
* Open Graph
* URL
* Site Name
* Locale
* Website Type

## Dynamic Metadata

Dynamic Metadata diterapkan pada halaman detail project:

`/proyek/[id]`

Judul dan deskripsi halaman diambil berdasarkan data project dari Supabase.

Dengan demikian, setiap project memiliki metadata yang sesuai dengan data project tersebut.

## Open Graph

Open Graph digunakan untuk menentukan tampilan ketika website dibagikan ke media sosial atau platform lain.

File Open Graph:

```text
src/app/opengraph-image.tsx
```

Open Graph Image dibuat secara otomatis menggunakan:

```tsx
import { ImageResponse } from "next/og";
```

Tampilan Open Graph menggunakan identitas portfolio:

**WIDYA AULIA**
**PORTFOLIO**

dengan tema warna pastel blue yang sesuai dengan desain website.

## robots.txt

File `robots.ts` digunakan untuk mengatur halaman yang dapat diakses oleh crawler mesin pencari.

File:

```text
src/app/robots.ts
```

Konfigurasi digunakan untuk:

* Mengizinkan crawling halaman public
* Melarang akses crawler ke `/admin/`
* Menentukan lokasi sitemap

## sitemap.xml

Sitemap dibuat secara dynamic menggunakan:

```text
src/app/sitemap.ts
```

Sitemap berisi halaman public portfolio seperti:

* Home
* About
* Skills
* Projects
* Contact

Selain itu, halaman detail project juga dibuat secara dynamic berdasarkan data project dari Supabase.

## Image Optimization

Gambar pada website dioptimalkan menggunakan `next/image`.

Contoh:

```tsx
import Image from "next/image";
```

Penggunaan `next/image` membantu mengoptimalkan gambar dan meningkatkan performa website.

Setiap gambar juga diberikan `alt` yang deskriptif agar lebih baik untuk accessibility dan SEO.

## Lighthouse

Lighthouse digunakan untuk membandingkan performa website sebelum dan sesudah optimasi.

### Sebelum Optimasi

| Kategori       | Score |
| -------------- | ----: |
| Performance    |    61 |
| Accessibility  |   100 |
| Best Practices |   100 |
| SEO            |   100 |

### Setelah Optimasi

| Kategori       | Score |
| -------------- | ----: |
| Performance    |    65 |
| Accessibility  |   100 |
| Best Practices |   100 |
| SEO            |   100 |

Performance meningkat dari **61 menjadi 65**, sementara Accessibility, Best Practices, dan SEO tetap mendapatkan score **100**.

---

# Struktur Project

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
│   │
│   ├── proyek/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── tentang/
│   │   └── page.tsx
│   ├── keahlian/
│   │   └── page.tsx
│   ├── kontak/
│   │   └── page.tsx
│   │
│   ├── opengraph-image.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
├── services/
│   └── proyek.ts
│
├── lib/
│   ├── supabase.ts
│   ├── supabase-server.ts
│   └── supabase-browser.ts
│
└── middleware.ts
```

## Kesimpulan

Portfolio Widya Aulia dikembangkan secara bertahap menggunakan Next.js dan Supabase.

Pada Modul 3, portfolio terhubung dengan database Supabase.

Pada Modul 4, ditambahkan sistem autentikasi administrator, Admin Panel, CRUD, Middleware, Server Actions, dan RLS.

Pada Modul 5, portfolio dioptimalkan menggunakan SEO Metadata, Dynamic Metadata, Open Graph, robots.txt, sitemap.xml, serta image optimization.

Hasil akhirnya adalah website portfolio yang memiliki halaman public, sistem pengelolaan project melalui Admin Panel, database cloud, autentikasi, serta optimasi SEO dan performa.
