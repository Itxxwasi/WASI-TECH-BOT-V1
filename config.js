const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '923184474176' ;
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Suhail:uhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority" ;
global.port=5000 ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363023983262391@g.us' ;
global.email = 'samsamsun789@gmail.com' ;
global.github = 'https://github.com/SuhailTechInfo/Secktor-Md' ;
global.location = 'Lahore PK' ;
global.gurl = 'https://youtube.com/c/SuhailTechInfo' ; // add your username
global.sudo =  process.env.SUDO || "923004591719" ;
global.devs = "923184474176"; //Dont change it From here
global.website = 'https://github.com/SuhailTechInfo/Secktor-Md' ; //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdiSnFkWlpMRnhpVmd2ZHowREowRmUyU0NULzZCbWhyQ2lsUjJnaTYydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkFydGowMDI2UCtGR01yNzhwOXIrd1ZmQ2gvTnNDQUIrZXJwVmhaU0VXRT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSkVpRHhwcGgySW9JQXM3S2FYZlhTN1VKT01EbU1mTmFOTVJsQnM0Q0dvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBdEdaMUR6Z0JvOUNZZGpra0V4TnRNMFNrMWtpaXhuQ2hHMTJMTnFPQ0NvPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBOMlJYQ2pFZU5zNmtGb3RxS0QySXljQWxVc09jTXVXU3ZuVVZveExBMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhXcTVhUFFWSzB1SVB1RDM1ajZkdlhTS3VKUDc2eVRaVTZFVUF1dE4zams9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJbmxuSTFKRDZFREhhTzFyczU0VHNWV1ZvbUNvSEJOTjRNbkt2bm9GVzUyazF6UEg4N3pFaVY0ODY0ZHlwVk81UVQzZ3JnakdnTHpTQ0lJeEw0YjdDUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEyNiwiYWR2U2VjcmV0S2V5IjoiejRIcnhheC9NaW5Xek1HcFcrTElkQjhRbWpuNVZwTkl3ak16Rmg4RkdJcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3pCbTZrQkVQZUYvcU1HR0FFPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDajJkQWliYUpMM2F5MDdSVUJ0cWZlVFkzYUV5NEh5akJYeWo0bG82cHpzPSIsImFjY291bnRTaWduYXR1cmUiOiJnUGNSZzk4NkoxYkFiK3ZuQVJuREV5d2Q0a2RqcEc2cVpRZ1JoOEQ0TlJKMmRDc2lpVUR6RjF3T3hBbmNwUHgyQmZET2NTV1V5VHFHdXBzVU5idjNEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM21mQ3dmMVE1Wk5USWpzMzVMV0ZLTWVvNzlsS1lzSWZzTlFIRytseDZIMTB5RkRWSWtUMFlKYVMreUxhTzVvOWFnMWRtOFNtaUIxb3M3MEpXVHEyQ1E9PSJ9LCJtZSI6eyJpZCI6IjE3ODYyODUxMTQ4OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU3UtaGFpbCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNzg2Mjg1MTE0ODoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFvOW5RSW0yaVM5MnN0TzBWQWJhbjNrMk4yaE11Qjhvd1Y4bytKYU9xYzcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2ODYwNzgyMDF9',
  botname: process.env.BOT_NAME || 'ʟʏғᴇᴇ²²¹-ᴍᴅ',
  ownername:  process.env.OWNER_NAME || `It'x Suhail`,
  author:  process.env.PACK_AUTHER || '', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname:  process.env.PACK_NAME || "\t   𓅋 ₊₉₂⃗⃗₃₁᩺₈ͦ₄ͪ₄ᷧ₇ͥ₄ᷞ₁⃗₇₆ 𓃮 \n\nᴋɪss ʍᴇ...💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs...👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n   -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" ,
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',
  HANDLERS: process.env.PREFIX || ',',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "true",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  caption :process.env.CAPTION || "    *•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟʏғᴇᴇ²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE  ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'v.0.0.3',
  LANG: process.env.THEME|| 'LUFFY',
  WORKTYPE: process.env.WORKTYPE || 'public'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
