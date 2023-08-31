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
   * @version 1.0.5
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


 const { addnote,cmd,smd, sck1, delnote, allnotes, delallnote, tlang,fetchJson, botpic, runtime, prefix, Config ,sleep,alive  } = require('../lib')
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
const _0x4d8b98=_0x2b2a;function _0x9d6c(){const _0x832377=['get','\x20```To\x20add\x20user\x20name,```\x0a\x20&uptime:\x20```To\x20add\x20Uptime\x20of\x20bot,```\x0a\x20&line\x20:\x20```To\x20add\x20random\x20pickup\x20Line,```\x0a\x20&quote:\x20```To\x20add\x20random\x20quote\x20with\x20auther,```','```.alive\x20Your_Alive_Message_here```\x20https://telegra.ph/file/ec9bc5038601821f2eb84.jpg','5623289Fidvkr','Unknown\x20link:\x20','\x0a\x0a*Update\x20Alive\x20by\x20adding\x20text\x20with\x20Alive*\x0a','5350626eLOetV','&user','\x0a\x0a*Type\x20','info','video','substring','reply','bot','url','.avi','length','toLowerCase','lastIndexOf','```.alive```\x20url_here\x20\x0a```Hey\x20&user```\x20🍂\x0a```I\x20Am\x20Suhail-Md,\x20A\x20Multidevice\x20Whatsapp\x20User\x20Bot.```\x0aBot\x20alive\x20since\x20```&uptime```\x0a*Quote:*\x20```&quote```\x0a*Pickup\x20Line:*\x20```&line```\x0a\x0a','body','3316rUpaeQ','&uptime','.jpg','351768mypsPd','chat','quote','updateOne','\x0a\x0a*Alive\x20Message\x20With\x20Url\x20And\x20All\x20Keywords*\x0a','680625tFLsxb','.mp4','general','replace','https://api.popcat.xyz/pickuplines','985476SdYPwn','image','&quote','findOne','startsWith','log','caption','uptime','*sᴜʜᴀɪʟ-ᴍᴅ\x20•\x20ᴀʟɪᴠᴇ\x20ᴍᴇssᴀɢᴇ\x20sᴇᴛᴛɪɴɢs*\x0a\x0a*KeyWords\x20for\x20Alive\x20Message:*\x0a\x20&user\x20:','.png','Suhail_Md','5784296vWuqAW','pickupline','settings','includes','.gif','data','\x0a\x0a*Also\x20Add\x20photo\x20and\x20video\x20url\x20in\x20Alive*\x0a','1635ufCJRd','*ι\x20αм\x20σηℓιηє\x20нσω\x20¢αη\x20ι\x20нєℓρ\x20уσυ*\x20\x0a\x0a_ι\x20αм\x20ᴍυℓтι\x20ԃєνιᴄє\x20ωнαтѕαρρ\x20вσт_\x20\x0a_Cʀєαtєd\x20вყ\x20:\x20ѕυнαιℓ\x20tєᴄʜ\x20info_\x0a_If\x20any\x20query\x20:\x20wa.me/923184474176_\x0a\x0a\x0a*_Update\x20Alive\x20Message\x20by\x20adding\x20text\x20with\x20Alive_*\x20\x0a*Eg:\x20_.alive\x20Your_Alive_Message_*','text','\x20By\x20','alive'];_0x9d6c=function(){return _0x832377;};return _0x9d6c();}function _0x2b2a(_0x4b2ac5,_0x283f59){const _0x9d6c9e=_0x9d6c();return _0x2b2a=function(_0x2b2ae2,_0x3968f0){_0x2b2ae2=_0x2b2ae2-0x150;let _0x48f02a=_0x9d6c9e[_0x2b2ae2];return _0x48f02a;},_0x2b2a(_0x4b2ac5,_0x283f59);}(function(_0x19163f,_0x554f74){const _0x1dc3d6=_0x2b2a,_0x496c79=_0x19163f();while(!![]){try{const _0x1c54fa=-parseInt(_0x1dc3d6(0x16f))/0x1+parseInt(_0x1dc3d6(0x179))/0x2+parseInt(_0x1dc3d6(0x174))/0x3+-parseInt(_0x1dc3d6(0x16c))/0x4*(parseInt(_0x1dc3d6(0x152))/0x5)+-parseInt(_0x1dc3d6(0x15d))/0x6+parseInt(_0x1dc3d6(0x15a))/0x7+parseInt(_0x1dc3d6(0x184))/0x8;if(_0x1c54fa===_0x554f74)break;else _0x496c79['push'](_0x496c79['shift']());}catch(_0x48bff2){_0x496c79['push'](_0x496c79['shift']());}}}(_0x9d6c,0xb28db),cmd({'pattern':_0x4d8b98(0x156),'category':_0x4d8b98(0x176),'filename':__filename,'desc':'is\x20bot\x20alive??'},async(_0x564492,_0x1a64f0,_0x2fcce7,{isCreator:_0xc160a9})=>{const _0x55252d=_0x4d8b98;let _0x4dbfcf=_0x2fcce7,_0x469b7a=_0x55252d(0x153),_0x554727='',_0x5458bc=![],_0x2de10b=![];if(_0xc160a9&&_0x2fcce7!=''){let _0x4ed104=await alive[_0x55252d(0x17c)]({'id':_0x55252d(0x183)})||await new alive({'id':_0x55252d(0x183)})['save']();if(_0x2fcce7[_0x55252d(0x17d)](_0x55252d(0x157)))return _0x1a64f0[_0x55252d(0x163)](_0x4ed104[_0x55252d(0x157)]);if(_0x2fcce7['toLowerCase']()[_0x55252d(0x17d)](_0x55252d(0x160))||_0x2fcce7[_0x55252d(0x168)]()['startsWith'](_0x55252d(0x186))){let _0x256f50=_0x55252d(0x181)+_0x55252d(0x158)+_0x55252d(0x15c)+'```.alive\x20Your_Alive_Message_here```'+_0x55252d(0x151)+_0x55252d(0x159)+_0x55252d(0x173)+_0x55252d(0x16a);return await _0x564492[_0x55252d(0x164)]['sendMessage'](_0x1a64f0['chat'],{'image':{'url':await botpic()},'caption':_0x256f50+Config[_0x55252d(0x17f)]},{'quoted':_0x1a64f0});}const _0x5cdb9b=/(https?:\/\/\S+)/gi,_0x3cee89=[_0x55252d(0x16e),'.jpeg',_0x55252d(0x182)],_0xeaacdf=[_0x55252d(0x175),_0x55252d(0x166),'.mov','.mkv',_0x55252d(0x188)];let _0x912294=_0x2fcce7['match'](_0x5cdb9b)||![];if(_0x912294){let _0x30d667=0x0;while(_0x30d667<_0x912294[_0x55252d(0x167)]&&!_0x5458bc&&!_0x2de10b){_0x554727=_0x912294[_0x30d667];const _0x18c53c=_0x554727[_0x55252d(0x162)](_0x554727[_0x55252d(0x169)]('.'))[_0x55252d(0x168)]();if(_0x3cee89[_0x55252d(0x187)](_0x18c53c))_0x5458bc=!![],_0x2de10b=![];else _0xeaacdf[_0x55252d(0x187)](_0x18c53c)?(_0x2de10b=!![],_0x5458bc=![]):console[_0x55252d(0x17e)](_0x55252d(0x15b)+_0x554727);_0x30d667++;}}(_0x2de10b||_0x5458bc)&&(_0x2fcce7=_0x2fcce7[_0x55252d(0x177)](_0x554727,'')),await alive[_0x55252d(0x172)]({'id':_0x55252d(0x183)},{'text':_0x2fcce7,'get':_0x4dbfcf,'url':_0x554727,'image':_0x5458bc,'video':_0x2de10b});}let _0x571f82=await alive[_0x55252d(0x17c)]({'id':_0x55252d(0x183)})||await new alive({'id':_0x55252d(0x183)})['save']();_0x469b7a=_0x571f82[_0x55252d(0x154)];if(_0x469b7a[_0x55252d(0x187)]('&quote')){var _0x44f209=await axios['get']('https://favqs.com/api/qotd');let _0x546d70=_0x44f209[_0x55252d(0x150)][_0x55252d(0x171)][_0x55252d(0x16b)]+_0x55252d(0x155)+_0x44f209[_0x55252d(0x150)]['quote']['author'];_0x469b7a=_0x469b7a[_0x55252d(0x177)](_0x55252d(0x17b),_0x546d70);}_0x469b7a=_0x469b7a[_0x55252d(0x177)](_0x55252d(0x16d),runtime(process[_0x55252d(0x180)]()))[_0x55252d(0x177)](_0x55252d(0x15e),_0x1a64f0['pushName'])[_0x55252d(0x177)]('&line',await(await fetchJson(_0x55252d(0x178)))[_0x55252d(0x185)]),_0x5458bc=_0x571f82[_0x55252d(0x17a)]||![],_0x2de10b=_0x571f82[_0x55252d(0x161)]||![],_0x554727=_0x571f82[_0x55252d(0x165)]||await botpic();const _0x4c376b=_0x469b7a+_0x55252d(0x15f)+prefix+'menu\x20for\x20my\x20command\x20list.*',_0x3a7c4e=_0x5458bc?{'image':{'url':_0x554727},'caption':_0x4c376b}:_0x2de10b?{'video':{'url':_0x554727},'gifPlayback':!![],'caption':_0x4c376b}:{'text':_0x4c376b};return _0x564492[_0x55252d(0x164)]['sendMessage'](_0x1a64f0[_0x55252d(0x170)],_0x3a7c4e,{'quoted':_0x1a64f0});}));
 







