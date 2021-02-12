const music = (prefix, botName, ownerName) => {
        return `
┏  ${botName} 
╿
┷┯  BOT INFO 
   ╽
   ┠≽ Prefix : 「  ${prefix}  」
   ┠≽ Creator : ${ownerName}
   ┠≽ Mama o árabe
░▐█▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████▌
░░█▒▄▀▀▀▀▀▄▒▒▄▀▀▀▀▀▄▒▐███▌
░░░▐░░░▄▄░░▌▐░░░▄▄░░▌▐███▌
░▄▀▌░░░▀▀░░▌▐░░░▀▀░░▌▒▀▒█▌
░▌▒▀▄░░░░▄▀▒▒▀▄░░░▄▀▒▒▄▀▒▌
░▀▄▐▒▀▀▀▀▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒█
░░░▀▌▒▄██▄▄▄▄████▄▒▒▒▒█▀
░░░░▄██████████████▒▒▐▌
░░░▀███▀▀████▀█████▀▒▌
░░░░░▌▒▒▒▄▒▒▒▄▒▒▒▒▒▒▐
░░░░░▌▒▒▒▒▀▀▀▒▒▒▒▒▒▒▐
░░░▄▄▄▓▀▀░░░░░░░▒▒▒▀▀▀█▄░
░░▐█░▄▀░░░░░░░░░░░░░░▀▄░░█▌
░░▐░▐░░░░░░░░░░░░░░░░░░▐░░▌
░░▐▐░░░░░░░▀▄▒▄▀░░░░░░░▐░░▌
░░▐▐░░░░░░░▒▒▐▒▒░░░░░░░▐░░▌
░░▐▐░░░▄░░░░▒▐▒░░░▄░░░░▐░░▌
░░▐▐▒░░░░░▒▒▒▐▒▒▒░░░░░░▐░░▌░
░░▐░▀▄▒▒▒▒▒▄▀▒▀▄▒▒▒▒▒▄▀▌░▌░
╿
┷┯  MUSIC 
   ╽
   ┠≽ ${prefix}play <music_name>
   ┃ Desc : Play Music Audio
   ┠──────────────╼
   ┠≽ ${prefix}joox <music_name>
   ┃ Desc : Play Music Joox
   ┠──────────────╼
   ┠≽ ${prefix}lirik <music_name>
   ┃ Desc : Search Music Lyrics
   ┠──────────────╼
   ┠≽ ${prefix}chord <music_name>
   ┃ Desc : Search Chord Music Lyrics
   ╿ ${ownerName},
   ╰╼≽ Developer © ${botName}`
}
exports.music = music
