const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1,cmd } = require("../lib");
const axios = require('axios');
const appName = Config.HEROKU_APP_NAME;
const apiKey = Config.HEROKU_API_KEY;
const fetch = require('node-fetch');


cmd({
        pattern: "allvar",
        desc: "To restart bot",
        category: "tools",
        filename: __filename
    },
    
async(Void, citel , text) => {


const authToken = Config.HEROKU_API_KEY; // Replace with your Heroku auth token
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`
};
const appName =Config.HEROKU_APP_NAME;


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
