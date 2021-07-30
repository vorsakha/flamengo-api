import type { NextApiRequest, NextApiResponse } from "next";
import { getDom } from "../../_lib/chromium";

// Types
interface Data {
  members: string;
}

// URLS
const membersUrl = "https://www.nrnoficial.com.br/";

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
        const membersDom = await getDom(membersUrl, isDev);

        const members = membersDom.querySelector(".number").text.trim();

        const obj: Data = {
          members: members,
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
