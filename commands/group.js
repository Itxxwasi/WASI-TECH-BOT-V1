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
   * @version 1.0.8
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/

const { sck, sck1,smd, jsonformat, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const moment = require("moment-timezone");
const Levels = require("discord-xp");
const fs = require('fs-extra')
const Jimp = require("jimp");
const sᴜʜᴀɪʟ_ᴍᴅ = require('../lib/commands')

     //---------------------------------------------------------------------------
     smd({
        pattern: "onlyadmin",
        alias:["antimessge"],
        desc: "Only Admins Allow to Send Message, Others kick.",
        category: "group",
        filename: __filename
    },
    async(Suhail, msg, text , { cmdName ,isCreator}) => {
      const _0x4b01ef=_0x5a6c;(function(_0x42afd8,_0x18cab2){const _0x4e6b35=_0x5a6c,_0x2aa161=_0x42afd8();while(!![]){try{const _0x19acf1=parseInt(_0x4e6b35(0xd6))/0x1*(-parseInt(_0x4e6b35(0xd4))/0x2)+parseInt(_0x4e6b35(0xf6))/0x3*(-parseInt(_0x4e6b35(0xf7))/0x4)+parseInt(_0x4e6b35(0xdb))/0x5+-parseInt(_0x4e6b35(0xe4))/0x6*(parseInt(_0x4e6b35(0xd7))/0x7)+parseInt(_0x4e6b35(0xf2))/0x8*(-parseInt(_0x4e6b35(0xe2))/0x9)+parseInt(_0x4e6b35(0xec))/0xa+parseInt(_0x4e6b35(0xe7))/0xb;if(_0x19acf1===_0x18cab2)break;else _0x2aa161['push'](_0x2aa161['shift']());}catch(_0x44723d){_0x2aa161['push'](_0x2aa161['shift']());}}}(_0x4da6,0xd9095));if(!msg[_0x4b01ef(0xdd)])return msg[_0x4b01ef(0xd2)](tlang()[_0x4b01ef(0xd0)]);const groupAdmins=await getAdmin(Suhail.bot,msg),botNumber=await Suhail.bot[_0x4b01ef(0xf5)](Suhail.bot['user']['id']),isAdmins=msg['isGroup']?groupAdmins[_0x4b01ef(0xe3)](msg['sender']):![],isBotAdmins=msg[_0x4b01ef(0xdd)]?groupAdmins[_0x4b01ef(0xe3)](botNumber):![];function _0x5a6c(_0x3f3e7c,_0x356792){const _0x4da637=_0x4da6();return _0x5a6c=function(_0x5a6c42,_0xf5f5e0){_0x5a6c42=_0x5a6c42-0xcf;let _0x21b611=_0x4da637[_0x5a6c42];return _0x21b611;},_0x5a6c(_0x3f3e7c,_0x356792);}if(!isAdmins&&!isCreator)return msg['reply'](tlang()[_0x4b01ef(0xf3)]);function _0x4da6(){const _0x9c8c1f=['enable','*_UHH\x20Please,\x20Provide\x20Admin\x20Role\x20First_*','3469104gRwIaq','admin','\x20Succesfully\x20set\x20to\x20kick\x20message\x20senders!_*\x0a*_Now\x20Only\x20Admins\x20Allow\x20to\x20Send\x20Message\x20in\x20Group_*','decodeJid','3LabDje','3529436fszUMZ','Disabled','act','group','deact','reply','*_Onlyadmin\x20Already\x20Disabled\x20in\x20Current\x20Chat_*','206cFcBdy','onlyadmin','13014HUmNeg','425446MzPaLC','send','toLowerCase','off','6182310CJrGPU','\x20in\x20this\x20Group!_*\x0a\x20*_Toggle:\x20','isGroup','announcement','\x20Succesfully\x20Disable\x20in\x20group!_*\x0a*_Now\x20everyone\x20Send\x20Message\x20in\x20Group_*','findOne','split','27jvVnaa','includes','54OSXEKx','false','updateOne','31428661iArpHf','startsWith','\x20on/off_*','groupSettingUpdate','true','8660850UseQjN','save','chat','*_Onlyadmin\x20Already\x20Enabled\x20in\x20Current\x20Chat_*'];_0x4da6=function(){return _0x9c8c1f;};return _0x4da6();}let checkinfo=await sck[_0x4b01ef(0xe0)]({'id':msg[_0x4b01ef(0xee)]})||await new sck({'id':msg[_0x4b01ef(0xee)]})[_0x4b01ef(0xed)](),textt=text?text[_0x4b01ef(0xd9)]()['trim']():![],action=textt?textt[_0x4b01ef(0xe1)]('\x20')[0x0]:![];if(!action)return await msg[_0x4b01ef(0xd8)]('*_'+cmdName+'\x20'+(checkinfo[_0x4b01ef(0xd5)]==='false'?_0x4b01ef(0xf8):'Enabled')+_0x4b01ef(0xdc)+(prefix+cmdName)+_0x4b01ef(0xe9));else{if(action[_0x4b01ef(0xe8)](_0x4b01ef(0xda))||action[_0x4b01ef(0xe8)](_0x4b01ef(0xd1))||action[_0x4b01ef(0xe8)]('disable')){if(checkinfo['onlyadmin']===_0x4b01ef(0xe5))return await msg[_0x4b01ef(0xd2)](_0x4b01ef(0xd3));return await sck['updateOne']({'id':msg[_0x4b01ef(0xee)]},{'onlyadmin':_0x4b01ef(0xe5)}),await msg[_0x4b01ef(0xd8)]('*'+cmdName+_0x4b01ef(0xdf));}else{if(action[_0x4b01ef(0xe8)]('on')||action[_0x4b01ef(0xe8)](_0x4b01ef(0xcf))||action[_0x4b01ef(0xe8)](_0x4b01ef(0xf0))){if(checkinfo[_0x4b01ef(0xd5)]===_0x4b01ef(0xeb))return await msg[_0x4b01ef(0xd2)](_0x4b01ef(0xef));if(isBotAdmins)return await sck[_0x4b01ef(0xe6)]({'id':msg[_0x4b01ef(0xee)]},{'onlyadmin':_0x4b01ef(0xeb)}),await Suhail.bot[_0x4b01ef(0xea)](msg['chat'],_0x4b01ef(0xde)),await msg[_0x4b01ef(0xd8)]('*'+cmdName+_0x4b01ef(0xf4));else return await msg[_0x4b01ef(0xd2)](_0x4b01ef(0xf1));}else return await msg[_0x4b01ef(0xd2)]('*_Uhh\x20Dear,\x20Please\x20Provide\x20Valid\x20Instruction_*\x0a*Eg:\x20_'+(prefix+cmdName)+'\x20on/off_*');}}
})


//---------------------------------------------------------------------------
smd({
    pattern: "antibot",
    desc: "kick Bot Users from Group!",
    category: "group",
    filename: __filename
},
async(Suhail, msg, text , { cmdName ,isCreator}) => {
  function _0x2d85(_0xaa10,_0x1528ed){const _0x376bc6=_0x376b();return _0x2d85=function(_0x2d8530,_0x1aafaf){_0x2d8530=_0x2d8530-0x88;let _0x6283a1=_0x376bc6[_0x2d8530];return _0x6283a1;},_0x2d85(_0xaa10,_0x1528ed);}const _0x2c4fcf=_0x2d85;(function(_0x847c4d,_0x58ffb9){const _0xa39a68=_0x2d85,_0x181098=_0x847c4d();while(!![]){try{const _0x4acbad=parseInt(_0xa39a68(0xaf))/0x1*(-parseInt(_0xa39a68(0xa4))/0x2)+-parseInt(_0xa39a68(0x96))/0x3+-parseInt(_0xa39a68(0x9e))/0x4*(-parseInt(_0xa39a68(0x95))/0x5)+parseInt(_0xa39a68(0x97))/0x6+-parseInt(_0xa39a68(0x9d))/0x7+-parseInt(_0xa39a68(0xa0))/0x8+parseInt(_0xa39a68(0x9c))/0x9;if(_0x4acbad===_0x58ffb9)break;else _0x181098['push'](_0x181098['shift']());}catch(_0x3ca238){_0x181098['push'](_0x181098['shift']());}}}(_0x376b,0x18e6c));if(!msg[_0x2c4fcf(0xa6)])return msg[_0x2c4fcf(0xac)](tlang()[_0x2c4fcf(0x8d)]);const groupAdmins=await getAdmin(Suhail.bot,msg),botNumber=await Suhail.bot[_0x2c4fcf(0x8f)](Suhail.bot[_0x2c4fcf(0xa5)]['id']),isAdmins=msg[_0x2c4fcf(0xa6)]?groupAdmins['includes'](msg[_0x2c4fcf(0xad)]):![],isBotAdmins=msg[_0x2c4fcf(0xa6)]?groupAdmins[_0x2c4fcf(0x9a)](botNumber):![];if(!isAdmins&&!isCreator)return msg[_0x2c4fcf(0xac)](tlang()[_0x2c4fcf(0x92)]);let checkinfo=await sck[_0x2c4fcf(0xa2)]({'id':msg[_0x2c4fcf(0x9b)]})||await new sck({'id':msg[_0x2c4fcf(0x9b)]})[_0x2c4fcf(0xb1)](),textt=text?text['toLowerCase']()[_0x2c4fcf(0x88)]():![],action=textt?textt[_0x2c4fcf(0xa7)]('\x20')[0x0]:![];function _0x376b(){const _0x26ca64=['act','updateOne','deact','reply','sender','\x20in\x20this\x20Group!_*\x0a\x20*Toggle:\x20_','31743uMncUs','disable','save','trim','*_Antibot\x20Succesfully\x20Disable\x20in\x20group!_*','*_UHH\x20Please,\x20Provide\x20Admin\x20Role\x20First_*','false','Enabled','group','*_Antibot\x20Succesfully\x20set\x20to\x20kick\x20Bot\x20Users!_*','decodeJid','send','*_Antibot\x20Already\x20Enabled\x20in\x20Current\x20Chat_*','admin','*_Antibot\x20Already\x20Disabled\x20in\x20Current\x20Chat_*','startsWith','267310Oakvjx','610857GRgPyR','649932PmmMyY','Disabled','off','includes','chat','5877639YkNrHt','1231230pAMugo','4OsaJqn','antibot','1143136tzUKkL','*_Antibot\x20Currently\x20','findOne','enable','12iaZUIV','user','isGroup','split','\x20on/off_*'];_0x376b=function(){return _0x26ca64;};return _0x376b();}if(!action)return await msg['send'](_0x2c4fcf(0xa1)+(checkinfo[_0x2c4fcf(0x9f)]===_0x2c4fcf(0x8b)?_0x2c4fcf(0x98):_0x2c4fcf(0x8c))+_0x2c4fcf(0xae)+(prefix+cmdName)+_0x2c4fcf(0xa8));else{if(action[_0x2c4fcf(0x94)](_0x2c4fcf(0x99))||action[_0x2c4fcf(0x94)](_0x2c4fcf(0xab))||action[_0x2c4fcf(0x94)](_0x2c4fcf(0xb0))){if(checkinfo['antibot']===_0x2c4fcf(0x8b))return await msg[_0x2c4fcf(0xac)](_0x2c4fcf(0x93));return await sck[_0x2c4fcf(0xaa)]({'id':msg[_0x2c4fcf(0x9b)]},{'antibot':_0x2c4fcf(0x8b)}),await msg[_0x2c4fcf(0x90)](_0x2c4fcf(0x89));}else{if(action[_0x2c4fcf(0x94)]('on')||action[_0x2c4fcf(0x94)](_0x2c4fcf(0xa9))||action[_0x2c4fcf(0x94)](_0x2c4fcf(0xa3))){if(checkinfo[_0x2c4fcf(0x9f)]==='true')return await msg[_0x2c4fcf(0xac)](_0x2c4fcf(0x91));if(isBotAdmins)return await sck['updateOne']({'id':msg['chat']},{'antibot':'true'}),await msg[_0x2c4fcf(0x90)](_0x2c4fcf(0x8e));else return await msg[_0x2c4fcf(0xac)](_0x2c4fcf(0x8a));}else return await msg[_0x2c4fcf(0xac)]('*_Uhh\x20Dear,\x20Please\x20Provide\x20Valid\x20Instruction_*\x0a*Eg:\x20_'+(prefix+cmdName)+_0x2c4fcf(0xa8));}}
})
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
smd({
    pattern: "disable",
    desc: "disable cmds in Group.!",
    category: "group",
    filename: __filename
},
async(Suhail, msg, text , {isCreator}) => {
  const _0x1d9361=_0x127b;(function(_0x123c59,_0x38488e){const _0x4f5927=_0x127b,_0x2dc94b=_0x123c59();while(!![]){try{const _0x1b484b=-parseInt(_0x4f5927(0x1db))/0x1*(-parseInt(_0x4f5927(0x1c0))/0x2)+-parseInt(_0x4f5927(0x1c3))/0x3+parseInt(_0x4f5927(0x1bc))/0x4*(parseInt(_0x4f5927(0x1c5))/0x5)+parseInt(_0x4f5927(0x1ca))/0x6+parseInt(_0x4f5927(0x1e1))/0x7+-parseInt(_0x4f5927(0x1d6))/0x8*(parseInt(_0x4f5927(0x1d4))/0x9)+-parseInt(_0x4f5927(0x1e7))/0xa*(parseInt(_0x4f5927(0x1e0))/0xb);if(_0x1b484b===_0x38488e)break;else _0x2dc94b['push'](_0x2dc94b['shift']());}catch(_0x255304){_0x2dc94b['push'](_0x2dc94b['shift']());}}}(_0xc473,0x3308a));if(!msg[_0x1d9361(0x1bb)])return msg[_0x1d9361(0x1ce)](tlang()[_0x1d9361(0x1d5)]);const groupAdmins=await getAdmin(Suhail.bot,msg),botNumber=await Suhail.bot[_0x1d9361(0x1dd)](Suhail.bot[_0x1d9361(0x1cb)]['id']),isAdmins=msg[_0x1d9361(0x1bb)]?groupAdmins['includes'](msg['sender']):![],isBotAdmins=msg[_0x1d9361(0x1bb)]?groupAdmins[_0x1d9361(0x1cf)](botNumber):![];function _0xc473(){const _0x5035f2=['cmds','2484216cqyAHk','user','\x27\x20is\x20not\x20a\x20bot\x20cmd,\x20Provide\x20valid\x20cmd_*','*_Uhh\x20Dear,\x20I\x20can\x27t\x20disable\x20that\x20cmd_*','send','includes','split','*_Uhh\x20Dear,\x20Theres\x20no\x20cmd\x20disabled\x20in\x20current\x20group_*','disablecmds','test','9jTOFxv','group','1000024agaHtD','find','pattern','false,','\x0a*_Disable\x20cmds\x20:_*\x20```','1IvBDbJ','enable','decodeJid','false','toLowerCase','11418UpETmg','1264900QSGmLC','commands','updateOne','list','```','findOne','6860EBnErX','*_Disable\x20cmds\x20:_*\x20```','alias','*Provide\x20cmd\x20name\x20to\x20disable\x20in\x20group*\x0a*Ex\x20','replace','isGroup','92rfIqmr','chat','*Uhh\x20Dear,\x20Provided\x20cmd\x20already\x20in\x20disable\x20cmds*','info','227118msrhpy','startsWith','trim','77598ksrfVq','\x22\x20Succesfully\x20added\x20in\x20disable\x20cmds_*','79060BsAVtu','reply','disable','admin'];_0xc473=function(){return _0x5035f2;};return _0xc473();}if(!isAdmins&&!isCreator)return msg[_0x1d9361(0x1c6)](tlang()[_0x1d9361(0x1c8)]);function _0x127b(_0x124a51,_0x480f65){const _0xc47391=_0xc473();return _0x127b=function(_0x127b61,_0x4f91c7){_0x127b61=_0x127b61-0x1b8;let _0x3e747f=_0xc47391[_0x127b61];return _0x3e747f;},_0x127b(_0x124a51,_0x480f65);}let checkinfo=await sck[_0x1d9361(0x1e6)]({'id':msg[_0x1d9361(0x1bd)]})||await new sck({'id':msg[_0x1d9361(0x1bd)]})['save'](),textt=text?text[_0x1d9361(0x1df)]()[_0x1d9361(0x1c2)]():![],cmdName=textt?textt[_0x1d9361(0x1d0)]('\x20')[0x0]:'';if(!cmdName)return await msg[_0x1d9361(0x1ce)](_0x1d9361(0x1b9)+prefix+'disable\x20tag(to\x20disabled\x20\x27tag\x27\x20cmd)/info*');else{if(cmdName[_0x1d9361(0x1c1)](_0x1d9361(0x1bf))||cmdName['startsWith'](_0x1d9361(0x1e4))||cmdName[_0x1d9361(0x1c1)](_0x1d9361(0x1c9)))return await msg['send'](checkinfo[_0x1d9361(0x1d2)]===_0x1d9361(0x1de)?_0x1d9361(0x1d1):_0x1d9361(0x1e8)+checkinfo[_0x1d9361(0x1d2)][_0x1d9361(0x1ba)]('false,','')+'```');else{if(cmdName[_0x1d9361(0x1c1)](_0x1d9361(0x1dc))||cmdName[_0x1d9361(0x1c1)](_0x1d9361(0x1c7)))return await msg[_0x1d9361(0x1c6)](_0x1d9361(0x1cd));else{if(cmdName){const cmds=sᴜʜᴀɪʟ_ᴍᴅ['commands'][_0x1d9361(0x1d7)](_0x3d1011=>_0x3d1011[_0x1d9361(0x1d8)]===cmdName)||sᴜʜᴀɪʟ_ᴍᴅ[_0x1d9361(0x1e2)][_0x1d9361(0x1d7)](_0x2cf945=>_0x2cf945[_0x1d9361(0x1b8)]&&_0x2cf945['alias'][_0x1d9361(0x1cf)](cmdName));if(cmds){let newCmd=cmds[_0x1d9361(0x1d8)][_0x1d9361(0x1ba)](/[.*+?^${}()|[\]\\]/g,'\x5c$&'),regex=new RegExp('\x5cb'+newCmd+'\x5cb');if(regex[_0x1d9361(0x1d3)](checkinfo[_0x1d9361(0x1d2)]))return await msg[_0x1d9361(0x1ce)](_0x1d9361(0x1be));var newDisable_Cmd=checkinfo[_0x1d9361(0x1d2)]+','+cmds[_0x1d9361(0x1d8)];await sck[_0x1d9361(0x1e3)]({'id':msg[_0x1d9361(0x1bd)]},{'disablecmds':newDisable_Cmd});let lists=newDisable_Cmd['replace'](_0x1d9361(0x1d9),'');return await msg[_0x1d9361(0x1ce)]('*_\x22'+cmdName+_0x1d9361(0x1c4)+(lists===''?'':_0x1d9361(0x1da)+lists+_0x1d9361(0x1e5)));}else return await msg['reply']('*_\x27'+cmdName+_0x1d9361(0x1cc));}}}}

})
//---------------------------------------------------------------------------
smd({
    pattern: "enable",
    desc: "enable a cmd in Group.!",
    category: "group",
    filename: __filename
},
async(Suhail, msg, text , {isCreator}) => {
  
  const _0x19acb0=_0x2b87;(function(_0x1e83d3,_0x35eaa4){const _0x18315e=_0x2b87,_0x2f59dd=_0x1e83d3();while(!![]){try{const _0x16b8b5=-parseInt(_0x18315e(0xfc))/0x1+parseInt(_0x18315e(0x101))/0x2*(parseInt(_0x18315e(0x103))/0x3)+-parseInt(_0x18315e(0x105))/0x4*(-parseInt(_0x18315e(0x102))/0x5)+parseInt(_0x18315e(0xf8))/0x6+-parseInt(_0x18315e(0x108))/0x7*(parseInt(_0x18315e(0x10a))/0x8)+parseInt(_0x18315e(0x100))/0x9*(-parseInt(_0x18315e(0x115))/0xa)+parseInt(_0x18315e(0x10d))/0xb;if(_0x16b8b5===_0x35eaa4)break;else _0x2f59dd['push'](_0x2f59dd['shift']());}catch(_0x2a57d0){_0x2f59dd['push'](_0x2f59dd['shift']());}}}(_0x59df,0xc228d));if(!msg['isGroup'])return msg[_0x19acb0(0x104)](tlang()[_0x19acb0(0xff)]);const groupAdmins=await getAdmin(Suhail.bot,msg),botNumber=await Suhail.bot[_0x19acb0(0xf6)](Suhail.bot[_0x19acb0(0x10e)]['id']),isAdmins=msg[_0x19acb0(0xfe)]?groupAdmins['includes'](msg[_0x19acb0(0x110)]):![],isBotAdmins=msg[_0x19acb0(0xfe)]?groupAdmins[_0x19acb0(0xf5)](botNumber):![];function _0x59df(){const _0x2fc64a=['165YTTviz','1506531DdbIjN','send','137844wiflDz','startsWith','test','14TQRbZa','updateOne','5147512SXhXBs','false',',all','19530247uQLOXJ','user','admin','sender','save','replace','chat','_There\x27s\x20no\x20cmd\x20disabled\x20with\x20*','710Zslghn','toLowerCase','includes','decodeJid','trim','7264044TkjRho','reply','findOne','*_All\x20disable\x20cmds\x20succesfully\x20enabled_*','1360455GGWakc','\x22\x20Succesfully\x20removed\x20from\x20disable\x20cmds_*','isGroup','group','149949qpNFMz','2emBDDA'];_0x59df=function(){return _0x2fc64a;};return _0x59df();}if(!isAdmins&&!isCreator)return msg[_0x19acb0(0xf9)](tlang()[_0x19acb0(0x10f)]);function _0x2b87(_0x559939,_0x1e01c1){const _0x59dff7=_0x59df();return _0x2b87=function(_0x2b8751,_0x158178){_0x2b8751=_0x2b8751-0xf5;let _0x8a8f58=_0x59dff7[_0x2b8751];return _0x8a8f58;},_0x2b87(_0x559939,_0x1e01c1);}let checkinfo=await sck[_0x19acb0(0xfa)]({'id':msg[_0x19acb0(0x113)]})||await new sck({'id':msg['chat']})[_0x19acb0(0x111)](),textt=text?text[_0x19acb0(0x116)]()[_0x19acb0(0xf7)]():![],cmdName=textt?','+textt['split']('\x20')[0x0]:'',ReplaceCmd=cmdName['replace'](/[.*+?^${}()|[\]\\]/g,'\x5c$&'),regex=new RegExp('\x5cb'+ReplaceCmd+'\x5cb');if(!cmdName||cmdName==='')return await msg[_0x19acb0(0x104)]('*Please\x20provide\x20disabled\x20cmd\x20name\x20to\x20enable\x20it*\x0a*Ex\x20'+prefix+'enable\x20tag(if\x20\x27tag\x27\x20cmd\x20disabled)/all(reset\x20disables)*');else{if(cmdName[_0x19acb0(0x106)](_0x19acb0(0x10c)))return await sck[_0x19acb0(0x109)]({'id':msg['chat']},{'disablecmds':_0x19acb0(0x10b)}),await msg[_0x19acb0(0x104)](_0x19acb0(0xfb));else{if(regex[_0x19acb0(0x107)](checkinfo['disablecmds'])&&checkinfo['disablecmds'][_0x19acb0(0xf5)](cmdName)){let newCmds=checkinfo['disablecmds'][_0x19acb0(0x112)](regex,'');return await sck[_0x19acb0(0x109)]({'id':msg[_0x19acb0(0x113)]},{'disablecmds':newCmds}),await msg[_0x19acb0(0x104)]('*_\x22'+cmdName[_0x19acb0(0x112)](',','')+_0x19acb0(0xfd));}else return await msg[_0x19acb0(0x104)](_0x19acb0(0x114)+cmdName[_0x19acb0(0x112)](',','')+'*\x20name_');}}

})
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
smd({
            pattern: "join",
            desc: "joins group by link",
            category: "owner",
	 filename: __filename,
            use: '<group link.>',
        },
        async(Suhail, msg, text,{ isCreator }) => {
            if (!isCreator) return msg.reply(tlang().owner);
            if (!text) return msg.reply(`Please give me Query ${tlang().greet}`);
            if (!text.split(" ")[0] && !text.split(" ")[0].includes("whatsapp.com")) return await msg.reply("Link Invalid, Please Send a valid whatsapp Group Link!");
            let result = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await Suhail.bot.groupAcceptInvite(result)
                .then((res) => msg.reply("🟩Joined Group"))
                .catch((err) => msg.reply("Error in Joining Group"));

        }
    )
    //---------------------------------------------------------------------------
/*

smd({
        pattern: "support",
        desc: "Sends official support group link.",
        category: "group",
        filename: __filename,
    },
    async(Suhail.bot, msg, text) => {
        msg.reply(`*Check your Pm ${tlang().greet}*`);
        await Suhail.bot.sendMessage(`${msg.sender}`, {
            image: log0,
            caption: `*Group Name: Secktor-Support*\n*Group Link:* https://chat.whatsapp.com/Bl2F9UTVU4CBfZU6eVnrbC`,
        });

    }
)
*/
//===========================================================================
smd({
    pattern: "gdesc",
    alias : ['setgdesc','gdesc'],
    desc: "Set Description of Group",
    category: "group",
    filename: __filename,
    use: '<enter Description Text>',
},
async(Suhail, msg, text,{ isCreator }) => {
    if (!msg.isGroup) return msg.reply(tlang().group);
    if(!text) return await msg.reply("*Provide Description text, You wants to Set*")
    const groupAdmins = await getAdmin(Suhail.bot, msg)
    const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
    const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
    if (!isBotAdmins) return await msg.reply(`*_I'm Not Admin In This Group, Idiot_*`); 
    if (!isAdmins) return msg.reply(tlang().admin);
    
    try {
        await Suhail.bot.groupUpdateDescription(msg.chat, text);
        msg.reply('*_✅Group description Updated Successfuly.!_*') 
        return await Suhail.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
    } catch(e) { return await Suhail.bot.sendMessage(users , {text :"Error While Updating Group Description\nReason : " + e, } ,{quoted : msg})   }
}
)
//---------------------------------------------------------------------------
smd({
    pattern: "gname",
    alias : ['setgname','gname'],
    desc: "Set Description of Group",
    category: "group",
    filename: __filename,
    use: '<enter Description Text>',
},
async(Suhail, msg, text,{ isCreator }) => {
    if (!msg.isGroup) return msg.reply(tlang().group);
    if(!text) return await msg.reply("*Uhh Dear, Give text to Update This Group Name*")
    const groupAdmins = await getAdmin(Suhail.bot, msg)
    const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
    const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
    if (!isBotAdmins) return await msg.reply(`*_I'm Not Admin In This Group, Idiot_*`); 
    if (!isAdmins) return msg.reply(tlang().admin);
    
    try {
        await Suhail.bot.groupUpdateSubject(msg.chat, text)
        msg.reply('*_✅Group Name Updated Successfuly.!_*') 
        return await Suhail.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
    } catch(e) { return await Suhail.bot.sendMessage(users , {text :"_Error While Updating Group Name_\nReason : " + e, } ,{quoted : msg})   }
}
)
    //---------------------------------------------------------------------------
    smd({
        pattern: "antifake",
        desc: "Allow to Join Group For Specific Country Code",
        category: "group",
        filename: __filename,
    },
    async(Suhail, msg, text,{ isCreator }) => {
        const _0x3d53e3=_0x4d30;(function(_0x3289e8,_0x35a484){const _0x3f55e9=_0x4d30,_0x4c3533=_0x3289e8();while(!![]){try{const _0x57c2cd=-parseInt(_0x3f55e9(0x15f))/0x1+-parseInt(_0x3f55e9(0x154))/0x2*(-parseInt(_0x3f55e9(0x15a))/0x3)+-parseInt(_0x3f55e9(0x163))/0x4*(parseInt(_0x3f55e9(0x145))/0x5)+-parseInt(_0x3f55e9(0x143))/0x6*(-parseInt(_0x3f55e9(0x14c))/0x7)+-parseInt(_0x3f55e9(0x149))/0x8+-parseInt(_0x3f55e9(0x142))/0x9+parseInt(_0x3f55e9(0x14f))/0xa;if(_0x57c2cd===_0x35a484)break;else _0x4c3533['push'](_0x4c3533['shift']());}catch(_0x3b6134){_0x4c3533['push'](_0x4c3533['shift']());}}}(_0x4e47,0x29ecc));if(!msg[_0x3d53e3(0x14a)])return msg[_0x3d53e3(0x146)](tlang()['group']);const groupMetadata=msg[_0x3d53e3(0x14a)]?await Suhail.bot[_0x3d53e3(0x151)](msg['chat'])[_0x3d53e3(0x13f)](_0x315e70=>{}):'',participants=msg[_0x3d53e3(0x14a)]?await groupMetadata[_0x3d53e3(0x140)]:'',groupAdmins=await getAdmin(Suhail.bot,msg),isAdmins=msg[_0x3d53e3(0x14a)]?groupAdmins[_0x3d53e3(0x148)](msg[_0x3d53e3(0x159)]):![];if(!isAdmins&&!isCreator)return msg[_0x3d53e3(0x146)](tlang()['admin']);function _0x4d30(_0x518d0a,_0x4df86b){const _0x4e47ac=_0x4e47();return _0x4d30=function(_0x4d308,_0x5dbaea){_0x4d308=_0x4d308-0x13e;let _0x3f5c8a=_0x4e47ac[_0x4d308];return _0x3f5c8a;},_0x4d30(_0x518d0a,_0x4df86b);}let checkinfo=await sck[_0x3d53e3(0x141)]({'id':msg[_0x3d53e3(0x162)]})||await new sck({'id':msg[_0x3d53e3(0x162)]})[_0x3d53e3(0x14b)]();if(text[_0x3d53e3(0x15b)]()[_0x3d53e3(0x161)](_0x3d53e3(0x152))||text[_0x3d53e3(0x15b)]()[_0x3d53e3(0x161)](_0x3d53e3(0x158))||text[_0x3d53e3(0x15b)]()[_0x3d53e3(0x161)](_0x3d53e3(0x144))){if(checkinfo[_0x3d53e3(0x15d)]==_0x3d53e3(0x155))return await msg[_0x3d53e3(0x15e)](_0x3d53e3(0x147));return await sck[_0x3d53e3(0x14e)]({'id':msg[_0x3d53e3(0x162)]},{'antifake':'false'}),await msg[_0x3d53e3(0x15e)]('*Anti_Fake\x20Disable\x20Succesfully!*');}else{if(!text)return await msg[_0x3d53e3(0x15e)]('*_Antifake\x20'+(checkinfo[_0x3d53e3(0x15d)]===_0x3d53e3(0x155)?_0x3d53e3(0x156):_0x3d53e3(0x150)+checkinfo['antifake']+'\x22')+_0x3d53e3(0x160));}function _0x4e47(){const _0x1417c1=['sender','1119OfZcoi','toLowerCase','antifake\x2092_*','antifake','send','95149nQhOqw','\x20Country\x20Code!_*\x0a\x20*Provide\x20Country\x20code\x20to\x20Update\x20Antifake\x20Status*\x0a*Eg:\x20_.antifake\x2092_*','startsWith','chat','4OBMwaq','*Anti_Fake\x20Succesfully\x20set\x20to\x20\x22','catch','participants','findOne','803394fyIvKZ','1356612CgXDOm','disable','319485kWURrN','reply','*Anti_Fake\x20Already\x20Disabled\x20In\x20Current\x20Chat!*','includes','2030144kUUVSD','isGroup','save','7OpPQtf','*_Please\x20provide\x20a\x20country\x20code\x20First_*\x0a\x20*_Only\x20numbers\x20to\x20join\x20this\x20group._*\x0a*_eg:\x20','updateOne','4462100VzFSpa','set\x20to\x20\x22','groupMetadata','off','split','8ZBiSLh','false','Not\x20set\x20to\x20any','\x22!*\x0a*_Now\x20People\x20Joined\x20Group\x20Who\x27s\x20Number\x20Start\x20With\x20','deact'];_0x4e47=function(){return _0x1417c1;};return _0x4e47();}let country_code=text?parseInt(text[_0x3d53e3(0x153)]('\x20')[0x0]):![];if(!text||!country_code||isNaN(country_code)||country_code===0x0)return await msg[_0x3d53e3(0x15e)](_0x3d53e3(0x14d)+prefix+_0x3d53e3(0x15c));else{if(country_code)return await sck[_0x3d53e3(0x14e)]({'id':msg['chat']},{'antifake':''+country_code}),await msg['send'](_0x3d53e3(0x13e)+country_code+_0x3d53e3(0x157)+country_code+'_*');else return await msg['send']('*_Please\x20provide\x20a\x20Valid\x20country\x20code\x20First_*\x0a\x20*_Only\x20numbers\x20to\x20join\x20this\x20group._*\x0a*_eg:\x20'+prefix+_0x3d53e3(0x15c));}
});

//---------------------------------------------------------------------------
smd({
        pattern: "antidemote",
        desc: "Detects Promote and Automaticaly demote promoted person.", 
        category: "group",
        filename: __filename,
    },
    async(Suhail, msg, text,{ isCreator }) => {
        if (!msg.isGroup) return msg.reply(tlang().group);
        const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
        const participants = msg.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Suhail.bot, msg)
        const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
        if (!isAdmins && !isCreator) return msg.reply(tlang().admin);
            
      let checkinfo = await sck.findOne({ id : msg.chat })  || await new sck({ id: msg.chat}).save();
      if (text.toLowerCase().startsWith("on") || text.toLowerCase().startsWith("act") || text.toLowerCase().startsWith("enable") ) {
        if (checkinfo.antidemote == 'true') return await msg.send("*Anti_Demote Already Enabled In Current Chat!*")
        await sck.updateOne({ id: msg.chat }, { antidemote : 'true' });
        return await msg.send("*Anti_Demote Enable Succesfully! _No One Demote Here Now_.*")
      }else if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable") ) {
        if (checkinfo.antidemote == 'false') return await msg.send("*Anti_Demote Already Disabled In Current Chat!*")
        await sck.updateOne({ id: msg.chat }, { antidemote : 'false' });
        return await msg.send("*Anti_Demote Disable Succesfully!*")
      }
      else return await msg.reply(`*Uhh Dear, Please Toggle between "On" And "Off".* \n*_To Enable & Disable Stop Demoting Peoples!_*`)
});
    //---------------------------------------------------------------------------
    smd({
        pattern: "antipromote",
        desc: "Detects Promote and Automaticaly demote promoted person.", 
        category: "group",
        filename: __filename,
    },
    async(Suhail, msg, text,{ isCreator }) => {
        if (!msg.isGroup) return msg.reply(tlang().group);
        const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
        const participants = msg.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Suhail.bot, msg)
        const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
        if (!isAdmins && !isCreator) return msg.reply(tlang().admin);
            
      let checkinfo = await sck.findOne({ id : msg.chat })  || await new sck({ id: msg.chat}).save();
      if (text.toLowerCase().startsWith("on") || text.toLowerCase().startsWith("act") || text.toLowerCase().startsWith("enable") ) {
        if (checkinfo.antipromote == 'true') return await msg.send("*Anti_Promote Already Enabled In Current Chat!*")
        await sck.updateOne({ id: msg.chat }, { antipromote : 'true' });
        return await msg.send("*Anti_Promote Enable Succesfully! _No One Promote Here Now_.*")
      }else if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable") ) {
        if (checkinfo.antipromote == 'false') return await msg.send("*Anti_Promote Already Disabled In Current Chat!*")
        await sck.updateOne({ id: msg.chat }, { antipromote : 'false' });
        return await msg.send("*Anti_Promote Disable Succesfully!*")
      }
      else return await msg.reply(`*Uhh Dear, Please Toggle between "On" And "Off".* \n*_To Stop Promoting Peoples in Chat_*`)
});
    //---------------------------------------------------------------------------
    smd({
        pattern: "pdm",
        desc: "Detect Promote/Demote Users And Send Alerts in Chat ",
        category: "group",
        filename: __filename,
    },
    async(Suhail, msg, text,{ isCreator }) => {
        if (!msg.isGroup) return msg.reply(tlang().group);
        const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
        const participants = msg.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Suhail.bot, msg)
        const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
        if (!isAdmins && !isCreator) return msg.reply(tlang().admin);
            
      let checkinfo = await sck.findOne({ id : msg.chat })  || await new sck({ id: msg.chat}).save();
      if (text.toLowerCase().startsWith("on") || text.toLowerCase().startsWith("act") || text.toLowerCase().startsWith("enable") ) {
        if (checkinfo.pdm == 'true') return await msg.send("*Promote/Demote Alerts Already Enabled In Current Chat!*")
        await sck.updateOne({ id: msg.chat }, { pdm : 'true' });
        return await msg.send("*Promote/Demote Alerts Enable Succesfully!*")
      }else if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable") ) {
        if (checkinfo.pdm == 'false') return await msg.send("*Promote/Demote Alerts Already Disabled In Current Chat!*")
        await sck.updateOne({ id: msg.chat }, { pdm : 'false' });
        return await msg.send("*Promote/Demote Alerts Disable Succesfully!*")
      }
      else return await msg.reply(`*Uhh Dear, Please Toggle between "On" And "Off".* \n*_To get And Stop Promote/Demote Alerts_*`)
});
    //---------------------------------------------------------------------------
    smd({
            pattern: "warn",
            desc: "Warns user in Group.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Suhail, msg, text,{ isCreator }) => {
            if (!msg.isGroup) return msg.reply(`This Command is only for group.`)
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
            if (!isAdmins) return msg.reply('This command is only for Admin.')
            const S=m;function Z(){const F=['126402oKAcRa','date','Removing\x20User\x20because\x20Warn\x20limit\x20exceeded\x0a\x0a*All\x20Warnings.*\x0a','chat','8qachoN','580yXDZAo','groupParticipantsUpdate','114528WgITIL','reply','groupMetadata','│\x20*🔰Time:-*\x20','find','locale','log','196311jXGmuc','quoted','save','*\x0a╭─────────────◆\x0a│\x20*🍁In\x20Group:-*\x20','759700KYdstU','warnedby','pushName','reason','8dUtMfa','2BlOCqD','550MdvhLT','*----Warn----*\x0aUser:\x20@','54828ViphBF','subject','1100323uEahgH','30204512uUuJcj','*There\x20are\x20total\x20','split','│\x20*⚠️Warned\x20by:-*\x20','length','sender','setDefault','group','Asia/KOLKATA','../config','215XZLRSE','HH:mm:ss','warn','remove'];Z=function(){return F;};return Z();}(function(U,w){const c=m,s=U();while(!![]){try{const q=parseInt(c(0x1eb))/0x1*(parseInt(c(0x1f0))/0x2)+parseInt(c(0x1e7))/0x3*(parseInt(c(0x1ef))/0x4)+-parseInt(c(0x200))/0x5*(-parseInt(c(0x204))/0x6)+-parseInt(c(0x1f5))/0x7*(-parseInt(c(0x1dd))/0x8)+-parseInt(c(0x1f3))/0x9*(-parseInt(c(0x1de))/0xa)+parseInt(c(0x1f1))/0xb*(parseInt(c(0x1e0))/0xc)+-parseInt(c(0x1f6))/0xd;if(q===w)break;else s['push'](s['shift']());}catch(B){s['push'](s['shift']());}}}(Z,0x707d4));function m(Y,U){const w=Z();return m=function(s,q){s=s-0x1dd;let B=w[s];return B;},m(Y,U);}if(!msg['quoted'])return msg[S(0x1e1)]('Please\x20quote\x20a\x20user\x20master.');const timesam=moment(moment())['format'](S(0x201));moment['tz'][S(0x1fc)](S(0x1fe))[S(0x1e5)]('id');try{let metadata=await Suhail.bot[S(0x1e2)](msg[S(0x207)]);await new warndb({'id':msg['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202),'reason':text,'group':metadata[S(0x1f4)],'warnedby':msg[S(0x1ed)],'date':timesam})[S(0x1e9)]();let ment=msg[S(0x1e8)][S(0x1fb)];Suhail.bot['sendMessage'](msg['chat'],{'text':S(0x1f2)+msg[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+'\x0aWith\x20Reason:\x20'+text+'\x0aWarned\x20by:\x20'+msg[S(0x1ed)],'mentions':[msg[S(0x1e8)][S(0x1fb)]]},{'quoted':msg});let h=await warndb[S(0x1e4)]({'id':msg['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});const Config=require(S(0x1ff));if(h[S(0x1fa)]>Config['warncount']){teskd=S(0x206);let h=await warndb[S(0x1e4)]({'id':msg[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});teskd+=S(0x1f7)+h[S(0x1fa)]+'\x20\x20warnings.*\x0a';for(let i=0x0;i<h[S(0x1fa)];i++){teskd+='*'+(i+0x1)+S(0x1ea)+h[i][S(0x1fd)]+'\x0a',teskd+=S(0x1e3)+h[i][S(0x205)]+'\x0a',teskd+=S(0x1f9)+h[i][S(0x1ec)]+'\x0a',teskd+='│\x20_📍Reason:\x20'+h[i][S(0x1ee)]+'_\x0a╰─────────────◆\x0a\x0a';}msg[S(0x1e1)](teskd),await Suhail.bot[S(0x1df)](msg['chat'],[msg['quoted'][S(0x1fb)]],S(0x203));}}catch(Y){console[S(0x1e6)](Y);}
            
        }
    )
    //---------------------------------------------------------------------------
    smd({
    pattern: "common",
    desc: "Get common participants in two groups, and kick using .common kick, jid",
    category: "owner",
    filename: __filename,
},
async(Suhail, citel, text,{ isCreator }) => {         
var _0x87a531=_0xd64c;(function(_0x26f08a,_0x14609e){var _0x98c35b=_0xd64c,_0x1aec32=_0x26f08a();while(!![]){try{var _0x14857e=-parseInt(_0x98c35b(0xcb))/0x1+-parseInt(_0x98c35b(0xcf))/0x2+parseInt(_0x98c35b(0xe7))/0x3*(parseInt(_0x98c35b(0xdb))/0x4)+-parseInt(_0x98c35b(0xe4))/0x5+-parseInt(_0x98c35b(0xd0))/0x6+parseInt(_0x98c35b(0xd2))/0x7+parseInt(_0x98c35b(0xda))/0x8*(parseInt(_0x98c35b(0xdf))/0x9);if(_0x14857e===_0x14609e)break;else _0x1aec32['push'](_0x1aec32['shift']());}catch(_0x311bff){_0x1aec32['push'](_0x1aec32['shift']());}}}(_0x4a96,0xef9b1));let jids=await parsedJid(text);var group1,group2;if(jids[_0x87a531(0xee)]>0x1)group1=jids[0x0][_0x87a531(0xca)](_0x87a531(0xd5))?jids[0x0]:citel[_0x87a531(0xdd)],group2=jids[0x1][_0x87a531(0xca)](_0x87a531(0xd5))?jids[0x1]:citel[_0x87a531(0xdd)];else{if(jids[_0x87a531(0xee)]==0x1)group1=citel[_0x87a531(0xdd)],group2=jids[0x0]['includes']('@g.us')?jids[0x0]:citel[_0x87a531(0xdd)];else return await citel['send'](_0x87a531(0xdc));}if(group2===group1)return await citel[_0x87a531(0xd1)](_0x87a531(0xe2));var g1=await Suhail.bot['groupMetadata'](group1),g2=await Suhail.bot['groupMetadata'](group2),common=g1[_0x87a531(0xe8)]['filter'](({id:_0x215617})=>g2['participants'][_0x87a531(0xd3)](({id:_0xa9d3a3})=>_0xa9d3a3===_0x215617))||[];if(common[_0x87a531(0xee)]==0x0)return await citel[_0x87a531(0xd1)]('Theres\x20no\x20Common\x20Users\x20in\x20Both\x20Groups');let kick=text[_0x87a531(0xe9)](',')[0x0][_0x87a531(0xce)]()===_0x87a531(0xe3)?!![]:![],reason=![];var heading=_0x87a531(0xec);if(kick){let chat={'chat':group1};heading='\x20\x20*Kicking\x20Common\x20Participants*';const groupAdmins=await getAdmin(Suhail.bot,chat)||[];var botNumber=await Suhail.bot['decodeJid'](Suhail.bot['user']['id']),isBotAdmins=groupAdmins[_0x87a531(0xca)](botNumber)||![],isAdmins=groupAdmins[_0x87a531(0xca)](citel[_0x87a531(0xe0)])||![];(!isBotAdmins||!isAdmins)&&(kick=![],heading=_0x87a531(0xe6)),!isBotAdmins&&(reason='*❲❒❳\x20Reason:*\x20_I\x20Can\x27t\x20Kick\x20Common\x20Participants\x20Without\x20Getting\x20Admin\x20Role,So\x20Provide\x20Admin\x20Role\x20First,_\x0a'),!isAdmins&&(reason='*❲❒❳\x20Reason:*\x20_Uhh\x20Dear,\x20Only\x20Group\x20Admin\x20Can\x20Kick\x20Common\x20Users\x20Through\x20This\x20Cmd_\x0a');}function _0xd64c(_0x32c6f8,_0x2d697c){var _0x4a96f3=_0x4a96();return _0xd64c=function(_0xd64cbf,_0x5aabfa){_0xd64cbf=_0xd64cbf-0xc9;var _0x256505=_0x4a96f3[_0xd64cbf];return _0x256505;},_0xd64c(_0x32c6f8,_0x2d697c);}function _0x4a96(){var _0x375d41=['sender','push','Please\x20Provide\x20Valid\x20Group\x20Jid','kick','7605210eeYGmA','923184474176@s.whatsapp.net','\x20\x20*乂\x20Can\x27t\x20Kick\x20Common\x20Participants*','138543ZVCNcn','participants','split','@s.whatsapp.net','\x0a*❲❒❳\x20Group2:*\x20','\x20\x20\x20*List\x20Of\x20Common\x20Participants*','user','length','caption','includes','946278jKrKhT','_Members_\x0a\x0a\x0a','\x0a*❲❒❳\x20Group1:*\x20','trim','1283014cwDqub','6253704DutAwi','send','12524057XHlruT','some','\x0a\x0a\x0a©','@g.us','923004591719@s.whatsapp.net','\x20\x20*⬡*\x20@','\x20\x20\x20\x0a','groupParticipantsUpdate','3132728ehxlpC','120EgDLWk','*_Uhh\x20Dear,\x20Please\x20Provide\x20a\x20Group\x20Jid,_*\x0a*To\x20Get\x20common\x20participants\x20in\x20two\x20groups,*\x0a*Also\x20kick\x20using\x20.common\x20kick,\x20jid*','chat','Error\x20removing\x20participants:','45UpvHCU'];_0x4a96=function(){return _0x375d41;};return _0x4a96();}var msg='\x20'+heading+_0x87a531(0xd8)+(reason?reason:'')+_0x87a531(0xcd)+g1['subject']+_0x87a531(0xeb)+g2['subject']+'\x0a*❲❒❳\x20Common\x20Counts:*\x20_'+common[_0x87a531(0xee)]+_0x87a531(0xcc),commons=[];common['map'](async _0x5484ff=>{var _0x4ac9dd=_0x87a531;msg+=_0x4ac9dd(0xd7)+_0x5484ff['id'][_0x4ac9dd(0xe9)]('@')[0x0]+'\x0a',commons[_0x4ac9dd(0xe1)](_0x5484ff['id']['split']('@')[0x0]+_0x4ac9dd(0xea));}),await citel[_0x87a531(0xd1)](msg+(_0x87a531(0xd4)+Config[_0x87a531(0xc9)]),{'mentions':commons});if(kick&&!reason)try{var botNumber=await Suhail.bot['decodeJid'](Suhail.bot[_0x87a531(0xed)]['id']);for(const user of commons){if(botNumber===user||user===_0x87a531(0xd6)||user===_0x87a531(0xe5))continue;await new Promise(_0x5d963f=>setTimeout(_0x5d963f,0x3e8)),await Suhail.bot[_0x87a531(0xd9)](group1,[user],'remove');}}catch(_0x5636c1){console['error'](_0x87a531(0xde),_0x5636c1);}return;
});
//---------------------------------------------------------------------------
smd({
    pattern: "diff",
    desc: "Get difference of participants in two groups",
    category: "owner",
    filename: __filename,

},
async(Suhail, citel, text,{ isCreator }) => {          
function _0x32d6(_0x1c5452,_0xd9c18b){var _0x2c296b=_0x2c29();return _0x32d6=function(_0x32d6d6,_0x371807){_0x32d6d6=_0x32d6d6-0x1ae;var _0x3418f7=_0x2c296b[_0x32d6d6];return _0x3418f7;},_0x32d6(_0x1c5452,_0xd9c18b);}function _0x2c29(){var _0x45aad0=['\x20\x20*⬡*\x20@','send','includes','filter','\x0a*❲❒❳\x20Differ\x20Counts:*\x20_','length','participants','3634530paWHrR','subject','48PrVAuc','130RPKGzs','chat','\x0a\x0a\x0a©','8110230jpjYbb','groupMetadata','\x20\x20*乂\x20List\x20Of\x20Different\x20Participants*\x20\x0a\x0a*❲❒❳\x20Group1:*\x20','7080cVcMZN','4qYOlNg','split','1733097idxGVh','@s.whatsapp.net','push','@g.us','\x0a*❲❒❳\x20Group2:*\x20','321146RceypW','map','*_Uhh\x20Dear,\x20Please\x20Provide\x20a\x20Group\x20Jid_*\x0a*_To\x20Get\x20Different\x20participants\x20with\x20in\x20group_*','190807KCVkbV','388449gIdOpg','_Members_\x0a\x0a\x0a'];_0x2c29=function(){return _0x45aad0;};return _0x2c29();}var _0x1d7f58=_0x32d6;(function(_0x17cc23,_0x4b891e){var _0x39378e=_0x32d6,_0x3fed02=_0x17cc23();while(!![]){try{var _0x3a2e9b=parseInt(_0x39378e(0x1c5))/0x1+-parseInt(_0x39378e(0x1ba))/0x2+parseInt(_0x39378e(0x1bd))/0x3*(-parseInt(_0x39378e(0x1bb))/0x4)+parseInt(_0x39378e(0x1b7))/0x5+-parseInt(_0x39378e(0x1b1))/0x6+parseInt(_0x39378e(0x1c2))/0x7*(-parseInt(_0x39378e(0x1b3))/0x8)+-parseInt(_0x39378e(0x1c6))/0x9*(-parseInt(_0x39378e(0x1b4))/0xa);if(_0x3a2e9b===_0x4b891e)break;else _0x3fed02['push'](_0x3fed02['shift']());}catch(_0x4a2b92){_0x3fed02['push'](_0x3fed02['shift']());}}}(_0x2c29,0xde944));let jids=await parsedJid(text);var group1,group2;if(jids[_0x1d7f58(0x1af)]>0x1)group1=jids[0x0][_0x1d7f58(0x1ca)]('@g.us')?jids[0x0]:citel[_0x1d7f58(0x1b5)],group2=jids[0x1][_0x1d7f58(0x1ca)]('@g.us')?jids[0x1]:citel[_0x1d7f58(0x1b5)];else{if(jids[_0x1d7f58(0x1af)]==0x1)group1=citel[_0x1d7f58(0x1b5)],group2=jids[0x0][_0x1d7f58(0x1ca)](_0x1d7f58(0x1c0))?jids[0x0]:citel['chat'];else return await citel['send'](_0x1d7f58(0x1c4));}if(group2===group1)return await citel[_0x1d7f58(0x1c9)]('Please\x20Provide\x20Valid\x20Group\x20Jid');var g1=await Suhail.bot[_0x1d7f58(0x1b8)](group1),g2=await Suhail.bot[_0x1d7f58(0x1b8)](group2),diff=g1[_0x1d7f58(0x1b0)][_0x1d7f58(0x1cb)](({id:_0x240eaa})=>!g2['participants']['some'](({id:_0x5fe1e0})=>_0x5fe1e0===_0x240eaa))||[];if(diff[_0x1d7f58(0x1af)]==0x0)return await citel[_0x1d7f58(0x1c9)]('Theres\x20no\x20Different\x20Users\x20in\x20Both\x20Groups');var msg=_0x1d7f58(0x1b9)+g1[_0x1d7f58(0x1b2)]+_0x1d7f58(0x1c1)+g2[_0x1d7f58(0x1b2)]+_0x1d7f58(0x1ae)+diff[_0x1d7f58(0x1af)]+_0x1d7f58(0x1c7),diffs=[];diff[_0x1d7f58(0x1c3)](async _0x299f43=>{var _0x5dc1b3=_0x1d7f58;msg+=_0x5dc1b3(0x1c8)+_0x299f43['id'][_0x5dc1b3(0x1bc)]('@')[0x0]+'\x0a',diffs[_0x5dc1b3(0x1bf)](_0x299f43['id'][_0x5dc1b3(0x1bc)]('@')[0x0]+_0x5dc1b3(0x1be));});return await citel[_0x1d7f58(0x1c9)](msg+(_0x1d7f58(0x1b6)+Config['caption']),{'mentions':diffs});
});

//---------------------------------------------------------------------------
smd({
        pattern: "block",
        desc: "blocks that person",
        fromMe: true,
        category: "owner",
        filename: __filename,
        use: '<quote/reply user.>'
    },
    async(Suhail, msg, text,{isCreator}) => {
        if (!isCreator) msg.reply(tlang().owner);
        let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : "";
        if(!users)  return await msg.reply("*Uhh dear, reply/mention an User*")
        await Suhail.bot.updateBlockStatus(users, "block")
            .then((res) => { return Suhail.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});    })		    //console.log(jsonformat(res))
            .catch((err) => console.log(jsonformat(err)));

    }
)
//---------------------------------------------------------------------------
smd({
            pattern: "unblock",
            desc: "Unblocked to the quoted user.",
            category: "owner",
            filename: __filename,

        },
        async(Suhail, msg, text,{ isCreator }) => {
            if (!isCreator) msg.reply(tlang().owner);
            let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : false ;
            if(!users)  return await msg.reply("*Uhh dear, reply/mention an User*")
	    let num = users.replace("@s.whatsapp.net","")
            await Suhail.bot.updateBlockStatus(users, "unblock")
                .then((res) => msg.send(`*@${num} Unblocked Succesfully..!*`,{mentions : [ users , ]}))
                .catch((err) => console.log(jsonformat(err)));
        }
    )
    //---------------------------------------------------------------------------
    smd({
        pattern: "invite",
        desc: "get group link.",
        category: "group",
        filename: __filename,
    },
	 async(Suhail, msg, text,{ isCreator }) => {
	    if (!msg.isGroup) return msg.reply(tlang().group);
	    
        const groupAdmins = await getAdmin(Suhail.bot, msg)	
	    const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
        const isBotAdmins =groupAdmins.includes(botNumber)
	
if (!isBotAdmins) return msg.reply("*_I'm Not Admin, So I can't Send Invite Link_*");
var str1 = await Suhail.bot.groupInviteCode(msg.chat)
var str2 ="https://chat.whatsapp.com/"
var mergedString = `${str2}${str1}`;
return msg.reply("*Group Invite Link Is Here* \n*"+mergedString+"*");
	
    }
	)
	
  //---------------------------------------------------------------------------
  smd({
        pattern: "revoke",
        desc: "get group link.",
        category: "group",
        filename: __filename,
    },
	 async(Suhail, msg, text,{ isCreator }) => {
	    if (!msg.isGroup) return msg.reply(tlang().group);
	    
        const groupAdmins = await getAdmin(Suhail.bot, msg)	
	const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
        const isBotAdmins =groupAdmins.includes(botNumber)
	if (!isBotAdmins) return msg.reply("*_I'm Not Admin, So I Can't ReSet Group Invite Link_*");
	    
var code = await Suhail.bot.groupRevokeInvite(msg.chat)
return msg.reply("*_Group Link Revoked SuccesFully_*");
	
    }
	)
    //---------------------------------------------------------------------------
    smd({
        pattern: "jid",
        desc: "get jid of all user in a group.",
        category: "owner",
        filename: __filename,
    },
    async(Suhail, msg, text,{ isCreator }) => {
      if (msg.quoted)  return msg.reply(msg.quoted.sender)
	    
	    
	  /*  if(!isCreator) return msg.reply(tlang().owner)
        const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
		const participants = msg.isGroup ? await groupMetadata.participants : "";
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `📍 ${mem.id}\n`;
        }*/
     else return msg.reply(msg.chat)

    }
)

