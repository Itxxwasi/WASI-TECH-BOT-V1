const fetch = require('node-fetch');
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1,cmd } = require("../lib");
const express = require('express');
const app = express();
const appName = Config.HEROKU_APP_NAME;
const authToken = Config.HEROKU_API_KEY;



app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/public' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
