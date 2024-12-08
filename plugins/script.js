const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *M.Farhan Ali*

> *SOBIA MD REPO:*
*|* *https://github.com/FarhanAli690/Drove-MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vank3vaLikg5ldoNdd0U*
*╰──────────────●●►*

> *update command Done*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '12036323288171807@newsletter',
      newsletterName: "UMAR",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'FROVE-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/FarhanAli690/Drove-MD" ,
thumbnailUrl: "https://i.ibb.co/Zgjh4Qs/IMG-20241113-WA0019.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
