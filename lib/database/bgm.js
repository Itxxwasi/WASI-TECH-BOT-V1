const mongoose = require('mongoose');
const Bgm = new mongoose.Schema({
  id: { type: String,  unique: true ,required: true, default:"1"},
  bgm: { type: Boolean, default: false },
  bgmArray: { type: Map, of: String, default: {} }
  });

const bgm =mongoose.model("bgm", Bgm)
module.exports = { bgm }
