import { parse } from "node-html-parser";
import puppeteer, { Page } from "puppeteer-core";
import { getOptions } from "./chromiumOpt";

let _page: Page | null;

async function getPage(isDev: boolean): Promise<Page> {
  if (_page) {
    return _page;
  }

  const options = await getOptions(isDev);
  const browser = await puppeteer.launch(options);

  _page = await browser.newPage();

  return _page;
}

export async function getDom(src: string, isDev: boolean) {
  const page = await getPage(isDev);

  await page.goto(src);

  const html = await page.evaluate(() => document.body.innerHTML);

  const dom = parse(html);

  return dom;
}
