const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "MAHABUB RAHMAN",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const botName = "MAHABUB BOT";
		const botPrefix = "/";
		const authorName = "MAHABUB RAHMAN";
		const ownAge = "27+";
		const teamName = "NETWORK";
		const authorFB = "https://m.me/www.xnxx.com.140";
		const authorInsta = "++";
		const tikTok = "++";
		const st = "ACTTVE";
		const urls = JSON.parse(fs.readFileSync('MBC.json'));
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `♕︎➪MAHABUB-BOT-information 𖤍🂱
\☢ ︎︎Bot-Name ☞︎︎︎ ${botName} 🂱
\☢︎︎ Bot-Prefix ☞︎︎︎ ${botPrefix} 𖤍
\☢ ︎︎Bot-Owner-Name ☞︎︎︎ ${authorName} ⚠︎
\☢︎︎ Bot-Owner-Age  ☞︎︎︎ ${ownAge} ⚠︎
\☢ ︎Bot-Owner-Facebook ☞︎︎︎ ${authorFB} ♧︎︎︎
\☢︎︎ Team-Name☞︎︎︎ ${teamName} 𓀬
\♕︎════════♔︎═════════♕︎

 ♲︎︎︎ Bot-Uptime𒊹︎︎︎
 \☢ ︎︎Bot-Raning-Time ☞︎︎︎ ${uptimeString} ❁
 \☢︎︎ Date☞︎︎︎ ${date} ꕥ
 \☢ Now-Time ☞︎︎︎ ${time} ☔︎
 \☢︎︎ Status ☞︎︎︎ ${st}🔰
 \♕════════𖣘═════════♕︎
 `,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
