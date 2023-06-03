/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md By Suhail Tech
 * @author : SuhailTech <https://www.youtube.com/c/SuhailTechInfo>
 * @description : Secktor Bot ,A Multi-functional whatsapp bot.
 * @version 0.0.6
 
 ✭  
  //┌┤\n`
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, getBuffer ,prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')


    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        await citel.reply('```Testing Ping!!!```');
        var final = new Date().getTime();
        return await citel.reply('*Pong*\n *' + (final - inital) + ' ms* ');
    });


//------------------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
           // react: "👀",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) 
            {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (cmd) //if(!cmd) return await citel.reply("*❌No Such commands.*");
                {
                      arr.push(`*🍁Command:* ${cmd.pattern}`);
                      if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                      if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                      if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                      if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                      return await citel.reply(arr.join('\n'));
                }
            }
                const cmds = {}
                commands.map(async(command, index) => 
                {
                     if (command.dontAddCommandList === false && command.pattern !== undefined)
                     {
                          if (!cmds[command.category]) cmds[command.category] = []
                          cmds[command.category].push(command.pattern)
                     }
                })
                const time = moment(moment()).format('HH:mm:ss')
                moment.tz.setDefault('Asia/karachi').locale('id')
                const date = moment.tz('asia/karachi').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭────《  *${Config.botname}*  》────⊷
│ ╭──────✧❁✧──────◆
│ │ Theme:- ${tlang().title}
│ │ Owner:- ${Config.ownername}
│ │ Plugins:- ${commands.length}
│ │ Uptime:- ${runtime(process.uptime())}
│ │ Mem:- ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
│ │ Time:- ${time}
│ │ Date:- ${date}
│ ╰──────✧❁✧──────◆
╰══════════════════⊷\n
` ;
             
              for (const category in cmds) 
              {
                 str += `╭────❏ *${tiny(category)}* ❏\n` ;
                 if(text.toLowerCase() == category.toLowerCase()){ str = `╭─────❏ *${tiny(category)}* ❏\n` ;      
                      for (const plugins of cmds[category]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                      str += `╰━━━━━━━━━━━━━──⊷\n`  ;
                      break ;
                 }
                 else { for (const plugins of cmds[category]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                       str += `╰━━━━━━━━━━━━━━──⊷\n`  ; 
                 }

              }//For Looop end
                str += Config.caption  
                let buttonMessaged = 
                {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().footer,
                    headerType: 4,
                };
                return await Void.sendMessage(citel.chat, buttonMessaged ,{ quoted : citel});
})
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general",
            react: "🥀"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = '```'
str+= `╭━━〘 *${Config.botname}* 〙━━──⊷     
┃  Theme: ${tlang().title}
┃  Prefix: ${prefix}
┃  Owner: ${Config.ownername}
┃  Commands: ${commands.length}
┃  Uptime: ${runtime(process.uptime())}
┃  Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
╰━━━━━━━━━━━──⊷`+"```\n"

            for (let i = 0; i < commands.length; i++) 
            {
                 if(commands[i].pattern==undefined) continue
                 str +=       `╭〘 *${fancytext(commands[i].pattern,1)}`                // ${i+1} 
                 str += `* 〙\n╰➛ ${fancytext(commands[i].desc,1)}\n`
            }

            
 
 //str += `╰━━━━━━━━━━━───⊷\nsᴜʜᴀɪʟ ᴛᴇᴄʜ ɪɴғᴏ \n www.youtube.com/c/SuhailTechInfo`
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str + Config.caption ,footer: tlang().footer, headerType: 4 })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To check ping",
        category: "general",
        react: "💜",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const thmb = await getBuffer(global.THUMB_IMAGE)
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + global.owner + ':+' + global.owner + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: thmb,
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner + '?text=Hii+bro,I+am+' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//------------------------------------------------------------------------------------
const readDirectory = (text) => {
  return new Promise((resolve, reject) => {
    fs.readdir(text, (err, files) => {
      if (err) {reject('Error reading directory'); }
      else {
        //citel.reply("Files Here \n "+files.toString())
        resolve(files);
      }
    });
  });
};
//------------------------------------------------------------------------------------
Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    //react: "✨",
    filename: __filename
},
async(Void, citel, text ,{isCreator }) => {
 if(!isCreator) return citel.reply("*Ahh Sorry, Only Owner Can Use This Cmd*")
 if(!text) return citel.reply("*Uhh PLease, Provide A Command/Directory*")
 if(text.startsWith("."))
 {
    let res="*------------- FILE MANAGER -------------*\n"
    try {
          const files = await readDirectory(text);
          files.forEach(file => { res += file + '\n'; });
          await citel.reply(res.toString());
    } catch (error) {  citel.reply(error); }
      return;
 }
 
 
 const { commands } = require('../lib');
 
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return await citel.reply(arr.join('\n'));


})
