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

const DB = require('../lib/scraper')
const { execSync } = require('child_process')
const { tlang, Config, prefix,cmd } = require('../lib')
const simpleGit = require('simple-git');
const git = simpleGit();
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const Config = require('../config')
const heroku = new Heroku({ token: Config.HEROKU_API_KEY })
let isHeroku = Config.HEROKU_API_KEY && Config.HEROKU_APP_NAME
//---------------------------------------------------------------------------
//                  UPDATE COMMANDS
//---------------------------------------------------------------------------
cmd({
            pattern: "update",
            desc: "Shows repo\'s refreshed commits.",
            category: "misc",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(`This command is only for my owner`)
            let commits = await DB.syncgit()
            if (commits.total === 0) {
                citel.reply(`Hey ${citel.pushName}. You have latest version installed.`)
            } else {
                let update = await DB.sync()
                  
                  let buttonMessaged = {
                    text: update,
                    footer: 'UPDATER --- sᴜʜᴀɪʟ ᴛᴇᴄʜ ɪɴғᴏ \n www.youtube.com/c/SuhailTechInfo',
                    headerType: 4,
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }

        }
    )
  
/*
cmd({
    pattern: "update start",
    desc: "Shows repo\'s refreshed commits.",
    category: "misc",
    filename: __filename
},
async(Void, citel, text,{ isCreator }) => {
    await git.fetch();
    var commits = await git.log(['main' + '..origin/' + 'main']);
    if (commits.total === 0) {
        return await citel.reply('Bot is UP-TO-DATE')
 }
// if (!isHeroku){
   // await require("simple-git")().reset("hard",["HEAD"])
   // await require("simple-git")().pull()
   // await citel.reply("_Successfully updated. Please manually update npm modules if applicable!_")
   // process.exit(0);    
   // }
    //else if (isHeroku) {
       // await fixHerokuAppName(message)
        await citel.reply('Update Started...')

 try { var app = await heroku.get('/apps/' + Config.HEROKU_APP_NAME)  }
 catch { await citel.reply('Heroku Information Wrong')
        await new Promise(r => setTimeout(r, 1000)); }
 
        git.fetch('upstream', 'main');
        git.reset('hard', ['FETCH_HEAD']);
        var git_url = app.git_url.replace( "https://", "https://api:" + Config.HEROKU_API_KEY + "@"  )
        try { await git.addRemote('heroku', git_url);  } 
       catch { console.log('null '); }
        await git.push('heroku', 'main');
       await citel.reply("_Successfully updated_")
       await citel.reply("_Restarting_")
        /*} else {
            await update("UPDATER",'default')
            await citel.reply("_Update started!_")
    }*/
 
}
)

//______________________________________________________________\\
/*async function fixHerokuAppName(message){
    if (!HEROKU_API_KEY) return await message.sendReply(`_You have not provided HEROKU_API_KEY\n\nPlease fill this var, get api key from heroku account settings_`)
    let apps = await heroku.get('/apps')
    let app_names = apps.map(e=>e.name)
    if (!HEROKU_APP_NAME || !app_names.includes(Config.HEROKU_APP_NAME)){
    function findGreatestNumber(e){let t=e[0];for(let n=1;n<e.length;n++)e[n]>t&&(t=e[n]);return t}
    let times = apps.map(e=>new Date(e.updated_at).getTime())
    let latest = findGreatestNumber(times)
    let index = times.indexOf(latest)
    let app_name = apps[index].name
    Config.HEROKU_APP_NAME = app_name
    process.env.HEROKU_APP_NAME = app_name
    baseURI = '/apps/' + app_name;
    await message.sendReply(`_You provided an incorrect heroku app name, and I have corrected your app name to "${app_name}"_\n\n_Please retry this command after restart!_`)    
    Config.HEROKU_APP_NAME = app_name
        return await setVar("HEROKU_APP_NAME",app_name,message)
    }
}
*/
