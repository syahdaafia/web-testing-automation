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
│   │   │   └── ecommerce/
│   │   │       ├── ecommerce.feature         # File Gherkin (feature)
│   │   │       └── ecommerceSteps.js         # Step definitions
│   │   └── support/
│   │       └── hooks.js                      # Before & After hooks
│   ├── fixtures/                             # Static test data (jika digunakan)
│   └── support/
│       ├── commands.js                       # Custom commands
│       ├── e2e.js                            # File entry point untuk tests
│       └── pageObjects/
│           ├── CartPage.js
│           ├── ConfirmationPage.js
│           ├── HomePage.js
│           ├── ProductPage.js
├── package.json
├── .gitignore
```

---

## 🧪 Fitur yang Diuji

### 1. @regression: Alur Pembelian Produk End-to-End

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

### Menjalankan Regression Test

```bash
npx cypress run
```

> Atau jika ada script yang sudah didefinisikan di `package.json`:

```bash
npm run cucumber:regression
```

---

## 📊 Report

Setiap hasil test akan diekspor dalam file berikut:

* `cypress/cucumber-reports/cucumber-htmlreport.html`

Bisa dibuka di browser untuk melihat hasil visualisasi test.

---

## 🔧 Tools & Teknologi

* **Cypress**
* **Cucumber (cypress-cucumber-preprocessor)**
* **JavaScript (ES6+)**

---

## 📌 Catatan

* Test berjalan dalam **browser mode** (headful/headless bisa diatur).
* Struktur test menggunakan **Gherkin syntax** untuk readability.
* Screenshot otomatis dan log error bisa dikonfigurasi pada hook `After`.


