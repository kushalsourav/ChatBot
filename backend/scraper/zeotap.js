import puppeteer from "puppeteer";

export async function scrapeZeotap(query) {
  const url = `https://docs.zeotap.com/home/en-us/search?q=${encodeURIComponent(query)}`;
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded" });

  const result = await page.evaluate(() => {
    const firstResult = document.querySelector(".search-result p");
    return firstResult ? firstResult.innerText : "No relevant information found.";
  });

  await browser.close();
  return result;
}
