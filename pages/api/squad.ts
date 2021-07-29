import type { NextApiRequest, NextApiResponse } from "next";
import { getDom } from "./_lib/chromium";

type ElementTypes = {
  players: {
    keepers: {
      name: string;
      image: string;
    }[];
    centerBacks: {
      name: string;
      image: string;
    }[];
    rightBacks: {
      name: string;
      image: string;
    }[];
    leftBacks: {
      name: string;
      image: string;
    }[];
    midfielders: {
      name: string;
      image: string;
    }[];
    attackMidfielders: {
      name: string;
      image: string;
    }[];
    strikers: {
      name: string;
      image: string;
    }[];
  };
};

const url = "https://www.flamengo.com.br/elencos/elenco-profissional";

// check if is in prod or dev
const isDev = !process.env.AWS_REGION;

export default async function squadHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const dom = await getDom(url, isDev);

        // Manipulate dom

        const players = dom
          .querySelectorAll(".container")[2]
          .querySelectorAll(".col-12");
        const keepers = players[0].querySelectorAll("figure");
        const centerBacks = players[1].querySelectorAll("figure");
        const rightBacks = players[2].querySelectorAll("figure");
        const leftBacks = players[3].querySelectorAll("figure");
        const midfielders = players[4].querySelectorAll("figure");
        const attackMidfielders = players[5].querySelectorAll("figure");
        const strikers = players[6].querySelectorAll("figure");

        const obj: ElementTypes = {
          players: {
            keepers: [],
            centerBacks: [],
            rightBacks: [],
            leftBacks: [],
            midfielders: [],
            attackMidfielders: [],
            strikers: [],
          },
        };

        for (let i = 0; i < keepers.length; i++) {
          obj.players.keepers.push({
            name: keepers[i].querySelector("p").text,
            image: keepers[i].querySelector("img")._rawAttrs.src,
          });
        }
        for (let i = 0; i < centerBacks.length; i++) {
          obj.players.centerBacks.push({
            name: centerBacks[i].querySelector("p").text,
            image: centerBacks[i].querySelector("img")._rawAttrs.src,
          });
        }
        for (let i = 0; i < rightBacks.length; i++) {
          obj.players.rightBacks.push({
            name: rightBacks[i].querySelector("p").text,
            image: rightBacks[i].querySelector("img")._rawAttrs.src,
          });
        }
        for (let i = 0; i < leftBacks.length; i++) {
          obj.players.leftBacks.push({
            name: leftBacks[i].querySelector("p").text,
            image: leftBacks[i].querySelector("img")._rawAttrs.src,
          });
        }
        for (let i = 0; i < midfielders.length; i++) {
          obj.players.midfielders.push({
            name: midfielders[i].querySelector("p").text,
            image: midfielders[i].querySelector("img")._rawAttrs.src,
          });
        }
        for (let i = 0; i < attackMidfielders.length; i++) {
          obj.players.attackMidfielders.push({
            name: attackMidfielders[i].querySelector("p").text,
            image: attackMidfielders[i].querySelector("img")._rawAttrs.src,
          });
        }
        for (let i = 0; i < strikers.length; i++) {
          obj.players.strikers.push({
            name: strikers[i].querySelector("p").text,
            image: strikers[i].querySelector("img")._rawAttrs.src,
          });
        }

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
