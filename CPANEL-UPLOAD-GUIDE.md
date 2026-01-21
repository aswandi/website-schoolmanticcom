# 📤 Panduan Upload Manual ke cPanel - SchoolMantic

## ✅ Build Sudah Selesai!

Folder `dist` sudah berisi file production-ready yang siap diupload.

## 📁 File yang Perlu Diupload

Semua file ada di folder: `website-schoolmanticcom/dist/`

### File Structure di Folder dist:
```
dist/
├── index.html                          (File utama)
├── assets/
│   ├── index-BOxrwTdG.js              (JavaScript bundle)
│   └── index-vlz7H3ob.css             (CSS bundle)
├── logo-schoolmantic.jpg               (Logo)
├── hero-whatsapp-absensi.jpg          (Gambar hero)
├── overview-absensi.jpg               (Gambar overview)
├── features-bottom.png                (Gambar features)
├── biometric-face.png                 (Gambar biometric)
├── contact-polmantic.jpg              (Gambar contact)
├── server-whatsapp.jpeg               (Gambar server)
├── demo-whatsapp-api.png              (Gambar demo)
├── foto/                              (Folder galeri - 16 foto)
│   ├── aktifitas/
│   ├── liputan/
│   └── tampilan/
├── robots.txt                         (SEO)
├── sitemap.xml                        (SEO)
└── .htaccess                          (Server config)
```

## 🚀 Langkah-Langkah Upload ke cPanel

### Step 1: Login ke cPanel
1. Buka browser, akses: `https://yourdomain.com/cpanel` atau `https://yourdomain.com:2083`
2. Login dengan username dan password hosting Anda

### Step 2: Buka File Manager
1. Di cPanel, cari dan klik **"File Manager"**
2. Akan terbuka jendela baru dengan file manager

### Step 3: Masuk ke public_html
1. Di File Manager, klik folder **"public_html"** (atau "www" atau "htdocs" tergantung hosting)
2. Ini adalah root directory website Anda

### Step 4: Hapus File Lama (Jika Ada)
1. Jika ada file lama (index.html, dll), **backup dulu** atau hapus
2. Pastikan folder public_html kosong atau hanya berisi file yang tidak akan digunakan

### Step 5: Upload File

#### Opsi A: Upload via File Manager (Recommended)
1. Klik tombol **"Upload"** di toolbar File Manager
2. Klik **"Select File"** atau drag & drop file
3. Upload semua file dari folder `dist`:
   - `index.html`
   - Folder `assets` (dengan isinya)
   - Semua gambar (.jpg, .png, .jpeg)
   - Folder `foto` (dengan semua subfolder)
   - `robots.txt`
   - `sitemap.xml`
   - `.htaccess`

**PENTING**: Upload folder `assets` dan `foto` beserta isinya!

#### Opsi B: Upload via ZIP (Lebih Cepat)
1. Di komputer lokal, compress folder `dist` menjadi `dist.zip`
2. Upload file `dist.zip` ke public_html
3. Klik kanan pada `dist.zip` → **Extract**
4. Setelah extract, pindahkan semua file dari folder `dist` ke `public_html`
5. Hapus file `dist.zip` dan folder `dist` yang kosong

### Step 6: Set Permissions (Jika Perlu)
1. Klik kanan pada `.htaccess` → **Change Permissions**
2. Set ke **644** (rw-r--r--)
3. Untuk folder, set ke **755** (rwxr-xr-x)

### Step 7: Verifikasi Upload
1. Buka browser
2. Akses: `https://schoolmantic.com`
3. Pastikan website tampil dengan benar
4. Test navigasi ke halaman foto: `https://schoolmantic.com/foto`
5. Test semua link dan tombol

## 🔧 Troubleshooting

### Problem 1: Halaman Blank/Putih
**Solusi:**
- Pastikan file `index.html` ada di root public_html
- Check browser console (F12) untuk error
- Pastikan folder `assets` terupload dengan benar

