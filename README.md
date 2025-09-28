
````markdown
# 🤖 Bot Telegram - News, Quotes, and Quake Info

Bot Telegram sederhana berbasis **Node.js** yang dapat memberikan:
- Kutipan acak dari API [Kanye Rest](https://kanye.rest/)
- Berita terbaru dari [Jakarta Post API](https://jakpost.vercel.app/)
- Informasi gempa terkini dari [BMKG](https://data.bmkg.go.id/)

---

## 🚀 Fitur
- `!quote` → Menampilkan kutipan acak
- `!news` → Menampilkan berita terbaru Indonesia
- `!quake` → Menampilkan informasi gempa terkini beserta lokasi di Google Maps

---

## 🛠️ Teknologi
- [Node.js](https://nodejs.org/)
- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
- [dotenv](https://github.com/motdotla/dotenv)
- Fetch API (native di Node.js 18+)

---

## 📦 Instalasi
1. Clone repository
   ```bash
   git clone https://github.com/username/bot-telegram.git
   cd bot-telegram
````

2. Install dependencies

   ```bash
   npm install
   ```
3. Buat file `.env` lalu tambahkan token bot Telegram kamu

   ```env
   TELEGRAM_TOKEN=your_bot_token_here
   ```

---

## 🔑 Cara Mendapatkan API Token Telegram

1. Buka aplikasi **Telegram**.
2. Cari bot resmi bernama [@BotFather](https://t.me/botfather).
3. Jalankan perintah:

   ```
   /start
   /newbot
   ```
4. Ikuti instruksi untuk memberi **nama bot** dan **username bot** (harus diakhiri dengan `bot`, contoh: `myproject_bot`).
5. Setelah selesai, BotFather akan memberikan **API Token** seperti contoh:

   ```
   1234567890:AAHdJx8DqwertyuiopasdfghjklZXCVbn
   ```
6. Copy token tersebut dan masukkan ke file `.env`:

   ```env
   TELEGRAM_TOKEN=1234567890:AAHdJx8DqwertyuiopasdfghjklZXCVbn
   ```

👉 API untuk **Quotes (Kanye Rest)**, **News (Jakarta Post)**, dan **Gempa (BMKG)** tidak membutuhkan kunci/token karena sifatnya public API.

---

## ▶️ Menjalankan Bot

```bash
node index.js
```

Jika berhasil, bot akan otomatis **polling** dan siap digunakan di Telegram.

---

## 📝 Contoh Penggunaan

Di chat Telegram:

* Ketik `!quote` → akan muncul kutipan acak
* Ketik `!news` → akan muncul daftar berita terbaru
* Ketik `!quake` → akan muncul info gempa terkini + link lokasi di Google Maps

---
