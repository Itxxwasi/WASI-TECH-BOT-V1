const mongoose = require('mongoose');
const AntiSpamSchema = new mongoose.Schema({
id: { type: String, required: true, unique: true },
user: { type: String ,required: true },
current : { type: String ,  default: '1' },
last : { type: String ,  default: '2'},
spamCount : { type: Number ,  default: 0},
})
const spam =  mongoose.model("Sck1", AntiSpamSchema)
module.exports = { spam }
