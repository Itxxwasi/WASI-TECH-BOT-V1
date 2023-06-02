const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "true" },
nsfw: { type: String, default: "false" },
welcome:{ type: String, default: `*@user @pp Welcome Bruhhh In @gname.....!!!!!😊👇🏻♥️* \n\n*_GROUP DESCRIPTION_*\n@desc\n\n\n *____________*\n   *Support us by Subscribing*\n*Youtube.com/@suhailtechinfo0*`},
goodbye:{ type: String, default: `*@user @pp Left From @gname.....!!!!!😒👆🏻♥️* \n\n*_GROUP DESCRIPTION_*\n@desc\n\n\n *____________*\n   *Support us by Subscribing*\n*Youtube.com/@suhailtechinfo0*` },
botenable: { type: String, default: "true" },
antilink: { type: String, default: "false" },
antiSpam: { type: String, default: "false" },
economy: { type: String, default: "false" },
mute: { type: String },
unmute: { type: String }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck }
