# 🧪 E2E Testing - Purchase & Order History

Proyek ini merupakan implementasi end-to-end testing menggunakan **Playwright** dan **Cucumber** untuk memverifikasi fitur pembelian produk dan riwayat pesanan pada situs  
[https://rahulshettyacademy.com/client](https://rahulshettyacademy.com/client).

---

## 🗂️ Struktur Direktori

```

├── features/
│   ├── step\_definitions/
│   │   └── e2e\_purchase\_and\_order\_history.js      # Step definitions Cucumber
│   ├── support/
│   │   └── hooks.js                               # Before & After hooks
│   └── e2e\_purchase\_and\_order\_history.feature     # File Gherkin
│
├── page\_object/
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

````

---

## 🧪 Fitur yang Diuji

1. **@regression: Alur Pembelian End-to-End**  
   - Login  
   - Tambahkan produk ke keranjang  
   - Lakukan checkout  
   - Konfirmasi pesanan  
   - Validasi detail pesanan di halaman riwayat  

2. **@validation: Validasi Penghapusan Produk dari Keranjang**  
   - Login  
   - Tambah produk ke keranjang  
   - Hapus produk dari keranjang  
   - Validasi keranjang kosong  

---

## ▶️ Menjalankan Test

1. Install dependencies:  
```bash
npm install
````

2. Menjalankan Regression Test:

```bash
npm run cucumber:regression
```

3. Menjalankan Validation Test:

```bash
npm run cucumber:validation
```

---

## 📊 Report

Setiap hasil test akan diekspor ke dalam file:
`cucumber-report.html`

---

## 🔧 Tools & Teknologi

* Playwright
* Cucumber.js
* JavaScript (ES Modules)

---

## 📌 Catatan

* Test berjalan dalam mode **headful** (terlihat UI browser).
* Screenshot otomatis diambil jika step gagal.

```
