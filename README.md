
# 🕸️ _Web Automation Testing Projects_

Repositori ini berisi dua proyek pengujian otomatis (UI dan E2E) menggunakan dua teknologi berbeda: **Selenium (Java)** dan **Playwright (JavaScript)**. Masing-masing proyek terpisah dalam direktori yang berbeda dan menguji aplikasi web berbeda pula.

---

## 📁 Struktur Direktori

```
.
├── selenium/       # Pengujian UI dengan Selenium + Java + Cucumber
├── playwright/     # Pengujian E2E dengan Playwright + JavaScript + Cucumber
├── README.md       # Penjelasan umum repositori (_file_ ini)
```

---

## 🔹 Proyek: Selenium UI Testing (`/selenium`)

### 📌 Deskripsi
Proyek ini mengotomatiskan pengujian UI pada situs [Saucedemo](https://www.saucedemo.com/) menggunakan **Selenium WebDriver** dan **Cucumber (BDD)**.

### ✅ Fitur yang Diuji:
- _Login_ dengan berbagai kombinasi kredensial
- Menambahkan produk ke keranjang
- Menghapus produk dari keranjang

### 🛠 Teknologi:
- Java 8+
- Maven
- Selenium WebDriver
- Cucumber + JUnit

➡️ [Buka Folder `selenium/`](./selenium)

---

## 🔹 Proyek: Playwright E2E Testing (`/playwright`)

### 📌 Deskripsi
Proyek ini mengimplementasikan pengujian _end-to-end_ pada situs [rahulshettyacademy.com/client](https://rahulshettyacademy.com/client) menggunakan **Playwright** dan **Cucumber.js**.

### ✅ Fitur yang Diuji:
- Alur pembelian produk (_checkout & order history_)
- Validasi penghapusan produk dari keranjang

### 🛠 Teknologi:
- JavaScript (ES Modules)
- Playwright
- Cucumber.js

➡️ [Buka Folder `playwright/`](./playwright)

---

## 📌 Tujuan

Repositori ini dibuat sebagai studi kasus pembelajaran dan dokumentasi pengujian otomatis menggunakan berbagai _framework_ dan bahasa pemrograman.


---

