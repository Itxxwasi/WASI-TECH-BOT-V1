/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Suhail-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo
   * @description : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.0.5
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/

 



const { formatp , formatDate , tlang, botpic,smd, prefix, runtime,Config , parsedJid ,sleep } = require('../lib')
const axios = require('axios')
const fetch = require('node-fetch');
 const os = require('os')
const speed = require('performance-now')
const API_KEY = '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'
//===============================================
      async function getDateTime() {
        const now = new Date();
        const date = now.toISOString().slice(0, 10);
        const time = now.toLocaleTimeString();
        return { date, time };
      }
///=============================================
smd({
  pattern: "uptime",
  alias: ["runtime"],
  desc: "Tells runtime/uptime of bot.",
  category: "misc",
  filename: __filename
},
async(Suhail, msg, text) => {
  const upt = runtime(process.uptime())
  msg.reply(`*_Uptime of ${Config.botname}: ${upt}_*`)
}
)
//---------------------------------------------------------------------------
//                  RREPOSITORY  COMMAND
//---------------------------------------------------------------------------
smd({
        pattern: "repo",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo",
        category: "general",
        filename: __filename,
    },
    async(Suhail, citel) => {
      try{
          let { data } = await axios.get('https://api.github.com/repos/SuhailTechInfo/Secktor-bot')
        let cap = `
        
🔰 *Suhail-Md Repo Info* 🔰
  *❲❒❳ Stars:* ${data.stargazers_count} stars
  *❲❒❳ Forks:* ${data.forks_count} forks
  *❲❒❳ Auther:* SuhailTechInfo
  *❲❒❳ Create:* ${data.created_at}
  *❲❒❳ Repo:* _${github}_
  *❲❒❳ Scan:* _${scan}_\n
  *❲❒❳ Visit For Tutorial* _https://www.Youtube.com/c/SuhailTechInfo_
${Config.caption?'\n\n'+Config.caption : ''}`.trim();
	
        return await Suhail.bot.sendMessage(citel.chat,  {   image: { url: await botpic() },    caption: cap,  } , {   quoted: citel, });
      }catch(e){return await citel.error(e)}
  });
//---------------------------------------------------------------------------
//                  BOT STATUS COMMAND
//---------------------------------------------------------------------------
smd({
        pattern: "status",
        alias: ["about" , "info"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Suhail, citel) => {

        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
        
  🔰 *I am ${Config.botname}* 🔰
  *❲❒❳ Description:* A WhatsApp bot with rich features, Created By *${Config.ownername}*.\n
  *❲❒❳ Speed:* ${latensie.toFixed(4)} ms
  *❲❒❳ Uptime:* ${runtime(process.uptime())}
  *❲❒❳ Version:* ${Config.VERSION}
  *❲❒❳ Owner:*  ${Config.ownername}\n
  *❲❒❳ Support:* _${gurl}_ 
${Config.caption?'\n\n'+Config.caption : ''}`.trim();
        return await Suhail.bot.sendMessage(citel.chat, { image: { url: await botpic() },    caption:ter, },{ quoted: citel, });

    }
)
//========================================================================

smd({
  pattern: "cpu",
  desc: "To check bot status",
  category: "general",
  filename: __filename,
},
async(Suhail, msg) => {
  try{
      const used = process.memoryUsage()
      const cpus = os.cpus().map(cpu => {
          cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
          return cpu
      })
      const cpu = cpus.reduce((last, cpu, _, { length }) => 
      {

          last.total += cpu.total
          last.speed += cpu.speed / length
          last.times.user += cpu.times.user
          last.times.nice += cpu.times.nice
          last.times.sys += cpu.times.sys
          last.times.idle += cpu.times.idle
          last.times.irq += cpu.times.irq
          return last
      },{ speed: 0,total: 0,times: {user: 0,nice: 0,sys: 0,idle: 0,irq: 0 } }
      )
    timestampe = speed();
    latensie = speed() - timestampe;
    var neww = performance.now()
    var oldd = performance.now()
                  
    respon = `*❲❒❳ ${Config.botname} Server Info ❲❒❳*
    
  *❲❒❳ Runtime:* ${runtime(process.uptime())}
  *❲❒❳ Speed:* ${latensie.toFixed(3)}/${(oldd - neww).toFixed(3)} ms
  *❲❒❳ RAM:* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
  
  *❲❒❳ Memory Usage:*
      ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n      ')}
  
${cpus[0] ? `  *❲❒❳ Total CPU Usage:*
  *${cpus[0].model.trim()} (${cpu.speed} MHZ)*
      ${Object.keys(cpu.times).map(type => `-${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n      ')}
\n  *❲❒❳ CPU Core Usage (${cpus.length} Core CPU)*
  ${cpus.map((cpu, i) => `*Core ${i + 1}: ${cpu.model.trim()} (${cpu.speed} MHZ)*
      ${Object.keys(cpu.times).map(type => `-${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n      ')}`).join('\n\n')}` : ''}
`.trim()
      return await msg.send(respon,{},"",msg)
  }catch(e){msg.error(e)}
})
 


  //=========================================================