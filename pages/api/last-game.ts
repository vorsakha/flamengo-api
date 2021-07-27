import type { NextApiRequest, NextApiResponse } from "next";
const { parse } = require("node-html-parser");
const puppeteer = require("puppeteer");

// type Data = {
//   name: string
// }

const url = "https://www.flashscore.com.br/equipe/flamengo/WjxY29qB/";

const data = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);

    const data = await page.evaluate(() => document.body.innerHTML);

    await browser.close();
    //

    // Parse html text to dom
    const dom = parse(data);

    // Manipulate dom
    const region = dom.querySelector(".event__title--type").textContent;
    const league = dom.querySelector(".event__title--name").textContent;
    const homeTeam = dom.querySelector(".event__participant--home").textContent;
    const awayTeam = dom.querySelector(".event__participant--away").textContent;

    const score = dom.querySelector(".event__scores").querySelectorAll("span");

    const scores = {
      home: score[0].textContent,
      away: score[1].textContent,
    };

    const lastGame = `${region}-${league}: ${homeTeam} ${scores.home} x ${scores.away} ${awayTeam}`;

    res.status(200).json({ msg: lastGame });
  } catch (error) {
    res.status(400).json({ error: "Server Error." });
  }
};

export default data;
