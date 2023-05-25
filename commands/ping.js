//-----------------------------------------------------------------------------------
const Secktor = require('../lib')
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        await citel.reply('```Testing Ping!!!```');
        var final = new Date().getTime();
        return await citel.reply('*Pong*\n *' + (final - inital) + ' ms* ');
    }
);
