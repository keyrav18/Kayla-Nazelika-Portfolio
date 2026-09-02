# Product Requirements Document (PRD)

## Kayla Nazelika Portfolio Website

**Version:** 1.0
**Year:** 2026
**Product Type:** Personal Portfolio Website
**Platform:** Web Browser

---

## 1. Product Overview

Kayla Nazelika Portfolio Website adalah website portfolio pribadi yang digunakan untuk memperkenalkan profil, kemampuan, dan hasil proyek Kayla Nazelika dalam bidang UI/UX Design dan Web Development.

Website dirancang dengan pendekatan visual yang feminin, modern, dan interaktif menggunakan kombinasi warna pastel pink dan lavender, typography Poppins dan Pacifico, background video, background music, serta elemen visual 3D berbasis Three.js.

Website menyediakan beberapa section utama yaitu Home, About Me, Skills, Projects, dan Contact.

---

## 2. Product Goals

Tujuan utama website:

1. Menampilkan identitas dan profil profesional pemilik portfolio.
2. Menampilkan kemampuan di bidang UI/UX Design dan Web Development.
3. Menampilkan proyek yang pernah dibuat.
4. Menyediakan akses kepada pengunjung untuk melihat detail atau hasil proyek.
5. Menyediakan informasi kontak untuk kebutuhan profesional.
6. Memberikan pengalaman browsing yang interaktif melalui animasi, video, musik, dan elemen 3D.

---

## 3. Target Users

### Primary User

Recruiter, HR, hiring manager, client, atau pihak lain yang ingin mengetahui kemampuan dan pengalaman Kayla Nazelika.

### Secondary User

Pengunjung umum yang ingin melihat portfolio, desain, atau proyek web yang telah dibuat.

---

## 4. User Needs

Pengunjung membutuhkan:

* Informasi singkat mengenai pemilik portfolio.
* Informasi kemampuan/skills.
* Daftar proyek yang mudah dipahami.
* Preview atau deskripsi proyek.
* Link untuk melihat hasil proyek.
* Informasi kontak yang mudah ditemukan.
* Navigasi website yang sederhana.

---

## 5. Main Features

### 5.1 Navigation

Website menyediakan navigation bar dengan menu:

* Home
* About
* Skills
* Projects
* Contact

Navigasi menggunakan anchor link dan JavaScript untuk menghasilkan smooth scrolling.

---

### 5.2 Home Section

Home merupakan landing section yang menampilkan:

* Nama "Kayla Nazelika"
* Tagline:
  "UI/UX Designer & Web Developer | Creating intuitive, user-centered digital experiences"

Home menggunakan tampilan fullscreen dan menjadi bagian pertama yang dilihat pengunjung.

---

### 5.3 About Me

Section About Me menampilkan:

* Foto profile.
* Judul About Me.
* Deskripsi singkat mengenai kemampuan dan fokus pemilik portfolio.

Konten menjelaskan fokus pada UI/UX Design, Web Development, kreativitas, fungsionalitas, dan user experience.

---

### 5.4 Skills

Section Skills menampilkan kemampuan dalam bentuk card/grid.

Skill yang ditampilkan:

* UI Design
* Figma
* Adobe XD
* UX Research
* Prototyping
* HTML
* CSS
* JavaScript
* React / Next.js
* Responsive & Mobile-First Design
* Design System
* UI Consistency
* User Flow
* Information Architecture
* Usability Testing
* Iteration

---

### 5.5 Projects

Website menyediakan enam project portfolio:

1. UI/UX Design & Wireframe — Student Management System
2. UIN Navigasi (UIN MAPS)
3. UI/UX Design & Wireframe — KeyLibrary
4. UI Design — Perpustakaan Digital Sekolah SDN Citayam 05
5. UI Design — Landing Page & Profil Sekolah SDN Citayam 05
6. Front-End Development — Website Sekolah SDN Citayam 05

Setiap project memiliki:

* Project image.
* Nama project.
* Deskripsi.
* Tombol "View Project".
* Link eksternal menuju hasil project atau prototype.

---

### 5.6 Contact

Contact section menampilkan:

* Email.
* GitHub.
* Instagram.

Tujuannya memberikan jalur komunikasi bagi recruiter, client, atau pengunjung.

---

### 5.7 Background Video

Website memiliki video background fullscreen menggunakan file:

`vid/video.mp4`

Video:

* autoplay
* muted
* loop
* playsinline

Video ditempatkan sebagai background halaman.

---

### 5.8 Background Music

Website menyediakan background music menggunakan:

`music/sound.mp3`

Pengunjung dapat mengontrol music melalui tombol:

* Play Music
* Pause Music

Status music disimpan menggunakan `localStorage`, sehingga browser dapat mempertahankan status music berdasarkan pilihan pengguna.

---

### 5.9 3D Background

Website menggunakan Three.js untuk membuat visual 3D.

Implementasi terdiri dari:

* Three.js Scene.
* Perspective Camera.
* WebGL Renderer.
* Sphere geometry.
* MeshPhongMaterial.
* Ambient Light.
* Point Light.
* Animation loop.

