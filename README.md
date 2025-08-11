# 🕸️ *Web Automation Testing Projects*

Repositori ini berisi tiga proyek pengujian otomatis (UI dan E2E) menggunakan teknologi berbeda: **Selenium (Java)**, **Playwright (JavaScript)**, dan **Cypress (JavaScript)**. Masing-masing proyek terpisah dalam direktori berbeda dan menguji aplikasi web yang berbeda pula.

---

## 📁 Struktur Direktori

```
.
├── SELENIUM       # Pengujian UI dengan Selenium + Java + Cucumber
├── PLAYWRIGHT - CUCUMBER     # Pengujian E2E dengan Playwright + JavaScript + Cucumber
├── CYPRESS - CUCUMBER        # Pengujian E2E dengan Cypress + JavaScript + Cucumber
├── README.md       # Penjelasan umum repositori (file ini)
```

---

## 🔹 Proyek: Selenium UI Testing (`/SELENIUM`)

### 📌 Deskripsi

Proyek ini mengotomatiskan pengujian UI pada situs [Saucedemo](https://www.saucedemo.com/) menggunakan **Selenium WebDriver** dan **Cucumber (BDD)**.

### ✅ Fitur yang Diuji:

* *Login* dengan berbagai kombinasi kredensial
* Menambahkan produk ke keranjang
* Menghapus produk dari keranjang

### 🛠 Teknologi:

* Java 8+
* Maven
* Selenium WebDriver
* Cucumber + JUnit

➡️ [Buka Folder `SELENIUM`](https://github.com/syahdaafia/web-testing-automation/tree/main/SELENIUM)

---

## 🔹 Proyek: Playwright E2E Testing (`/PLAYWRIGHT - CUCUMBER`)

### 📌 Deskripsi

Proyek ini mengimplementasikan pengujian *end-to-end* pada situs [rahulshettyacademy.com/client](https://rahulshettyacademy.com/client) menggunakan **Playwright** dan **Cucumber.js**.

### ✅ Fitur yang Diuji:

* Alur pembelian produk (*checkout & order history*)
* Validasi penghapusan produk dari keranjang

### 🛠 Teknologi:

* JavaScript (ES Modules)
* Playwright
* Cucumber.js

➡️ [Buka Folder `PLAYWRIGHT - CUCUMBER`](https://github.com/syahdaafia/web-testing-automation/tree/main/PLAYWRIGHT%20-%20CUCUMBER)

---

## 🔹 Proyek: Cypress E2E Testing (`/CYPRESS - CUCUMBER`)

### 📌 Deskripsi

Proyek ini mengimplementasikan pengujian **end-to-end** menggunakan **Cypress** dan **Cucumber** untuk memvalidasi proses pembelian produk di situs [rahulshettyacademy.com/client](https://rahulshettyacademy.com/client).

### ✅ Fitur yang Diuji:

* Login ke aplikasi
* Menambahkan produk ke keranjang
* Checkout dan validasi pesan sukses

### 🛠 Teknologi:

* JavaScript (ES6+)
* Cypress
* Cucumber (`cypress-cucumber-preprocessor`)

➡️ [Buka Folder `CYPRESS`](https://github.com/syahdaafia/web-testing-automation/tree/main/CYPRESS) <!-- Ganti link jika repo publik -->

---

## 📌 Tujuan

Repositori ini dibuat sebagai studi kasus pembelajaran dan dokumentasi pengujian otomatis menggunakan berbagai *framework* dan bahasa pemrograman.
