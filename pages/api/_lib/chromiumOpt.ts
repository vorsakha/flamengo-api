import chrome from "chrome-aws-lambda";

//Types
interface Options {
  args: string[];
  executablePath: string;
  headless: boolean;
}

// Chrome dev path
const devPath =
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";

export async function getOptions(isDev: boolean): Promise<Options> {
  let options: Options;

  if (isDev) {
    options = {
      args: [],
      executablePath: devPath,
      headless: true,
    };
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  }

  return options;
}
