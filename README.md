# SPA Katalog Buku Perpustakaan

## Deskripsi Proyek
Aplikasi ini adalah **Single Page Application (SPA)** berbasis **React** yang digunakan
untuk mengelola data katalog buku perpustakaan.  
Aplikasi mendukung fitur **CRUD (Create, Read, Update, Delete)** dan menggunakan **MockAPI**
sebagai sumber data API.

Proyek ini dibuat untuk memenuhi **Ujian Akhir Semester (UAS)** mata kuliah
Pemrograman Front End.

---

##  Fitur Utama
- Menampilkan daftar buku (Read)
- Menambahkan data buku (Create)
- Mengedit data buku (Update)
- Menghapus data buku (Delete)
- Tampilan responsif (Mobile & Desktop)
- Data diperbarui tanpa reload halaman (SPA)

---

##  Teknologi yang Digunakan
- React.js
- Axios
- Bootstrap
- MockAPI

---

##  Instalasi & Menjalankan Aplikasi

### Prasyarat
- Node.js (LTS)
- NPM

### Langkah Instalasi
1. Clone repository:
   ```bash
   git clone https://github.com/username/uas-spa-katalog-buku.git
2. cd katalog-buku
3. npm install
4. npm start
5. Akses melalui browser http://localhost:3000

#### Struktur Folder
src/
├── components/
│   ├── Navbar.jsx
│   ├── BookForm.jsx
│   ├── BookList.jsx
│   ├── BookCard.jsx
│   └── Footer.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
└── index.js

##### Pengujian Aplikasi

Pengujian dilakukan secara manual (Usability Testing) dengan skenario:
- Menambah data buku
- Mengedit data buku
- Menghapus data buku
- Pengujian tampilan mobile & desktop

Hasil pengujian menunjukkan seluruh fitur berjalan dengan baik dan tidak ditemukan bug.


###### Identitas

Nama : Andi Setiawan
NIM : 1003240055
Prodi : Teknik Informatika
