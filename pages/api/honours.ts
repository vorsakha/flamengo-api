import type { NextApiRequest, NextApiResponse } from "next";
const { parse } = require("node-html-parser");
const puppeteer = require("puppeteer");

type ElementTypes = {
  honours: {
    international: string[];
    national: string[];
    state: string[];
  };
};

const url = "https://www.flamengo.com.br/titulosdoflamengo";

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
    const obj: ElementTypes = {
      honours: {
        international: [],
        national: [],
        state: [],
      },
    };

    const allData = dom.querySelectorAll("ul").slice(3, 10);

    for (let i = 0; i < allData[0].length; i++) {
      obj.honours.international.push(allData[0][i].innerText);
    }
    for (let i = 0; i < allData[1].length; i++) {
      obj.honours.national.push(allData[1][i].innerText);
    }
    for (let i = 0; i < allData[2].length; i++) {
      obj.honours.state.push(allData[2][i].innerText);
    }
    for (let i = 0; i < allData[3].length; i++) {
      obj.honours.international.push(allData[3][i].innerText);
    }
    for (let i = 0; i < allData[4].length; i++) {
      obj.honours.international.push(allData[4][i].innerText);
    }
    for (let i = 0; i < allData[5].length; i++) {
      obj.honours.national.push(allData[5][i].innerText);
    }
    for (let i = 0; i < allData[6].length; i++) {
      obj.honours.state.push(allData[6][i].innerText);
    }

    res.status(200).json(obj);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Server Error." });
  }
};

export default data;
