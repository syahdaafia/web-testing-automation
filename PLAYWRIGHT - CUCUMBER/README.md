# 🧪 E2E Testing - Ecommerce Product Purchase

Proyek ini merupakan implementasi **end-to-end testing** menggunakan **Cypress** dan **Cucumber** untuk memverifikasi fitur pembelian produk pada situs [https://rahulshettyacademy.com/client](https://rahulshettyacademy.com/client).

---

## 🗂️ Struktur Direktori

```
cypress-cucumber/
├── cypress/
│   ├── cucumber-reports/
│   │   ├── cucumber-htmlreport.html          # Report hasil test
│   │   └── results.json                      # Data hasil test dalam JSON
│   ├── downloads/                            # Folder untuk hasil unduhan (jika ada)
│   ├── e2e/
│   │   ├── features/
│   │   │   ├── ecommerce.feature             # File Gherkin (feature utama)
│   │   │   └── ecommerce/
│   │   │       └── ecommerceSteps.js        # Step definitions untuk feature
│   │   └── support/
│   │       └── hooks.js                      # Before & After hooks
│   ├── fixtures/                             # Static test data (jika digunakan)
│   └── support/
│       ├── commands.js                       # Custom commands
│       ├── e2e.js                            # Entry point untuk test
│       └── pageObjects/
│           ├── CartPage.js
│           ├── ConfirmationPage.js
│           ├── HomePage.js
│           ├── ProductPage.js
├── package.json
```

---

## 🧪 Fitur yang Diuji

### 1. Alur Pembelian Produk End-to-End

* Login ke aplikasi
* Menambahkan dua produk ke keranjang
* Melakukan checkout
* Validasi pesan sukses muncul setelah pembelian

---

## ▶️ Menjalankan Test

### Install dependencies

```bash
npm install
```

### Menjalankan Test

```bash
npx cypress run
```

Untuk menjalankan dalam mode GUI (interaktif):

```bash
npx cypress open
```

---

## 📊 Report

Setiap hasil test akan diekspor ke dalam file:

* `cypress/cucumber-reports/cucumber-htmlreport.html`

Buka file tersebut di browser untuk melihat hasil visualisasi test.

---

## 🔧 Tools & Teknologi

* **Cypress**
* **Cucumber (cypress-cucumber-preprocessor)**
* **JavaScript (ES6+)**