//  kic lic dic yic

const _0x53154c=_0x3f47;function _0x3f47(_0x292b76,_0x9a6373){const _0x4cb906=_0x4cb9();return _0x3f47=function(_0x3f478d,_0x31fd43){_0x3f478d=_0x3f478d-0xd6;let _0x19cbb6=_0x4cb906[_0x3f478d];return _0x19cbb6;},_0x3f47(_0x292b76,_0x9a6373);}function _0x4cb9(){const _0x4b653e=['startsWith','owner','2pzhwvW','190663NFptvl','774310iBpZLt','Error\x20While\x20lefting\x20Group\x20:\x20','891725JwRqMr','log','reply','sure','bot','1083288LAEatK','user','22orWuIp','send','*_Group\x20Left!_*','isGroup','left\x20from\x20a\x20group.','2012193rKxIwg','left','groupParticipantsUpdate','16oGwGYu','7218QUoIVT','decodeJid','\x20sure/yes/ok,\x20For\x20security\x20threats_*','error','yes','76706bNQiOw','200uSbkTK','*_Use:\x20','group'];_0x4cb9=function(){return _0x4b653e;};return _0x4cb9();}(function(_0x44f2fd,_0x25576b){const _0x594c82=_0x3f47,_0x1d60e9=_0x44f2fd();while(!![]){try{const _0x1cdedd=-parseInt(_0x594c82(0xed))/0x1*(-parseInt(_0x594c82(0xec))/0x2)+-parseInt(_0x594c82(0xe1))/0x3*(-parseInt(_0x594c82(0xe7))/0x4)+-parseInt(_0x594c82(0xf0))/0x5+-parseInt(_0x594c82(0xd6))/0x6+-parseInt(_0x594c82(0xe6))/0x7+-parseInt(_0x594c82(0xe0))/0x8*(-parseInt(_0x594c82(0xdd))/0x9)+parseInt(_0x594c82(0xee))/0xa*(-parseInt(_0x594c82(0xd8))/0xb);if(_0x1cdedd===_0x25576b)break;else _0x1d60e9['push'](_0x1d60e9['shift']());}catch(_0x1f1d8f){_0x1d60e9['push'](_0x1d60e9['shift']());}}}(_0x4cb9,0x38fbc),smd({'pattern':_0x53154c(0xde),'desc':_0x53154c(0xdc),'category':_0x53154c(0xe9),'filename':__filename},async(_0x1a7da7,_0x45b78b,_0x130854,{cmdName:_0x1096fc,isCreator:_0x5d8385})=>{const _0x5dd7c7=_0x53154c;if(!_0x45b78b[_0x5dd7c7(0xdb)])return await _0x45b78b[_0x5dd7c7(0xd9)](tlang()[_0x5dd7c7(0xe9)],{},'',_0x45b78b);if(!_0x5d8385)return await _0x45b78b[_0x5dd7c7(0xf2)](tlang()[_0x5dd7c7(0xeb)]);let _0x40fb82=_0x130854['toLowerCase']()['trim']();if(_0x40fb82['startsWith'](_0x5dd7c7(0xf3))||_0x40fb82[_0x5dd7c7(0xea)]('ok')||_0x40fb82[_0x5dd7c7(0xea)](_0x5dd7c7(0xe5)))try{const _0x2ce27d=await _0x1a7da7[_0x5dd7c7(0xf4)][_0x5dd7c7(0xe2)](_0x1a7da7[_0x5dd7c7(0xf4)][_0x5dd7c7(0xd7)]['id']);await _0x45b78b['send'](_0x5dd7c7(0xda)),await sleep(0x3e8),await _0x1a7da7[_0x5dd7c7(0xf4)][_0x5dd7c7(0xdf)](_0x45b78b['chat'],[_0x2ce27d],'remove');}catch(_0x44a5eb){return await _0x45b78b[_0x5dd7c7(0xe4)](_0x44a5eb),console[_0x5dd7c7(0xf1)](_0x5dd7c7(0xef),_0x44a5eb);}else return await _0x45b78b[_0x5dd7c7(0xd9)](_0x5dd7c7(0xe8)+(prefix+_0x1096fc)+_0x5dd7c7(0xe3),{},'',_0x45b78b);}));
   
 // tug shug hug buddy
 
 const _0x1b0fce=_0x13a5;function _0x2fad(){const _0x2e52ba=['mtype','text','videoMessage','quoted','147277fjkhNj','participants','catch','tag\x20Hi\x20Everyone,\x20How\x20are\x20you\x20Doing*','tag','download','39771QKCkGl','chat','video','hidetag','472683XoeHnO','1617MmxJEM','4yiKFyy','fakeObj','140778bmXXhQ','8LcSEDY','reply','499341tLgtrh','1800SuGalg','1008dayYvB','group','140YZgsDf','send','712jFjIzo','*_Uhh\x20dear,\x20reply\x20to\x20message!!!_*','1132855BCgUZI','groupMetadata','sender','admin','bot','isGroup'];_0x2fad=function(){return _0x2e52ba;};return _0x2fad();}function _0x13a5(_0x3884de,_0x2b0806){const _0x2fad39=_0x2fad();return _0x13a5=function(_0x13a5f2,_0x45ef32){_0x13a5f2=_0x13a5f2-0x1d8;let _0x357d87=_0x2fad39[_0x13a5f2];return _0x357d87;},_0x13a5(_0x3884de,_0x2b0806);}(function(_0x119ba9,_0x3dbfe0){const _0x29d5a5=_0x13a5,_0x18dbfd=_0x119ba9();while(!![]){try{const _0x13f706=-parseInt(_0x29d5a5(0x1ed))/0x1+parseInt(_0x29d5a5(0x1e8))/0x2*(-parseInt(_0x29d5a5(0x1e6))/0x3)+parseInt(_0x29d5a5(0x1eb))/0x4*(-parseInt(_0x29d5a5(0x1f5))/0x5)+-parseInt(_0x29d5a5(0x1ef))/0x6*(-parseInt(_0x29d5a5(0x1e7))/0x7)+-parseInt(_0x29d5a5(0x1f3))/0x8*(parseInt(_0x29d5a5(0x1e2))/0x9)+-parseInt(_0x29d5a5(0x1f1))/0xa*(-parseInt(_0x29d5a5(0x1ea))/0xb)+-parseInt(_0x29d5a5(0x1ee))/0xc*(-parseInt(_0x29d5a5(0x1dc))/0xd);if(_0x13f706===_0x3dbfe0)break;else _0x18dbfd['push'](_0x18dbfd['shift']());}catch(_0x5a6afe){_0x18dbfd['push'](_0x18dbfd['shift']());}}}(_0x2fad,0x3e9b2),smd({'pattern':_0x1b0fce(0x1e0),'alias':[_0x1b0fce(0x1e5)],'desc':'Tags\x20everyperson\x20of\x20group\x20without\x20mentioning\x20their\x20numbers','category':_0x1b0fce(0x1f0),'filename':__filename,'use':'<text>'},async(_0x18bd48,_0x1143f0,_0x445f4f,{isCreator:_0xda7c59})=>{const _0x427e8b=_0x1b0fce;if(!_0x1143f0[_0x427e8b(0x1fa)])return _0x1143f0[_0x427e8b(0x1ec)](tlang()[_0x427e8b(0x1f0)]);if(!_0x445f4f&&!_0x1143f0['quoted'])return _0x1143f0[_0x427e8b(0x1ec)]('*Example\x20:\x20'+prefix+_0x427e8b(0x1df));const _0x5de751=_0x1143f0[_0x427e8b(0x1fa)]?await _0x18bd48[_0x427e8b(0x1f9)][_0x427e8b(0x1f6)](_0x1143f0[_0x427e8b(0x1e3)])[_0x427e8b(0x1de)](_0x4e806b=>{}):'',_0x2a6ea2=_0x1143f0['isGroup']?await _0x5de751[_0x427e8b(0x1dd)]:'',_0x33a8f0=await getAdmin(_0x18bd48[_0x427e8b(0x1f9)],_0x1143f0),_0x4a3b55=_0x1143f0['isGroup']?_0x33a8f0['includes'](_0x1143f0[_0x427e8b(0x1f7)]):![];if(!_0x4a3b55&&!_0xda7c59)return _0x1143f0['reply'](tlang()[_0x427e8b(0x1f8)]);let _0x84afa7='',_0x1dcb8f,_0x1fbe11=_0x1143f0[_0x427e8b(0x1db)]?_0x1143f0[_0x427e8b(0x1db)][_0x427e8b(0x1d8)]:_0x1143f0[_0x427e8b(0x1d8)],_0x4d88fa=_0x1143f0['quoted']?_0x1143f0['quoted']:_0x1143f0,_0x8c519=_0x1143f0[_0x427e8b(0x1db)]?_0x1143f0[_0x427e8b(0x1db)][_0x427e8b(0x1d9)]:_0x445f4f,_0x500fb4=_0x1143f0[_0x427e8b(0x1db)]?_0x1143f0[_0x427e8b(0x1db)][_0x427e8b(0x1e9)]:_0x1143f0;if(_0x1fbe11=='imageMessage')_0x84afa7='image',_0x1dcb8f=await _0x4d88fa[_0x427e8b(0x1e1)]();else{if(_0x1fbe11==_0x427e8b(0x1da))_0x84afa7=_0x427e8b(0x1e4),_0x1dcb8f=await _0x4d88fa[_0x427e8b(0x1e1)]();else{if(!_0x445f4f&&_0x1143f0['quoted'])_0x1dcb8f=_0x1143f0['quoted'][_0x427e8b(0x1d9)];else _0x1dcb8f=_0x445f4f;}}if(!_0x1dcb8f)return await _0x1143f0['send'](_0x427e8b(0x1f4));return await _0x1143f0[_0x427e8b(0x1f2)](_0x1dcb8f,{'caption':_0x8c519,'mentions':_0x2a6ea2['map'](_0x59838e=>_0x59838e['id'])},_0x84afa7,_0x500fb4);}));
 //---------------------------------------------------------------------------



