const { chromium } = require("playwright");

const scrap = async (url) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto(url);
    const element = page.locator('.livetrack');
    const dataLon = await element.getAttribute('data-lon'); 
    const dataLat = await element.getAttribute('data-lat'); 
    console.log(dataLon, dataLat)

  } catch (error) {
    console.error("Error while scraping:", error);
  } finally {
    await browser.close();
  }
}



// (async () => {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   const url = "https://blog.logrocket.com"; // Replace with the URL of the website you want to scrape
//   try {
//     await page.goto(url);
//     // Replace the following selectors with the actual HTML elements you want to scrape
//     const titleElement = await page.$("h1");
//     const descriptionElement = await page.$("p.description");
//     const title = await titleElement.textContent();
//     const description = await descriptionElement.textContent();
//     const inputElement = await page.$('input[type="text"]');
//     const value = await inputElement.inputValue();

//     console.log(value);
//     console.log("Title:", title);
//     console.log("Description:", description);
//   } catch (error) {
//     console.error("Error while scraping:", error);
//   } finally {
//     await browser.close();
//   }
// })();


module.exports = { scrap }