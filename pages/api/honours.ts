import type { NextApiRequest, NextApiResponse } from "next";
import { getDom } from "../../_lib/chromium";

type ElementTypes = {
  honours: {
    international: string[];
    national: string[];
    state: string[];
  };
};

const url = "https://www.flamengo.com.br/titulosdoflamengo";

// check if is in prod or dev
const isDev = !process.env.AWS_REGION;

export default async function honourHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const dom = await getDom(url, isDev);

        // Manipulate dom
        const obj: ElementTypes = {
          honours: {
            international: [],
            national: [],
            state: [],
          },
        };

        const allData = dom.querySelectorAll("ul").slice(3, 10);
        const selectedData = {
          listZero: allData[0].querySelectorAll("li"),
          listOne: allData[1].querySelectorAll("li"),
          listTwo: allData[2].querySelectorAll("li"),
          listThree: allData[3].querySelectorAll("li"),
          listFour: allData[4].querySelectorAll("li"),
          listFive: allData[5].querySelectorAll("li"),
          listSix: allData[6].querySelectorAll("li"),
        };
        const {
          listZero,
          listOne,
          listTwo,
          listThree,
          listFour,
          listFive,
          listSix,
        } = selectedData;
        // console.log(allData[0].querySelectorAll("li")[0]);

        for (let i = 0; i < listZero.length; i++) {
          obj.honours.international.push(listZero[i].innerText);
        }
        for (let i = 0; i < listOne.length; i++) {
          obj.honours.national.push(listOne[i].innerText);
        }
        for (let i = 0; i < listTwo.length; i++) {
          obj.honours.state.push(listTwo[i].innerText);
        }
        for (let i = 0; i < listThree.length; i++) {
          obj.honours.international.push(listThree[i].innerText);
        }
        for (let i = 0; i < listFour.length; i++) {
          obj.honours.international.push(listFour[i].innerText);
        }
        for (let i = 0; i < listFive.length; i++) {
          obj.honours.national.push(listFive[i].innerText);
        }
        for (let i = 0; i < listSix.length; i++) {
          obj.honours.state.push(listSix[i].innerText);
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
