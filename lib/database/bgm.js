const mongoose = require('mongoose');
const Bgm = new mongoose.Schema({
  id: { type: String,  unique: true ,required: true, default:"1"},
  text: { type: String, default:"Im Online , How can i help you" },
  bgmArray: { type: Map, of: String, default: {} },
  });

const bgm =mongoose.model("bgm", Bgm)
module.exports = { bgm }
