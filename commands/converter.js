/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const axios = require('axios')
const { sck1, tiny, fancytext, listall,cmd , Config} = require('../lib/')
const fs = require('fs-extra');
const { exec } = require('child_process')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");

    //---------------------------------------------------------------------------
cmd({
            pattern: "photo",
            desc: "Makes photo of replied sticker.",
            category: "converter",
            use: '<reply to any gif>',
            filename: __filename
        },
        async(Void, citel, text) => {
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`
            }
            if (!citel.quoted) return citel.reply(`_Reply to Any Sticker._`)
            let mime = citel.quoted.mtype
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let name = await getRandom('.png')
            exec(`ffmpeg -i ${media} ${name}`, (err) => {
                let buffer = fs.readFileSync(trueFileName)
                Void.sendMessage(citel.chat, { image: buffer }, { quoted: citel })
             
            })
        }
    )

 //---------------------------------------------------------------------------
cmd({
            pattern: "sticker",
            alias: ["s"],
            desc: "Makes sticker of replied image/video.",
            category: "sticker",
filename: __filename,
            use: '<reply to any image/video.>'
        },
        async(Void, citel, text) => {
 let mime = citel.mtype;
let media ;
let pack = Config.packname
let author = Config.author 
if (mime =="imageMessage" || mime =="videoMessage") {  media = await citel.download(); }
else if (citel.quoted){ 
 mime = citel.quoted.mtype; 
 if (mime =="imageMessage" || mime =="videoMessage" || mime =="stickerMessage") {  media = await citel.quoted.download(); }
 else return citel.reply("```Uhh,Please reply to any image or video```")
}
else return citel.reply("```Uhh,Please reply to any image or video```");
          
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.FULL ,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 100, // The quality of the output file
                    background: "transparent",
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            
        }
    )
 //---------------------------------------------------------------------------
cmd({
            pattern: "circle",
            alias: ["circlestic","circlesticker","cs"],
            desc: "Makes sticker of replied image/video.",
            category: "sticker",
filename: __filename,
            use: '<reply to any image/video.>'
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`*Reply To any Image or video Sir.*`);
          //console.log("Quoted Data here : ",citel.quoted);
            let mime = citel.quoted.mtype
            pack = Config.packname
            author = Config.author
           if (mime =="imageMessage" || mime =="stickerMessage") {
                let media = await citel.quoted.download();
                //citel.reply("*Processing Your request*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.CIRCLE ,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            }else return citel.reply("*Uhh,Please reply to any image*");

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "crop",
            alias: ["cropstic","csticker","cropsticker"],
            desc: "Makes sticker of replied image/video.",
            category: "sticker",
filename: __filename,
            use: '<reply to any image/video.>'
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`*Reply To any Image or video Sir.*`);
          //console.log("Quoted Data here : ",citel.quoted);
            let mime = citel.quoted.mtype
            pack = Config.packname
            author = Config.author
            if (mime =="imageMessage"  || mime =="stickerMessage") {
                let media = await citel.quoted.download();
                //citel.reply("*Processing Your request*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.CROPPED,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            }else return citel.reply("*Uhh,Please reply to any image*");

        }
    )
   //---------------------------------------------------------------------------
cmd({
            pattern: "round",
            alias: ["roundstic","roundsticker"],
            desc: "Makes sticker of replied image/video.",
            category: "sticker",
filename: __filename,
            use: '<reply to any image/video.>'
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`*Reply To any Image or video Sir.*`);
          //console.log("Quoted Data here : ",citel.quoted);
            let mime = citel.quoted.mtype
            pack = Config.packname
            author = Config.author
           if (mime =="imageMessage" || mime =="stickerMessage") {
                let media = await citel.quoted.download();
                //citel.reply("*Processing Your request*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.ROUNDED ,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            }else return citel.reply("*Uhh,Please reply to any image*");

        }
    )
    //---------------------------------------------------------------------------
 //---------------------------------------------------------------------------
cmd({
            pattern: "quotely",
            desc: "Makes Sticker of quoted text.",
            alias: ["q"],
            category: "sticker",
            use: '<reply to any message.>',
            filename: __filename
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`Please quote/reply to any message`);
            let textt = citel.quoted.text;
            let pfp;
            try {
                pfp = await Void.profilePictureUrl(citel.quoted.sender, "image");
            } catch (e) {
                pfp = THUMB_IMAGE;
            }
            let todlinkf = ["#FFFFFF", "#000000"];
            let todf = todlinkf[Math.floor(Math.random() * todlinkf.length)];
            let username = await sck1.findOne({ id: citel.quoted.sender })
            var tname;
            if (username.name && username.name !== undefined) {
                tname = username.name
            } else {
                tname = Void.getName(citel.quoted.sender)
            }
            let body = {
                type: "quote",
                format: "png",
                backgroundColor: todf,
                width: 512,
                height: 512,
                scale: 3,
                messages: [{
                    avatar: true,
                    from: {
                        first_name: tname,
                        language_code: "en",
                        name: tname,
                        photo: {
                            url: pfp,
                        },
                    },
                    text: textt,
                    replyMessage: {},
                }, ],
            };
            let res = await axios.post("https://bot.lyo.su/quote/generate", body);
            let img = Buffer.alloc(res.data.result.image.length, res.data.result.image, "base64");
            return citel.reply(img,{packname:Config.packname,author:''},"sticker")

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "fancy",
            desc: "Makes stylish/fancy given text",
            category: "converter",
            use: '56 Secktor',
            react: "✅",
            filename: __filename
        },
        async(Void, citel, text) => {
            if (isNaN(text.split(" ")[0]) || !text) {
                let text = tiny(
                    "Fancy text generator\n\n*_______________________________*\n*Example: .fancy 32 Suhail Md*\n*_______________________________*\n\n"
                );
                listall("Secktor").forEach((txt, num) => {
                    text += `${(num += 1)} ${txt}\n`;
                });
                return await citel.reply(text);
            }

            let fancytextt = await fancytext(`${text.slice(2)}`, text.split(" ")[0])
            citel.reply(fancytextt)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "tiny",
            desc: "Makes url tiny.",
            category: "converter",
            use: '<url>',
            react: "✅",
            filename: __filename
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Provide me a link`)
            try {
                link = text.split(" ")[0];
                anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`);
                citel.reply(`*🛡️Your Shortened URL*\n\n${anu.data}`);
            } catch (e) {
                console.log(e);
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "toaudio",
        alias:['mp3','tomp3'],
        desc: "changes type to audio.",
        category: "converter",
        use: '<reply to any Video>',
        filename: __filename
    },
   async(Void, citel, text) => {
        if (!citel.quoted) return citel.reply(`_Reply to Any Video_`);
        let mime = citel.quoted.mtype
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
         const { toAudio } = require('../lib');
        // citel.reply(`_Please Wait_`);
         let buffer = fs.readFileSync(trueFileName);
        let audio = await toAudio(buffer);
        Void.sendMessage(citel.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: citel });
    }
)
