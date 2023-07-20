const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang,fetchJson, botpic, runtime, prefix, Config ,alive  } = require('../lib')
const {TelegraPh} = require('../lib/scraper')
const util = require('util');
const fs = require('fs-extra');
const axios = require('axios')
const fetch = require('node-fetch');


//=====================================================================
async function Create_Url(Void, citel)
{
    let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
    let anu = await TelegraPh(media);
    await fs.unlinkSync(media);
    return util.format(anu)
} 
cmd({ pattern: "ads", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*Reply To Any Image*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("Uhh Please, Reply To An Image");
    try{ let sᴜʜᴀɪʟ_ᴍᴅ = await Create_Url(Void, citel);
    return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/ad?image=${sᴜʜᴀɪʟ_ᴍᴅ}`,},caption: Config.caption }, { quoted: citel });} catch(e) { return await citel.send(`_Error While Editing Image :_\n_Error Reason :_ ${e}`);}
})
//=============================================================================
cmd({ pattern: "jail", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*Reply To Any Image*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("Uhh Please, Reply To An Image");
    try{ let sᴜʜᴀɪʟ_ᴍᴅ = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/jail?image=${sᴜʜᴀɪʟ_ᴍᴅ}`,},caption: Config.caption }, { quoted: citel });} catch(e) { return await citel.send(`_Error While Editing Image :_\n_Error Reason :_ ${e}`);}
})
//=============================================================================
cmd({ pattern: "uncover", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*Reply To Any Image*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("Uhh Please, Reply To An Image");
    try{ let sᴜʜᴀɪʟ_ᴍᴅ = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/uncover?image=${sᴜʜᴀɪʟ_ᴍᴅ}`,},caption: Config.caption }, { quoted: citel });} catch(e) { return  await citel.send(`_Error While Editing Image :_\n_Error Reason :_ ${e}`);}
})
//=============================================================================
cmd({ pattern: "clown", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*Reply To Any Image*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("Uhh Please, Reply To An Image");
    try{ let sᴜʜᴀɪʟ_ᴍᴅ = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/clown?image=${sᴜʜᴀɪʟ_ᴍᴅ}`,},caption: Config.caption }, { quoted: citel });} catch(e) { return await citel.send(`_Error While Editing Image :_\n_Error Reason :_ ${e}`);}
})
//=============================================================================
cmd({ pattern: "mnm", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*Reply To Any Image*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("Uhh Please, Reply To An Image");
    try{ let sᴜʜᴀɪʟ_ᴍᴅ = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/mnm?image=${sᴜʜᴀɪʟ_ᴍᴅ}`,},caption: Config.caption }, { quoted: citel });} catch(e) { return await citel.send(`_Error While Editing Image :_\n_Error Reason :_ ${e}`);}
})
//=============================================================================
cmd({ pattern: "pett", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*Reply To Any Image*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("Uhh Please, Reply To An Image");
    let sᴜʜᴀɪʟ_ᴍᴅ = await Create_Url(Void, citel);
    try{ let sᴜʜᴀɪʟ_ᴍᴅ = await Create_Url(Void, citel);
        return await citel.reply(a,{packname:Config.packname,author:'sᴜʜᴀɪʟ-ᴍᴅ'},"sticker");} catch(e) { return await citel.send(`_Error While Editing Image :_\n_Error Reason :_ ${e}`);}
})
//=============================================================================
cmd({ pattern: "greyscale", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*Reply To Any Image*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("Uhh Please, Reply To An Image");
    try{ let sᴜʜᴀɪʟ_ᴍᴅ = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/greyscale?image=${sᴜʜᴀɪʟ_ᴍᴅ}`,},caption: Config.caption }, { quoted: citel });} catch(e) { return await citel.send(`_Error While Editing Image :_\n_Error Reason :_ ${e}`);}
})
//=============================================================================
//=============================================================================
cmd({ pattern: "invert", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*Reply To Any Image*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("Uhh Please, Reply To An Image");
    try{ let sᴜʜᴀɪʟ_ᴍᴅ = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/invert?image=${sᴜʜᴀɪʟ_ᴍᴅ}`,},caption: Config.caption }, { quoted: citel });} catch(e) { return await citel.send(`_Error While Editing Image :_\n_Error Reason :_ ${e}`);}
})
//=============================================================================
//=============================================================================
cmd({ pattern: "blur", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*Reply To Any Image*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("Uhh Please, Reply To An Image");
    try{ let sᴜʜᴀɪʟ_ᴍᴅ = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/blur?image=${sᴜʜᴀɪʟ_ᴍᴅ}`,},caption: Config.caption }, { quoted: citel });} catch(e) { return await citel.send(`_Error While Editing Image :_\n_Error Reason :_ ${e}`);}
})
//=============================================================================
//=============================================================================
cmd({ pattern: "drip", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*Reply To Any Image*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("Uhh Please, Reply To An Image");
    try{ let sᴜʜᴀɪʟ_ᴍᴅ = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/drip?image=${sᴜʜᴀɪʟ_ᴍᴅ}`,},caption: Config.caption }, { quoted: citel });} catch(e) { return await citel.send(`_Error While Editing Image :_\n_Error Reason :_ ${e}`);}
})
//=============================================================================
//=============================================================================
cmd({ pattern: "colorify", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*Reply To Any Image*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("Uhh Please, Reply To An Image");
    try{ let sᴜʜᴀɪʟ_ᴍᴅ = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/colorify?image=${sᴜʜᴀɪʟ_ᴍᴅ}`,},caption: Config.caption }, { quoted: citel });} catch(e) { return await citel.send(`_Error While Editing Image :_\n_Error Reason :_ ${e}`);}
})
//=============================================================================
//=============================================================================
cmd({ pattern: "gun", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*Reply To Any Image*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("Uhh Please, Reply To An Image");
    try{ let sᴜʜᴀɪʟ_ᴍᴅ = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/gun?image=${sᴜʜᴀɪʟ_ᴍᴅ}`,},caption: Config.caption }, { quoted: citel });} catch(e) { return await citel.send(`_Error While Editing Image :_\n_Error Reason :_ ${e}`);}
})
//=============================================================================
//=============================================================================
cmd({ pattern: "wanted", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*Reply To Any Image*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("Uhh Please, Reply To An Image");
    try{ let sᴜʜᴀɪʟ_ᴍᴅ = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/wanted?image=${sᴜʜᴀɪʟ_ᴍᴅ}`,},caption: Config.caption }, { quoted: citel });} catch(e) { return await citel.send(`_Error While Editing Image :_\n_Error Reason :_ ${e}`);}
})
//=============================================================================

