//---------------------------------------------------------------------------
    smd({
        pattern: "tagall",
        desc: "Tags every person of group.",
        category: "group",
        filename: __filename,
    },
    async(Suhail, msg, text,{ isCreator }) => {
        if (!msg.isGroup) return msg.reply(tlang().group);
        const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
        const participants = msg.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Suhail.bot, msg)
        const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
        if (!isAdmins && !isCreator) return msg.reply(tlang().admin);

        let textt = `
══✪〘   *Tag All*   〙✪══

➲ *Message :* ${text ? text : "blank Message"} \n ${Config.caption} \n\n
➲ *Author:* ${msg.pushName} 🔖
`
        for (let mem of participants) { textt += `📍 @${mem.id.split("@")[0]}\n`;   }
        Suhail.bot.sendMessage(msg.chat, { text: textt,  mentions: participants.map((a) => a.id) }, {  quoted: msg });
    }
)

    //---------------------------------------------------------------------------
    smd({
        pattern: "kik",
        desc: "Kick all numbers from a certain country",
        category: "group",
        filename: __filename,
    },
    async(Suhail, msg, text,{ isCreator }) => 
    {	
        if (!msg.isGroup) return msg.reply(tlang().group);
	if(!text) return await msg.reply("*Provide Me Country Code. Example: .kik 91*")
        const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Suhail.bot, msg)
        let isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) :  false  ;
        if (!isAdmins)
	{
		if(isCreator) msg.reply("*Hey Owner, You Are not Admin Here*")
		else return msg.reply(tlang().admin);
	}
	let find = text.split(" ")[0].replace('+' , '');
	let error = '*These Users Not Kicked* \n\t' ;
	let users = await groupMetadata.participants
	let hmanykik = 0;
	let iskikstart = false ;
	const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
	for (let i of users) { 
		let isuseradmin  =  groupAdmins.includes(i.id) || false 
		if(i.id.startsWith(find) && !isuseradmin)
		{ 
			if(!iskikstart)
			{
				iskikstart = true ;
				await msg.reply(`*_Kicking ALL the Users With ${find} Country Code_*`)
			}
			try { await Suhail.bot.groupParticipantsUpdate(msg.chat, [i.id], "remove"); hmanykik++ ;  }
			catch (e) { console.log("Error While Kicking : " , e) } 	
		}
	}
	if(hmanykik == 0) return await msg.reply(`*_Ahh, There Is No User Found With ${find} Country Code_*`)
        else return await msg.reply(`*_Hurray, ${hmanykik.toString()} Users With ${find} Country Code kicked_*`)
})
//---------------------------------------------------------------------------
smd({
        pattern: "num",
        desc: "get all numbers from a certain country",
        category: "group",
        filename: __filename,
    },
    async(Suhail, msg, text,{ isCreator }) => 
    {	
        if (!msg.isGroup) return msg.reply(tlang().group);
	if(!text) return await msg.reply("*Provide Me Country Code. Example: .num 91*")
        const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Suhail.bot, msg)
        const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) :  false  ;
        if (!isAdmins && !isCreator ) return msg.reply(tlang().admin);
	let find = text.split(" ")[0];
	let users = await groupMetadata.participants
	let nums = `*List Of Users With ${find} Country Code*\n`
	let num = '';
	for (let i of users) {  if(i.id.startsWith(find)) num += i.id.split("@")[0] +"\n";   }
	if(!num) {nums =`*There Is No Users With ${find} Country Code*` }
	else { nums += num+Config.caption }
	await msg.reply(nums)		
})
//---------------------------------------------------------------------------
/*
smd({
            pattern: "request",
            desc: "Sends requst to main Bot developer.",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Suhail.bot, msg, text) => {
            if (!text) return reply(`Example : ${prefix}request hello dev please add a downloader feature`);
            textt = `*| REQUEST |*`;
            teks1 = `\n\n*User* : @${
    msg.sender.split("@")[0]
  }\n*Request* : ${text}`;
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait.......*`;
            for (let i of owner) {
                Suhail.bot.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [msg.sender],
                }, {
                    quoted: msg,
                });
            }
            Suhail.bot.sendMessage(msg.chat, {
                text: textt + teks2 + teks1,
                mentions: [msg.sender],
            }, {
                quoted: msg,
            });

        }
    )*/

    //---------------------------------------------------------------------------
