const puppeteer = require('puppeteer');
const url = 'http://bianca.com';
const path = require('path');

module.exports = class controller {

	static async tirarPrint(req, res) {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(url);
		await page.screenshot({ path: path.join(__dirname, '../public/screenshot.png') });
		await browser.close();

		res.redirect('/screenshot.png');
	}

	static async coletarConteudo(req, res) {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(url);
		const info = await page.evaluate(() => {
			const h1 = Array.from(document.querySelectorAll('h1')).map(elem => elem.innerText);
			const title = Array.from(document.querySelectorAll('title')).map(elem => elem.innerText);

			return { title, h1  };
		});
		await browser.close();

		res.json(info); 
	}
};
