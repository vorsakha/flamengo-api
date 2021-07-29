import type { NextApiRequest, NextApiResponse } from "next";
import { getDom } from "./_lib/chromium";

type ElementTypes = {
  staff: {
    name: string;
    image: string;
    occupation: string;
  }[];
};

const url = "https://www.flamengo.com.br/comissao-tecnica";

// check if is in prod or dev
const isDev = !process.env.AWS_REGION;

export default async function staffHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const dom = await getDom(url, isDev);

        // Manipulate dom
        const staff = dom.querySelectorAll("figure");

        const obj: ElementTypes = {
          staff: [],
        };

        // const betweenQuote = /"([^"]*)"/;

        for (let i = 0; i < staff.length; i++) {
          obj.staff.push({
            name: staff[i].querySelector("p").text,
            image: staff[i].querySelector("img").getAttribute("src")!,
            occupation: staff[i].querySelector("span").text,
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
