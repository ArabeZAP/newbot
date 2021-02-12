const limit = (prefix, botName, ownerName) => {
        return `
┏  ${botName} 
╿
┷┯ BOT INFO 
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

┷┯  LIMITE 
   ╽
   ┠≽ ${prefix}limit
   ┃ Desc : Verifique Seus Limites
   ┠──────────────╼
   ┠≽ ${prefix}bal
   ┃ Verifique Seu Dinheiro
   ┠──────────────╼
   ┠≽ ${prefix}buylimit <count>
   ┃ Desc : Limite Compra
   ╿ ${ownerName},
   ╰╼≽ Developer © ${botName}
--------------------------------
Note: Voce pode comprar limites coletando dinheiro primeiro. Verifique seu dinheiro digitando comandos ${prefix}bal , harga 1 limit = 1000 uang.
Note2: Voce pode arrecadar dinheiro de uma maneira chat com amigos em um grupo ou voce pode subir level.`
}
exports.limit = limit
