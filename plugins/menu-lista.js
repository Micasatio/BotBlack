let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 

let pp = '.media/menu2.jpg'
 
const sections = [
{
title: `Black Bot Menu`,
rows: [
      {title: "🔰 Grupo 🔰", description: "Grupos oficiales Del Bot", rowId: `${usedPrefix}grupos`},
      {title: "♨️ tagall ♨️", description: "Para mencionar a todos en una lista", rowId: `${usedPrefix}tagall`},
      {title: "⚽Messi", description: "Foto de Messi 🥵", rowId: `${usedPrefix}messi`},
      {title: "🔊 audios 🔊", description: "para los audios del bot", rowId: `${usedPrefix}menu2`},
      {title: "🥵Loli🥵", description: null, rowId: `loli`},
      {title: "Menú completo", description: "Para ver el menú completo del bot" , rowId: `menucompleto`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `╭─「 Black Bot 」
║❥Hola, ${name}! Espero que tengas un lindo día o noche!!
║
║❥Creador del Bot: +595 983 186566
║
║❥Tu SN es: 
║
║❥💰Coins restantes:  Coins*
║
║❥Tu nivel es: 1
║
║❥ XP en Total 98
║
║❥YouTube: https://www.youtube.com/c/TheKillerMaxOFC
║
║❥Reestablecer códigos de tu número de WhatsApp en menos de 30 segundos: https://youtu.be/c4K0n3XdCXE
║
║❥Sacar de soporte cualquier número de WhatsApp en menos de 30 segundos: https://youtu.be/DzSAB9_HmC8
║
║❥Envia ¨Bot¨ para ver los Grupos del Bot.
║
║❥Envia ¨/serbot¨ para tener el bot en tu número (no disponible por el momento)
║
║❥Si quieres ayudar a mejorar el bot, puedes donar (Paypal Mínimo 3 Dólares)
║
║❥Paypal: https://www.paypal.com/paypalme/contemplandoamerica?country.x=AR&locale.x=es_XC
║
║
║
║❥Envia los comandos sin * * ¨ ¨ ( )
║ 
╰────
*Black Bot*`, footer: ``, pp,
title: null,
buttonText: "menu", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.register = true
export default handler
