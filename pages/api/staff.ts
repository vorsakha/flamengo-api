import type { NextApiRequest, NextApiResponse } from "next";
const { parse } = require("node-html-parser");
const puppeteer = require("puppeteer");

type ElementTypes = {
  staff: {
    name: string;
    image: string;
    occupation: string;
  }[];
};

const url = "https://www.flamengo.com.br/comissao-tecnica";

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
    const staff = dom.querySelectorAll("figure");

    const obj: ElementTypes = {
      staff: [],
    };

    const betweenQuote = /"([^"]*)"/;

    for (let i = 0; i < staff.length; i++) {
      obj.staff.push({
        name: staff[i].querySelector("p").text,
        image: staff[i]
          .querySelector("img")
          .rawAttrs.split(" ")[0]
          .match(betweenQuote)[1],
        occupation: staff[i].querySelector("span").text,
      });
    }

    res.status(200).json(obj);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Server Error." });
  }
};

export default data;
