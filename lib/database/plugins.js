const mongoose = require('mongoose');
const pluginSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
url: { type: String }
})

const Pluginsdb =  mongoose.model("Pluginsdb", pluginSchema )
module.exports = { Pluginsdb }  
   