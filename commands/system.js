/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md By Suhail
 * @author : SuhailTechInfo <https://github.com/SuhailTechInfo>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config ,alive  } = require('../lib')
const {TelegraPh} = require('../lib/scraper')
const util = require('util');
const fs = require('fs-extra');
    //---------------------------------------------------------------------------
//                  ADD NOTE  COMMANDS
//---------------------------------------------------------------------------
cmd({
            pattern: "addnote",
            category: "owner",
            desc: "Adds a note on db.",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!text) return citel.reply(`🔍 Please provide me a valid gist url.`)
            await addnote(text)
            return citel.reply(`New note ${text} added in mongodb.`)

        }
    )
 
    //---------------------------------------------------------------------------
cmd({
            pattern: "qr",
            category: "owner",
            filename: __filename,
            desc: "Sends CitelsVoid Qr code to scan and get your session id."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`*give me Text , To Get QR*`);
            if (text) {
                let h =`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`;
                 

            let buttonMessaged = 
            {
                image: { url: h },
                caption: `*_Scan Qr To Get You Text_*`,
                footer: ` Session bY >> sᴜʜᴀɪʟ ᴛᴇᴄʜ ɪɴғᴏ \n www.youtube.com/c/SuhailTechInfo`,
                headerType: 4,
            };
             
              return await Void.sendMessage(citel.chat, buttonMessaged );
                
            }
            
            
            let buttonMessaged = {
                image: { url: 'https://secktorbot.onrender.com/' },
                caption: `*_Scan Qr within 15 seconds_*\nYou'll get session id in your log number.`,
                footer: ` Session bY >> sᴜʜᴀɪʟ ᴛᴇᴄʜ ɪɴғᴏ \n www.youtube.com/c/SuhailTechInfo`,
                headerType: 4,
               
                contextInfo: {
                    externalAdReply: {
                        title: 'mY bOT Session',
                        body: 'Get you Session ID',
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: `https://i.imgur.com/NpA3ZsJ.jpeg`,
                        sourceUrl: `WWW.YOUTUBE.COM/c/SUHAILTECHINFO`,
                    },

                },

            };
            await Void.sendMessage(citel.chat, buttonMessaged, {
                quoted: citel,

            });


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "unban",
            category: "misc",
            filename: __filename,
            desc: "Unbans banned user (from using bot)."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(`This command is only for my Owner`)
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply("Please mention any user.❌")
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        console.log(usr.ban);
                        return citel.reply(`${pushnamer} is unbanned.`);
                    } else {
                        console.log(usr.ban)
                        if (usr.ban !== "true") return citel.reply(`${usr.name} is already unbanned.`);
                        await sck1.updateOne({ id: users }, { ban: "false" })
                        return citel.reply(`${usr.name} is free as a bird now`);
                    }
                })
            } catch {
                return citel.reply("Please mention any user.❌");
            }


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "url",
            alias : ['createurl'],
            category: "misc",
            filename: __filename,
            desc: "image to url."
        },
        async(Void, citel, text) => {
            if (!citel.quoted){citel.reply(`Pls mention me any image/video and *type ${prefix}url to upload my ${tlang().greet}*`);return;}
            let mime = citel.quoted.mtype
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);

                let anu = await TelegraPh(media);
                citel.reply(util.format(anu));
                return await fs.unlinkSync(media);
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "trt",
            alias :['translate'],
            category: "misc",
            filename: __filename,
            desc: "Translate\'s given text in desird language."
        },
        async(Void, citel, text) => {
            const translatte = require("translatte");
            let lang = text.split(" ")[0];
            let tex = text.split(",")[1];
            let textt ;
            if (!citel.quoted)
            {           
                        lang = text.split(",")[0];
                        textt = tex;
            }
            else { textt = citel.quoted.text; }
            if (!textt) return await citel.reply(`*Please Reply to Any Text with _${prefix}trt en*\n *OR* \n *give me text like _${prefix}trt ur , Who are you_*`);
            
            whole = await translatte(textt, {
                from:"auto",
                to: lang || "en",
            });
            if ("text" in whole) {
                return await citel.reply(whole.text);
            }

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "shell",
            category: "owner",
            filename: __filename,
            desc: "Runs command in Heroku(server) shell."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            const { exec } = require("child_process")
            exec(text, (err, stdout) => {
                if (err) return citel.reply(`----${tlang().title}----\n\n` + err)
                if (stdout) {
                    return citel.reply(`----${tlang().title}----\n\n` + stdout)
                }
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "eval",
            category: "owner",
            filename: __filename,
            desc: "Runs js code on node server."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return
            try {
                let resultTest = eval('const a = async()=>{\n' + text + '\n}\na()');
                if (typeof resultTest === "object")
                    citel.reply(JSON.stringify(resultTest));
                else citel.reply(resultTest.toString());
            } catch (err) {
                return  citel.reply(err.toString());
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "delnote",
            category: "owner",
            filename: __filename,
            desc: "Deletes note from db."
        },
        async(Void, citel, text,{ isCreator }) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delnote(text.split(" ")[0])
             return citel.reply(`Id: ${text.split(" ")[0]}\'s note has been deleted from mongodb.`)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "delallnotes",
            category: "owner",
            filename: __filename,
            desc: "Deletes all notes from db."
        },
        async(Void, citel, text, isCreator) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delallnote()
             return citel.reply(`All notes deleted from mongodb.`)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "ban",
            category: "owner",
            filename: __filename,
            desc: "Bans user from using bot."
        },
        async(Void, citel, text,{ isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply(`❌ Please mention any user ${tlang().greet}.`)
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        await new sck1({ id: users, ban: "true" }).save()
                        return citel.reply(`_Banned ${usr.name} from Using Commands._`)
                    } else {
                        if (usr.ban == "true") return citel.reply(`${pushnamer} is already Banned from Using Commands`)
                        await sck1.updateOne({ id: users }, { ban: "true" })
                        return citel.reply(`_Successfully Banned ${usr.name} from Using Commands._`)
                    }
                })
            } catch (e) {
                console.log(e)
                return citel.reply("Please mention any user.❌ ")
            }


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "alive",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
          let get = text;
          let alivemessage = '';
          let urll = '';     
          let image = false;
          let video = false;
          
