# Kayla Nazelika Portfolio Website

Personal portfolio website untuk menampilkan profil, skills, dan project dalam bidang **UI/UX Design** dan **Web Development**.

Website dibuat dengan konsep visual soft, feminine, modern, dan interactive.

---

## Features

* 🏠 Home / landing page
* 👩 About Me
* 🎨 Skills
* 💻 Project Portfolio
* 💌 Contact
* 🎵 Background Music
* 🎬 Background Video
* ✨ Scroll Animation
* 🌐 3D Background menggunakan Three.js
* 🖱️ Interactive 3D object berdasarkan pergerakan mouse
* 📱 Responsive layout

---

## Tech Stack

Project menggunakan teknologi frontend:

* HTML5
* CSS3
* JavaScript
* Three.js
* Google Fonts

Three.js digunakan untuk membuat visual 3D pada background website.

---

## Project Structure

```text
Portfolio web/
│
├── img/
│   ├── img1.jpeg
│   ├── img2.jpeg
│   ├── img3.jpeg
│   ├── img4.jpeg
│   ├── img5.jpeg
│   ├── img6.jpeg
│   └── Profile.png
│
├── music/
│   └── sound.mp3
│
├── vid/
│   └── video.mp4
│
├── index.html
├── music.css
└── music.js
```

> Catatan: berdasarkan implementasi `index.html`, styling utama masih berada di dalam `<style>` dan JavaScript utama juga masih berada di dalam `<script>`. File `music.js` dipanggil secara eksternal pada bagian akhir HTML.

---

## Sections

### Home

Menampilkan nama:

**Kayla Nazelika**

dengan tagline:

> UI/UX Designer & Web Developer | Creating intuitive, user-centered digital experiences

---

### About Me

Menampilkan profile image dan deskripsi mengenai fokus pada UI/UX Design dan Web Development.

---

### Skills

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

---

## Projects

Website menampilkan enam project.

### 1. Student Management System

**Category:** UI/UX Design & Wireframe

Project berupa rancangan UI/UX untuk sistem manajemen mahasiswa menggunakan metode RAD, dengan dashboard, wireframe, dan prototype interaktif.

---

### 2. UIN Navigasi (UIN MAPS)

**Category:** Web GIS

Aplikasi GIS berbasis web yang menggunakan Leaflet.js dan OpenRoute Service API untuk membantu pengguna menemukan rute kampus.

---

### 3. KeyLibrary

**Category:** UI/UX Design & Wireframe

Perancangan UI/UX aplikasi perpustakaan digital menggunakan pendekatan user-centered design.

---

### 4. Digital Library — SDN Citayam 05

**Category:** UI Design

Perancangan interface aplikasi perpustakaan digital sekolah untuk mendukung pengelolaan buku, peminjaman, dan pengembalian.

---

### 5. School Landing Page — SDN Citayam 05

**Category:** UI Design

Perancangan landing page dan halaman profil sekolah dengan fokus pada penyampaian informasi sekolah secara jelas dan mudah diakses.

---

### 6. Website SDN Citayam 05

**Category:** Front-End Development

Implementasi website sekolah yang menampilkan profil sekolah, data guru, berita, perpustakaan digital, dan kegiatan siswa.

---

## Background Video

Website menggunakan video:

```text
vid/video.mp4
```

Video dijalankan menggunakan HTML5 `<video>` dengan konfigurasi:

```html
autoplay
muted
loop
playsinline
```

---

## Background Music

Audio menggunakan:

```text
music/sound.mp3
```

Music dikontrol melalui tombol pada halaman.

Status music disimpan di browser menggunakan:

```javascript
localStorage
```

Value yang digunakan:

```text
on
off
```

---

## 3D Background

Website menggunakan Three.js untuk membuat objek sphere 3D.

Implementasi meliputi:

* Scene
* Perspective Camera
* WebGL Renderer
* Sphere Geometry
* MeshPhongMaterial
* Ambient Light
* Point Light
* Animation loop

Object melakukan rotasi secara otomatis.

Rotasi juga dapat dikontrol berdasarkan posisi mouse.

---

## Scroll Animation

Website menggunakan `IntersectionObserver` untuk mendeteksi ketika section memasuki viewport.

Ketika section terlihat, class:

```text
visible
```

ditambahkan ke section tersebut.

