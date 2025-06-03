# 🧪 E2E Testing - Purchase & Order History

Proyek ini merupakan implementasi **end-to-end testing** menggunakan **Playwright** dan **Cucumber** untuk memverifikasi fitur pembelian produk dan riwayat pesanan pada situs [https://rahulshettyacademy.com/client](https://rahulshettyacademy.com/client).

---

## 🗂️ Struktur Fitur yang Diuji

### 1. `@regression`: End-to-End Purchase Flow

* Login
* Tambah produk ke keranjang
* Checkout
* Konfirmasi pesanan
* Lihat detail order dari halaman riwayat

### 2. `@validation`: Validasi Penghapusan Produk

* Login
* Tambah produk
* Hapus produk dari keranjang
* Validasi keranjang kosong

---

## 📁 Struktur Proyek

```
├── features/
│   └── e2e_purchase_and_order_history.feature  # File Gherkin (Cucumber)
├── step-definitions/
│   └── purchaseStepDefs.js                    # Step definitions Cucumber
├── hooks/
│   └── hooks.js                               # Before & After scenarios
├── page_object/
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── ConfirmationPage.js
│   ├── DashboardPage.js
│   ├── LoginPage.js
│   ├── OrderHistoryPage.js
│   └── PageObjectManager.js
├── package.json
└── README.md
```

---

## ▶️ Menjalankan Test

Pastikan kamu sudah menginstall dependency:

```bash
npm install
```

### 🔁 Regression Test:

Menjalankan skenario end-to-end lengkap:

```bash
npm run cucumber:regression
```

### 🧹 Validation Test:

Menjalankan skenario validasi penghapusan produk:

```bash
npm run cucumber:validation
```

---

## 📊 Report

Hasil dari setiap test akan tersimpan dalam format **HTML** di file:

```
cucumber-report.html
```

---

## 🧱 Teknologi yang Digunakan

* [Playwright](https://playwright.dev/)
* [Cucumber.js](https://github.com/cucumber/cucumber-js)
* JavaScript (ES Modules)

---

## 💡 Catatan

* Test akan berjalan dalam **headful mode** (browser terlihat).
* Screenshot otomatis diambil ketika step gagal.
* Order Number dari halaman konfirmasi digunakan untuk memverifikasi data di halaman order history.
