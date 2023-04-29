/*
 *
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 *
 */

const {cmd} = require('../lib')
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
cmd({
        pattern: "pastebin",
        desc: "To check ping",
        category: "converter",
        filename: __filename,
    },
    async(Void, citel,text) => {
 if (!text) { text=citel.quoted.text;}
        if(!text) return citel.reply('Please reply to any text to get link.');
        let data = await pastebin.createPaste(text, "Suhail Tech Info");
        return citel.reply('_Here is your link._\n'+data+'\n*Click to Get Your Text*');
    }
);
