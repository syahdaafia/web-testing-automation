# 🧪 E2E Testing - _Ecommerce Product Purchase_

Proyek ini merupakan implementasi _**end-to-end testing**_ menggunakan **Cypress** dan **Cucumber** untuk memverifikasi fitur pembelian produk pada situs [https://rahulshettyacademy.com/client](https://rahulshettyacademy.com/client).

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

### 1. Alur Pembelian Produk _End-to-End_

* _Login_ ke aplikasi
* Menambahkan dua produk ke keranjang
* Melakukan _checkout_
* Validasi pesan sukses muncul setelah pembelian

---

## ▶️ Menjalankan _Test_

### _Install dependencies_

```bash
npm install
```

### Menjalankan _Test_

```bash
npx cypress run
```

Untuk menjalankan dalam mode GUI (interaktif):

```bash
npx cypress open
```

---

_## 📊 Report_

Setiap hasil _test_ akan diekspor ke dalam _file_:

* `cypress/cucumber-reports/cucumber-htmlreport.html`

Buka _file_ tersebut di _browser_ untuk melihat hasil visualisasi _test_.

---

## 🔧_ Tools_ & Teknologi

* **Cypress**
* **Cucumber (cypress-cucumber-preprocessor)**
* **JavaScript (ES6+)**

---

## 📌 Catatan

* _Test_ dapat dijalankan dalam _**headless**_ atau _**headful mode**._
* Penulisan _test_ menggunakan **Gherkin syntax** agar mudah dibaca oleh semua pihak_ (technical & non-technical)_.
* _Screenshot_ otomatis dan _error logging_ bisa dikonfigurasi pada `hooks.js`.

---
