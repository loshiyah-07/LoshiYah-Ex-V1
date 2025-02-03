const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID, 
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/pgvev9.jpeg",
ALIVE_MS: process.env.ALIVE_MSG || "Hellow I'm LoshiYah-Ex-V1 😎💥 I'm Alive Now 👋💗",
};
