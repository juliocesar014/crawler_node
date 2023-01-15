const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log("Iniciei o Crawler!");
  await page.goto(
    "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops"
  );
  console.log("Entrei na página desejada!");

  headings = await page.evaluate(() => {
    headings_elements = document.querySelectorAll("h4 .title");
    headings_array = Array.from(headings_elements);
    return headings_array.map((heading) => heading.innerText);
  });
  console.log("Resultados abaixo:");
  console.log(headings);
  await browser.close();
})();
