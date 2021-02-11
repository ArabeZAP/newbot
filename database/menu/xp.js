const xp = (prefix, botName, ownerName) => {
        return `
┏ 〈 ${botName} 〉
╿
┷┯ 〈 BOT INFO 〉
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ 〈 ABOUT 〉
╽
┠≽ ${prefix}info (error)
┃ vê as informações do bot (off)
┠──────────────╼
┠≽ ${prefix}blocklist
┃ Vê a lista de ctts bloqueados
┠──────────────╼
┠≽ ${prefix}chatlist (error)
┃ Vê a lista de conversa (off)
┠──────────────╼
┠≽ ${prefix}ping
┃ Vê as informações do seu cell kk
┠──────────────╼
┠≽ ${prefix}bugreport <text>
┃ Mandar bugs, falhas para o meu dono
╿
┷┯ 〈 LEVEL 〉
   ╽
   ┠≽ ${prefix}level
   ┃ Vê o seu nível
   ┠──────────────╼
   ┠≽ *${prefix}leveling* <1/0>
   ┃ 1 liga o level e 0 desliga
   ┠──────────────╼
   ┠≽ ${prefix}mining
   ┃ Mining XP
   ┠──────────────╼
   ┠≽ ${prefix}event <1/0>
   ┃ 1 liga o evento e 0 desliga *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Note: árabe ta dominando, peida não xereqinha.`
}
exports.xp = xp
