const fs = require('fs');
const path = require('path');
const { getPrefix } = global.utils;

module.exports = {
  config: {
    name: "help",
    version: "1.0",
    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
    role: 0,
    category: "help",
			shortDescription: "see the available commands",
    guide: {
      en: "{pn} [empty | <page number>]"
    }
  },

  onStart: async function ({ api, message, args, event, threadsData, getLang }) {
    const langCode = await threadsData.get(event.threadID, "data.lang") || global.GoatBot.config.language;
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = getPrefix(threadID);

    const page = parseInt(args[0]) || 1;
    const commandsPerPage = 10; // Adjust as needed

    const commands = await getCommandsFromDir(path.join(__dirname, '..', 'cmds'));
    const commandNames = Object.keys(commands);
    const totalPages = Math.ceil(commandNames.length / commandsPerPage);

    if (page < 1 || page > totalPages) {
      return message.reply(getLang("pageNotFound", page));
    }

    let B4D9LM1M = `━━━━━━━━━━━━━━━━━━━━━━\n╔╝❮❮𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕❯❯╚╗\n\n ╔═════•| 💛 |•═════╗\n★𝐌𝐈𝐌-𝐁𝐎𝐓-𝐂𝐌𝐃-𝐋𝐈𝐒𝐓★\n ╚═════•| 💛 |•═════╝\n━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    let currentCategory = "";
    let commandIndex = (page - 1) * commandsPerPage;
    let commandNumber = (page - 1) * commandsPerPage + 1;

    for (let i = 0; i < commandsPerPage && commandIndex < commandNames.length; i++) {
      const commandName = commandNames[commandIndex];
      const command = commands[commandName];

      if (command.config.category !== currentCategory) {
        currentCategory = command.config.category;
        B4D9LM1M += `━❮●❯━━━━━❪❤️💙💚❫━━━━━❮●❯━\n\n`;
      }

      B4D9LM1M += `【•${commandNumber}${commandNumber < 10 ? " " : ""} ★𝐂𝐌𝐃-𝐍𝐀𝐌𝐄★【•${command.config.name}•】\n\n`;
      commandIndex++;
      commandNumber++;
    }
   
    B4D9LM1M += `\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╭━─━──━─━≪✠≫━──━─━─━╮\n│\n│🔐𝐓𝐎𝐓𝐀𝐋- 【•${global.GoatBot.commands.size}•】 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒🔐\n│\n│🔐𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑: 𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃-𝐁𝐀𝐃𝐎𝐋📌\n│\n│https://m.me/MBC.K1NG.007\n│\n│m.me/100001381266797\n│\n╰━─━──━─━━──━─━─━❯❯\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    message.reply({body:B4D9LM1M,attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?id=1OeLOXs_NtncRmv7_9rI8NQTW1P8_Pkyc")})
  }
};

async function getCommandsFromDir(dir) {
  const commands = {};
  const files = await fs.promises.readdir(dir);

  for (const file of files) {
    if (file.endsWith('.js') && file !== 'help.js') {
      const filePath = path.join(dir, file);
      const command = require(filePath);
      commands[command.config.name] = command;
    }
  }

  return commands;
}
