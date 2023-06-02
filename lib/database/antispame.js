const mongoose = require('mongoose');
const AntiSpamSchema = new mongoose.Schema({
id: { type: String, required: true, unique: true },
user: { type: String ,required: true },
spamtext1: { type: String,  default: '1' },
spamtext2: { type: String,  default: '2'},
spamtext3: { type: String,  default: "3"},
spamtext4: { type: String,  default: "4"},
spamtext5: { type: String,  default: "5"}
})
const spam =  mongoose.model("Sck1", AntiSpamSchema)
module.exports = { spam }
