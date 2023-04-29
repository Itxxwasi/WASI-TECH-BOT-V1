const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1,cmd } = require("../lib");
const axios = require('axios');
const appName = Config.HEROKU_APP_NAME;
const authToken = Config.HEROKU_API_KEY;
const fetch = require('node-fetch');
const axios = require('axios')
const { Anime, Manga } = require("@shineiichijo/marika");
const {  fetchJson, getBuffer} = require('../lib/')


cmd({
        pattern: "waifu",
        desc: "To get Waifu Random Pics",
        category: "Anime Chars",
        filename: __filename
    },

    async(Void, citel, text) => {


  const response = await fetch('https://api.waifu.pics/sfw/neko');
  const data = await response.json();
  
                let buttonMessaged = {
                    image: { url: data.url },
                    caption: '*---Waifu Pics Here---*',
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
}
    )
//-----------------------------------------------------------------------
cmd({
    pattern: "neko",
    category: "Anime Chars",
    desc: "Sends a Neko Image in chat",
    filename: __filename
},
async(Void, citel, text) => {
    nekodds = await axios.get("https://waifu.pics/api/sfw/neko");
    var wbuttsssrd = [{
            buttonId: `${prefix}neko`,
            buttonText: {
                displayText: `Neko`,
            },
            type: 1,
        },

        {
            buttonId: `${prefix}waifu`,
            buttonText: {
                displayText: `Waifu`,
            },
            type: 1,
        },
    ];
    let button4Messagesp = {
        image: {
            url: nekodds.data.url,
        },
        caption: "*Here we go😊!!!!*",
        headerType: 1,
    };
    await Void.sendMessage(citel.chat, button4Messagesp, {
        quoted: citel,
    })
}
)
//-----------------------------------------------------------------------
cmd({
    pattern: "foxgirl",
    category: "Anime Chars",
    desc: "Sends image of Fox Girl in current chat.",
    filename: __filename
},
async(Void, citel, text) => {
    waifuddfg = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
    let buttonssMessagesss = {
        image: {
            url: waifuddfg.data.url
        },
    };
    await Void.sendMessage(citel.chat, buttonssMessagesss, {
        quoted: citel,
    })
}
)
//-----------------------------------------------------------------------
cmd({
        pattern: "animenews",
        category: "Anime Chars",
        desc: "Anime News",
         filename: __filename
    },
    async(Void, citel, text) => {
        let qq = [
            "Anime News Today",
            "New Anime",
            "Uocoming Anime News",
            "New Anime Info",
            "Whats news in Anime",
            "Anime Series",
            "Manga News today",
            "Anime New News",
            "Anime News today",
        ];
        let q1 = qq[Math.floor(Math.random() * qq.length)];
        //&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com
        let URL1 = `https://newsapi.org/v2/everything?q=${q1}&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com&language=en&sortby=publishedat&apikey=cd4116be09ef4a0caceedf21b6258460&pageSize=8`;
        const response = await axios.get(URL1);
        let result = await response;
        result = result.data.articles;
        result.map(async(r, idx) => {
            Void.sendMessage(
                citel.chat, {
                    image: { url: r.urlToImage },
                    caption: `*Title🔰:* ${r.title}\n\n*Content🧩:* ${r.content}\n*Author📌:* ${r.author}\n*Source♦️:* ${r.source.name}\n*Created On☘️:* ${r.publishedAt}\n*More on✨:* ${r.url}\n\n*Powered by ${tlang().title}*`,
                }, {
                    quoted: citel,
                }

            );
        });


    }
)
//-----------------------------------------------------------------------
cmd({
    pattern: "loli",
    category: "Anime News",
         filename: __filename,
    desc: "Sends image of loli in current chat."
},
async(Void, citel, text) => {
    waifud = await axios.get("https://waifu.pics/api/sfw/shinobu");
    var wbutss = [{
        buttonId: `${prefix}loli`,
        buttonText: {
            displayText: `Next Loli✨`,
        },
        type: 1,
    }, ];
    let buttonsMessage = {
        image: { url: waifud.data.url }
    };
    await Void.sendMessage(citel.chat, buttonsMessage, {
        quoted: citel,
    })
}
)
//-----------------------------------------------------------------------
cmd({
    pattern: "pokepic",
    category: "Anime News",
         filename: __filename,
    desc: "Sends image of pokemon in current chat."
},
async(Void, citel, text) => {
    const gis = require('g-i-s')
        var pictured = "Pokemon Pics only HD ";
        gis(text + pictured, async(error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
                image: {
                    url: images,
                },
                caption: `*---「 Poke Pic 」---*`,
                footer: Void.user.name,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: tlang().title,
                        body: text,
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: ``,
                    },
                },
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        });

}
)
//-----------------------------------------------------------------------
cmd({
        pattern: "animewall",
        category: "Anime Chars",
        desc: "Anime Wallpaper Random",
         filename: __filename
    },
    async(Void, citel, text) => {
        try {

            var ecchid = "anime wallpaper for desktop full hd";
            let gis = require("g-i-s");
            gis(ecchid, async(error, result) => {
                n = result;
                images = n[Math.floor(Math.random() * n.length)].url;
                let buttonMessage = {
                    image: {
                        url: images,
                    },
                    caption: `*--- Anime Wallpaper---*`,
                    footer: Void.user.name,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: tlang().title,
                            body: `Anime-Wallpaper`,
                            jpegThumbnail: log0,
                            thumbnail: log0,
                            mediaType: 2,
                            mediaUrl: ``,
                            sourceUrl: ``,
                        },
                    },
                };
                Void.sendMessage(citel.chat, buttonMessage, { viewOnce: true }, {
                    quoted: citel,
                });
            })
        } catch (e) {
                        for (let i of owner) {
                        Void.sendMessage(i + "@s.whatsapp.net", { text: `Error :` + e })
                                 }
                   
        }
    }
)
//-----------------------------------------------------------------------

cmd({
        pattern: "wallpaper",
        desc: "To get Random Pics",
        category: "Anime Chars",
        filename: __filename
    },

    async(Void, citel, text) => {


const response = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
const data = await response.json();
  const url =data.urls.regular
  //citel.reply ('url here :'+url);

                let buttonMessaged = {
                    image: { url: url },
                    caption: '*---Random Pics Here---*',
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);


}
   )
