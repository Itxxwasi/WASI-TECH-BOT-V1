/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Suhail-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo0
   * @description : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.0.1
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Suhail Tech Info.
   * © 2023 Suhail-Md.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
 **/


 const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang,fetchJson, botpic, runtime, prefix, Config ,alive  } = require('../lib')
 const {TelegraPh} = require('../lib/scraper')
 const util = require('util');
 const fs = require('fs-extra');
 const axios = require('axios')
 const fetch = require('node-fetch');
     //---------------------------------------------------------------------------
 
 cmd({
             pattern: "qr",
             category: "user",
             filename: __filename,
             desc: "Sends Qr code to scan and get your session id."
         },
         async(Suhail, msg, text) => {
             if (!text) return msg.reply(`*Provide me Text To Get QR*`);
             let h =`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`;
             let buttonMessaged = 
             {
                 image: { url: h },
                 caption: `*_Scan Qr To Get You Text_*`,
                 footer: ` Session bY >> ${Config.caption}`,
                 headerType: 4,
             };
             return await Suhail.bot.sendMessage(msg.chat, buttonMessaged );
 
     })
         
 //--------------------------------------------------------------------------- 
 cmd({
     pattern: "rmbg",
     alias : ['removebg'],
     category: "misc",
     filename: __filename,
     desc: "Remove image Background."
 },
 async(Suhail, msg, text) => {
   const _0x16b89c=_0x49c2;function _0x5e60(){const _0x33515f=['log','post','unlinkSync','send','caption','reply','524478FLbaqg','671116swmKkp','Uhh\x20Please,\x20Reply\x20To\x20An\x20Image/Video','1030BtYSxu','https://api.remove.bg/v1.0/removebg','187699OYwNUd','93599mPRWgy','auto','data','3341514nVKyCN','225184Osvztc','downloadAndSaveMediaMessage','catch','imageMessage','*_Uhh\x20Dear,\x20Please\x20provide\x20Valid\x20RemoveBg\x20Key_*\x0a\x0a\x20_Get\x20RemoveBg\x20api\x20key\x20from\x20remove.bg_\x0a\x20_then\x20Put\x20it\x20in\x20var\x20\x22REMOVE_BG_KEY\x22_\x0a\x0a','25NTBVPR','sending\x20removebg\x20image...!','14IYDGua','4141704bMSerR','REMOVE_BG_KEY','quoted','477ZxuHEt'];_0x5e60=function(){return _0x33515f;};return _0x5e60();}(function(_0x3045c0,_0x56c7b6){const _0x146dc7=_0x49c2,_0x492ef5=_0x3045c0();while(!![]){try{const _0x1f6d31=-parseInt(_0x146dc7(0xf0))/0x1*(-parseInt(_0x146dc7(0xe0))/0x2)+parseInt(_0x146dc7(0xd8))/0x3+-parseInt(_0x146dc7(0xec))/0x4+-parseInt(_0x146dc7(0xde))/0x5*(-parseInt(_0x146dc7(0xeb))/0x6)+parseInt(_0x146dc7(0xe1))/0x7+-parseInt(_0x146dc7(0xd9))/0x8*(parseInt(_0x146dc7(0xe4))/0x9)+parseInt(_0x146dc7(0xee))/0xa*(-parseInt(_0x146dc7(0xd5))/0xb);if(_0x1f6d31===_0x56c7b6)break;else _0x492ef5['push'](_0x492ef5['shift']());}catch(_0x1a9a50){_0x492ef5['push'](_0x492ef5['shift']());}}}(_0x5e60,0xe0b62));if(!msg[_0x16b89c(0xe3)])return await msg[_0x16b89c(0xea)]('*Reply\x20Any\x20Image\x20To\x20Remove\x20Background*');let mime=msg[_0x16b89c(0xe3)]['mtype'];if(mime!=_0x16b89c(0xdc))return await msg[_0x16b89c(0xea)](_0x16b89c(0xed));let media=await Suhail.bot[_0x16b89c(0xda)](msg[_0x16b89c(0xe3)]),anu=await TelegraPh(media);try{await fs[_0x16b89c(0xe7)](media);}catch(_0x14f72d){}const formData={'image_url':anu,'size':_0x16b89c(0xd6)};function _0x49c2(_0x16a55d,_0x16a672){const _0x5e6049=_0x5e60();return _0x49c2=function(_0x49c2f0,_0x45b252){_0x49c2f0=_0x49c2f0-0xd5;let _0x43a2e2=_0x5e6049[_0x49c2f0];return _0x43a2e2;},_0x49c2(_0x16a55d,_0x16a672);}axios[_0x16b89c(0xe6)](_0x16b89c(0xef),formData,{'headers':{'X-Api-Key':Config[_0x16b89c(0xe2)]},'responseType':'arraybuffer'})['then'](_0x466f9f=>{const _0x441490=_0x16b89c;console[_0x441490(0xe5)](_0x441490(0xdf));const _0x5b34e5=Buffer['from'](_0x466f9f[_0x441490(0xd7)],'binary');return msg[_0x441490(0xe8)](_0x5b34e5,{'caption':Config[_0x441490(0xe9)]},'image');})[_0x16b89c(0xdb)](_0x46980f=>{const _0x3d5c75=_0x16b89c;return msg[_0x3d5c75(0xe8)](_0x3d5c75(0xdd)+Config[_0x3d5c75(0xe9)]);});
 
     
 })
 
 //---------------------------------------------------------------------------
 
 cmd({
             pattern: "url",
             alias : ['createurl'],
             category: "misc",
             filename: __filename,
             desc: "image to url."
         },
         async(Suhail, msg, text) => {
             if (!msg.quoted) return await msg.reply(`*Reply To Any Image/Video To Get Url*`)
             let mime = msg.quoted.mtype
             if(mime !='videoMessage' && mime !='imageMessage' ) return await msg.reply("Uhh Please, Reply To An Image/Video")
             let media = await Suhail.bot.downloadAndSaveMediaMessage(msg.quoted);
             let anu = await TelegraPh(media);
             await msg.reply(util.format(anu));
             return await fs.unlinkSync(media);
         })
 
 //---------------------------------------------------------------------------
 cmd({
             pattern: "trt",
             alias :['translate'],
             category: "misc",
             filename: __filename,
             desc: "Translate\'s given text in desird language."
         },
         async(Suhail, msg, text) => {
             if(!text && !msg.quoted) return await msg.reply(`*Please Give Me Text. Example: _${prefix}trt en Who are you_*`);
             const translatte = require("translatte");
             let lang = text ? text.split(" ")[0].toLowerCase() : 'en';
             if (!msg.quoted)  { text = text.replace( lang , "");  }
             else { text = msg.quoted.text; }
             var whole = await translatte(text, { from:"auto",  to: lang , });
             if ("text" in whole) { return await msg.reply(whole.text); }
 
         }
     )
     //---------------------------------------------------------------------------
 
 /*
 cmd({
             pattern: "shell",
             category: "owner",
             filename: __filename,
             desc: "Runs command in Heroku(server) shell."
         },
         async(Suhail, msg, text,{ isCreator }) => {
              if (!isCreator) return msg.reply(tlang().owner)
              if(!text) return msg.reply("*Uhh PLease, Provide A Command to Run Heroku*")
              const { exec } = require("child_process")
              exec(text, (err, stdout) => {
                      if (err) return msg.reply(`----${tlang().title}----\n\n` + err)
                      if (stdout) { return msg.reply(`----${tlang().title}----\n\n` + stdout)  }
              })
         }) 
         
 
     //---------------------------------------------------------------------------
 
 
 cmd({
             pattern: "eval",
             category: "owner",
             filename: __filename,
             desc: "Runs js code on node server."
         },
         async(Suhail, msg, text,{ isCreator }) => {
                if (!isCreator)  return msg.reply(tlang().owner)
                if(!text) return msg.reply("*Uhh PLease, Provide A Query To Run Master*")
                try {
                    let resultTest = eval('const a = async()=>{\n' + text + '\n}\na()');
                    if (typeof resultTest === "object") await msg.reply(JSON.stringify(resultTest));
                    else await msg.reply(resultTest.toString());
                } catch (err) { return  await msg.reply(err.toString()); }
 })
 
   */
 
 //---------------------------------------------------------------------------
 /*cmd({
             pattern: "delnote",
             category: "owner",
             filename: __filename,
             desc: "Deletes note from db."
         },
         async(Suhail, msg, text,{ isCreator }) => {
             const { tlang } = require('../lib/scraper')
             if (!isCreator) return msg.reply(tlang().owner)
             if(!text) return msg.reply("*Uhh PLease, Provide A Note Id. Ex .delnote 1*")
             await delnote(text.split(" ")[0])
              return msg.reply(`Id: ${text.split(" ")[0]}\'s note has been deleted from mongodb.`)
 
         }
     )
   */
 //---------------------------------------------------------------------------
 
 /*cmd({
             pattern: "delallnotes",
             category: "owner",
             filename: __filename,
             desc: "Deletes all notes from db."
         },
         async(Suhail, msg, text, isCreator) => {
             const { tlang } = require('../lib/scraper')
             if (!isCreator) return msg.reply(tlang().owner)
 
 
         }
     )
   
   */
   //---------------------------------------------------------------------------
 
 if(Config.WORKTYPE != 'private')
 {
 cmd({
             pattern: "ban",
             category: "owner",
             filename: __filename,
             desc: "Bans user from using bot."
         },
         async(Suhail, msg, text,{ isCreator}) => {
             if (!isCreator) return msg.reply(tlang().owner)
             try 
             {
                 let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid ? msg.mentionedJid[0] : msg.msg.contextInfo.participant || false;
                 if (!users) return msg.reply(`❌ Please mention any user ${tlang().greet}.`)
                 let pushnamer = Suhail.bot.getName(users);
                 sck1.findOne({ id: users }).then(async(usr) => 
                 {
                     if (!usr) 
                     {
                         await new sck1({ id: users, ban: "true" }).save()
                         return msg.reply(`_Banned ${usr.name} from Using Commands._`)
                     } 
                     if (usr.ban == "true") return msg.reply(`${pushnamer} is already Banned from Using Commands`)
                     await sck1.updateOne({ id: users }, { ban: "true" })
                     return msg.reply(`_Successfully Banned ${usr.name} from Using Commands._`)
                 })
             } catch (e) {  return msg.reply("*Please Reply/Mention Any User.❌*")  }
 
 
        })
      //---------------------------------------------------------------------------
 cmd({
             pattern: "unban",
             category: "misc",
             filename: __filename,
             desc: "Unbans banned user (from using bot)."
         },
         async(Suhail, msg, text,{ isCreator }) => {
             if (!isCreator) return msg.reply(`This command is only for my Owner`)
             try 
             {
                 let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid ? msg.mentionedJid[0] : msg.msg.contextInfo.participant || false;
                 if (!users) return msg.reply("Please mention any user.❌")
                 let pushnamer = Suhail.bot.getName(users);
                 sck1.findOne({ id: users }).then(async(usr) =>{ // console.log(usr.ban);
                     if (!usr) { return msg.reply(`${pushnamer} is unbanned.`);}
                     if (usr.ban !== "true") return await msg.reply(`${usr.name} is already unbanned.`);
                     await sck1.updateOne({ id: users }, { ban: "false" })
                     return await msg.reply(`${usr.name} is free as a bird now`);
                 })
             } catch {  return msg.reply("Please mention any user.❌");  }
         })
 }
     //---------------------------------------------------------------------------
 //                  ADD NOTE  COMMANDS
 //---------------------------------------------------------------------------
 /*
 cmd({
             pattern: "addnote",
             category: "owner",
             desc: "Adds a note on db.",
             filename: __filename
         },
         async(Suhail, msg, text,{ isCreator }) => {
             if (!isCreator) return msg.reply(tlang().owner)
             if (!text) return msg.reply(`🔍 *Please Provide Text To Save In Notes*`)
  
  
 
 
         }
     )
  */
     //---------------------------------------------------------------------------
 cmd({
         pattern: "notes",
         alias : ['note'],
         category: "owner",
         filename: __filename,
         desc: "Shows list of all notes."
     },
     async(Suhail, msg, text,{ isCreator }) => {
   const { tlang } = require('../lib')
 if (!isCreator) return msg.reply(tlang().owner)
 let txt = `╭───── *『 MONGODB NOTES 』* ───◆
 ┃ Here You Can Store Notes For Later Use
 ┃ *------------------------------------------*
 ┃  ┌┤  *✯---- ADD NEW NOTE ----⦿*
 ┃  │✭ *Cmd :* ${prefix}notes add 'Your Text'
 ┃  │✭ *Usage :* Save Text in MongoDb Server
 ┃  ╰───────────────────◆
 ┃
 ┃  ┌┤  *✯---- GET ALL NOTES ----⦿*
 ┃  │✭ *Cmd :* ${prefix}notes all
 ┃  │✭ *Usage :* Read/Get All Saved Notes 
 ┃  ╰───────────────────◆
 ┃
 ┃  ┌┤  *✯---- DELETE A NOTE ----⦿*
 ┃  │✭ *Cmd :* ${prefix}notes del 'note id'
 ┃  │✭ *Usage :* Delete A Single Note By ID Number 
 ┃  ╰───────────────────◆
 ┃
 ┃  ┌┤  *✯---- DELETE ALL NOTES ----⦿*
 ┃  │✭ *Cmd :* ${prefix}notes delall
 ┃  │✭ *Usage :* Delete All Saved Notes 
 ┃  ╰───────────────────◆
 ╰━━━━━━━━━━━━━━━━━━━━━━──⊷` ; 
  
  
  if (!text) return await msg.reply(txt);
  if(text.split(' ')[0].toLowerCase() === "add"  || text.split(' ')[0].toLowerCase() === "new" )
  {
              let txt = text.replace("add", "").replace("new", "")
              await addnote(txt)
             return await msg.reply(`New note "${txt}" added in mongodb.`)
  }
  else if(text.split(' ')[0].toLowerCase() === "all")
  {
             const note_store = new Array()
             let leadtext = `*All Available Notes are:-*\n\n`
             leadtext += await allnotes()
             return await msg.reply(leadtext)
  }
   else if(text.split(' ')[0].toLowerCase() === "delall")
   {
         await delallnote()
         return await msg.reply(`All notes deleted from mongodb.`)
   }
  else if(text.split(' ')[0].toLowerCase() === "del")
  {
       try 
       {
             let id = text.split(' ')[1];
             if (!id || isNaN(id)) { return msg.reply("Uhh Please, Provide a Numeric Note ID. Example: .delnote 1"); }
             await delnote(id)
             //return msg.reply(`Id: ${text.split(" ")[0]}\'s note has been deleted from mongodb.`)
             return await msg.reply(`Note with ID : ${id} has been deleted from MongoDB.`);
       } catch (error) {return msg.reply("Uhh Please, Provide a Note ID. Example: .notes del 1"); }
 
  }
  else { return await msg.reply(txt) ; }
 
 })
 
     //---------------------------------------------------------------------------
 cmd({
             pattern: "alive",
             category: "general",
             filename: __filename,
             desc: "is bot alive??"
         },
         async(Suhail, msg, text, {isCreator}) => {
           let get = text;
           let alivemessage = `*ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ* \n\n_ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт_ \n_Cʀєαtєd вყ : ѕυнαιℓ tєᴄʜ info_\n_If any query : wa.me/923184474176_\n\n\n*_Update Alive Message by adding text with Alive_* \n*Eg: _.alive Your_Alive_Message_*`;
           let urll = '';     
           let image = false;
           let video = false;
           
 if(isCreator && text != "")
 {
        let aliv = await alive.findOne({ id:"Suhail_Md" }) || await new alive({ id:"Suhail_Md"}).save();
        if (text.startsWith("get")) return msg.reply(aliv.get);
        if (text.toLowerCase().startsWith("info") ||  text.toLowerCase().startsWith("settings") ){
         let cap = `*sᴜʜᴀɪʟ-ᴍᴅ • ᴀʟɪᴠᴇ ᴍᴇssᴀɢᴇ sᴇᴛᴛɪɴɢs*\n\n*KeyWords for Alive Message:*\n &user :`+ " ```To add user name,```\n &uptime: ```To add Uptime of bot,```\n &line : ```To add random pickup Line,```\n &quote: ```To add random quote with auther,```"+`\n\n*Update Alive by adding text with Alive*\n`+"```.alive Your_Alive_Message_here```"+`\n\n*Also Add photo and video url in Alive*\n`+"```.alive Your_Alive_Message_here``` https://telegra.ph/file/ec9bc5038601821f2eb84.jpg"+`\n\n*Alive Message With Url And All Keywords*\n`+"```.alive``` url_here \n```Hey &user``` 🍂\n```I Am Suhail-Md, A Multidevice Whatsapp User Bot.```\nBot alive since ```&uptime```\n*Quote:* ```&quote```\n*Pickup Line:* ```&line```\n\n"
         return await Suhail.bot.sendMessage(msg.chat, {image: { url: await botpic()} , caption:cap+Config.caption},{quoted : msg });
        } 
        const linkPattern = /(https?:\/\/\S+)/gi;
        const imageExtensions = ['.jpg', '.jpeg', '.png'];
        const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.gif'];
        let match = text.match(linkPattern) || false ; 
        if(match)
        {
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
        }
        if( video || image) { text = text.replace(urll, ''); }
        await alive.updateOne({ id: 'Suhail_Md' }, { text: text, get : get, url: urll,  image: image,   video: video });
 }
    let aliv = await alive.findOne({ id:"Suhail_Md" }) || await new alive({ id:"Suhail_Md"}).save() ;   
    alivemessage = aliv.text;
   if(alivemessage.includes('&quote')){
      var quoo = await axios.get(`https://favqs.com/api/qotd`);
      let quote = `${quoo.data.quote.body} By ${quoo.data.quote.author}`; 
      alivemessage = alivemessage.replace('&quote', quote);
   }
    alivemessage = alivemessage.replace('&uptime', runtime(process.uptime())).replace('&user', msg.pushName).replace('&line', await (await fetchJson('https://api.popcat.xyz/pickuplines')).pickupline)  ;
          
         
           image = aliv.image || false;
           video=aliv.video || false ;
           urll = aliv.url || await botpic() ;
 
           
 const alivtxt = `${alivemessage}\n\n*Type ${prefix}menu for my command list.*`;
  const messageOptions = image ? { image: { url: urll }, caption: alivtxt }
                         : video? { video: { url: urll },gifPlayback: true, caption: alivtxt }
                         : {  text: alivtxt }
 
   return Suhail.bot.sendMessage(msg.chat, messageOptions,{quoted : msg });
         }
     )
 