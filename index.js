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
    headings_elements = document.querySelectorAll(".caption");
    headings_array = Array.from(headings_elements);
    return headings_array.flatMap((heading) => {
      const regex = new RegExp("Lenovo", "g");
      if (regex.test(heading.innerText)) {
        let text = heading.textContent.replace("\t", "");
        let textSplit = text.split("\n");
        let dataObj = {};
        dataObj["price"] = textSplit[1].replace("\t\t", "");
        dataObj["title"] = textSplit[3].replace("\t\t\t\t\t\t\t\t\t", "");
        dataObj["description"] = textSplit[5].replace("\t\t\t", "");
        return dataObj;
      }
      return [];
    });
  });
  console.log("Resultados abaixo:");
  console.log(headings);
  await browser.close();
})();
