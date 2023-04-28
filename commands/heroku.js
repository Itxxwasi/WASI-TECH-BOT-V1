
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1,cmd } = require("../lib");
const axios = require('axios');

const appName = Config.HEROKU_APP_NAME;
const apiKey = Config.HEROKU_API_KEY;


    //---------------------------------------------------------------------------

const getAppConfigVars = async () => {
  try {
    const response = await axios.get(`https://api.heroku.com/apps/${appName}/config-vars`, {
      headers: {
        Accept: 'application/vnd.heroku+json; version=3',
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const configVars = response.data;
    console.log('App Config Vars:', configVars);
    return configVars;
  } catch (error) {
    console.error('Error retrieving app config vars:', error);
    return null;
  }
};





// Update app config vars
const updateAppConfigVars = async (configVars) => {
  try {
    const response = await axios.patch(`https://api.heroku.com/apps/${appName}/config-vars`, configVars, {
      headers: {
        Accept: 'application/vnd.heroku+json; version=3',
        Authorization: `Bearer ${apiKey}`,
      },
    });
    console.log('App Config Vars updated successfully');
    return response.data;
  } catch (error) {
    console.error('Error updating app config vars:', error);
    return null;
  }
};

// Usage example
(async () => {
  // Retrieve app config vars
  const configVars = await getAppConfigVars();

  if (configVars) {
    // Modify the config vars as needed
    configVars.NEW_VARIABLE = 'new value';

    // Update the app config vars
    await updateAppConfigVars(configVars);
  }
})();
