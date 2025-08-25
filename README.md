# 🎲 Wheel Spinner App

[![OMEANS Team](https://img.shields.io/badge/Developed%20by-OMEANS%20Team-blue?style=for-the-badge&logo=github)](https://omeans-team.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-green?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)
[![Made with Love](https://img.shields.io/badge/Made%20with-Love-red?style=for-the-badge)](https://omeans-team.github.io)

> Aplikasi web interaktif untuk membuat roda putar (spinning wheel) yang dapat digunakan untuk berbagai keperluan seperti undian, pemilihan acak, atau permainan. Dibangun dengan teknologi modern untuk pengalaman yang menyenangkan.

## 🌟 Demo

**🌐 Live Demo:** [https://omeans-team.github.io/wheel-spinner-app](https://omeans-team.github.io/wheel-spinner-app)

**📱 PWA Support:** Install sebagai aplikasi desktop/mobile untuk pengalaman terbaik!

## ✨ Fitur Utama

### 🎲 Roda Putar Interaktif
- **Animasi Realistis**: Putaran roda yang smooth dan realistis
- **Kustomisasi Ukuran**: Atur ukuran roda sesuai kebutuhan (300px - 500px)
- **Durasi Putar**: Kontrol durasi putaran (2-10 detik)
- **Suara Efek**: Efek suara saat memutar dan menang

### 🎨 Kustomisasi Visual
- **Skema Warna**: 5 pilihan skema warna (Default, Pelangi, Pastel, Gelap, Neon)
- **Responsive Design**: Tampilan optimal di desktop, tablet, dan mobile
- **Animasi Smooth**: Transisi dan animasi yang halus
- **Modern UI**: Interface yang modern dan menarik

### 📊 Manajemen Data
- **Input Dinamis**: Tambah, edit, dan hapus item secara real-time
- **Validasi Input**: Validasi untuk input kosong dan duplikasi
- **Auto-save**: Data tersimpan otomatis di local storage
- **History**: Riwayat putaran terakhir

### 💾 Export & Import
- **Export Data**: Simpan data roda ke file JSON
- **Import Data**: Muat data dari file JSON
- **Backup**: Sistem backup dan restore data
- **Sharing**: Bagikan roda ke media sosial

### 🎮 Fitur Gaming
- **Random Selection**: Pemilihan acak yang adil
- **Multiple Items**: Dukungan untuk banyak item
- **Weighted Selection**: Sistem bobot untuk item tertentu
- **Result Display**: Tampilan hasil yang jelas

## 🚀 Quick Start

### Instalasi Lokal

1. **Clone Repository**
   ```bash
   git clone https://github.com/omeans-team/wheel-spinner-app.git
   cd wheel-spinner-app
   ```

2. **Buka di Browser**
   ```bash
   # Menggunakan Python
   python -m http.server 8000
   
   # Menggunakan Node.js
   npx live-server
   
   # Menggunakan PHP
   php -S localhost:8000
   ```

3. **Akses Aplikasi**
   ```
   http://localhost:8000
   ```

### Install PWA

1. Buka aplikasi di browser
2. Klik tombol "Install" di address bar
3. Atau gunakan menu browser untuk "Add to Home Screen"
4. Nikmati pengalaman offline!

## 🛠️ Teknologi yang Digunakan

### Frontend
- **HTML5**: Semantic markup dan canvas untuk roda
- **CSS3**: Modern styling dengan CSS Grid dan Flexbox
- **JavaScript ES6+**: Vanilla JavaScript dengan class-based architecture
- **Canvas API**: Untuk rendering roda putar
- **Web Audio API**: Untuk efek suara

### PWA Features
- **Service Worker**: Offline functionality dan caching
- **Web App Manifest**: Install prompt dan app-like experience
- **Local Storage**: Client-side data persistence
- **Web Share API**: Native sharing capabilities

### Responsive Design
- **Mobile First**: Design dimulai dari mobile
- **Breakpoints**: 480px, 640px, 768px, 1024px
- **Touch Friendly**: Optimized untuk touch devices
- **Progressive Enhancement**: Fitur bertahap sesuai kemampuan browser

## 📱 Kompatibilitas

### Browser Support
- **Chrome**: 60+ (Full support)
- **Firefox**: 55+ (Full support)
- **Safari**: 12+ (Full support)
- **Edge**: 79+ (Full support)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet

### Device Support
- **Desktop**: Windows, macOS, Linux
- **Tablet**: iPad, Android tablets
- **Mobile**: iPhone, Android phones
- **Smart TV**: Web browsers on smart TVs

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Space` | Putar roda |
| `Enter` | Tambah item baru |
| `Escape` | Cancel edit atau tutup dialog |
| `Ctrl/Cmd + S` | Export data |
| `Ctrl/Cmd + O` | Import data |

## 📚 Dokumentasi

### Tutorial Lengkap
Lihat file [`about.md`](./about.md) untuk tutorial penggunaan yang sangat lengkap, termasuk:
- Panduan step-by-step untuk semua fitur
- Tutorial kustomisasi roda
- Tips dan trik penggunaan
- Troubleshooting guide

### API Reference
Aplikasi menggunakan Canvas API dan Local Storage:
```javascript
// Canvas untuk rendering roda
const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');

// Local Storage untuk data
localStorage.setItem('wheelData', JSON.stringify(data));
```

## 🎯 Tujuan dan Manfaat

### Untuk Individu
- **Entertainment**: Hiburan dan permainan
- **Decision Making**: Membantu mengambil keputusan acak
- **Learning**: Belajar tentang probabilitas
- **Creativity**: Ekspresi kreatif dengan kustomisasi

### Untuk Tim
- **Team Building**: Aktivitas ice breaker
- **Meeting**: Pemilihan acak untuk presentasi
- **Games**: Permainan dalam tim
- **Fair Selection**: Pemilihan yang adil dan transparan

### Untuk Organisasi
- **Events**: Acara dan gathering
- **Training**: Sesi training dan workshop
- **Contests**: Kompetisi dan undian
- **Engagement**: Meningkatkan engagement peserta

## 🔒 Privasi dan Keamanan

### Data Storage
- **Local Only**: Data tersimpan hanya di browser pengguna
- **No Server**: Tidak ada data yang dikirim ke server
- **Privacy**: Data tetap milik pengguna sepenuhnya
- **Control**: Pengguna memiliki kontrol penuh atas data

### Export/Import
- **Client-side**: Semua proses export/import di client
- **No Upload**: Tidak ada upload data ke server
- **Format Standard**: Menggunakan format standar (JSON)
- **Validation**: Validasi data untuk keamanan

## 🎨 Kustomisasi

### Theme
- **Color Schemes**: 5 skema warna yang berbeda
- **Custom Colors**: Mudah ditambahkan skema baru
- **Dark Mode**: Support untuk dark mode (future)
- **Responsive**: Adaptif terhadap preferensi sistem

### Layout
- **Flexible Design**: Layout yang fleksibel
- **Component-based**: Komponen yang dapat dikonfigurasi
- **Accessibility**: Mengikuti WCAG guidelines
- **Internationalization**: Support untuk berbagai bahasa

## 🤝 Kontribusi

Kami menyambut kontribusi dari komunitas! Berikut cara berkontribusi:

### Cara Kontribusi
1. **Fork** repository ini
2. **Buat branch** untuk fitur baru (`git checkout -b feature/AmazingFeature`)
3. **Commit** perubahan (`git commit -m 'Add some AmazingFeature'`)
4. **Push** ke branch (`git push origin feature/AmazingFeature`)
5. **Buat Pull Request**

### Guidelines
- Ikuti standar coding yang ada
- Tambahkan dokumentasi untuk fitur baru
- Test fitur sebelum submit
- Gunakan commit message yang jelas

### Report Bugs
Jika menemukan bug, silakan:
1. Cek [Issues](https://github.com/omeans-team/wheel-spinner-app/issues) yang sudah ada
2. Buat issue baru dengan detail yang lengkap
3. Sertakan screenshot jika diperlukan

## 📄 Lisensi

### Open Source
- **MIT License**: Lisensi permissive
- **Free to Use**: Gratis untuk penggunaan pribadi dan komersial
- **Attribution**: Credit untuk OMEANS Team
- **Modification**: Bebas dimodifikasi dan didistribusikan

### Contribution
- **GitHub**: Source code tersedia di GitHub
- **Issues**: Report bugs dan feature requests
- **Pull Requests**: Kontribusi kode dipersilakan
- **Documentation**: Bantuan untuk dokumentasi

## 🆘 Support dan Bantuan

### Dokumentasi
- **README**: Dokumentasi lengkap ini
- **About Page**: Tutorial lengkap di [`about.md`](./about.md)
- **In-app Help**: Tooltip dan pesan bantuan
- **Video Tutorial**: Tutorial video (coming soon)

### Community
- **GitHub Issues**: [Technical support](https://github.com/omeans-team/wheel-spinner-app/issues)
- **Discussions**: [Forum diskusi fitur](https://github.com/omeans-team/wheel-spinner-app/discussions)
- **Examples**: Contoh penggunaan
- **Templates**: Template roda untuk berbagai use case

### Contact & Support

#### 🌐 OMEANS Team
- **Website**: [https://omeans-team.github.io](https://omeans-team.github.io)
- **Portfolio**: [https://omeans-team.github.io](https://omeans-team.github.io)
- **Email**: aris.hadisopiyan@gmail.com
- **Phone**: +62 821-9927-5053

#### 👨‍💻 Lead Developer
**Aris Hadisopiyan**
- **Role**: Lead Full-Stack Developer & Game Developer
- **Location**: Indonesia
- **Specialization**: Unity3D, React, Node.js, Laravel, Yii2
- **Experience**: Expert in JavaScript, React, Next.js, TypeScript

#### 🚀 Response Time
- **Email**: Within 24 hours
- **Phone**: Within 2 hours
- **Social**: Within 12 hours
- **GitHub Issues**: Within 48 hours

#### 💼 Services Available
- **Web Development**: Modern, responsive web applications
- **Mobile Apps**: Cross-platform mobile solutions
- **UI/UX Design**: Beautiful and intuitive interfaces
- **Performance**: Optimized for speed and efficiency
- **Consulting**: Technical guidance and project planning

### 🆘 Troubleshooting

#### Masalah Umum
1. **Roda Tidak Berputar**: Refresh halaman
2. **Suara Tidak Ada**: Cek pengaturan browser
3. **Import Error**: Pastikan format JSON valid
4. **Data Hilang**: Cek local storage browser

#### Browser Issues
- **Chrome**: Pastikan versi 60+
- **Firefox**: Pastikan versi 55+
- **Safari**: Pastikan versi 12+
- **Mobile**: Gunakan browser terbaru

#### Performance
- **Slow Animation**: Cek performa browser
- **Audio Lag**: Pastikan audio context aktif
- **Canvas Issues**: Refresh halaman

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=omeans-team/wheel-spinner-app&type=Date)](https://star-history.com/#omeans-team/wheel-spinner-app&Date)

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/omeans-team/wheel-spinner-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/omeans-team/wheel-spinner-app?style=social)
![GitHub issues](https://img.shields.io/github/issues/omeans-team/wheel-spinner-app)
![GitHub pull requests](https://img.shields.io/github/issues-pr/omeans-team/wheel-spinner-app)
![GitHub license](https://img.shields.io/github/license/omeans-team/wheel-spinner-app)

## 🙏 Acknowledgments

- **OMEANS Team** - Untuk dukungan dan pengembangan
- **Canvas API** - Untuk rendering roda yang smooth
- **Web Audio API** - Untuk efek suara yang realistis
- **GitHub** - Platform hosting yang reliable
- **Komunitas Open Source** - Untuk inspirasi dan kontribusi

---

## 🚀 Get Started

**Ready to spin the wheel?** 

[🌐 Try Live Demo](https://omeans-team.github.io/wheel-spinner-app) | [📚 Read Tutorial](./about.md) | [🐛 Report Issue](https://github.com/omeans-team/wheel-spinner-app/issues) | [💡 Request Feature](https://github.com/omeans-team/wheel-spinner-app/discussions)

---

**Versi**: 1.0.0  
**Update Terakhir**: Desember 2024  
**Dikembangkan oleh**: [OMEANS Team](https://omeans-team.github.io)  
**Lead Developer**: [Aris Hadisopiyan](https://omeans-team.github.io)

*Wheel Spinner App - Membuat keputusan acak menjadi menyenangkan dan adil! 🎲*

---

<div align="center">

**Made with ❤️ by [OMEANS Team](https://omeans-team.github.io)**

[![OMEANS Team](https://img.shields.io/badge/Visit-OMEANS%20Team-blue?style=for-the-badge&logo=github)](https://omeans-team.github.io)

</div>
