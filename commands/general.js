/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SuhailTechInfo <https://youtube.com/SuhailTechInfo>
 * @description : Secktor,A Multi-functional whatsapp bot Created by Suhail Tech.
 * @version 0.0.6
 **/

const { tlang, botpic,cmd, prefix, runtime,Config } = require('../lib')
const axios = require('axios')
const fetch = require('node-fetch');
const speed = require('performance-now')
const API_KEY = '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'



//---------------------------------------------------------------------------
//                  AI  CHAT  COMMAND
//---------------------------------------------------------------------------
cmd({
        pattern: "chat",
        desc: "chat with an AI",
        category: "AI",
        use: '<Hii, Suhail Tech Info>',
        filename: __filename,
    },
    async(Void, citel,text) => 
    {
        let zx = text.length;
        if (zx < 300) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
    }
	
        if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`); // for null text 
	
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration
				({
           				apiKey:Config.OPENAI_API_KEY ,
				});
	
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
    }
)


//---------------------------------------------------------------------------
cmd({
        pattern: "gpt",
        desc: "chat with an AI",
        category: "AI",
        use: '<Hii, Suhail Tech Info>',
        filename: __filename,
    },
    async(Void, citel,text) => 
    {
	
	if (Config.OPENAI_API_KEY=='') return citel.reply('You Dont Have OPENAI API KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys')
	if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`); 
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration
				({
           				apiKey:Config.OPENAI_API_KEY ,
				});
	
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
    }
)


//---------------------------------------------------------------------------
cmd({
        pattern: "dall",
	alias : ['dalle','dall-e'],
        desc: "chat with an AI",
        category: "AI",
        use: '<Hii, Suhail Tech Info>',
        filename: __filename,
    },
    async(Void, citel,text) => 
    {
	if (Config.OPENAI_API_KEY=='') return citel.reply('You Dont Have OPENAI_API_KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys');
	if (!text) return citel.reply(`*Give Me A Query To Get Dall-E Reponce ?*`); 
const OPENAI_API_KEY = Config.OPENAI_API_KEY;
const imageSize = '256x256'
  const apiUrl = 'https://api.openai.com/v1/images/generations';
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'image-alpha-001',
      prompt: text,
      size: imageSize ,
      response_format: 'url'
    })
  });

  const data = await response.json();
  //console.log(data)
	let buttonMessage = {
		image:{url:data.data[0].url},
		caption : '*---Your DALL-E Responce---*'
	
	}
	
Void.sendMessage(citel.chat,{image:{url:data.data[0].url}})
    }
)


//---------------------------------------------------------------------------
//                  RREPOSITORY  COMMAND
//---------------------------------------------------------------------------
cmd({
        pattern: "repo",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo.\n _CheckOut :_ www.Youtube.com/c/SuhailTechInfo",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SuhailTechInfo/Secktor-bot')
        let cap = `
*⭐ Total Stars:* ${data.stargazers_count} stars
*🍽️ Forks:* ${data.forks_count} forks
*🍁 Repo:* _https://github.com/SuhailTechInfo/Secktor-bot_
\n\n*Visit More About Wa-Bot:-*
 _Www.Youtube.com/c/SuhailTechInfo_ \n*Please Support Ytube Channel*`
        let buttonMessaged = 
            {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4
            };
           
        return await Void.sendMessage(citel.chat, buttonMessaged, {   quoted: citel, });

    }
)


cmd({
        pattern: "link",
        alias: ["ytube", "yt", "myyt"],
        desc: "Sends info about My Ytube Channel __CheckOut :_ www.Youtube.com/c/SuhailTechInfo",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SuhailTechInfo/Secktor-bot')
        let cap = `
╔══════════════════════════╗
   ☞𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐒𝐔𝐇𝐀𝐈𝐋 𝐓𝐄C𝐇 𝐈𝐍F𝐎☜
╚══════════════════════════╝\n
*⭐ Youtube Content :* How To Create Whatsapp Bot
*🍽️ Total Subscriber:* 2.45k Subscribers
*🍁 Channel Link:* _https://youtube.com/c/SuhailTechInfo?sub_confirmation=1_\n
╭━━━━━━━━━━━━━━━━━━━━╮
┇  ╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗
┇  ║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣
┇  ╠╗║╚╝║║╠╗║╚╣║║║║║═╣
┇  ╚═╩══╩═╩═╩═╩╝╚╩═╩═╝
╰━━━━━━━━━━━━━━━━━━━━╯
\n*Visit More About Wa-Bot:-*
 _www.github.com/SuhailTechInfo_ \n*𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐌𝐘 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐂𝐇𝐀𝐍𝐍𝐄𝐋*`
        let buttonMessaged = 
            {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4
            };
           
        return await Void.sendMessage(citel.chat, buttonMessaged, {   quoted: citel, });

    }
)
//---------------------------------------------------------------------------
//                  BOT STATUS COMMAND
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["about" , "info"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
 
 
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
🔰 *${tlang().title}* 🔰
*🌟Description:* A WhatsApp bot with rich features, Created By *Suhail Tech Info*.\n
*⚡Speed:* ${latensie.toFixed(4)} ms
*🚦Uptime:* ${runtime(process.uptime())}
*🕸Version:* 1.0.0
*👤Owner:*  ${Config.ownername}\n\n
*Powered by 'Suhail Tech Info'*
*Youtube :* _youtube.com/c/SuhailTechInfo_ 
`;
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: ter,
            footer: tlang().footer,
            headerType: 4
            
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