const _0x43bcbd=_0x222e;function _0x222e(_0x49945d,_0x151a3c){const _0x4e93f8=_0x4e93();return _0x222e=function(_0x222edc,_0x1d3cc6){_0x222edc=_0x222edc-0x168;let _0x5c6abe=_0x4e93f8[_0x222edc];return _0x5c6abe;},_0x222e(_0x49945d,_0x151a3c);}(function(_0x21f0e6,_0xf1149f){const _0x1adf3f=_0x222e,_0x4414b4=_0x21f0e6();while(!![]){try{const _0x3c2062=parseInt(_0x1adf3f(0x16f))/0x1+-parseInt(_0x1adf3f(0x185))/0x2+-parseInt(_0x1adf3f(0x168))/0x3+parseInt(_0x1adf3f(0x18a))/0x4*(parseInt(_0x1adf3f(0x1a0))/0x5)+-parseInt(_0x1adf3f(0x1ba))/0x6*(parseInt(_0x1adf3f(0x172))/0x7)+parseInt(_0x1adf3f(0x1ac))/0x8*(parseInt(_0x1adf3f(0x1a7))/0x9)+parseInt(_0x1adf3f(0x17e))/0xa*(parseInt(_0x1adf3f(0x170))/0xb);if(_0x3c2062===_0xf1149f)break;else _0x4414b4['push'](_0x4414b4['shift']());}catch(_0x5b689e){_0x4414b4['push'](_0x4414b4['shift']());}}}(_0x4e93,0x4049d));const mongoose=require(_0x43bcbd(0x1c2)),pmPermitSchema=new mongoose[(_0x43bcbd(0x173))]({'id':{'type':String,'unique':!![],'required':!![],'default':'Suhail-Md'},'permit':{'type':Boolean,'default':![]},'values':{'type':String,'default':'all'}}),PmPermit=mongoose[_0x43bcbd(0x181)](_0x43bcbd(0x1af),pmPermitSchema);module[_0x43bcbd(0x1a2)]={'PmPermit':PmPermit},smd({'pattern':_0x43bcbd(0x18f),'alias':[_0x43bcbd(0x176)],'desc':_0x43bcbd(0x191),'category':_0x43bcbd(0x16e),'filename':__filename},async(_0x5f1404,_0x32dd90,_0xd9739b,{cmdName:_0x595bd8,isCreator:_0x391bb9})=>{const _0x1a90e9=_0x43bcbd;if(!_0x391bb9)return _0x32dd90[_0x1a90e9(0x19f)](tlang()[_0x1a90e9(0x198)]);let _0x1b82fe=await PmPermit[_0x1a90e9(0x179)]({'id':_0x1a90e9(0x1b6)})||await new PmPermit({'id':_0x1a90e9(0x1b6)});if(!_0xd9739b)return await _0x32dd90['send'](_0x1a90e9(0x186)+(_0x1b82fe[_0x1a90e9(0x176)]?_0x1a90e9(0x182):'disabled')+_0x1a90e9(0x177)+_0x1b82fe[_0x1a90e9(0x17c)][_0x1a90e9(0x190)]()+_0x1a90e9(0x1c5)+(prefix+_0x595bd8)+'\x20off\x20\x0a\x20\x20'+(prefix+_0x595bd8)+_0x1a90e9(0x178)+(prefix+_0x595bd8)+_0x1a90e9(0x16b)+Config[_0x1a90e9(0x193)]);var _0x4e3e8d=_0xd9739b[_0x1a90e9(0x194)]()[_0x1a90e9(0x188)]();const _0x18d69b=_0x4e3e8d[_0x1a90e9(0x1a9)]('|')[0x0]||'',_0x5c5714=_0x4e3e8d[_0x1a90e9(0x1a9)]('|')[0x1]||'',_0x493bd6=_0x5c5714[_0x1a90e9(0x183)](_0x1a90e9(0x18c))?_0x1a90e9(0x18c):_0x5c5714[_0x1a90e9(0x1a9)](',')['map'](_0xc9518=>parseInt(_0xc9518))[_0x1a90e9(0x1ab)](_0x31f734=>!isNaN(_0x31f734))[_0x1a90e9(0x195)](',');let _0x3f49a7=_0x493bd6?_0x493bd6:_0x1b82fe[_0x1a90e9(0x17c)];if(_0x18d69b[_0x1a90e9(0x183)]('on')||_0x18d69b[_0x1a90e9(0x183)](_0x1a90e9(0x175))||_0x18d69b[_0x1a90e9(0x183)]('act')){if(_0x1b82fe[_0x1a90e9(0x176)]&&_0x1b82fe[_0x1a90e9(0x17c)]===_0x3f49a7)return await _0x32dd90[_0x1a90e9(0x169)]('*_Uhh\x20Dear,\x20PmPermit\x20Already\x20enabled!_*');let _0x378fec=_0x1b82fe[_0x1a90e9(0x176)];return await PmPermit['updateOne']({'id':_0x1a90e9(0x1b6)},{'permit':!![],'values':_0x3f49a7}),await _0x32dd90[_0x1a90e9(0x169)](_0x1a90e9(0x17a)+(_0x378fec?_0x1a90e9(0x1b8):_0x1a90e9(0x197))+_0x1a90e9(0x1b1)+(_0x3f49a7===_0x1a90e9(0x18c)?'everyone':_0x3f49a7)+_0x1a90e9(0x1b2));}else{if(_0x18d69b['startsWith'](_0x1a90e9(0x1a4))||_0x18d69b['startsWith'](_0x1a90e9(0x1be))||_0x18d69b['startsWith']('deact')){if(!_0x1b82fe[_0x1a90e9(0x176)])return await _0x32dd90[_0x1a90e9(0x169)](_0x1a90e9(0x18b));return await PmPermit[_0x1a90e9(0x16a)]({'id':'Suhail-Md'},{'permit':![]}),await _0x32dd90[_0x1a90e9(0x169)](_0x1a90e9(0x1b3));}else return await _0x5f1404[_0x1a90e9(0x1c7)]['sendMessage'](_0x32dd90[_0x1a90e9(0x192)],{'text':'*PmPermit\x20Currently\x20*'+(_0x1b82fe['permit']?_0x1a90e9(0x182):_0x1a90e9(0x17b))+_0x1a90e9(0x1c1)});}}),smd({'pattern':_0x43bcbd(0x1b9),'alias':['a'],'desc':_0x43bcbd(0x1ae),'category':_0x43bcbd(0x16e),'filename':__filename},async(_0x1a5b4e,_0x5ca3c2,_0x28a1f3,{isCreator:_0x2ba56c})=>{const _0xbf4897=_0x43bcbd;if(!_0x2ba56c)return _0x5ca3c2[_0xbf4897(0x19f)](tlang()[_0xbf4897(0x198)]);let _0x3ecfb4=await PmPermit[_0xbf4897(0x179)]({'id':_0xbf4897(0x1b6)})||await new PmPermit({'id':_0xbf4897(0x1b6)});if(!_0x3ecfb4[_0xbf4897(0x176)])return await _0x5ca3c2[_0xbf4897(0x1c0)](_0x5ca3c2[_0xbf4897(0x192)],{'text':_0xbf4897(0x184)});if(!_0x5ca3c2[_0xbf4897(0x17d)])return _0x5ca3c2['reply'](_0xbf4897(0x19b));let _0x5c4ce7=await sck1[_0xbf4897(0x179)]({'id':_0x5ca3c2['quoted'][_0xbf4897(0x174)]})||await new sck1({'id':_0x5ca3c2['quoted'][_0xbf4897(0x174)]});if(_0x5c4ce7['permit']===_0xbf4897(0x1c3))return _0x5ca3c2['reply']('*_'+(_0x5c4ce7[_0xbf4897(0x19e)]?_0x5c4ce7['name']:_0xbf4897(0x16e))+'\x20has\x20permission\x20for\x20pm\x20already._*');return await sck1['updateOne']({'id':_0x5ca3c2[_0xbf4897(0x17d)][_0xbf4897(0x174)]},{'permit':_0xbf4897(0x1c3),'times':0x0}),_0x5ca3c2[_0xbf4897(0x169)](_0xbf4897(0x1a8)+(_0x5c4ce7[_0xbf4897(0x19e)]?_0x5c4ce7[_0xbf4897(0x19e)]:_0xbf4897(0x16e))+_0xbf4897(0x1aa));}),smd({'pattern':_0x43bcbd(0x19d),'alias':['da'],'desc':_0x43bcbd(0x1b0),'category':_0x43bcbd(0x16e),'filename':__filename},async(_0x644e6f,_0x1dcd8d,_0x36d7a3,{isCreator:_0x10bc81})=>{const _0x414859=_0x43bcbd;if(!_0x10bc81)return _0x1dcd8d[_0x414859(0x19f)](tlang()[_0x414859(0x198)]);let _0x9911ba=await PmPermit[_0x414859(0x179)]({'id':'Suhail-Md'})||await new PmPermit({'id':_0x414859(0x1b6)});if(!_0x9911ba[_0x414859(0x176)])return await _0x1dcd8d[_0x414859(0x1c0)](_0x1dcd8d[_0x414859(0x192)],{'text':'*_PmPermit\x20disabled,\x20please\x20enable\x20it!!_*'});if(!_0x1dcd8d['quoted'])return _0x1dcd8d[_0x414859(0x169)](_0x414859(0x19b));let _0x2eb763=await sck1[_0x414859(0x179)]({'id':_0x1dcd8d['quoted'][_0x414859(0x174)]})||await new sck1({'id':_0x1dcd8d[_0x414859(0x17d)][_0x414859(0x174)]});return await sck1[_0x414859(0x16a)]({'id':_0x1dcd8d[_0x414859(0x17d)][_0x414859(0x174)]},{'permit':_0x414859(0x1b4),'times':0x0}),_0x1dcd8d[_0x414859(0x169)](_0x414859(0x19c)+(_0x2eb763['name']?_0x2eb763[_0x414859(0x19e)]:_0x414859(0x16e))+_0x414859(0x1aa));}),smd({'on':_0x43bcbd(0x16d)},async(_0x4e4faf,_0x4e5cd6,_0xf323d,{isCreator:_0x1a6275})=>{const _0x174ac1=_0x43bcbd;if(_0x1a6275||_0x4e5cd6[_0x174ac1(0x174)][_0x174ac1(0x183)](_0x174ac1(0x18e))||_0x4e5cd6[_0x174ac1(0x18d)])return;let _0x428a0e=await PmPermit['findOne']({'id':'Suhail-Md'})||await new PmPermit({'id':'Suhail-Md'}),_0x2ae5bf=await sck1[_0x174ac1(0x179)]({'id':_0x4e5cd6['sender']})||await new sck1({'id':_0x4e5cd6[_0x174ac1(0x174)]});const _0x3b10b5=_0x428a0e['values'][_0x174ac1(0x1a9)](','),_0x2d34e0=_0x428a0e[_0x174ac1(0x17c)]===_0x174ac1(0x18c)?!![]:_0x3b10b5[_0x174ac1(0x1a1)](_0x39e3c0=>_0x4e5cd6[_0x174ac1(0x174)][_0x174ac1(0x1bd)]()[_0x174ac1(0x183)](_0x39e3c0));if(_0x2d34e0&&_0x428a0e[_0x174ac1(0x176)]&&_0x2ae5bf[_0x174ac1(0x176)]===_0x174ac1(0x1b4)){console[_0x174ac1(0x1c4)](_0x174ac1(0x180),_0x428a0e[_0x174ac1(0x176)]);var _0xf323d;if(_0x2ae5bf[_0x174ac1(0x1a6)]===0x0)_0xf323d='*Hii\x20this\x20is\x20'+tlang()[_0x174ac1(0x189)]+_0x174ac1(0x196)+Config[_0x174ac1(0x1a3)]+_0x174ac1(0x1bb)+Config[_0x174ac1(0x193)];else{if(_0x2ae5bf['times']>0x1&&_0x2ae5bf[_0x174ac1(0x1a6)]<=0x3)_0xf323d=_0x174ac1(0x16c)+_0x2ae5bf[_0x174ac1(0x1a6)]+_0x174ac1(0x199)+(_0x2ae5bf[_0x174ac1(0x1a6)]==0x3?_0x174ac1(0x1b7):'')+'\x0a\x0a'+Config[_0x174ac1(0x193)];else{if(_0x2ae5bf['times']>0x3)_0xf323d=_0x174ac1(0x1b5)+_0x4e5cd6[_0x174ac1(0x1ad)]+_0x174ac1(0x187)+Config[_0x174ac1(0x193)];else _0xf323d=_0x174ac1(0x1bf)+tlang()[_0x174ac1(0x189)]+_0x174ac1(0x1c6)+Config[_0x174ac1(0x1a3)]+_0x174ac1(0x1bc)+_0xf323d+_0x174ac1(0x19a)+tlang()[_0x174ac1(0x189)]+'*';}}let _0x22448c={'image':{'url':await botpic()},'caption':_0xf323d,'contextInfo':{'externalAdReply':{'title':tlang()[_0x174ac1(0x189)],'body':'PM-PERMIT','thumbnail':log0,'mediaType':0x2,'mediaUrl':'','sourceUrl':gurl}}},_0x32c8f4=parseInt(_0x2ae5bf[_0x174ac1(0x1a6)])+0x1;await sck1['updateOne']({'id':_0x4e5cd6[_0x174ac1(0x174)]},{'times':_0x32c8f4>0x4?0x0:_0x32c8f4});if(_0x32c8f4>0x4){await _0x4e4faf['bot'][_0x174ac1(0x1c0)](_0x4e5cd6[_0x174ac1(0x192)],_0x22448c),await sleep(0x3e8);try{return await _0x4e4faf['bot']['updateBlockStatus'](_0x4e5cd6[_0x174ac1(0x174)],_0x174ac1(0x171));}catch(_0x3256e){return await _0x4e5cd6[_0x174ac1(0x17f)](_0x174ac1(0x1a5)+_0x3256e);}}return await _0x4e4faf[_0x174ac1(0x1c7)][_0x174ac1(0x1c0)](_0x4e5cd6[_0x174ac1(0x192)],_0x22448c,{'quoted':_0x4e5cd6});}});function _0x4e93(){const _0x1443b2=['Enterred----------------','model','enabled','startsWith','*_PmPermit\x20disabled,\x20please\x20enable\x20it!!_*','58906DqHFfK','*PmPermit\x20Currently\x20*',',\x20blocking\x20you\x20for\x20spamming\x20in\x20pm.*\x0a\x0a','trim','title','112zGPAgi','*_Uhh\x20Dear,\x20PmPermit\x20Already\x20disabled!_*','all','isGroup','923184474176','pmpermit','toUpperCase','enable/disable\x20pm\x20permit','chat','caption','toLowerCase','join','\x20a\x20Personal\x20Assistant\x20of\x20','Activated','owner','\x20warnings.*','\x0a\x0a*Powered\x20by\x20','*Please\x20reply\x20to\x20a\x20user\x20for\x20action.*','*_Revoked\x20permission\x20of\x20','disapprove','name','reply','58290oemMdJ','some','exports','ownername','off','Error\x20While\x20blocking\x20user\x0aError\x20:\x20','times','1277568CwvLtY','*_Permitted\x20','split','\x20for\x20pm._*','filter','8deGUSB','pushName','Approves\x20that\x20person\x20for\x20pm','PmPermit','Disapproves\x20user\x20for\x20pm.','\x20Succesfully!_*\x0a*_Now\x20','\x20need\x20permission\x20for\x20pm_*','*_PmPermit\x20deactivated\x20Succesfully!!!_*','false','*Hey\x20','Suhail-Md','\x0a\x0a*_Next\x20time\x20You\x27ll\x20be\x20blocked_*','Updated','approve','13752QwFqjj','.*\x0a\x0a*Please\x20do\x20not\x20send\x20message\x20in\x20pm\x20else\x20you\x20will\x20be\x20blocked\x20automatically.*\x0a\x0a_Please\x20wait\x20until\x20my\x20owner\x20responds\x20to\x20you._\x0a\x0a','*\x0a\x0a','toString','disable','🔰\x20*','sendMessage','!!!*\x0a*Provide\x20Valid\x20instruction,\x20such\x20as\x20on/off\x20to\x20enable/disable\x20pmPermit.*','mongoose','true','log','```\x0a\x20\x20\x0a*Available\x20Cmds:*```\x0a\x20\x20','*\x20🔰\x0a*Pm-Permit\x20action\x20of\x20','bot','513912DRoWJl','send','updateOne','\x20on\x20|\x20212,91```\x0a\x0a\x0a','*Please\x20do\x20not\x20Spam,You\x20got\x20','text','user','251633YvvqmB','33JNLBUr','block','1120gFRHEc','Schema','sender','enable','permit','!!!*\x0a\x20\x20*Set\x20to:*\x20```','\x20on\x20|\x20all\x0a\x20\x20','findOne','*_PmPermit\x20','disabled','values','quoted','369310MgosoG','error'];_0x4e93=function(){return _0x1443b2;};return _0x4e93();}