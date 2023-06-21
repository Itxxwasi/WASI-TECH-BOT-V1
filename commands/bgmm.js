const {TelegraPh , bgm } = require('../lib/')

const ffmpeg = require('fluent-ffmpeg');
const axios = require('axios')
const { getBuffer, cmd , Config} = require('../lib/')
const fs = require('fs-extra');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// -------------------------------------------------------------------


async function convertAudioToBlackScreenVideo(audioPath, outputPath) {
  try 
  {
    try{ fs.unlinkSync(outputPath);}catch (e) {}
    const getDurationCmd = `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 ${audioPath}`;
    const { stdout: durationOutput } = await exec(getDurationCmd);
    const duration = parseFloat(durationOutput);
    try{fs.unlinkSync('./blackScreen.mp4');}catch (e) {}
    const generateVideoCmd = `ffmpeg -f lavfi -i color=c=black:s=1280x720:d=${duration} -vf "format=yuv420p" ./blackScreen.mp4`;
    await exec(generateVideoCmd);
    const mergeCmd = `ffmpeg -i ./blackScreen.mp4 -i ${audioPath} -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 ${outputPath}`;
    await exec(mergeCmd);
    console.log('Audio converted to black screen video successfully!');
    return {result : true}
  } catch (error) {  console.error('An error occurred:', error); return {result : false }}
}
//------------------------------------------------------------------








cmd({
        pattern: "addbgm",
        desc: "create paste of text.",
        category: "general",
        filename: __filename,
    },

async(Void,citel,text)=>
{
if(!citel.quoted) return await citel.reply("Uhh Please, Reply to Audio/Video To Add In Bgm")
  if(!text) return await citel.reply ("Uhh Please give Bgm Song NAme")
let isVideo = false ;
let path ='' ; 
if (citel.quoted.mtype == 'videoMessage') 
{
path = await Void.downloadAndSaveMediaMessage(citel.quoted)
 isVideo = true ;
}
else if (citel.quoted.mtype == 'audioMessage') 
{
 isVideo = false ;
let audioPath = await Void.downloadAndSaveMediaMessage(citel.quoted,'audio');
let res = await convertAudioToBlackScreenVideo(audioPath, './convertedVideo.mp4');
if(res.result) {path = "./convertedVideo.mp4"}
}
 else return await citel.reply("Uhh Please, Reply to Audio/Video To Add In Bgm")
if (!path) return await citel.reply("There's an Error While Adding Bgm Song")
 let url = await TelegraPh(path)
  let bgmm= await bgm.findOne({ id:"3" }) || await new bgm({ id:"3"}).save();
 try {
    bgmm.bgmArray.set(text, url);
    await bgmm.save();
    return await citel.reply('BGM updated successfully.');
 } catch (error) { return await citel.reply('Error updating BGM:'+ error); }
await citel.reply("bgmm data  :" + bgmm)


})
