import type { NextApiRequest, NextApiResponse } from "next";
import { getDom } from "./_lib/chromium";

// Types
interface Data {
  members: string;
  // lastMatch: string;
  nextMatches: string[];
}

// URLS
const nextGamesUrl =
  "https://www.espn.com.br/futebol/time/calendario/_/id/819/flamengo";
// const lastGameUrl = "https://www.flashscore.com.br/equipe/flamengo/WjxY29qB/";
const membersUrl =
  "https://www.nrnoficial.com.br/?utm_source=portal&utm_medium=menu&utm_campaign=associese";

const isDev = !process.env.AWS_REGION;

export default async function miscHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        // Parse html text to dom
        // const lastGameDom = parse(lastGameData);
        const membersDom = await getDom(membersUrl, isDev);
        const nextGamesDom = await getDom(nextGamesUrl, isDev);

        // Manipulate dom
        // Next Games
        const allLocal = nextGamesDom
          .querySelectorAll(".local")
          .map((item: any) => item.innerText);
        const allAway = nextGamesDom
          .querySelectorAll(".away")
          .map((item: any) => item.innerText);

        const nextGames = [];

        for (let i = 0; i < allLocal.length; i++) {
          nextGames.push(`${allLocal[i]} x ${allAway[i]}`);
        }

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
