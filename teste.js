const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops"
  );

  const textContent = await page.evaluate(
    () =>
      document.querySelector(
        "body > div.wrapper > div.container.test-site > div > div.col-md-9 > div > div:nth-child(1) > div > div.caption > h4:nth-child(2) > a"
      ).textContent
  );
  const innerText = await page.evaluate(
    () =>
      document.querySelector(
        "body > div.wrapper > div.container.test-site > div > div.col-md-9"
      ).innerText
  );

  console.log(textContent);
  console.log(innerText);

  browser.close();
})();

// COPY JS PATH
