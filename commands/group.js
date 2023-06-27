/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SuhailTechInfo <https://github.com/SuhailTechInfo>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { sck, sck1,cmd, jsonformat, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const moment = require("moment-timezone");
const Levels = require("discord-xp");
const fs = require('fs-extra')
const Jimp = require("jimp");


//---------------------------------------------------------------------------
cmd({
            pattern: "join",
            desc: "joins group by link",
            category: "owner",
	 filename: __filename,
            use: '<group link.>',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`Please give me Query ${tlang().greet}`);
            if (!text.split(" ")[0] && !text.split(" ")[0].includes("whatsapp.com")) return await citel.reply("Link Invalid, Please Send a valid whatsapp Group Link!");
            let result = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await Void.groupAcceptInvite(result)
                .then((res) => citel.reply("🟩Joined Group"))
                .catch((err) => citel.reply("Error in Joining Group"));

        }
    )
    //---------------------------------------------------------------------------
/*

cmd({
        pattern: "support",
        desc: "Sends official support group link.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text) => {
        citel.reply(`*Check your Pm ${tlang().greet}*`);
        await Void.sendMessage(`${citel.sender}`, {
            image: log0,
            caption: `*Group Name: Secktor-Support*\n*Group Link:* https://chat.whatsapp.com/Bl2F9UTVU4CBfZU6eVnrbC`,
        });

    }
)
*/
//---------------------------------------------------------------------------
cmd({
            pattern: "warn",
            desc: "Warns user in Group.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!citel.isGroup) return citel.reply(`This Command is only for group.`)
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins) return citel.reply('This command is only for Admin.')
            const S=m;function Z(){const F=['126402oKAcRa','date','Removing\x20User\x20because\x20Warn\x20limit\x20exceeded\x0a\x0a*All\x20Warnings.*\x0a','chat','8qachoN','580yXDZAo','groupParticipantsUpdate','114528WgITIL','reply','groupMetadata','│\x20*🔰Time:-*\x20','find','locale','log','196311jXGmuc','quoted','save','*\x0a╭─────────────◆\x0a│\x20*🍁In\x20Group:-*\x20','759700KYdstU','warnedby','pushName','reason','8dUtMfa','2BlOCqD','550MdvhLT','*----Warn----*\x0aUser:\x20@','54828ViphBF','subject','1100323uEahgH','30204512uUuJcj','*There\x20are\x20total\x20','split','│\x20*⚠️Warned\x20by:-*\x20','length','sender','setDefault','group','Asia/KOLKATA','../config','215XZLRSE','HH:mm:ss','warn','remove'];Z=function(){return F;};return Z();}(function(U,w){const c=m,s=U();while(!![]){try{const q=parseInt(c(0x1eb))/0x1*(parseInt(c(0x1f0))/0x2)+parseInt(c(0x1e7))/0x3*(parseInt(c(0x1ef))/0x4)+-parseInt(c(0x200))/0x5*(-parseInt(c(0x204))/0x6)+-parseInt(c(0x1f5))/0x7*(-parseInt(c(0x1dd))/0x8)+-parseInt(c(0x1f3))/0x9*(-parseInt(c(0x1de))/0xa)+parseInt(c(0x1f1))/0xb*(parseInt(c(0x1e0))/0xc)+-parseInt(c(0x1f6))/0xd;if(q===w)break;else s['push'](s['shift']());}catch(B){s['push'](s['shift']());}}}(Z,0x707d4));function m(Y,U){const w=Z();return m=function(s,q){s=s-0x1dd;let B=w[s];return B;},m(Y,U);}if(!citel['quoted'])return citel[S(0x1e1)]('Please\x20quote\x20a\x20user\x20master.');const timesam=moment(moment())['format'](S(0x201));moment['tz'][S(0x1fc)](S(0x1fe))[S(0x1e5)]('id');try{let metadata=await Void[S(0x1e2)](citel[S(0x207)]);await new warndb({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202),'reason':text,'group':metadata[S(0x1f4)],'warnedby':citel[S(0x1ed)],'date':timesam})[S(0x1e9)]();let ment=citel[S(0x1e8)][S(0x1fb)];Void['sendMessage'](citel['chat'],{'text':S(0x1f2)+citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+'\x0aWith\x20Reason:\x20'+text+'\x0aWarned\x20by:\x20'+citel[S(0x1ed)],'mentions':[citel[S(0x1e8)][S(0x1fb)]]},{'quoted':citel});let h=await warndb[S(0x1e4)]({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});const Config=require(S(0x1ff));if(h[S(0x1fa)]>Config['warncount']){teskd=S(0x206);let h=await warndb[S(0x1e4)]({'id':citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});teskd+=S(0x1f7)+h[S(0x1fa)]+'\x20\x20warnings.*\x0a';for(let i=0x0;i<h[S(0x1fa)];i++){teskd+='*'+(i+0x1)+S(0x1ea)+h[i][S(0x1fd)]+'\x0a',teskd+=S(0x1e3)+h[i][S(0x205)]+'\x0a',teskd+=S(0x1f9)+h[i][S(0x1ec)]+'\x0a',teskd+='│\x20_📍Reason:\x20'+h[i][S(0x1ee)]+'_\x0a╰─────────────◆\x0a\x0a';}citel[S(0x1e1)](teskd),await Void[S(0x1df)](citel['chat'],[citel['quoted'][S(0x1fb)]],S(0x203));}}catch(Y){console[S(0x1e6)](Y);}
            
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "unblock",
            desc: "Unblocked to the quoted user.",
            category: "owner",
            filename: __filename,

        },
        async(Void, citel, text,{ isCreator }) => {
            if (!citel.quoted) return citel.reply(`Please reply to user`);
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
	    let num = users.replace("@s.whatsapp.net","")
            await Void.updateBlockStatus(users, "unblock")
                .then((res) => citel.reply(`${num} is Unblocked With Status : `+ jsonformat(res)))
                .catch((err) => console.log(jsonformat(err)));
        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "invite",
        desc: "get group link.",
        category: "group",
        filename: __filename,
    },
	 async(Void, citel, text,{ isCreator }) => {
	    if (!citel.isGroup) return citel.reply(tlang().group);
	    
        const groupAdmins = await getAdmin(Void, citel)	
	const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins =groupAdmins.includes(botNumber)
	
if (!isBotAdmins) return citel.reply("*_I'm Not Admin, So I can't Send Invite Link_*");
var str1 = await Void.groupInviteCode(citel.chat)
var str2 ="https://chat.whatsapp.com/"
var mergedString = `${str2}${str1}`;
return citel.reply("*Group Invite Link Is Here* \n*"+mergedString+"*");
	
    }
	)
	
  //---------------------------------------------------------------------------
    cmd({
        pattern: "revoke",
        desc: "get group link.",
        category: "group",
        filename: __filename,
    },
	 async(Void, citel, text,{ isCreator }) => {
	    if (!citel.isGroup) return citel.reply(tlang().group);
	    
        const groupAdmins = await getAdmin(Void, citel)	
	const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins =groupAdmins.includes(botNumber)
	if (!isBotAdmins) return citel.reply("*_I'm Not Admin, So I Can't ReSet Group Invite Link_*");
	    
var code = await Void.groupRevokeInvite(citel.chat)
return citel.reply("*_Group Link Revoked SuccesFully_*");
	
    }
	)
    //---------------------------------------------------------------------------
    cmd({
        pattern: "jid",
        desc: "get jid of all user in a group.",
        category: "owner",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
      if (citel.quoted)  return citel.reply(citel.quoted.sender)
	    
	    
	  /*  if(!isCreator) return citel.reply(tlang().owner)
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
		const participants = citel.isGroup ? await groupMetadata.participants : "";
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `📍 ${mem.id}\n`;
        }*/
     else return citel.reply(citel.chat)

    }
)

    //---------------------------------------------------------------------------
