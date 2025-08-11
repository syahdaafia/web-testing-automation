# 🧪 E2E _Testing_ - _Purchase & Order History_

Proyek ini merupakan implementasi *end-to-end testing* menggunakan **Playwright** dan **Cucumber** untuk memverifikasi fitur pembelian produk dan riwayat pesanan pada situs [https://rahulshettyacademy.com/client](https://rahulshettyacademy.com/client).

---

## 🗂️ Struktur Direktori

```
├── features/
│   ├── step_definitions/
│   │   └── e2e_purchase_and_order_history.js      # Step definitions Cucumber
│   ├── support/
│   │   └── hooks.js                               # Before & After hooks
│   └── e2e_purchase_and_order_history.feature     # File Gherkin
│
├── page_object/
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── ConfirmationPage.js
│   ├── DashboardPage.js
│   ├── LoginPage.js
│   ├── OrderHistoryPage.js
│   └── PageObjectManager.js
│
├── cucumber-report.html                           # Hasil report dalam format HTML
├── .gitignore
├── package.json
├── package-lock.json
```

---

## 🧪 Fitur yang Diuji

1. **@regression**: *End-to-End Purchase Flow*

   * Login
   * Tambahkan produk ke keranjang
   * Lakukan *checkout*
   * Konfirmasi pesanan
   * Validasi detail pesanan di halaman riwayat

2. **@validation**: Validasi Penghapusan Produk dari Keranjang

   * Login
   * Tambah produk ke keranjang
   * Hapus produk dari keranjang
   * Validasi keranjang kosong

---

## ▶️ Cara Menjalankan Test

1. Install *dependencies* terlebih dahulu:

```bash
npm install
```

2. Menjalankan *regression test*:

```bash
npm run cucumber:regression
```

3. Menjalankan *validation test*:

```bash
npm run cucumber:validation
```

---

## 📊 Report

Setiap hasil test akan diekspor ke dalam file:

* `cucumber-report.html`

---

## 🔧 Tools & Teknologi

* Playwright
* Cucumber.js
* JavaScript (ES Modules)

---

## 📌 Catatan

* Test dijalankan dalam *headful mode* (bukan *headless*).
* Screenshot otomatis diambil jika ada step yang gagal.

---

Kalau kamu mau, aku juga bisa bantu buatkan contoh script package.json-nya atau konfigurasi Playwright/Cucumber-nya ya!
