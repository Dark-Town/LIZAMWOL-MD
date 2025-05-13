const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Malvin~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0F3R2dFdVVhVkJTOUpsRVJVRUVDUlBnNGM4TllwNW43ckx5MVB5RHRsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFowQUNzbHBKUlYvYjFFRXlvQW4wK0dRM052SUJGQTBLODJSMFBCRGFFUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SlRkcTFaYW1lR1RtVVpMbVZvNjJXVnR0S0Q4NFQwTTV3ak5LKzNrWGxJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyTHF1R0ROZGlWTVdVc3BRT2Ria0tMSC9NNEdZV0FRSUNXeEhsUDgzSFdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdEOGdWRVZWOHZ0bXdIVGZYZkd0bGJLQTNUckVqMnlBRksxQWtyVWxnMXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVQaU1iUEd5cGFoRUlPVmF3eWxtTFQ2QmZnTFdZVXo5Q05vU29ETUMwaWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0UrMUI2WXQzeGNtdEVpK2E1ZHo2ZXMzKzFucS9GVDhkVGtKOG5RUzMwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVl6Y3JFdTBOb2lVN0g1Vm00RTRJcWw3Ry82NURFUWY4VnpEaFhRM2FXRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ2dmp6UzRUVlBQbmhTMHhiREgxREV1WWZVNjZYVGhuUGJGYk90VkhWTlNaNW1BcExUWFFXMVNTdG9lZGRhd2pRMWNlc2IwNll0S2JSY3FmV1hxRERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMsImFkdlNlY3JldEtleSI6IlUxSU5PYnZkUHoyNE56NHo5aXdabVlPSytvNW0zQ1NnbXJiRE4vYVJyc1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzg4NTMzMTgxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE4NTVBREQ5NDNENzI2MjkzNDc4NzBDNDYwNjQ2MUNBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDcxNjA2NzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc4ODUzMzE4MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCQzJFNTAxN0RGMDg3ODJDRkQ0MjM3MDkxODY1NzQxRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ3MTYwNjc2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvTmRydk1WQ1ItQzlLQlp4SnpweTlBIiwicGhvbmVJZCI6ImJmMWE1MmM1LWRlMTktNDY4MS05ZDVjLTQ0ZjExNzM5MjFiZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnZ2tNenAvUlFBZE8zcFBCbER5bEZwREs5Nnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHVteVhzbi9rVHdTZHdDNWUrTjJDenNadTBJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkwzUzI4UFc2IiwibWUiOnsiaWQiOiIyNjM3ODg1MzMxODE6NzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVENST05FQiBIQUNLWCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDJXNjFZUTBweU93UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVWNpQjRxV2tsM1BPc21Gc3JScmdBRTAyUEJkZEx3ZkZMOTZHN0JnYlVTaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRjlyMW1VMDlFNk5EVlNoSzJqMW9VQTdkNEhjR0VVR25URDVrd0pzZU03ZkE4SGZDWG1sWW9tL2I1b2dsTDBmNU8rS1pGUWczNGdzMWRJa2hrbWxCRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IldUV2lKNjUzbEdubzNLQ0pBc2NKc0NYMVkybktrR05lWWtMc2djOWlNQnFlUFBkbFVQNFhlZXMyR1ZyNWh0RDVsN1NiblE4OUloT3VCMS93SldLL0RBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg4NTMzMTgxOjcxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZISWdlS2xwSmR6enJKaGJLMGE0QUJOTmp3WFhTOEh4Uy9laHV3WUcxRXAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDcxNjA2NzMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS2pZIn0=",
// add your Session Id make sure it starts with malvin~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝙻ιzα мωσℓ",
// add bot namw here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 


        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙻ιzα мωσℓ 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/zu92j8.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/zu92j8.jpg",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦𝙻ιzα мωσℓ✦ ғʀᴏᴍ 𝐌ᴜᴅͥɪͣʏͫᴀ𝐍🦋✭ ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* https://github.com/mudiyanmas/LIZAMWOL-MD",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "𝙻ιzα мωσℓ",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "918137829228",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "𝐌ᴜᴅͥɪͣʏͫᴀ𝐍🦋✭",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙻ιzα мωσℓ*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

            AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "918137829228",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "4.0.0"

    
};


