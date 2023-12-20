const puppeteer = require("puppeteer");

async function generatePDF(dynamicId) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  const dynamicURL = `https://generator.work-set.eu/${dynamicId}`;
  await page.goto(dynamicURL, { waitUntil: "networkidle2" });
  await page.waitForTimeout(12000);
  // Додаткові дії, наприклад, генерація PDF
  await page.pdf({
    path: "output.pdf",
    format: undefined,
    width: "595px", // Ширина сторінки
    height: "842px",
  });

  await browser.close();
}

module.exports = generatePDF;
