const downloader = (prefix, botName, ownerName) => {
	return `
┏ ${botName} 
╿
┷┯ BOT INFO 
   ╽
   ┠≽ Prefix: 「  ${prefix}  」
   ┠≽ Creator: ${ownerName}
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

┷┯ DOWNLOAD
   ╽
   ┠≽ ${prefix}pinterest <query>
   ┃ Baixa foto do Pinterest
   ┠──────────────╼
   ┠≽ ${prefix}ytmp3 <linkyt>
   ┃ Baixa video do Youtube em Mp3
   ┠──────────────╼
   ┠≽ ${prefix}ytmp4 <linkyt>
   ┃ Baixa video do YouTube em Mp4
   ┠──────────────╼
   ┠≽ ${prefix}tiktok <linktiktok>
   ┃ Baixa vídeo do TikTok
   ╿ ${ownerName},
   ╰╼≽ Developer © ${botName}`
}
exports.downloader = downloader