if(text != ""){
  console.log("Alive Function Called");
 let aliv = await alive.findOne({ id:"1" }) || await new alive({ id:"1"}).save();
 if (text.startsWith("get")) return citel.reply(aliv.get);
   
const linkPattern = /(https?:\/\/\S+)/gi;
const imageExtensions = ['.jpg', '.jpeg', '.png'];
const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.gif'];
let match = text.match(linkPattern);
let i = 0;
while (i < match.length && !image && !video ) 
{
  urll = match[i];
  const extension = urll.substring(urll.lastIndexOf('.')).toLowerCase();
  if (imageExtensions.includes(extension)) { image = true;  video = false; } 
  else if (videoExtensions.includes(extension)) { video = true; image = false; }
  else { console.log(`Unknown link: ${urll}`)  }
  i++;
 }
  if( video || image) { text = text.replace(urll, ''); }
  await alive.updateOne({ id: '1' }, { text: text, get : get, url: urll,  image: image,   video: video });
 
 
  /*if (image){ await alive.updateOne({ id: '1' }, { text: text,  url: urll, image: true, video: false }) }
  else if(video){ await alive.updateOne({ id: '1' }, { text: text,  url: urll, image: false, video: true }) }
  else { await alive.updateOne({ id: '1' }, { text: text,url:"", image: false, video: false})  }*/
}

     let aliv = await alive.findOne({ id:"1" }) ;
          alivemessage = aliv.text || "alive msg here";
          image = aliv.image || false;
          video=aliv.video || false ;
          urll = aliv.url || await botpic() ;

          
const alivtxt = `${alivemessage}\n\n*Type ${prefix}menu for my command list.*`;
          
 const messageOptions = image
    ? { image: { url: urll }, caption: alivtxt }
    : video
      ? { video: { url: urll }, caption: alivtxt }
      : { image: { url: await botpic() }, caption: alivtxt };

  return Void.sendMessage(citel.chat, messageOptions);
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "allnotes",
        category: "owner",
        filename: __filename,
        desc: "Shows list of all notes."
    },
    async(Void, citel, text,{ isCreator }) => {
        const { tlang } = require('../lib')
        if (!isCreator) return citel.reply(tlang().owner)
        const note_store = new Array()
        let leadtext = `All Available Notes are:-\n\n`
        leadtext += await allnotes()
        return citel.reply(leadtext)

    }
)
