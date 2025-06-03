# 🧪 E2E _Testing_ - _Purchase & Order History_

Proyek ini merupakan implementasi _**end-to-end testing**_ menggunakan **Playwright** dan **Cucumber** untuk memverifikasi fitur pembelian produk dan riwayat pesanan pada situs [https://rahulshettyacademy.com/client](https://rahulshettyacademy.com/client).

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
├── cucumber-report.html                           # Hasil report HTML
├── .gitignore
├── package.json
├── package-lock.json
```

---

## 🧪 Fitur yang Diuji

### 1. `@regression`: Alur Pembelian _End-to-End_

* _Login_
* Tambahkan produk ke keranjang
* Lakukan _checkout_
* Konfirmasi pesanan
* Validasi detail pesanan di halaman riwayat

### 2. `@validation`: Validasi Penghapusan Produk dari Keranjang

* _Login_
* Tambah produk ke keranjang
* Hapus produk dari keranjang
* Validasi keranjang kosong

---

## ▶️ Menjalankan _Test_

_Install dependencies_:

```bash
npm install
```

### Menjalankan _Regression Test_:

```bash
npm run cucumber:regression
```

### Menjalankan _Validation Test:_

```bash
npm run cucumber:validation
```

---

## 📊 Report

Setiap hasil test akan diekspor ke dalam _file_:

```
cucumber-report.html
```

---

## 🔧 _Tools_ & Teknologi

* [Playwright](https://playwright.dev/)
* [Cucumber.js](https://github.com/cucumber/cucumber-js)
* JavaScript (ES Modules)

---

## 📌 Catatan

* _Test_ berjalan dalam _**headful mode**_.
* _Screenshot_ otomatis diambil jika _step_ gagal.

---