/*
smd({
            pattern: "retrive",
	    alias: ["vv"],
            desc: "Copies and Forwords viewonce message.",
            category: "group",
            filename: __filename,
            use: '<reply to a viewonce message.>',
        },
        async(Suhail.bot, msg, text) => {
            if (!msg.quoted) return reply(`Please reply to any message Image or Video!`);
            let mime = msg.quoted.mtype
            if (/viewOnce/.test(mime)) {
                const mtype = Object.keys(quoted.message)[0];
                delete quoted.message[mtype].viewOnce;
                const msgs = proto.Message.fromObject({
                    ...quoted.message,
                  });
                const prep = generateWAMessageFromContent(msg.chat, msgs, { quoted: msg });
                await Suhail.bot.relayMessage(msg.chat, prep.message, { messageId: prep.key.id });
            } else {
                await msg.reply("please, reply to viewOnceMessage");
            }
        }
    )*/

    //---------------------------------------------------------------------------
    smd({
            pattern: "resetwarn",
            desc: "Deletes all previously given warns to quoted user.",
            category: "group",
           filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Suhail, msg, text , {isCreator}) => {
            if (!isCreator) return msg.reply(tlang().owner)
            await warndb.deleteOne({ id: msg.quoted.sender.split('@')[0] + 'warn' });
            msg.reply('User is free as a bird.\nAll previously given warn has been deleted.')
        }
    )
    //---------------------------------------------------------------------------
    smd({
            pattern: "poll",
            desc: "Makes poll in group.",
            category: "group",
            filename: __filename,
            use: `question;option1,option2,option3.....`,
        },
        async(Suhail, msg, text,{ isCreator }) => {
            if (!isCreator) return msg.reply(tlang().owner)
            let [poll, opt] = text.split(";");
            if (text.split(";") < 2) return await msg.reply(`${prefix}poll question;option1,option2,option3.....`);
            let options = [];
            for (let i of opt.split(',')) {  options.push(i);  }
            await Suhail.bot.sendMessage(msg.chat, { poll: { name: poll,  values: options } })
        }
    )
    //---------------------------------------------------------------------------
    smd({
            pattern: "profile",
            desc: "Shows profile of user.",
            category: "group",
            filename: __filename,
        },
        async(Suhail, msg, text) => {
            var bio = await Suhail.bot.fetchStatus(msg.sender);
            var bioo = bio.status;
            let meh = msg.sender;
            const userq = await Levels.fetch(msg.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "GOD✨";
             if (lvpoints <=  2) { var role = "🏳Citizen"; } 
	else if (lvpoints <=  4) { var role = "👼Baby Wizard"; } 
	else if (lvpoints <=  6) { var role = "🧙‍♀️Wizard";  } 
	else if (lvpoints <=  8) { var role = "🧙‍♂️Wizard Lord"; }
	else if (lvpoints <= 10) { var role = "🧚🏻Baby Mage";  } 
	else if (lvpoints <= 12) { var role = "🧜Mage"; } 
	else if (lvpoints <= 14) { var role = "🧜‍♂️Master of Mage";} 
	else if (lvpoints <= 16) { var role = "🌬Child of Nobel"; } 
	else if (lvpoints <= 18) { var role = "❄Nobel"; }
	else if (lvpoints <= 20) { var role = "⚡Speed of Elite"; } 
	else if (lvpoints <= 22) { var role = "🎭Elite"; } 
	else if (lvpoints <= 24) { var role = "🥇Ace I"; }
	else if (lvpoints <= 26) { var role = "🥈Ace II"; } 
	else if (lvpoints <= 28) { var role = "🥉Ace Master"; }
	else if (lvpoints <= 30) { var role = "🎖Ace Dominator";} 
	else if (lvpoints <= 32) { var role = "🏅Ace Elite"; }
	else if (lvpoints <= 34) { var role = "🏆Ace Supreme";}
	else if (lvpoints <= 36) { var role = "💍Supreme I";}
	else if (lvpoints <= 38) { var role = "💎Supreme Ii";} 
	else if (lvpoints <= 40) { var role = "🔮Supreme Master";} 
	else if (lvpoints <= 42) { var role = "🛡Legend III";} 
	else if (lvpoints <= 44) { var role = "🏹Legend II";} 
	else if (lvpoints <= 46) { var role = "⚔Legend"; } 
	else if (lvpoints <= 55) { var role = "🐉Immortal"; }
	
            let ttms = `${userq.xp}` / 8;
            const timenow = moment(moment())
                .format('HH:mm:ss')
            moment.tz.setDefault('Asia/Karachi')
                .locale('id')
	let pfp;
            try {
                pfp = await Suhail.bot.profilePictureUrl(msg.sender, "image");
            } catch (e) {
                pfp = await botpic();
            }
            const profile = `
*Hii ${msg.pushName},*
*Here is your profile information*
*👤Username:* ${msg.pushName}
*⚡Bio:* ${bioo}
*🧩Role:* ${role}
*🍁Level:* ${userq.level}
*📥Total Messages* ${ttms}
*Powered by ${tlang().title}*
`;
            
            let buttonMessage = {
                image: { url: pfp },
                caption: profile,
                footer: tlang().footer,
                headerType: 4,
            };
            Suhail.bot.sendMessage(msg.chat, buttonMessage, { quoted: msg });

        }
    ) 
    //---------------------------------------------------------------------------
    smd({
            pattern: "rank",
            desc: "Sends rank card of user.",
            category: "group",
            filename: __filename,
        },
        async(Suhail, msg, text) => {
            const userq = await Levels.fetch(msg.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "GOD✨";
            if (lvpoints <= 2) {
                var role = "🏳Citizen";
            } else if (lvpoints <= 4) {
                var role = "👼Baby Wizard";
            } else if (lvpoints <= 6) {
                var role = "🧙‍♀️Wizard";
            } else if (lvpoints <= 8) {
                var role = "🧙‍♂️Wizard Lord";
            } else if (lvpoints <= 10) {
                var role = "🧚🏻Baby Mage";
            } else if (lvpoints <= 12) {
                var role = "🧜Mage";
            } else if (lvpoints <= 14) {
                var role = "🧜‍♂️Master of Mage";
            } else if (lvpoints <= 16) {
                var role = "🌬Child of Nobel";
            } else if (lvpoints <= 18) {
                var role = "❄Nobel";
            } else if (lvpoints <= 20) {
                var role = "⚡Speed of Elite";
            } else if (lvpoints <= 22) {
                var role = "🎭Elite";
            } else if (lvpoints <= 24) {
                var role = "🥇Ace I";
            } else if (lvpoints <= 26) {
                var role = "🥈Ace II";
            } else if (lvpoints <= 28) {
                var role = "🥉Ace Master";
            } else if (lvpoints <= 30) {
                var role = "🎖Ace Dominator";
            } else if (lvpoints <= 32) {
                var role = "🏅Ace Elite";
            } else if (lvpoints <= 34) {
                var role = "🏆Ace Supreme";
            } else if (lvpoints <= 36) {
                var role = "💍Supreme I";
            } else if (lvpoints <= 38) {
                var role = "💎Supreme Ii";
            } else if (lvpoints <= 40) {
                var role = "🔮Supreme Master";
            } else if (lvpoints <= 42) {
                var role = "🛡Legend III";
            } else if (lvpoints <= 44) {
                var role = "🏹Legend II";
            } else if (lvpoints <= 46) {
                var role = "⚔Legend";
            } else if (lvpoints <= 55) {
                var role = "🐉Immortal";
            }
            let disc = msg.sender.substring(3, 7);
            let textr = '';
            textr += `*Hii ${tlang().greet} ,🌟 ${msg.pushName}∆${disc}'s* Exp\n\n`;
            let ttms = `${userq.xp}` / 8;
            textr += `*🌟Role*: ${role}\n*🟢Exp*: ${userq.xp} / ${Levels.xpFor(
    userq.level + 1
  )}\n*🏡Level*: ${userq.level}\n*Total Messages:*- ${ttms}`;
            try {
                ppuser = await Suhail.bot.profilePictureUrl(msg.sender, "image");
            } catch {
                ppuser = THUMB_IMAGE;
            }
                    Suhail.bot.sendMessage(msg.chat, {
                        image: await getBuffer(ppuser),
                        caption: textr,
                    }, {
                        quoted: msg,
                    });
        }
    )
    //---------------------------------------------------------------------------
    smd({
            pattern: "leaderboard",
            alias: ["deck"],
            desc: "To check leaderboard",
            category: "general",
            filename: __filename,
        },
        async(Suhail, msg) => {
            const fetchlb = await Levels.fetchLeaderboard("RandomXP", 5);
            let leadtext = `
*-------------------------------*
*----● LeaderBoard ● -----*
*-------------------------------*
\n\n`
            for (let i = 0; i < fetchlb.length; i++) {
                const lvpoints = fetchlb[i].level
                var role = "GOD✨";
                if (lvpoints <= 2) {
                    var role = "🏳Citizen";
                } else if (lvpoints <= 4) {
                    var role = "👼Baby Wizard";
                } else if (lvpoints <= 6) {
                    var role = "🧙‍♀️Wizard";
                } else if (lvpoints <= 8) {
                    var role = "🧙‍♂️Wizard Lord";
                } else if (lvpoints <= 10) {
                    var role = "🧚🏻Baby Mage";
                } else if (lvpoints <= 12) {
                    var role = "🧜Mage";
                } else if (lvpoints <= 14) {
                    var role = "🧜‍♂️Master of Mage";
                } else if (lvpoints <= 16) {
                    var role = "🌬Child of Nobel";
                } else if (lvpoints <= 18) {
                    var role = "❄Nobel";
                } else if (lvpoints <= 20) {
                    var role = "⚡Speed of Elite";
                } else if (lvpoints <= 22) {
                    var role = "🎭Elite";
                } else if (lvpoints <= 24) {
                    var role = "🥇Ace I";
                } else if (lvpoints <= 26) {
                    var role = "🥈Ace II";
                } else if (lvpoints <= 28) {
                    var role = "🥉Ace Master";
                } else if (lvpoints <= 30) {
                    var role = "🎖Ace Dominator";
                } else if (lvpoints <= 32) {
                    var role = "🏅Ace Elite";
                } else if (lvpoints <= 34) {
                    var role = "🏆Ace Supreme";
                } else if (lvpoints <= 36) {
                    var role = "💍Supreme I";
                } else if (lvpoints <= 38) {
                    var role = "💎Supreme Ii";
                } else if (lvpoints <= 40) {
                    var role = "🔮Supreme Master";
                } else if (lvpoints <= 42) {
                    var role = "🛡Legend III";
                } else if (lvpoints <= 44) {
                    var role = "🏹Legend II";
                } else if (lvpoints <= 46) {
                    var role = "⚔Legend";
                } else if (lvpoints <= 55) {
                    var role = "🐉Immortal";
                }
                let data = await sck1.findOne({ id: fetchlb[i].userID })
                let namew = fetchlb[i].userID
                let ttms = fetchlb[i].xp / 8
                leadtext += `*${i + 1}●Name*: ${data.name}\n*●Level*: ${fetchlb[i].level}\n*●Points*: ${fetchlb[i].xp}\n*●Role*: ${role}\n*●Total messages*: ${ttms}\n\n`;
            }
            return msg.reply(leadtext)
        }
    )

    //---------------------------------------------------------------------------
    smd({
            pattern: "promote",
            desc: "Provides admin role to replied/quoted user",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Suhail, msg, text ,{ isCreator }) => {	
            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
            const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
	        if (!isBotAdmins) return msg.reply("*_I'm Not Admin Here, So I Can't Promote Someone_*");
            if (!isAdmins) return msg.reply(tlang().admin);
            
            try {
                let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return await msg.send("*_Uhh Dear, Reply/Mention to an User_*");
                await Suhail.bot.groupParticipantsUpdate(msg.chat, [users], "promote");
                await msg.send(`*User promoted Succesfully!*`)
                return await Suhail.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
            } catch(e) {
                console.log("Promote error : " , e )
                await Suhail.bot.sendMessage(msg.chat, { react: { text: '❌', key: msg.key }});
                return await msg.reply(tlang().botAdmin);
            }
        }
    )
    //---------------------------------------------------------------------------
    smd({
    pattern: "demote",
    desc: "Demotes replied/quoted user from group",
    category: "group",
    filename: __filename,
    use: '<quote|reply|number>',
},
async(Suhail, msg, text,{ isCreator }) => {
//if (!isCreator) return msg.reply("```Only My Owner Can Use This Command```")
    if (!msg.isGroup) return msg.reply(tlang().group);
    const groupAdmins = await getAdmin(Suhail.bot, msg)
    const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
    const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
    if (!isBotAdmins) return await msg.reply(`*_I'm Not Admin In This Group, Idiot_*`); 
    if (!isAdmins) return msg.reply(tlang().admin);
    
    try {
        let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (!users) return await msg.send("*_Uhh Dear, Reply/Mention to an User_*");
        await Suhail.bot.groupParticipantsUpdate(msg.chat, [users], "demote");
        await msg.send(`*User demoted Succesfully!*`)
        return await Suhail.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
    } catch(e) {
        console.log("Demote error : " , e )
        await Suhail.bot.sendMessage(msg.chat, { react: { text: '❌', key: msg.key }});
        return await msg.reply(tlang().botAdmin);    
    }

}
)

//---------------------------------------------------------------------------
smd({
            pattern: "kick",
            desc: "Kicks replied/quoted user from group.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Suhail, msg, text ,{ isCreator }) => {
	//if (!isCreator) return msg.reply("*_Only My Owner Can Use This Command_*")
            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
            const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
            if (!isBotAdmins) return await msg.reply(`*_I'm Not Admin In This Group, Idiot_*`);  
            if (!isAdmins) return msg.reply(tlang().admin);
            
            try {
                let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return msg.send("*_Uhh Dear, Reply/Mention to an User_*");
                await Suhail.bot.groupParticipantsUpdate(msg.chat, [users], "remove");
                await msg.send(`*Hurray, User Kicked Succesfully!*`)
                return await Suhail.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
            } catch(e) {
                console.log("Kick error : " , e )
                await Suhail.bot.sendMessage(msg.chat, { react: { text: '❌', key: msg.key }});
                return await msg.reply(tlang().botAdmin);

            }
        }
    )
    //---------------------------------------------------------------------------

/*
cmd({
            pattern: "memegen",
            desc: "Write text on quoted image.",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Suhail.bot, msg, text) => {
            let mime = msg.quoted.mtype
            if (!/image/.test(mime)) return msg.reply(`Reply to Photo With Caption *text*`)
            let mee = await Suhail.bot.downloadAndSaveMediaMessage(msg.quoted)
            let mem = await TelegraPh(mee)
            let meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
            let memek = await Suhail.bot.sendImageAsSticker(msg.chat, meme, msg, { packname: msg.pushName, author: 'Secktor' })
            await fs.unlinkSync(memek)

        }
    )
    */

    //---------------------------------------------------------------------------
    smd({
            pattern: "group",
            desc: "mute and unmute group.",
            category: "group",
            filename: __filename,
        },
        async(Suhail, msg, text) => {
            //if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
            const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
            //if (!msg.isGroup) return msg.reply(tlang().group);
            if (!isBotAdmins) return msg.reply(tlang().botAdmin);
            if (!isAdmins) return msg.reply(tlang().admin);
	        let Group = await sck.findOne({ id: msg.chat });
            if (text.split(" ")[0] == "close" || text.split(" ")[0] == "mute" ) {
                await Suhail.bot.groupSettingUpdate(msg.chat, "announcement")
                    .then((res) => msg.reply(`Group Chat Muted`))
                    .catch((err) => msg.reply("Error :" +err));
            } else if (text.split(" ")[0] === "open"||text.split(" ")[0] === "unmute") {
                await Suhail.bot.groupSettingUpdate(msg.chat, "not_announcement")
                    .then((res) => msg.reply(`Group Chat Unmuted`))
                    .catch((err) => msg.reply("Error : " +err));
            } 
else if(text=="Detail" || text=="Info" || text=="info" || text=="details" ) 
{
    const pp = await Suhail.bot.profilePictureUrl(msg.chat, 'image').catch(_ => null) || ''
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `  ${i + 1}. wa.me/${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || msg.chat.split`-`[0] + '@s.whatsapp.net'

    let ginfos = `
      *「 INFO GROUP 」*
*▢ ID :*
   • ${groupMetadata.id}
*▢ NAME :* 
   • ${groupMetadata.subject}
*▢ Members :*
   • ${participants.length}
*▢ Group Owner :*
   • wa.me/${owner.split('@')[0]}
*▢ Admins :*
${listAdmin}
*▢ Description :*
   • ${groupMetadata.desc?.toString() || 'unknown'}
*▢ 🪢 Extra Group Configuration :*";
  • Group Nsfw :    ${Group.nsfw=='true'? '✅' : '❎'} 
  • Antilink        :    ${Group.antilink=='true'? '✅' : '❎'}
  • Economy      :    ${Group.economy=='true'? '✅' : '❎'}
  • Events         :     ${Group.events=='true'? '✅' : '❎'}
`.trim()
    if(Group.events=='true'){
        ginfos +="\n*▢ Wellcome Message :* \n  • "+Group.welcome;
        ginfos +="\n\n*▢ Goodbye Message :* \n  • "+Group.goodbye; 
    }
return await Suhail.bot.sendMessage(msg.chat,{image:{url : pp} , caption: ginfos } , {quoted:msg })
}
else
{ 
    return await msg.send(`*_Uhh Dear Give me Query From Bellow Options_*
_1:- .group Mute_
_2:- .group Unmute_
_3:- .group Info_
`)
    //  let buttons = [{ buttonId: `${prefix}group open`, buttonText: { displayText: "📍Unmute",},type: 1,},{buttonId: `${prefix}group close`,buttonText: {displayText: "📍Mute",},type: 1, },];     await Suhail.bot.sendButtonText(msg.chat,buttons,`Group Mode`, Suhail.bot.user.name, msg);
           
}
        }
    )
    //---------------------------------------------------------------------------
    smd({
            pattern: "gpp",
	    alias:['grouppic'],
            desc: "Sets a profile pic in Group..",
            category: "group",
            filename: __filename,
        },
        async(Suhail, msg, text) => {


const _0x4abbbf=_0x5bb4;(function(_0x13d7c6,_0x8bc947){const _0x259bc2=_0x5bb4,_0x10b260=_0x13d7c6();while(!![]){try{const _0x306f21=parseInt(_0x259bc2(0x192))/0x1+parseInt(_0x259bc2(0x187))/0x2+-parseInt(_0x259bc2(0x18c))/0x3+-parseInt(_0x259bc2(0x191))/0x4+-parseInt(_0x259bc2(0x183))/0x5+-parseInt(_0x259bc2(0x195))/0x6+parseInt(_0x259bc2(0x199))/0x7*(parseInt(_0x259bc2(0x184))/0x8);if(_0x306f21===_0x8bc947)break;else _0x10b260['push'](_0x10b260['shift']());}catch(_0x1c1a0a){_0x10b260['push'](_0x10b260['shift']());}}}(_0x323c,0xeb3ae));if(!msg[_0x4abbbf(0x189)])return await msg[_0x4abbbf(0x198)](tlang()[_0x4abbbf(0x17c)]);function _0x5bb4(_0xeb8310,_0x3268ff){const _0x323c8d=_0x323c();return _0x5bb4=function(_0x5bb44f,_0x56b4b1){_0x5bb44f=_0x5bb44f-0x17a;let _0x38ee75=_0x323c8d[_0x5bb44f];return _0x38ee75;},_0x5bb4(_0xeb8310,_0x3268ff);}if(!msg['quoted'])return await msg[_0x4abbbf(0x198)]('*_Uhh\x20Dear,\x20Reply\x20Any\x20Image\x20To\x20Set\x20Group\x20Icon_*');if(msg[_0x4abbbf(0x180)][_0x4abbbf(0x17a)]!='imageMessage')return await msg[_0x4abbbf(0x198)](_0x4abbbf(0x186));function _0x323c(){const _0x18ae47=['download','535270ulHSfx','7494288pOesFz','set','*_Reply\x20To\x20An\x20Image,\x20Idiot_*','3767082nhMrcD','scaleToFit','isGroup','read','*_I\x27m\x20Not\x20Admin\x20In\x20This\x20Chat,_*\x0a*_Provide\x20Admin\x20Role\x20To\x20Update\x20Group\x20Icon_*','2512509jkkzwU','chat','getWidth','*_Profile\x20Icon\x20Updated\x20Successfully_*','crop','5700504cCGKrX','843473GBbmqF','normalize','decodeJid','1983690GnNTjc','includes','MIME_JPEG','reply','7wUnEFg','mtype','sender','group','```Error\x20While\x20Updating\x20Group\x20Profile\x20:```\x20','getBufferAsync','getHeight','quoted','picture'];_0x323c=function(){return _0x18ae47;};return _0x323c();}const groupAdmins=await getAdmin(Suhail.bot,msg),botNumber=await Suhail.bot[_0x4abbbf(0x194)](Suhail.bot['user']['id']),isBotAdmins=groupAdmins['includes'](botNumber)||![],isAdmins=groupAdmins[_0x4abbbf(0x196)](msg[_0x4abbbf(0x17b)])||![];if(!isBotAdmins)return await msg[_0x4abbbf(0x198)](_0x4abbbf(0x18b));if(!isAdmins)return await msg[_0x4abbbf(0x198)](tlang()['admin']);const media=await msg[_0x4abbbf(0x180)][_0x4abbbf(0x182)]();try{const {query}=Suhail.bot,{preview}=await generateProfilePicture(media);return await query({'tag':'iq','attrs':{'to':msg[_0x4abbbf(0x18d)],'type':_0x4abbbf(0x185),'xmlns':'w:profile:picture'},'content':[{'tag':_0x4abbbf(0x181),'attrs':{'type':'image'},'content':preview}]}),await msg[_0x4abbbf(0x198)](_0x4abbbf(0x18f));}catch(_0x632d01){return await msg[_0x4abbbf(0x198)](_0x4abbbf(0x17d)+_0x632d01);}async function generateProfilePicture(_0x3da926){const _0x527026=_0x4abbbf,_0x462396=await Jimp[_0x527026(0x18a)](_0x3da926),_0x1c1f73=_0x462396[_0x527026(0x18e)](),_0x176031=_0x462396[_0x527026(0x17f)](),_0x887df7=_0x462396[_0x527026(0x190)](0x0,0x0,_0x1c1f73,_0x176031);return{'img':await _0x887df7[_0x527026(0x188)](0x144,0x2d0)[_0x527026(0x17e)](Jimp[_0x527026(0x197)]),'preview':await _0x887df7[_0x527026(0x193)]()[_0x527026(0x17e)](Jimp[_0x527026(0x197)])};}



/*

            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
            const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;


            let mime = msg.quoted.mtype
            if (!msg.isGroup) msg.reply(tlang().group);
            if (!isAdmins) msg.reply(tlang().admin);
            if (!isBotAdmins) msg.reply(tlang().botadmin);
            if (!msg.quoted) return msg.reply(`Send/Reply Image With Caption ${cmd}`);
            if (!/image/.test(mime)) return msg.reply(`Send/Reply Image With Caption ${cmd}`);
            if (/webp/.test(mime)) return msg.reply(`Send/Reply Image With Caption ${cmd}`);
            let media = await Suhail.bot.downloadAndSaveMediaMessage(msg.quoted);
            await Suhail.bot.updateProfilePicture(msg.chat, {
                    url: media,
                })
                .catch((err) => fs.unlinkSync(media));
            msg.reply(tlang().success);
*/

        }
    )
    //---------------------------------------------------------------------------
 
        //---------------------------------------------------------------------------
        smd({
    pattern: "tagadmin",
    desc: "Tags only Admin numbers",
    category: "group",
    filename: __filename,
    use: '<text>',
},
async(Suhail, msg, text , {isCreator}) => {
    if (!msg.isGroup) return msg.reply(tlang().group);
    const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
    const participants = msg.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = participants.filter(p => p.admin)
    const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
    if (!isAdmins ) return msg.reply(tlang().admin);
    if (!isAdmins && !isCreator) return msg.reply(tlang().admin);
    const listAdmin = groupAdmins.map((v, i) => ` |  @${v.id.split('@')[0]}`).join('\n')


let tag = `
Tag by : @${msg.sender.split("@")[0]}
${text ? "≡ Message :" + text : ""}

┌─⊷ ADMINS
${listAdmin}
└───────────
`.trim()
return await Suhail.bot.sendMessage(msg.chat,{text : tag ,mentions: [msg.sender, ...groupAdmins.map(v => v.id) ,]} ,)



}
)
    //---------------------------------------------------------------------------
    smd({
            pattern: "add",
            desc: "Add that person in group",
            fromMe: true,
            category: "group",
            filename: __filename,
            use: '<number>',
        },
        async(Suhail, msg, text,{isCreator}) => {
	//if (!isCreator) return msg.reply("```Only My Owner Can Use This Command```")
            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
            const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;

  
	        if (!isBotAdmins) return await msg.reply(`*_I'm Not Admin In This Group, Idiot_*`);  
            if (!isAdmins) return msg.reply(tlang().admin)
            
            let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            if (!users) return await msg.reply("*_Uhh Dear, Please Provide An User._*");
            if(msg.sender == botNumber ){
                await Suhail.bot.groupParticipantsUpdate(msg.chat, [users], "add");
                await msg.send(`*User Added Succesfully!*`)
                return await Suhail.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
            }else {
                await Suhail.bot.sendMessage(msg.chat, { react: { text: '❌', key: msg.key }});
                await Suhail.bot.sendMessage(users , {text : `Here's The Group Invite Link\n User @${msg.sender.split("@")[0]} Wants To Add You in bellow Group\n https://chat.whatsapp.com/${await Suhail.bot.groupInviteCode(msg.chat)} _ \n ------------ Join If YOu Feel Free?` ,mentions:[msg.sender,]} , {quoted : msg })
                return await msg.reply(`_Can't Add User, Invite Sent_`)
            }
        }
    )
    //--------------------------------------------------------------------------- 
    smd({
            pattern: "getjids",
            alias:['gjid','gjids'],
            desc: "Sends chat id of every groups.",
            category: "group",
            filename: __filename,
        },
        async(Suhail, msg, text,{ isCreator }) => {
            if (!isCreator) return msg.reply(tlang().owner)
            n = await Suhail.bot.groupFetchAllParticipating();
            const c=Object.entries(n).slice(0).map(t=>t[1]);
            let a="";
            let onlyJids = false ; 
            let onlyNames = false ; 
            if(text.includes("jid")) {  onlyJids = true ; }
            else if(text.includes("name")) {  onlyNames = true ; }
            await msg.reply(`Fetching ${onlyJids ? "Only jids" : ( onlyNames ? "Only Names" : "Names and Jids") } from ${c.length} Groups`);
            await sleep(2000); 
            for(var i of c.map(t=>t.id))
            {
                a+= onlyJids ? "" : `\n*Group:* ${n[i].subject} `;
                a+= onlyNames ? "" :`\n*JID:* ${i}\n`;
            }
            return await msg.send(a)


	/*
	

let getGroups = await Suhail.bot.groupFetchAllParticipating();
let anu = Object.values(getGroups).map(v => v.id);
let res = `All groups jid\n\n`;
await msg.reply(`Fetching jid from ${anu.length} Groups`);

await Promise.all(anu.map(async i => {
  let metadata = await Suhail.bot.groupMetadata(i);
  await sleep(2000); 
 res += ` ------------- ${i} -------------\n`;
 res += `*Name :* ${metadata.subject}\n`;
 
}));
return await msg.reply(res);
	//return await Suhail.bot.sendMessage(msg.chat,{text:res},{quoted:msg})
	
	//----------------------------------------------------------------------
	
	

	let getGroups = await Suhail.bot.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            let jackhuh = `All groups jid\n\n`
            msg.reply(`Fetching jid from ${anu.length} Groups`)
            for (let i of anu) {
                let metadata = await Suhail.bot.groupMetadata(i);
                await sleep(500)
                jackhuh += `*Subject:-* ${metadata.subject}\n`
               // jackhuh += `*Member :* ${metadata.participants.length}\n`
                jackhuh += `*Jid:-* ${i}\n\n`

            }
            msg.reply(jackhuh)
	    */

        }
    ) 
//---------------------------------------------------------------------------------------
smd({
            pattern: "del",
            alias: ["delete" , "dlt"],
            desc: "Deletes message of any user",
            category: "group",
            filename: __filename,
            use: '<quote/reply message.>',
        },
        async(Suhail, msg, text,{ isCreator }) => {
            if (!msg.isGroup && isCreator) { 
                const key = {
                    remoteJid: msg.chat,
                    fromMe: false,
                    id: msg.quoted.id,
                    participant: msg.quoted.sender
                }
                return await Suhail.bot.sendMessage(msg.chat, { delete: key })
            }
            if (!msg.quoted.isBot ) {
                if (!msg.isGroup) return msg.reply(tlang().group)
                const groupAdmins = await getAdmin(Suhail.bot, msg)
                const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
                const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
                if (!isAdmins) return msg.reply(tlang().admin)
                if (!isBotAdmins) return msg.reply('I can\'t delete anyones message without getting Admin Role.')
                if (!msg.quoted) return msg.reply(`Please reply to any message. ${tlang().greet}`);
                let { chat, fromMe, id } = msg.quoted;
                
		    const key = {
                    remoteJid: msg.chat,
                    fromMe: false,
                    id: msg.quoted.id,
                    participant: msg.quoted.sender
                }
                await Suhail.bot.sendMessage(msg.chat, { delete: key })
            }
        }
    )
    //---------------------------------------------------------------------------
    smd({
            pattern: "checkwarn",
            desc: "Check warns",
            category: "group",
            filename: __filename,
            use: '<quoted/reply user.>',
        },
        async(Suhail, msg, text) => {
            if (!msg.isGroup) return msg.reply('This command is only for Group.')
            if (!msg.quoted) return msg.reply('Quote a user master.')
            teskd = `*All Warnings.*\n\n`
            let h = await warndb.find({ id: msg.quoted.sender.split('@')[0] + 'warn' })
            console.log(h)
            teskd += `*There are total ${h.length}  warnings.*\n`
            for (let i = 0; i < h.length; i++) {
                teskd += `*${i+1}*\n╭─────────────◆\n│ *🍁In Group:-* ${h[i].group}\n`
                teskd += `│ *🔰Time:-* ${h[i].date}\n`
                teskd += `│ *⚠️Warned by:-* ${h[i].warnedby}\n`
                teskd += `│ _📍Reason: ${h[i].reason}_\n╰─────────────◆\n\n`
            }
            msg.reply(teskd)
        }

    )
    //---------------------------------------------------------------------------
    smd({
        pattern: "broadcast",
        desc: "Bot makes a broadcast in all groups",
        fromMe: true,
        category: "group",
        filename: __filename,
        use: '<text for broadcast.>',
    },
    async(Suhail, msg, text,{isCreator}) => {
        if (!isCreator) return msg.reply(tlang().owner)
        if(!text) return await msg.reply(`*_Uhh Dear, Provide text to broadcast in all groups_*`)
        let getGroups = await Suhail.bot.groupFetchAllParticipating();
        let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);
        msg.send(`*_Send Broadcast To ${anu.length} Group Chat, Finish Time ${ anu.length * 1.5} second_*`);
        for (let i of anu) {
            await sleep(1500);
            let txt = `*--❗${tlang().title} Broadcast❗--*\n\n *🍀Author:* ${msg.pushName}\n\n${text}`;
            let buttonMessaged = {
                image: log0,
                caption: txt,
                footer: msg.pushName,
                headerType: 1,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: false,
                    externalAdReply: {
                        title: 'Broadcast by ' + msg.pushName,
                        body: tlang().title,
                        thumbnail: log0,
                        mediaUrl: '',
                        mediaType: 2,
                        sourceUrl: gurl,
                        showAdAttribution: true,
                    },
                },
            };
            await Suhail.bot.sendMessage(i, buttonMessaged, { quoted: msg,});
        }
        return await msg.reply(`*Successful Sending Broadcast To ${anu.length} Group(s)*`);
    }
)

//---------------------------------------------------------------------------
smd({ on: "text" }, async(Suhail, msg) => {
	    const randomXp = 8;
	    let usrname = msg.pushName
	    const hasLeveledUp = await Levels.appendXp(msg.sender, "RandomXP", randomXp);
	    if (hasLeveledUp) 
	    {
		    const sck1 = await Levels.fetch(msg.sender, "RandomXP");
		    const lvpoints = sck1.level;
		    var role = "GOD";
			 if (lvpoints <=  2) { var role = "🏳Citizen";  } 
		    else if (lvpoints <=  4) { var role = "👼Baby Wizard"; } 
		    else if (lvpoints <=  6) { var role = "🧙‍♀️Wizard"; } 
		    else if (lvpoints <=  8) { var role = "🧙‍♂️Wizard Lord"; } 
		    else if (lvpoints <= 10) { var role = "🧚🏻Baby Mage"; } 
		    else if (lvpoints <= 12) { var role = "🧜Mage"; } 
		    else if (lvpoints <= 14) { var role = "🧜‍♂️Master of Mage";} 
		    else if (lvpoints <= 16) { var role = "🌬Child of Nobel";  } 
		    else if (lvpoints <= 18) { var role = "❄Nobel";} 
		    else if (lvpoints <= 20) { var role = "⚡Speed of Elite"; }
		    else if (lvpoints <= 22) { var role = "🎭Elite"; } 
		    else if (lvpoints <= 24) { var role = "🥇Ace I"; } 
		    else if (lvpoints <= 26) { var role = "🥈Ace II"; } 
		    else if (lvpoints <= 28) { var role = "🥉Ace Master"; }
		    else if (lvpoints <= 30) { var role = "🎖Ace Dominator"; }
		    else if (lvpoints <= 32) { var role = "🏅Ace Elite"; }
		    else if (lvpoints <= 34) { var role = "🏆Ace Supreme";} 
		    else if (lvpoints <= 36) { var role = "💍Supreme I"; }
		    else if (lvpoints <= 38) { var role = "💎Supreme Ii"; } 
		    else if (lvpoints <= 40) { var role = "🔮Supreme Master"; } 
		    else if (lvpoints <= 42) { var role = "🛡Legend III"; } 
		    else if (lvpoints <= 44) { var role = "🏹Legend II"; } 
		    else if (lvpoints <= 46) { var role = "⚔Legend"; } 
		    else if (lvpoints <= 55) { var role = "🐉Immortal"; } 
		    else {  var role = "Kiddo";   }

		    if(Config.levelupmessage !== 'false')
		    {
			    await Suhail.bot.sendMessage(msg.chat, { image: {  url: await botpic() },
			caption: `
╔════◇
║ *Wow,Someone just*
║ *leveled Up huh⭐*
║ *👤Name*: ${msg.pushName}
║ *🎐Level*: ${sck1.level}🍭
║ *🛑Exp*: ${sck1.xp} / ${Levels.xpFor(sck1.level + 1)}
║ *📍Role*: *${role}*
║ *Enjoy🥳*
╚════════════╝ `   }, { quoted: msg });
		    }
	    }
	})
	