cmd({
        pattern: "tagall",
        desc: "Tags every person of group.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);

        let textt = `
══✪〘   *Tag All*   〙✪══

➲ *Message :* ${text ? text : "blank Message"} \n ${Config.caption} \n\n
➲ *Author:* ${citel.pushName} 🔖
`
        for (let mem of participants) { textt += `📍 @${mem.id.split("@")[0]}\n`;   }
        Void.sendMessage(citel.chat, { text: textt,  mentions: participants.map((a) => a.id) }, {  quoted: citel });
    }
)

    //---------------------------------------------------------------------------
cmd({
        pattern: "kik",
        desc: "Kick all numbers from a certain country",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => 
    {	
        if (!citel.isGroup) return citel.reply(tlang().group);
	if(!text) return await citel.reply("*Provide Me Country Code. Example: .kik 91*")
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Void, citel)
        let isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :  false  ;
        if (!isAdmins)
	{
		if(isCreator) citel.reply("*Hey Owner, You Are not Admin Here*")
		else return citel.reply(tlang().admin);
	}
	let find = text.split(" ")[0].replace('+' , '');
	let error = '*These Users Not Kicked* \n\t' ;
	let users = await groupMetadata.participants
	let hmanykik = 0;
	let iskikstart = false ;
	const botNumber = await Void.decodeJid(Void.user.id)
	for (let i of users) { 
		let isuseradmin  =  groupAdmins.includes(i.id) || false 
		if(i.id.startsWith(find) && !isuseradmin)
		{ 
			if(!iskikstart)
			{
				iskikstart = true ;
				await citel.reply(`*_Kicking ALL the Users With ${find} Country Code_*`)
			}
			try { await Void.groupParticipantsUpdate(citel.chat, [i.id], "remove"); hmanykik++ ;  }
			catch (e) { console.log("Error While Kicking : " , e) } 	
		}
	}
	if(hmanykik == 0) return await citel.reply(`*_Ahh, There Is No User Found With ${find} Country Code_*`)
        else return await citel.reply(`*_Hurray, ${hmanykik.toString()} Users With ${find} Country Code kicked_*`)
})
//---------------------------------------------------------------------------
cmd({
        pattern: "num",
        desc: "get all numbers from a certain country",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => 
    {	
        if (!citel.isGroup) return citel.reply(tlang().group);
	if(!text) return await citel.reply("*Provide Me Country Code. Example: .num 91*")
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :  false  ;
        if (!isAdmins && !isCreator ) return citel.reply(tlang().admin);
	let find = text.split(" ")[0];
	let users = await groupMetadata.participants
	let nums = `*List Of Users With ${find} Country Code*\n`
	let num = '';
	for (let i of users) {  if(i.id.startsWith(find)) num += i.id.split("@")[0] +"\n";   }
	if(!num) {nums =`*There Is No Users With ${find} Country Code*` }
	else { nums += num+Config.caption }
	await citel.reply(nums)		
})
//---------------------------------------------------------------------------
/*
cmd({
            pattern: "request",
            desc: "Sends requst to main Bot developer.",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            if (!text) return reply(`Example : ${prefix}request hello dev please add a downloader feature`);
            textt = `*| REQUEST |*`;
            teks1 = `\n\n*User* : @${
    citel.sender.split("@")[0]
  }\n*Request* : ${text}`;
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait.......*`;
            for (let i of owner) {
                Void.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [citel.sender],
                }, {
                    quoted: citel,
                });
            }
            Void.sendMessage(citel.chat, {
                text: textt + teks2 + teks1,
                mentions: [citel.sender],
            }, {
                quoted: citel,
            });

        }
    )*/

    //---------------------------------------------------------------------------
/*
cmd({
            pattern: "retrive",
	    alias: ["vv"],
            desc: "Copies and Forwords viewonce message.",
            category: "group",
            filename: __filename,
            use: '<reply to a viewonce message.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return reply(`Please reply to any message Image or Video!`);
            let mime = citel.quoted.mtype
            if (/viewOnce/.test(mime)) {
                const mtype = Object.keys(quoted.message)[0];
                delete quoted.message[mtype].viewOnce;
                const msgs = proto.Message.fromObject({
                    ...quoted.message,
                  });
                const prep = generateWAMessageFromContent(citel.chat, msgs, { quoted: citel });
                await Void.relayMessage(citel.chat, prep.message, { messageId: prep.key.id });
            } else {
                await citel.reply("please, reply to viewOnceMessage");
            }
        }
    )*/

    //---------------------------------------------------------------------------
cmd({
            pattern: "resetwarn",
            desc: "Deletes all previously given warns to quoted user.",
            category: "group",
           filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text , {isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            await warndb.deleteOne({ id: citel.quoted.sender.split('@')[0] + 'warn' });
            citel.reply('User is free as a bird.\nAll previously given warn has been deleted.')
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "poll",
            desc: "Makes poll in group.",
            category: "group",
            filename: __filename,
            use: `question;option1,option2,option3.....`,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let [poll, opt] = text.split(";");
            if (text.split(";") < 2) return await citel.reply(`${prefix}poll question;option1,option2,option3.....`);
            let options = [];
            for (let i of opt.split(',')) {  options.push(i);  }
            await Void.sendMessage(citel.chat, { poll: { name: poll,  values: options } })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "profile",
            desc: "Shows profile of user.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            var bio = await Void.fetchStatus(citel.sender);
            var bioo = bio.status;
            let meh = citel.sender;
            const userq = await Levels.fetch(citel.sender, "RandomXP");
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
                pfp = await Void.profilePictureUrl(citel.sender, "image");
            } catch (e) {
                pfp = await botpic();
            }
            const profile = `
*Hii ${citel.pushName},*
*Here is your profile information*
*👤Username:* ${citel.pushName}
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
            Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "rank",
            desc: "Sends rank card of user.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            const userq = await Levels.fetch(citel.sender, "RandomXP");
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
            let disc = citel.sender.substring(3, 7);
            let textr = '';
            textr += `*Hii ${tlang().greet} ,🌟 ${citel.pushName}∆${disc}'s* Exp\n\n`;
            let ttms = `${userq.xp}` / 8;
            textr += `*🌟Role*: ${role}\n*🟢Exp*: ${userq.xp} / ${Levels.xpFor(
    userq.level + 1
  )}\n*🏡Level*: ${userq.level}\n*Total Messages:*- ${ttms}`;
            try {
                ppuser = await Void.profilePictureUrl(citel.sender, "image");
            } catch {
                ppuser = THUMB_IMAGE;
            }
                    Void.sendMessage(citel.chat, {
                        image: await getBuffer(ppuser),
                        caption: textr,
                    }, {
                        quoted: citel,
                    });
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "leaderboard",
            alias: ["deck"],
            desc: "To check leaderboard",
            category: "general",
            filename: __filename,
        },
        async(Void, citel) => {
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
            return citel.reply(leadtext)
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "promote",
            desc: "Provides admin role to replied/quoted user",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text ,{ isCreator }) => {
	if (!isCreator) return citel.reply("```Only My Owner Can Use This Command```")
	
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

	    if (!isBotAdmins) return citel.reply("*_I'm Not Admin Here, So I Can't Promote Someone_*");
            if (!isAdmins) return citel.reply(tlang().admin);
            
            try {
                let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return;
                await Void.groupParticipantsUpdate(citel.chat, [users], "promote");
                return await Void.sendMessage(citel.chat, { react: { text: '✨', key: citel.key }});
            } catch {return await Void.sendMessage(citel.chat, { react: { text: '❌', key: citel.key }});
                //		citel.reply(tlang().botAdmin);

            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "kick",
            desc: "Kicks replied/quoted user from group.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text ,{ isCreator }) => {
	if (!isCreator) return citel.reply("*_Only My Owner Can Use This Command_*")
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isBotAdmins) return await citel.reply(`*_I'm Not Admin In This Group, Idiot_*`);  
            if (!isAdmins) return citel.reply(tlang().admin);
            
            try {
                let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return;
                await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
                return await Void.sendMessage(citel.chat, { react: { text: '✨', key: citel.key }});
            } catch {return await Void.sendMessage(citel.chat, { react: { text: '❌', key: citel.key }});
                //		citel.reply(tlang().botAdmin);

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
        async(Void, citel, text) => {
            let mime = citel.quoted.mtype
            if (!/image/.test(mime)) return citel.reply(`Reply to Photo With Caption *text*`)
            let mee = await Void.downloadAndSaveMediaMessage(citel.quoted)
            let mem = await TelegraPh(mee)
            let meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
            let memek = await Void.sendImageAsSticker(citel.chat, meme, citel, { packname: citel.pushName, author: 'Secktor' })
            await fs.unlinkSync(memek)

        }
    )
    */

    //---------------------------------------------------------------------------
cmd({
            pattern: "group",
            desc: "mute and unmute group.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            //if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            //if (!citel.isGroup) return citel.reply(tlang().group);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            if (!isAdmins) return citel.reply(tlang().admin);
	let Group = await sck.findOne({ id: citel.chat });
            if (text.split(" ")[0] == "close" || text.split(" ")[0] == "mute" ) {
                await Void.groupSettingUpdate(citel.chat, "announcement")
                    .then((res) => citel.reply(`Group Chat Muted`))
                    .catch((err) => citel.reply("Error :" +err));
            } else if (text.split(" ")[0] === "open"||text.split(" ")[0] === "unmute") {
                await Void.groupSettingUpdate(citel.chat, "not_announcement")
                    .then((res) => citel.reply(`Group Chat Unmuted`))
                    .catch((err) => citel.reply("Error : " +err));
            } 
else if(text=="Detail" || text=="Info" || text=="info" || text=="details" ) 
{
let inf ="-------------GROUP SETTINGS--------------\n";
    inf += "\n Group Jid      : "+Group.id;
    inf +="\n*Group Events  :* "+Group.events;
    inf +="\n*Group Nsfw   :* "+Group.nsfw; 
    inf +="\n*Bot Eanble   :* "+Group.botenable;
    inf +="\n*Antilink        :* "+Group.antilink;
    inf +="\n*Economy      :* "+Group.economy;
    //inf +="\n*Group Mute  :* "+Group.mute;
    inf +="\n*Wellcome      :* "+Group.welcome;
    inf +="\n*Goodbye       :* "+Group.goodbye; 
return await citel.reply(inf);
}
else{   let buttons = [{
                        buttonId: `${prefix}group open`,
                        buttonText: {
                            displayText: "📍Unmute",
                        },
                        type: 1,
                    },
                    {
                        buttonId: `${prefix}group close`,
                        buttonText: {
                            displayText: "📍Mute",
                        },
                        type: 1,
                    },
                ];
     await Void.sendButtonText(citel.chat,buttons,`Group Mode`, Void.user.name, citel);
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "gpp",
	    alias:['grouppic'],
            desc: "Sets a profile pic in Group..",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {


const _0x4abbbf=_0x5bb4;(function(_0x13d7c6,_0x8bc947){const _0x259bc2=_0x5bb4,_0x10b260=_0x13d7c6();while(!![]){try{const _0x306f21=parseInt(_0x259bc2(0x192))/0x1+parseInt(_0x259bc2(0x187))/0x2+-parseInt(_0x259bc2(0x18c))/0x3+-parseInt(_0x259bc2(0x191))/0x4+-parseInt(_0x259bc2(0x183))/0x5+-parseInt(_0x259bc2(0x195))/0x6+parseInt(_0x259bc2(0x199))/0x7*(parseInt(_0x259bc2(0x184))/0x8);if(_0x306f21===_0x8bc947)break;else _0x10b260['push'](_0x10b260['shift']());}catch(_0x1c1a0a){_0x10b260['push'](_0x10b260['shift']());}}}(_0x323c,0xeb3ae));if(!citel[_0x4abbbf(0x189)])return await citel[_0x4abbbf(0x198)](tlang()[_0x4abbbf(0x17c)]);function _0x5bb4(_0xeb8310,_0x3268ff){const _0x323c8d=_0x323c();return _0x5bb4=function(_0x5bb44f,_0x56b4b1){_0x5bb44f=_0x5bb44f-0x17a;let _0x38ee75=_0x323c8d[_0x5bb44f];return _0x38ee75;},_0x5bb4(_0xeb8310,_0x3268ff);}if(!citel['quoted'])return await citel[_0x4abbbf(0x198)]('*_Uhh\x20Dear,\x20Reply\x20Any\x20Image\x20To\x20Set\x20Group\x20Icon_*');if(citel[_0x4abbbf(0x180)][_0x4abbbf(0x17a)]!='imageMessage')return await citel[_0x4abbbf(0x198)](_0x4abbbf(0x186));function _0x323c(){const _0x18ae47=['download','535270ulHSfx','7494288pOesFz','set','*_Reply\x20To\x20An\x20Image,\x20Idiot_*','3767082nhMrcD','scaleToFit','isGroup','read','*_I\x27m\x20Not\x20Admin\x20In\x20This\x20Chat,_*\x0a*_Provide\x20Admin\x20Role\x20To\x20Update\x20Group\x20Icon_*','2512509jkkzwU','chat','getWidth','*_Profile\x20Icon\x20Updated\x20Successfully_*','crop','5700504cCGKrX','843473GBbmqF','normalize','decodeJid','1983690GnNTjc','includes','MIME_JPEG','reply','7wUnEFg','mtype','sender','group','```Error\x20While\x20Updating\x20Group\x20Profile\x20:```\x20','getBufferAsync','getHeight','quoted','picture'];_0x323c=function(){return _0x18ae47;};return _0x323c();}const groupAdmins=await getAdmin(Void,citel),botNumber=await Void[_0x4abbbf(0x194)](Void['user']['id']),isBotAdmins=groupAdmins['includes'](botNumber)||![],isAdmins=groupAdmins[_0x4abbbf(0x196)](citel[_0x4abbbf(0x17b)])||![];if(!isBotAdmins)return await citel[_0x4abbbf(0x198)](_0x4abbbf(0x18b));if(!isAdmins)return await citel[_0x4abbbf(0x198)](tlang()['admin']);const media=await citel[_0x4abbbf(0x180)][_0x4abbbf(0x182)]();try{const {query}=Void,{preview}=await generateProfilePicture(media);return await query({'tag':'iq','attrs':{'to':citel[_0x4abbbf(0x18d)],'type':_0x4abbbf(0x185),'xmlns':'w:profile:picture'},'content':[{'tag':_0x4abbbf(0x181),'attrs':{'type':'image'},'content':preview}]}),await citel[_0x4abbbf(0x198)](_0x4abbbf(0x18f));}catch(_0x632d01){return await citel[_0x4abbbf(0x198)](_0x4abbbf(0x17d)+_0x632d01);}async function generateProfilePicture(_0x3da926){const _0x527026=_0x4abbbf,_0x462396=await Jimp[_0x527026(0x18a)](_0x3da926),_0x1c1f73=_0x462396[_0x527026(0x18e)](),_0x176031=_0x462396[_0x527026(0x17f)](),_0x887df7=_0x462396[_0x527026(0x190)](0x0,0x0,_0x1c1f73,_0x176031);return{'img':await _0x887df7[_0x527026(0x188)](0x144,0x2d0)[_0x527026(0x17e)](Jimp[_0x527026(0x197)]),'preview':await _0x887df7[_0x527026(0x193)]()[_0x527026(0x17e)](Jimp[_0x527026(0x197)])};}



/*

            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;


            let mime = citel.quoted.mtype
            if (!citel.isGroup) citel.reply(tlang().group);
            if (!isAdmins) citel.reply(tlang().admin);
            if (!isBotAdmins) citel.reply(tlang().botadmin);
            if (!citel.quoted) return citel.reply(`Send/Reply Image With Caption ${cmd}`);
            if (!/image/.test(mime)) return citel.reply(`Send/Reply Image With Caption ${cmd}`);
            if (/webp/.test(mime)) return citel.reply(`Send/Reply Image With Caption ${cmd}`);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            await Void.updateProfilePicture(citel.chat, {
                    url: media,
                })
                .catch((err) => fs.unlinkSync(media));
            citel.reply(tlang().success);
*/

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "tag",
	    alias:["hidetag"],
            alias: ["htag"],
            desc: "Tags everyperson of group without mentioning their numbers",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text , {isCreator}) => {
	if(!text && !citel.quoted) return citel.reply(`*Example : ${prefix}tag Hi Everyone, How are you Doing*` )
	    if(!text){text = citel.quoted.text;}
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
            const participants = citel.isGroup ? await groupMetadata.participants : "";
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            Void.sendMessage(citel.chat, { text: text, mentions: participants.map((a) => a.id)}, { quoted: citel});
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "add",
            desc: "Add that person in group",
            fromMe: true,
            category: "group",
            filename: __filename,
            use: '<number>',
        },
        async(Void, citel, text,{isCreator}) => {
	//if (!isCreator) return citel.reply("```Only My Owner Can Use This Command```")
	        if (!text) return citel.reply("*_Uhh Dear, Please Provide An User._*");
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

  
	        if (!isBotAdmins) return await citel.reply(`*_I'm Not Admin In This Group, Idiot_*`);  
            if (!isAdmins) return citel.reply(tlang().admin)
            
            let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            if (!users) return await citel.reply("*_Uhh Dear, Please Provide An User._*");
            if(citel.sender == botNumber ){
            await Void.groupParticipantsUpdate(citel.chat, [users], "add");
            return await Void.sendMessage(citel.chat, { react: { text: '✨', key: citel.key }});
            }else 
            {
                await Void.sendMessage(citel.chat, { react: { text: '❌', key: citel.key }});
                await Void.sendMessage(users , {text : `Here's The Group Invite Link\n @${citel.sender.split("@")[0]} Wants To Add You in This Group\n https://chat.whatsapp.com/${await Void.groupInviteCode(citel.chat)} _ \n ---------------  Join If YOu Feel Free?` ,} , {quoted : citel })
                return await citel.reply(`_Can't Add User, Invite Sent_`)
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "getjids",
            desc: "Sends chat id of every groups.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)

let getGroups = await Void.groupFetchAllParticipating();
let anu = Object.values(getGroups).map(v => v.id);
let res = `All groups jid\n\n`;
await citel.reply(`Fetching jid from ${anu.length} Groups`);

await Promise.all(anu.map(async i => {
  let metadata = await Void.groupMetadata(i);
  await sleep(2000); 
 res += ` ------------- ${i} -------------\n`;
 res += `*Name :* ${metadata.subject}\n`;
 
}));
return await citel.reply(res);
	//return await Void.sendMessage(citel.chat,{text:res},{quoted:citel})
	
	
	
	
	/*
	
	let getGroups = await Void.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            let jackhuh = `All groups jid\n\n`
            citel.reply(`Fetching jid from ${anu.length} Groups`)
            for (let i of anu) {
                let metadata = await Void.groupMetadata(i);
                await sleep(500)
                jackhuh += `*Subject:-* ${metadata.subject}\n`
               // jackhuh += `*Member :* ${metadata.participants.length}\n`
                jackhuh += `*Jid:-* ${i}\n\n`

            }
            citel.reply(jackhuh)
	    */

        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "demote",
        desc: "Demotes replied/quoted user from group",
        category: "group",
        filename: __filename,
        use: '<quote|reply|number>',
    },
    async(Void, citel, text,{ isCreator }) => {
	if (!isCreator) return citel.reply("```Only My Owner Can Use This Command```")
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)
        const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isBotAdmins) return await citel.reply(`*_I'm Not Admin In This Group, Idiot_*`); 
        if (!isAdmins) return citel.reply(tlang().admin);
        
        try {
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            if (!users) return;
           await Void.groupParticipantsUpdate(citel.chat, [users], "demote");
           return await Void.sendMessage(citel.chat, { react: { text: '✨', key: citel.key }});
        } catch(e) { return await Void.sendMessage(users , {text :"Error While Demote User : " + e, } ,{quoted : citel})   }
    }
)

//---------------------------------------------------------------------------
cmd({
            pattern: "del",
            alias: ["delete" , "dlt"],
            desc: "Deletes message of any user",
            category: "group",
            filename: __filename,
            use: '<quote/reply message.>',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (citel.quoted.Bot) {
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })

            }
            if (!citel.quoted.isBot ) {
                if (!citel.isGroup) return citel.reply(tlang().group)
                const groupAdmins = await getAdmin(Void, citel)
                const botNumber = await Void.decodeJid(Void.user.id)
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (!isAdmins) return citel.reply('Only Admins are allowed to delete other persons message.')
                if (!isBotAdmins) return citel.reply('I can\'t delete anyones message without getting Admin Role.')
                if (!citel.quoted) return citel.reply(`Please reply to any message. ${tlang().greet}`);
                let { chat, fromMe, id } = citel.quoted;
                
		    const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "checkwarn",
            desc: "Check warns",
            category: "group",
            filename: __filename,
            use: '<quoted/reply user.>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply('This command is only for Group.')
            if (!citel.quoted) return citel.reply('Quote a user master.')
            teskd = `*All Warnings.*\n\n`
            let h = await warndb.find({ id: citel.quoted.sender.split('@')[0] + 'warn' })
            console.log(h)
            teskd += `*There are total ${h.length}  warnings.*\n`
            for (let i = 0; i < h.length; i++) {
                teskd += `*${i+1}*\n╭─────────────◆\n│ *🍁In Group:-* ${h[i].group}\n`
                teskd += `│ *🔰Time:-* ${h[i].date}\n`
                teskd += `│ *⚠️Warned by:-* ${h[i].warnedby}\n`
                teskd += `│ _📍Reason: ${h[i].reason}_\n╰─────────────◆\n\n`
            }
            citel.reply(teskd)
        }

    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "block",
            desc: "blocks that person",
            fromMe: true,
            category: "owner",
            filename: __filename,
            use: '<quote/reply user.>'
        },
        async(Void, citel, text,{isCreator}) => {
            if (!citel.quoted) return citel.reply(`Please reply to user`);
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] :  text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.updateBlockStatus(users, "block")
                .then((res) => { return Void.sendMessage(citel.chat, { react: { text: '✨', key: citel.key }});    })		    //console.log(jsonformat(res))
                .catch((err) => console.log(jsonformat(err)));

        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "broadcast",
        alias: ["bc"],
        desc: "Bot makes a broadcast in all groups",
        fromMe: true,
        category: "group",
        filename: __filename,
        use: '<text for broadcast.>',
    },
    async(Void, citel, text,{isCreator}) => {
        if (!isCreator) return citel.reply(tlang().owner)
        let getGroups = await Void.groupFetchAllParticipating();
        let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);
        citel.reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${
          anu.length * 1.5
        } second`);
        for (let i of anu) {
            await sleep(1500);
            let txt = `*--❗${tlang().title} Broadcast❗--*\n\n *🍀Author:* ${citel.pushName}\n\n${text}`;
            let buttonMessaged = {
                image: log0,
                caption: txt,
                footer: citel.pushName,
                headerType: 1,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: false,
                    externalAdReply: {
                        title: 'Broadcast by ' + citel.pushName,
                        body: tlang().title,
                        thumbnail: log0,
                        mediaUrl: '',
                        mediaType: 2,
                        sourceUrl: gurl,
                        showAdAttribution: true,
                    },
                },
            };
            await Void.sendMessage(i, buttonMessaged, {
                quoted: citel,
            });
        }
        citel.reply(`*Successful Sending Broadcast To ${anu.length} Group(s)*`);
    }
)

//---------------------------------------------------------------------------
	cmd({ on: "text" }, async(Void, citel) => {
	    const randomXp = 8;
	    let usrname = citel.pushName
	    const hasLeveledUp = await Levels.appendXp(citel.sender, "RandomXP", randomXp);
	    if (hasLeveledUp) 
	    {
		    const sck1 = await Levels.fetch(citel.sender, "RandomXP");
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
			    await Void.sendMessage(citel.chat, { image: {  url: await botpic() },
			caption: `
╔════◇
║ *Wow,Someone just*
║ *leveled Up huh⭐*
║ *👤Name*: ${citel.pushName}
║ *🎐Level*: ${sck1.level}🍭
║ *🛑Exp*: ${sck1.xp} / ${Levels.xpFor(sck1.level + 1)}
║ *📍Role*: *${role}*
║ *Enjoy🥳*
╚════════════╝ `   }, { quoted: citel });
		    }
	    }
	})
	

