const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ᴅʀᴏᴠᴇ-ᴍᴅ-ʙᴏᴛ*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ ᴡᴀʟᴋ-ᴅʀᴏᴠᴇ*
*│  ◦* *ʀᴇᴀɪʟ ɴᴀᴍᴇ➠ ᴍ.ғᴀʀʜᴀɴ ᴀʟɪ*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ ᴡᴀʟᴋ-ᴅʀᴏᴠᴇ*
*│  ◦* *ᴀɢᴇ➠ 17 ʏᴇᴀʀ*
*│  ◦* *ᴘᴀʟɪsᴛᴀɴ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴏᴘᴇʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • DROVE-MD • ]*
*╭┈───────────────•*
*│  ◦* *▢☞𝐃𝐑𝐎𝐕𝐄-𝐌𝐃 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐌.𝐅𝐀𝐑𝐇𝐀𝐍 𝐀𝐋𝐈*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴡᴀʟᴋ-ᴅʀᴏᴠᴇ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
