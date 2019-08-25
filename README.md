# 🎯 Wheel Spinner - Putar Roda Keberuntungan

Aplikasi wheel spinner modern dan responsif yang terinspirasi dari [wheelofnames.com](https://wheelofnames.com/). Dibuat dengan teknologi web terbaru untuk pengalaman yang optimal di desktop dan mobile.

![Wheel Spinner Preview](https://img.shields.io/badge/Status-Ready-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![PWA](https://img.shields.io/badge/PWA-Ready-orange)

## ✨ Fitur Utama

### 🎲 Wheel Spinner
- **Animasi yang smooth** dengan easing function yang natural
- **Sistem yang adil** tanpa bias - menggunakan Math.random() untuk keacakan
- **Durasi putar yang dapat disesuaikan** (2-10 detik)
- **Ukuran roda yang fleksibel** (300-500px)

### 🎨 Kustomisasi
- **5 skema warna**: Default, Pelangi, Pastel, Gelap, Neon
- **Pengaturan suara** - aktif/nonaktif
- **Responsive design** untuk semua ukuran layar
- **Tema modern** dengan gradient dan shadow

### 📝 Manajemen Data
- **Input nama yang mudah** - satu nama per baris
- **Tombol nama acak** untuk demo cepat
- **Riwayat pemenang** dengan timestamp
- **Export/Import** data dalam format JSON
- **Local Storage** untuk menyimpan pengaturan

### 🔧 Fitur Tambahan
- **Keyboard shortcut** - Spacebar untuk memutar
- **Share functionality** - bagikan roda Anda
- **PWA ready** - dapat diinstall di mobile
- **Offline support** dengan Service Worker
- **Modal hasil** yang menarik

## 🚀 Cara Menggunakan

### 1. Menambahkan Nama
- Masukkan nama-nama di textarea (satu nama per baris)
- Atau gunakan tombol "+ Nama Acak" untuk demo
- Nama akan otomatis tersimpan di browser

### 2. Kustomisasi
- **Durasi Putar**: Atur berapa lama roda berputar
- **Ukuran Roda**: Sesuaikan ukuran roda
- **Skema Warna**: Pilih tema warna favorit
- **Suara**: Aktifkan/nonaktifkan efek suara

### 3. Memutar Roda
- Klik tombol "PUTAR RODA" atau tekan Spacebar
- Tunggu animasi selesai
- Lihat hasil di modal yang muncul

### 4. Manajemen Data
- **Export**: Simpan data roda ke file JSON
- **Import**: Muat data dari file JSON
- **Share**: Bagikan roda dengan teman

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur semantik
- **CSS3** - Styling modern dengan CSS Grid, Flexbox, dan Custom Properties
- **JavaScript ES6+** - Logika aplikasi dengan Class dan modern APIs
- **Canvas API** - Rendering roda yang smooth
- **Service Worker** - PWA dan offline support
- **Local Storage** - Penyimpanan data lokal
- **Web App Manifest** - Install sebagai aplikasi

## 📱 PWA Features

Aplikasi ini mendukung Progressive Web App (PWA):
- ✅ Dapat diinstall di mobile
- ✅ Offline support
- ✅ App-like experience
- ✅ Fast loading dengan caching
- ✅ Responsive design

## 🎯 Use Cases

Aplikasi ini cocok untuk berbagai keperluan:

### 🏫 Pendidikan
- Memilih siswa untuk menjawab pertanyaan
- Membagi kelompok kerja
- Mengacak urutan presentasi

### 🏢 Bisnis
- Memilih pemenang giveaway
- Mengacak urutan meeting
- Membagi tugas tim

### 🎉 Acara
- Memilih pemenang doorprize
- Mengacak urutan perform
- Membagi hadiah

### 🏠 Personal
- Memilih menu makan malam
- Mengacak to-do list
- Membagi tugas rumah

## 🚀 Deployment ke GitHub Pages

### 1. Setup Repository
```bash
# Clone repository
git clone https://github.com/username/wheel-spinner-app.git
cd wheel-spinner-app

# Add files
git add .
git commit -m "Initial commit: Wheel Spinner App"
git push origin main
```

### 2. Enable GitHub Pages
1. Buka repository di GitHub
2. Pergi ke Settings > Pages
3. Pilih Source: "Deploy from a branch"
4. Pilih Branch: "main"
5. Pilih Folder: "/ (root)"
6. Klik Save

### 3. Custom Domain (Opsional)
1. Di Settings > Pages
2. Masukkan custom domain
3. Tambahkan CNAME file jika diperlukan

## 📁 Struktur Proyek

```
wheel-spinner-app/
├── index.html          # File utama HTML
├── styles.css          # Styling CSS
├── script.js           # Logika JavaScript
├── sw.js              # Service Worker
├── manifest.json      # Web App Manifest
├── README.md          # Dokumentasi
└── .gitignore         # Git ignore rules
```

## 🔧 Development

### Local Development
```bash
# Clone repository
git clone https://github.com/username/wheel-spinner-app.git
cd wheel-spinner-app

# Buka dengan live server atau file://
# Untuk testing PWA, gunakan HTTPS atau localhost
```

### Browser Support
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ✅ Mobile browsers

## 🤝 Contributing

Kontribusi sangat diterima! Berikut cara berkontribusi:

1. Fork repository
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🙏 Acknowledgments

- Terinspirasi dari [wheelofnames.com](https://wheelofnames.com/)
- Menggunakan font [Inter](https://rsms.me/inter/) dari Google Fonts
- Icon dari emoji Unicode
- Gradient backgrounds dari CSS gradients

## 📞 Support

Jika Anda memiliki pertanyaan atau masalah:
- Buat issue di GitHub
- Email: your-email@example.com
- Website: https://your-website.com

---

**Dibuat dengan ❤️ untuk komunitas**

*Wheel Spinner - Putar Roda Keberuntungan*
