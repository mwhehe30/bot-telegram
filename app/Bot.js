const TelegramBot = require("node-telegram-bot-api");
const commands = require("../libs/command");

class Bot extends TelegramBot {
  constructor(token, options) {
    super(token, options);
    this.on("message", (data) => {
      const isCommand = Object.values(commands).some((command) =>
        command.test(data.text)
      );
      console.log(
        "Invalid command dari " + data.from.username + ", Input: " + data.text
      );
      if (!isCommand) {
        this.sendMessage(data.from.id, "Maaf, itu bukan command yang valid");
      }
    });
    console.log("Bot is running");
  }

  getQuote() {
    this.onText(commands.quote, async (data) => {
      const quoteEndpoint = "https://api.kanye.rest/";
      this.sendMessage(data.from.id, "mencari quote...");
      console.log("Command !quote dijalankan oleh " + data.from.username);
      try {
        const quoteResponse = await fetch(quoteEndpoint);
        const { quote } = await quoteResponse.json();
        this.sendMessage(data.from.id, quote);
      } catch (error) {
        console.log(error);
        this.sendMessage(data.from.id, "Maaf, terjadi kesalahan.");
      }
    });
  }

  getNews() {
    this.onText(commands.news, async (data) => {
      const newsEndpoint = "https://jakpost.vercel.app/api/category/indonesia";
      this.sendMessage(data.from.id, "mencari berita terkini...");
      console.log("Command !news dijalankan oleh " + data.from.username);
      try {
        const newsResponse = await fetch(newsEndpoint);
        const { posts } = await newsResponse.json();

        for (let i = 0; i < posts.length; i++) {
          const { image, title, headline, pusblised_at } = posts[i];
          this.sendPhoto(data.from.id, image, {
            caption: `*${title}*\n\n${headline}\n\nPublished At: ${pusblised_at}`,
            parse_mode: "Markdown",
          });
        }
      } catch (error) {
        console.log(error);
        this.sendMessage(data.from.id, "Maaf, terjadi kesalahan.");
      }
    });
  }

  getQuake() {
    const quakeEndpoint = "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json";
    this.onText(commands.quake, async (data) => {
      this.sendMessage(data.from.id, "mencari gempa terkini...");
      console.log("Command !quake dijalankan oleh " + data.from.username);
      try {
        const quakeResponse = await fetch(quakeEndpoint);
        const { Infogempa } = await quakeResponse.json();
        const {
          Tanggal,
          Jam,
          Magnitude,
          Kedalaman,
          Wilayah,
          Potensi,
          Shakemap,
          Coordinates,
        } = Infogempa.gempa;
        const image = "https://data.bmkg.go.id/DataMKG/TEWS/" + Shakemap;

        this.sendPhoto(data.from.id, image, {
          caption: `Tanggal: ${Tanggal}\nJam: ${Jam}\n\nMagnitude: ${Magnitude}\nKedalaman: ${Kedalaman}\n\nWilayah: ${Wilayah}\nPotensi: ${Potensi}`,
          parse_mode: "Markdown",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Lihat Lokasi Gempa",
                  url: "https://www.google.com/maps/place/" + Coordinates,
                },
              ],
            ],
          },
        });
      } catch (error) {
        console.log(error);
        this.sendMessage(data.from.id, "Maaf, terjadi kesalahan.");
      }
    });
  }
}

module.exports = Bot;
