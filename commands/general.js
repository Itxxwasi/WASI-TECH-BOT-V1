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
const speed = require('performance-now')
const API_KEY = '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'

//---------------------------------------------------------------------------
//                  TRY GPT COMMAND 2ND VERSION
//---------------------------------------------------------------------------
const API_KEY = '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'
async function getGPT3Response(text) {
	const response = await axios({
		method: 'post',
		url: 'https://api.openai.com/v1/engines/text-davinci-003/completions',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${API_KEY}`,
		},
		data: {
			prompt: text,
			max_tokens: 1024,
			n: 1,
			stop: null,
			temperature: 0.5,
		},
	})

	return response.data.choices[0].text
}

cmd({
        pattern: "ai",
	alias: ["chatgpt"],
        desc: "chat with an AI",
        category: "general",
        use: '<Hii, Suhail Tech Info>',
        filename: __filename,
    },
	async (message, match) => {
		if (!match)
			return await message.send(
				'*Example : gpt What is the capital of France?*'
			)
		try {
			const res = await getGPT3Response(match)
			await message.send(res.trim())
		} catch (error) {
			message.send(JSON.stringify(error, null, 2))
		}
	}
)
//---------------------------------------------------------------------------
//                  AI  CHAT  COMMAND
//---------------------------------------------------------------------------
cmd({
        pattern: "chat",
        desc: "chat with an AI",
        category: "general",
        use: '<Hii, Suhail Tech Info>',
        filename: __filename,
    },
    async(Void, citel,text) => {
        let zx = text.length;
        if (zx < 30) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
        }
        if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: Config.OPENAI_API_KEY || "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",
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
//                  TRY GPT COMMAND
//---------------------------------------------------------------------------
//CHATGPT COMMAND FUNCTIONS
    async function getGPT3Response(prompt)
    {
    	     const response = await axios.get
          ({
		                 method: 'post',
		                 url: 'https://api.openai.com/v1/engines/text-davinci-003/completions',
		                 headers: {
		                         	'Content-Type': 'application/json',
		                          	Authorization: `Bearer ${API_KEY}`,
	                                   },
	              	         data: {
		                        	prompt: prompt,
                        			max_tokens: 1024,
                                                n: 1,
		                        	stop: null,
                        			temperature: 0.5,
                         	      },
           }); //RESPONCE FUNC
          	 return citel.reply(responce.data.choices[0].text);
     }

cmd({
        pattern: "gpt",
	alias: ["chatgpt", "ai"],
        desc: "chat with an AI",
        category: "general",
        use: '<Hii, Suhail Tech Info>',
        filename: __filename,
    },

          
   async (citel, text) => {
		if (!text)   return citel.reply( '*Example : gpt What is the capital of France?*'	)
		    try {
			         const res = await getGPT3Response(text)
			         await citel.reply(res.trim())
		        }
 
    catch (error) {   citel.reply(JSON.stringify(error, null, 2))     }
	
}) //cmd End


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
        let { data } = await axios.get('https://api.github.com/repos/SuhailTechInfo/Secktor-Md')
        let cap = `Hey ${citel.pushName}\n
*⭐ Total Stars:* ${data.stargazers_count} stars
*🍽️ Forks:* ${data.forks_count} forks
*🍁 Repo:* _github.com/SuhailTechInfo/Secktor-Md_
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
        desc: "Sends info about My Ytube Channel\n _CheckOut :_ www.Youtube.com/c/SuhailTechInfo",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SuhailTechInfo/Secktor-Md')
        let cap = `Hey ${citel.pushName}\n
*⭐ Content Type:* How To Create Whatsapp Bot
*🍽️ Total Subscriber:* 2.45k Subscribers
*🍁 Channel Link:* _youtube.com/c/SuhailTechInfo_
\n\n*Visit More About Wa-Bot:-*
 _www.github.com/SuhailTechInfo_ \n*Please Support Ytube Channel*`
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
*👤Owner:*  ${Config.ownername}\n
*Powered by Suhail Tech Info*
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
