require("dotenv").config();
const Zbot = require("./app/bot");

const token = process.env.TELEGRAM_TOKEN;
const options = { polling: true };
const zbot = new Zbot(token, options);

const main = () => {
  zbot.getNews();
  zbot.getQuote();
  zbot.getQuake();
};

main();