Sphere berputar secara kontinu dan rotasinya dapat dipengaruhi oleh posisi mouse.

---

### 5.10 Scroll Animation

Section website menggunakan efek fade-in ketika section memasuki viewport.

Implementasi menggunakan:

`IntersectionObserver`

Ketika section terlihat oleh pengguna, class `visible` ditambahkan sehingga opacity dan posisi section berubah secara animatif.

---

## 6. Functional Requirements

| ID    | Requirement                                                    |
| ----- | -------------------------------------------------------------- |
| FR-01 | Sistem harus menampilkan halaman Home ketika website dibuka.   |
| FR-02 | User dapat berpindah ke setiap section melalui navigation bar. |
| FR-03 | Navigation menggunakan smooth scrolling.                       |
| FR-04 | Sistem menampilkan informasi About Me.                         |
| FR-05 | Sistem menampilkan daftar skills.                              |
| FR-06 | Sistem menampilkan enam project portfolio.                     |
| FR-07 | User dapat membuka link project melalui tombol View Project.   |
| FR-08 | Sistem menampilkan informasi kontak.                           |
| FR-09 | Sistem dapat menjalankan background video.                     |
| FR-10 | User dapat memainkan dan menghentikan background music.        |
| FR-11 | Status music disimpan menggunakan localStorage.                |
| FR-12 | Sistem menampilkan animasi fade-in pada section.               |
| FR-13 | Sistem menampilkan visual 3D menggunakan Three.js.             |
| FR-14 | Visual 3D menyesuaikan ukuran viewport browser.                |
| FR-15 | Visual 3D merespons pergerakan mouse.                          |

---

## 7. Non-Functional Requirements

### Performance

* Website harus dapat dibuka melalui browser modern.
* Animasi harus berjalan secara responsif.
* Asset multimedia harus memiliki path yang benar.

### Usability

* Navigasi harus mudah dipahami.
* Informasi project harus mudah ditemukan.
* Link project harus dapat diakses dengan jelas.

### Responsiveness

Website menggunakan CSS Grid dan viewport-based layout untuk menyesuaikan tampilan dengan ukuran layar.

### Compatibility

Website ditujukan untuk browser modern yang mendukung:

* HTML5
* CSS3
* JavaScript
* WebGL
* IntersectionObserver
* localStorage

---

## 8. User Flow

```text
User membuka website
        ↓
      Home
        ↓
  Melihat About Me
        ↓
     Melihat Skills
        ↓
    Melihat Projects
        ↓
 Memilih View Project
        ↓
 Membuka project eksternal
        ↓
     Contact
```

User juga dapat menggunakan navigation bar untuk langsung menuju section tertentu.

---

## 9. Design Requirements

### Visual Style

Website menggunakan gaya:

* Feminine
* Soft
* Modern
* Interactive
* Pastel

### Primary Colors

* Blush Pink
* Lavender
* Soft Pink
* Soft Background
* Dark Gray Text

### Typography

Website menggunakan:

* Poppins
* Pacifico

Typography dimuat melalui Google Fonts.

---

## 10. Technical Architecture

Project menggunakan struktur frontend sederhana:

```text
Portfolio web/
├── img/
│   ├── img1.jpeg
│   ├── img2.jpeg
│   ├── img3.jpeg
│   ├── img4.jpeg
│   ├── img5.jpeg
│   ├── img6.jpeg
│   └── Profile.png
├── music/
│   └── sound.mp3
├── vid/
│   └── video.mp4
├── index.html
├── music.css
└── music.js
```

Implementasi `index.html` saat ini juga mengandung CSS dan sebagian JavaScript secara inline.

---

## 11. External Dependencies

Project menggunakan:

* Google Fonts
* Three.js r128 melalui CDN

Three.js digunakan untuk rendering elemen 3D.

---

## 12. Acceptance Criteria

Website dianggap memenuhi requirement apabila:

* Semua navigation dapat digunakan.
* Semua section dapat ditampilkan.
* Profile image muncul.
* Skills dapat dilihat.
* Enam project ditampilkan.
* Link project dapat dibuka.
* Background video dapat berjalan.
* Music dapat dimainkan/dihentikan.
* Status music dapat disimpan.
* Animasi scroll berjalan.
* Elemen 3D dapat dirender.
* Elemen 3D dapat beradaptasi ketika ukuran browser berubah.
* Website dapat digunakan pada browser modern.

---

## 13. Future Improvements

Pengembangan selanjutnya dapat mencakup:

1. Memisahkan seluruh CSS dari `index.html`.
2. Memisahkan seluruh JavaScript dari `index.html`.
3. Menambahkan responsive navigation untuk mobile.
4. Menambahkan validasi dan fallback untuk asset yang tidak ditemukan.
5. Menambahkan SEO metadata.
6. Menambahkan favicon.
7. Mengoptimalkan ukuran video dan gambar.
8. Menambahkan accessibility seperti semantic HTML dan ARIA.
9. Menambahkan form contact.
10. Menambahkan project filtering berdasarkan kategori.