Class tersebut digunakan untuk menghasilkan efek fade-in dan slide-up.

---

## How to Run

Karena project merupakan website frontend sederhana, project dapat dijalankan dengan membuka:

```text
index.html
```

di browser.

Untuk development, lebih disarankan menggunakan local development server seperti Live Server pada Visual Studio Code.

---

## Asset Requirements

Pastikan file berikut tersedia pada lokasi yang sesuai:

```text
img/
music/
vid/
```

Asset yang digunakan antara lain:

```text
img/Profile.png
music/sound.mp3
vid/video.mp4
```

Project image pada HTML direferensikan sebagai:

```text
img/img1.png
img/img2.png
img/img3.png
img/img4.png
img/img5.png
img/img6.png
```

**Perhatian:** pastikan ekstensi file aktual sama dengan path yang digunakan oleh HTML. Pada struktur folder yang diberikan, file terlihat menggunakan ekstensi `.jpeg`, sedangkan HTML mereferensikan `.png`.

---

## External Resources

Google Fonts digunakan untuk:

* Poppins
* Pacifico

Three.js digunakan melalui CDN.

---

## Customization

### Mengubah Nama

Cari:

```html
<h1>Kayla Nazelika</h1>
```

### Mengubah Tagline

Cari:

```html
<p class="tagline">
```

### Mengubah Profile

Ganti:

```text
img/Profile.png
```

### Mengubah Background Music

Ganti:

```text
music/sound.mp3
```

### Mengubah Background Video

Ganti:

```text
vid/video.mp4
```

### Mengubah Project

Project terdapat di dalam:

```html
<section id="projects">
```

---

## Known Issues / Notes

1. `music.css` tersedia sebagai file terpisah pada struktur project, tetapi `index.html` yang diberikan belum menunjukkan `<link>` yang menghubungkannya.
2. Styling tombol music saat ini terdapat di dalam CSS internal `index.html`.
3. Beberapa asset project pada folder menggunakan ekstensi `.jpeg`, sedangkan HTML menggunakan `.png`.
4. `index.html` masih memiliki CSS dan JavaScript inline sehingga struktur dapat dirapikan pada pengembangan berikutnya.
5. Autoplay audio dapat dibatasi oleh kebijakan browser. Interaksi pengguna mungkin diperlukan sebelum audio dapat dimainkan.

---

## Future Development

* Memisahkan CSS utama ke file stylesheet.
* Memisahkan JavaScript utama ke file JavaScript.
* Menambahkan mobile navigation.
* Mengoptimalkan multimedia.
* Menambahkan SEO metadata.
* Menambahkan accessibility.
* Menambahkan contact form.
* Menambahkan project category/filter.


---

## Portfolio Expansion — 2026

The portfolio has been expanded without removing the original Home, About Me, Skills, Projects, music, video background, Three.js background, scroll animation, or existing project links.

### New sections

- Work Experience
- Project Experience (inside the existing My Projects/experience area)
- Organizational Experience
- Education
- Certifications & Training
- Event & Activities photo gallery
- Contact as the final section

### Easy customization

The new content is intentionally written as editable HTML. Search for comments such as:

```html
<!-- WORK EXPERIENCE 1 — EDIT THIS CARD -->
<!-- PROJECT EXPERIENCE 1 — EDIT THIS CARD -->
<!-- ORGANIZATION 1 — EDIT THIS CARD -->
<!-- EDUCATION 1 — EDIT THIS CARD -->
<!-- CERTIFICATE 1 — EDIT THIS CARD -->
<!-- PHOTO 1 — EDIT src/title/description -->
```

To add another item, duplicate the corresponding `<article>...</article>` block.

### Event photos

Put your event photos inside:

```text
img/
```

Then replace the placeholder inside the activity section with:

```html
<img src="img/event1.jpg" alt="Nama kegiatan">
```

### Theme colors

The main colors are controlled from the `:root` block at the top of `index.html`:

```css
--primary
--secondary
--accent
--bg
--surface
--surface-soft
--text
--text-muted
--border
```

The selected default theme is a formal **warm ivory + taupe + sage + muted champagne** palette so the portfolio can remain elegant as more experiences are added.

### Important asset fix

The existing project images were stored as `.jpeg`, while the original HTML referenced `.png`. The project paths have been aligned with the actual files so the existing project images load correctly.
