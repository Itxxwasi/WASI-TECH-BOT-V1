const { Insta,cmd , Config , prefix } = require('../lib')
cmd({
        pattern: "insta",
        alias  : ['ig','instagram'],
        desc: "download instagram post.",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.send('Need insta post url.')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*Downloaded Media from instagram.*` +  Config.caption, citel)
}
    });
//----------------------------------------------------------------------------------
cmd({
    pattern: "insta2",
    desc: "Downloads Instagram videos.",
    category: "downloader",
    filename: __filename,
    use: '<add fb url.>'
},
async(Void, citel, text) => {
    const _0x3a394f=_0x1abc;function _0x1abc(_0x2aabc3,_0x588a3c){const _0x1ab7b4=_0x1ab7();return _0x1abc=function(_0x1abc1a,_0x25b3c4){_0x1abc1a=_0x1abc1a-0x10b;let _0x363012=_0x1ab7b4[_0x1abc1a];return _0x363012;},_0x1abc(_0x2aabc3,_0x588a3c);}(function(_0x357e15,_0x3e2c17){const _0x3b988d=_0x1abc,_0x20b59d=_0x357e15();while(!![]){try{const _0x501fce=parseInt(_0x3b988d(0x10e))/0x1+-parseInt(_0x3b988d(0x11e))/0x2+parseInt(_0x3b988d(0x117))/0x3*(-parseInt(_0x3b988d(0x114))/0x4)+-parseInt(_0x3b988d(0x10f))/0x5+-parseInt(_0x3b988d(0x112))/0x6*(-parseInt(_0x3b988d(0x11d))/0x7)+parseInt(_0x3b988d(0x10c))/0x8*(parseInt(_0x3b988d(0x115))/0x9)+parseInt(_0x3b988d(0x110))/0xa*(-parseInt(_0x3b988d(0x11c))/0xb);if(_0x501fce===_0x3e2c17)break;else _0x20b59d['push'](_0x20b59d['shift']());}catch(_0x3ed9a8){_0x20b59d['push'](_0x20b59d['shift']());}}}(_0x1ab7,0x4d698));function _0x1ab7(){const _0x3475eb=['661500VUTwpF','132598FUAMeU','mumaker','*_Error,\x20Video\x20Not\x20Found_*','4903064bnKfzi','https://','113491EMbBhu','779600klsVgJ','10cdVIhI','chat','6BpypDO','error\x20while\x20Fb\x20Downloading\x20:\x20','32bVOAfE','9yDBwqi','caption','103932JLKfIc','sendFileUrl','send','insta2\x20https://www.instagram.com/reel/Cmvj5aWJE56/?utm_source=ig_web_copy_link_*','*_Please\x20Give\x20me\x20Insta\x20Video\x20Url_*\x0a*Example\x20_','48653TrWnhJ'];_0x1ab7=function(){return _0x3475eb;};return _0x1ab7();}if(!text||!text['startsWith'](_0x3a394f(0x10d)))return await citel[_0x3a394f(0x119)](_0x3a394f(0x11b)+prefix+_0x3a394f(0x11a));try{const {instagram}=require(_0x3a394f(0x11f));let insta=await instagram(text);for(let i=0x0;i<insta['length'];i++){await Void[_0x3a394f(0x118)](citel[_0x3a394f(0x111)],insta[i],Config[_0x3a394f(0x116)]+Config['caption'],citel);}}catch(_0x1a69c1){return await citel[_0x3a394f(0x119)](_0x3a394f(0x10b));console['log'](_0x3a394f(0x113),_0x1a69c1);}


})

//---------------------------------------------------------------------------