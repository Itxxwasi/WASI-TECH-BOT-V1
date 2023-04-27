const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Suhail:suhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority"
global.port=5000
global.email = 'samsamsun789@gmail.com'
global.github = 'https://github.com/SuhailTechInfo/Secktor-Md'
global.location = 'Lahore PK'
global.gurl = 'https://youtube.com/c/SuhailTechInfo' // add your username
global.sudo =  '923184474176' || process.env.SUDO  
global.devs = '923184474176';
global.website = 'https://github.com/SuhailTechInfo/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname: process.env.BOT_NAME || '₊₉₂⃗⃗₃₁᩺₈ͦ₄ͪ₄ᷧ₇ͥ₄ᷞ₇₆',
  ownername:  process.env.OWNER_NAME || 'SuhailTechInfo',
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0FlMEZRZjl3RFFlV0V1Y0hnYkRBMWRlMk9DamhBNEs1SFpISW41Q2lrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjI0R0N5VDY2ZW50V2VIRHdsVnJQRWZRNlRyUC9uQUdJbmZYYzlzLzVEST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0THF6aWY3bzVsTzRLdHhaeHVWNWdiWU5ieVVmSi9lL1k0SkszTTBJVVVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0WXpFNDB1cUFOYjh5RjFFTGVrQ1JzZFhKWDFQV1ZKdnI1eW1hU0VsOXpzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLVzJYL1g4KytPRjU0NS8rb29OTTZkd01IeUloTzFKV0VpcHhmYWxMRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5tUGI4ZHpxMlVGTDNJMzh4eGFESlRWcG9tMzBPVldYRFVwTmFGSzhlbkU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQUThsdnAzbE00Vi9DMXVET1M1bmVIVnlFOUx1STU0Zk5GbCtwUkJqV3ZtL1BQcG1RYjBBU2VGRG5WTENRQ1ZhaFhjY1oybGdVblh6TXQzMm5GVFZoUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE1MywiYWR2U2VjcmV0S2V5IjoiL0FwaVlXbUlSTU43U3FXYWd2V3JRU3hjbkIvRVp4K0J5MS9KM3BMZ3draz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTjYrdUVNUTk1R2JvZ1lZQVE9PSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTNHBveFdObit6WDlsamVxdjJTWU4xQU9XTDdVTG43UHQrc0RmWDA4ZWg4PSIsImFjY291bnRTaWduYXR1cmUiOiJwb0dtZlFSdjJqRWp6TWNQSEpjc2RuSmRRQ0VFK09aNUd4NTRoZFdBSHF1RUlzYTVuUHV1VVMxcUtScmRLdldVSm4yZXZybDBocGE4Z2lSUXlHMldBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiekRxclk5L2szaXdvSHl5ZWw2WWdzWHpiby85MHRmNEV3S3FMWlJqKzlFQ3h6aEhLYlpwd3ZocjhqV09YME83ak9iV0kvTCtBbm92RkhRbE82ZFdvanc9PSJ9LCJtZSI6eyJpZCI6IjkyMzE4NDQ3NDE3Njo5NkBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxODQ0NzQxNzY6OTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXVLYU1WalovczEvWlkzcXI5a21EZFFEbGkrMUM1K3o3ZnJBMzE5UEhvZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY4MjM2MDU2OX0=',
  author:  process.env.PACK_INFO.split(";")[0] || '', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname:   "\t   𓅋 ₊₉₂⃗⃗₃₁᩺₈ͦ₄ͪ₄ᷧ₇ͥ₄ᷞ₁⃗₇₆ 𓃮 \n\nᴋɪss ʍᴇ... 💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs... 👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n    -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" || process.env.PACK_INFO.split(";")[1] ,
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',
  HANDLERS: process.env.PREFIX || [','],
  warncount : process.env.WARN_COUNT || 1,
  disablepm: process.env.DISABLE_PM || "true",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '•.•:•.•:•:•:•:•:•:•:•☾☼☽•:•.•:•.•:•:•:•:•:•:•\nι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ \n'
	+'•.•:•.•:•:•:•:•:•:•:•☾☼☽•:•.•:•.•:•:•:•:•:•:•\n\n*ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт* \n*Cʀєαтєԃ вყ : ѕυнαιℓ тєᴄʜ*'
	+'\n\nWhatsapp : wa.me/923184474176 \n Subscribe: www.youtube.com/c/SuhailTechInfo'  ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||"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" ,
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'LUFFY',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
