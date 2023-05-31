//-----------------------------------------------------------------------------------
const Secktor = require('../lib')
const Config = require('../config')
const maker = require('mumaker')
let { fancytext, tiny, runtime, formatp, botpic, prefix, sck1, tlang, cmd, fetchJson, getBuffer  } = require("../lib");
const axios = require('axios');
const fetch = require('node-fetch');



//-----------------------------------------------------------------------------------
cmd({ pattern: "deepsea", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('*_Example : .steel Suhail Tech_*');
        let anu = await maker.textpro('https://textpro.me/free-advanced-glow-text-effect-873.html', text);
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel });
    })
//---------------------------------------------------------------------------
cmd({
            pattern: "steel",
            category: "edit",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Example : .steel suhail;tech info_');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .steel text1;text2*");
            let anu = await maker.textpro('https://textpro.me/3d-steel-text-effect-877.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )

//-----------------------------------------------------------------------------------

