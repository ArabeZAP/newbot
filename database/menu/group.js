const group = (prefix, botName, ownerName) => {
        return `
┏  ${botName} 
╿
┷┯ BOT INFO 
   ╽
   ┠≽ Prefix : 「  ${prefix}  」
   ┠≽ Criador : ${ownerName}
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

┷┯ GRUPO 
   ╽
   ┠≽ ${prefix}opengc
   ┃ Desc : Abre grupo
   ┠──────────────╼
   ┠≽ ${prefix}closegc
   ┃ Desc : Fecha  Grupo
   ┠──────────────╼
   ┠≽ ${prefix}promote <@tag>
   ┃ Desc : Promova Pessoas ser Admin do Grupo
   ┠──────────────╼
   ┠≽ ${prefix}demote <@tag>
   ┃ Desc : tirar adm da pessoa
   ┠──────────────╼
   ┠≽ ${prefix}baianos
   ┃ Mencione Todos Membros
   ┠──────────────╼
   ┠≽ ${prefix}tagall2
   ┃ Desc : Mencione Todos Membros
   ┠──────────────╼
   ┠≽ ${prefix}tagall3
   ┃ Desc : Mencione Todos Membros
   ┠──────────────╼
   ┠≽ ${prefix}tagall4
   ┃ Desc : Mencione Todos Membros
   ┠──────────────╼
   ┠≽ ${prefix}tagall5
   ┃ Desc : Mencione Todos Os Membros
   ┠──────────────╼
   ┠≽ ${prefix}add <55996673834>
   ┃ Desc : Add Membros
   ┠──────────────╼
   ┠≽ ${prefix}ban <@tag>
   ┃ Remove Membro do Grupo
   ┠──────────────╼
   ┠≽ ${prefix}cornos
   ┃ Desc : Mostrar Administradores Do Grupo
   ┠──────────────╼
   ┠≽ ${prefix}link
   ┃ Desc : Mostrar Link Do Grupo
   ┠──────────────╼
   ┠≽ ${prefix}leave
   ┃ Desc : Diga ao bot para sair Deste grupo
   ┠──────────────╼
   ┠≽ ${prefix}welcome <1/0>
   ┃ Desc : Ativando/ Desativando a Bemvinda Feature
   ┠──────────────╼
   ┠≽ ${prefix}nsfw <1/0>
   ┃ Desc : Ativando / Desativando a NSFW Feature
   ┠──────────────╼
   ┠≽ ${prefix}delete
   ┃ Desc : Excluir Mensagem Bot
   ┠──────────────╼
   ┠≽ ${prefix}simih <1/0>
   ┃ Desc : Ativando / Desativando o Simih Feature
   ┠──────────────╼
   ┠≽ ${prefix}tagme
   ┃ Desc : Mencionar Voce
   ┠──────────────╼
   ┠≽ ${prefix}ownergroup
   ┃ Desc : Mostra Quem Proprietario Grupo
   ┠──────────────╼
   ┠≽ ${prefix}antilinkgroup <1/0>
   ┃ Desc : Ativando / Desativando a Anti Link Destaque
   ╿ ${ownerName},
   ╰╼≽ Developer © ${botName}`
}
exports.group = group
