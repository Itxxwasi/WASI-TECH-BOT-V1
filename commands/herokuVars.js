const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1,cmd } = require("../lib");
const axios = require('axios');
const appName = Config.HEROKU_APP_NAME;
const authToken = Config.HEROKU_API_KEY;
const fetch = require('node-fetch');


cmd({
        pattern: "getallvar",
        desc: "To restart bot",
        category: "tools",
        filename: __filename
    },
    
async(Void, citel , text) => {
        
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
  
  
  .catch(error => console.error('Error retrieving app variables:', error));
  return citel.reply('Error retrieving app variables:\n');
  
});
//----------------------------------------------------------------------------------
cmd({
        pattern: "setvar",
        desc: "To restart bot",
        category: "tools",
        filename: __filename
    },
    
async(Void, citel , text) => {

if (!text) return citel.reply (`give me Variable Name\n*Example : ${prefix}setvar AUTO_READ_STATUS:true *`);

const headers = 
        {
                'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };

const varName = text.split(":")[0];
const newVarValue = text.split(":")[1]; 

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
                return citel.reply(`Variable *${varName}* has been updated.`);
           })
  
  .catch(error => console.error('Error updating app variable:', error));
  });
