const puppeteer = require('puppeteer');

async function generatePDF(dynamicId) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const dynamicURL = `https://generator.work-set.eu/${dynamicId}`;
  await page.goto(dynamicURL, { waitUntil: "networkidle2" });

  // Додаткові дії, наприклад, генерація PDF
  await page.pdf({ path: "output.pdf", format: "A4" });

  await browser.close();
}

module.exports = generatePDF;
