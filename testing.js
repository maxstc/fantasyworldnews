const cheerio = require("cheerio");

async function main() {
    const response = await fetch("https://www.cnn.com/world");
    const responseText = await response.text();
    let doc = cheerio.load(responseText);
    doc(".container__headline-text").map((index, element) => {
        console.log(doc(element).text());
    });
}

main();