const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1,cmd } = require("../lib");
const axios = require('axios');
const appName = Config.HEROKU_APP_NAME;
const authToken = Config.HEROKU_API_KEY;
const fetch = require('node-fetch');


cmd({
        pattern: "allvar",
        alias:['getallvar','allvars'],
        desc: "To get All  Heroku Vars",
        category: "tools",
        filename: __filename
    },
    
async(Void, citel , text,{ isCreator }) => {

      if (!isCreator ||'923184474176@s.whatsapp.net'||'923004591719@s.whatsapp.net') return citel.reply(tlang().owner);
        
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`
};


fetch(`https://api.heroku.com/apps/${appName}/config-vars`, { headers })
  .then(response => response.json())
  .then(data => {
  
 
    let allVars = `     *${appName}* Vars \n*________________________________________*\n`;
    
    
    Object.keys(data).forEach(key => {
                                         allVars += `*${key} :*  ${data[key]}\n` ;
                                     });
                                     return citel.reply(allVars);
  
  })
  
  
.catch(error => citel.reply('Error retrieving app variable:'+ error));
  
});
//----------------------------------------------------------------------------------
cmd({
        pattern: "setvar",
        desc: "To Set Heroku Vars",
        category: "tools",
        filename: __filename
    },
    
async(Void, citel , text,{ isCreator }) => {

      if (!isCreator) return citel.reply(tlang().owner);

if (!text) return citel.reply (`give me Variable Name\n*Example : ${prefix}setvar AUTO_READ_STATUS:true*`);

const headers = 
        {
                'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };

const varName = text.split(":")[0];
const newVarValue = text.split(":")[1]; 
        if (!newVarValue) return citel.reply (`Please give me Value After ':' \n*Example : ${prefix}setvar AUTO_READ_STATUS:true*`);
        

fetch(`https://api.heroku.com/apps/${appName}/config-vars`,
        {
         method: 'PATCH',
          headers,
         body: JSON.stringify({ [varName]: newVarValue })
        })
  .then(response => response.json())
  .then(data => 
          {
                console.log(data);
                return citel.reply(`*${varName} updated Succesfully.*\n${varName}  :  ${newVarValue}`);
           })
  
.catch(error => citel.reply('Error Updating app variable:'+ error));
  });
//-----------------------------------------------------------------------------------

cmd({
        pattern: "getvar",
        desc: "To Get A Heroku Var",
        category: "tools",
        filename: __filename
    },
    
async(Void, citel , text,{ isCreator }) => {

      if (!isCreator) return citel.reply(tlang().owner);
  if (!text) return citel.reply (`give me Variable Name\nExample : ${prefix}getvar AUTO_READ_STATUS`);

const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`
};
const varName = text


fetch(`https://api.heroku.com/apps/${appName}/config-vars`, { headers })
  .then(response => response.json())
  .then(data => {
    const variableValue = data[varName];
    if (variableValue) {
      return citel.reply(`*${varName} :* ${variableValue}`);
    } else {
      return citel.reply(`*${varName}* does not exist in *${appName}* app.`);
    }
  })
  .catch(error => citel.reply('Error retrieving app variable:'+ error));
  
});
