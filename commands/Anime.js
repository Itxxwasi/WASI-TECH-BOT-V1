










  const response = await fetch('https://api.waifu.pics/sfw/neko');
  const data = await response.json();
  citel.reply ('url here :'+data.url);

                let buttonMessaged = {
                    image: { url: data.url },
                    caption: 'Amime Pics Here',
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