### Problem 2: Gambar Tidak Muncul
**Solusi:**
- Pastikan semua file gambar (.jpg, .png) sudah terupload
- Check case-sensitive nama file (logo-schoolmantic.jpg bukan Logo-Schoolmantic.jpg)
- Pastikan folder `foto` dengan semua subfolder sudah terupload

### Problem 3: Halaman /foto Tidak Bisa Diakses (404)
**Solusi:**
- Pastikan file `.htaccess` sudah terupload
- Jika masih error, edit `.htaccess` dan pastikan RewriteBase benar:
  ```apache
  RewriteBase /
  ```

### Problem 4: CSS/JS Tidak Load
**Solusi:**
- Pastikan folder `assets` dengan semua isinya sudah terupload
- Check permissions folder assets (755)
- Clear browser cache (Ctrl+F5)

### Problem 5: HTTPS Tidak Aktif
**Solusi:**
- Di cPanel, cari **"SSL/TLS Status"**
- Install SSL Certificate (biasanya gratis via Let's Encrypt)
- Atau hubungi support hosting untuk aktivasi SSL

## 📋 Checklist Setelah Upload

- [ ] Website bisa diakses di https://schoolmantic.com
- [ ] Logo SchoolMantic muncul di header dan footer
- [ ] Semua gambar tampil dengan benar
- [ ] Halaman foto bisa diakses (/foto)
- [ ] Galeri foto menampilkan 16 foto
- [ ] Tombol WhatsApp berfungsi (mengarah ke wa.me/62811945222)
- [ ] Link proposal dan panduan berfungsi
- [ ] Menu navigasi berfungsi (smooth scroll)
- [ ] Responsive di mobile
- [ ] SSL/HTTPS aktif (gembok hijau di browser)

## 🔍 SEO Setup Setelah Upload

### 1. Google Search Console
1. Buka: https://search.google.com/search-console
2. Klik **"Add Property"**
3. Pilih **"URL prefix"**: `https://schoolmantic.com`
4. Verify ownership (pilih salah satu):
   - **HTML file**: Download file verification, upload ke public_html
   - **HTML tag**: Copy meta tag, tambahkan di `index.html` (perlu rebuild)
   - **DNS record**: Tambahkan TXT record di domain DNS
5. Setelah verified, submit sitemap: `https://schoolmantic.com/sitemap.xml`

### 2. Google Analytics (Optional)
1. Buka: https://analytics.google.com
2. Create account dan property
3. Copy tracking code
4. Tambahkan di `index.html` sebelum `</head>` (perlu rebuild)

### 3. Google My Business
1. Buka: https://business.google.com
2. Daftar bisnis:
   - Nama: Polmantic Media Citra / SchoolMantic
   - Alamat: Jl. Flamboyan No 28 Duta Kranji, Bekasi
   - Telepon: 0811945222
   - Website: https://schoolmantic.com
   - Kategori: Software Company

## 📞 Butuh Bantuan?

Jika ada masalah saat upload:

**WhatsApp**: 0811945222  
**Email**: info@schoolmantic.com

Atau hubungi support hosting Anda untuk bantuan teknis.

## 📝 Notes Penting

1. **Backup**: Selalu backup file sebelum upload/update
2. **Cache**: Clear browser cache setelah upload (Ctrl+F5)
3. **Testing**: Test di berbagai browser (Chrome, Firefox, Safari)
4. **Mobile**: Test di mobile device
5. **Speed**: Test loading speed di Google PageSpeed Insights

## ✅ Selesai!

Setelah semua langkah di atas, website SchoolMantic sudah online dan siap menerima visitor!

**Next Steps:**
- Monitor traffic via Google Analytics
- Track keyword ranking
- Build backlinks
- Create content regularly
- Respond to inquiries via WhatsApp

---
**Last Updated**: 21 Januari 2025
