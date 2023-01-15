const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops"
  );

  const textsArray = await page.evaluate(() =>
    [
      ...document.querySelectorAll(
        "body > div.wrapper > div.container.test-site > div > div.col-md-9"
      ),
    ].map((elem) => elem.innerText)
  );
  const textsJoined = await page.evaluate(() =>
    [
      ...document.querySelectorAll(
        "body > div.wrapper > div.container.test-site > div > div.col-md-9"
      ),
    ]
      .map((elem) => elem.innerText)
      .join("\n")
  );

  console.log(textsJoined);

  browser.close();
})();

// COPY JS PATH
