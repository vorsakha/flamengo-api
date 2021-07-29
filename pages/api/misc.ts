import type { NextApiRequest, NextApiResponse } from "next";
import { getDom } from "./_lib/chromium";

// Types
interface Data {
  members: string;
  // lastMatch: string;
  nextMatches: string[];
}

// Chrome dev path
const devPath =
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";

// URLS
const nextGamesUrl =
  "https://www.espn.com.br/futebol/time/calendario/_/id/819/flamengo";
// const lastGameUrl = "https://www.flashscore.com.br/equipe/flamengo/WjxY29qB/";
const membersUrl =
  "https://www.nrnoficial.com.br/?utm_source=portal&utm_medium=menu&utm_campaign=associese";

// check if is in prod or dev
const isDev = !process.env.AWS_REGION;

export default async function miscHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        // const lastGameDom = parse(lastGameData);
        const membersDom = await getDom(membersUrl, isDev);
        const nextGamesDom = await getDom(nextGamesUrl, isDev);

        // Manipulate dom
        // Next Games
        const allLocal = nextGamesDom
          .querySelectorAll(".local")
          .map((item) => item.innerText);
        const allAway = nextGamesDom
          .querySelectorAll(".away")
          .map((item) => item.innerText);

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
