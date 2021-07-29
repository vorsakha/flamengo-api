import type { NextApiRequest, NextApiResponse } from "next";
const { parse } = require("node-html-parser");
const puppeteer = require("puppeteer");

type Data = {
  members: string;
  // lastMatch: string;
  nextMatches: string[];
};

const nextGamesUrl =
  "https://www.espn.com.br/futebol/time/calendario/_/id/819/flamengo";
// const lastGameUrl = "https://www.flashscore.com.br/equipe/flamengo/WjxY29qB/";
const membersUrl =
  "https://www.nrnoficial.com.br/?utm_source=portal&utm_medium=menu&utm_campaign=associese";

export default async function miscHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        // Puppeteer
        const browser = await puppeteer.launch();
        // const lastGamePage = await browser.newPage();
        const membersPage = await browser.newPage();
        const nextGamesPage = await browser.newPage();

        // await lastGamePage.goto(lastGameUrl);
        await membersPage.goto(membersUrl);
        await nextGamesPage.goto(nextGamesUrl);

        // const lastGameData = await lastGamePage.evaluate(
        //   () => document.body.innerHTML
        // );
        const membersData = await membersPage.evaluate(
          () => document.body.innerHTML
        );
        const nextGamesData = await nextGamesPage.evaluate(
          () => document.body.innerHTML
        );

        await browser.close();
        //

        // Parse html text to dom
        // const lastGameDom = parse(lastGameData);
        const membersDom = parse(membersData);
        const nextGamesDom = parse(nextGamesData);

        // Manipulate dom
        // Next Games
        const allLocal = nextGamesDom
          .querySelectorAll(".local")
          .map((item: HTMLElement) => item.innerText);
        const allAway = nextGamesDom
          .querySelectorAll(".away")
          .map((item: HTMLElement) => item.innerText);

        const nextGames = [];

        for (let i = 0; i < allLocal.length; i++) {
          nextGames.push(`${allLocal[i]} x ${allAway[i]}`);
        }

        // Last game
        // const region = lastGameDom.querySelector(".event__title--type").textContent;
        // const league = lastGameDom.querySelector(".event__title--name").textContent;
        // const homeTeam = lastGameDom.querySelector(
        //   ".event__participant--home"
        // ).textContent;
        // const awayTeam = lastGameDom.querySelector(
        //   ".event__participant--away"
        // ).textContent;

        // const score = lastGameDom
        //   .querySelector(".event__scores")
        //   .querySelectorAll("span");

        // const scores = {
        //   home: score[0].textContent,
        //   away: score[1].textContent,
        // };

        // const lastGame = `'${region}-${league}: ${homeTeam} ${scores.home} x ${scores.away} ${awayTeam}'`;

        // Members
        const members = membersDom.querySelector(".number").innerText.trim();

        const obj: Data = {
          members: members,
          // lastMatch: lastGame,
          nextMatches: nextGames,
        };

        res.setHeader("Cache-Control", "s-maxage=100, stale-while-revalidate");

        res.status(200).json(obj);
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Server Error." });
      }
      break;

    default:
      res.status(400).json({ error: "Wrong Method." });
      break;
  }
}
