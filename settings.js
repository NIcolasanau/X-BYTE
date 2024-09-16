const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUI4cXZyNFUrdDJjOVB0Y1BhRmxXeEg0dzFEdXR5T3BzdDVabkREMFdHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3JnY3hhVFZVd0owRzd2UzJpY0NLWU80YUxyQVg5b2xVUXVVV2wzTW9Raz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQWRSY0VGUDVrZmYzbjdwdm5aNFZDMnJ5ejkyemRLUHVLcXByS3U4YkhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxckcyL01mR1YycjdKWjRKTUxEVkNJZ2R2TUpPbFV2dlc3bnE3aEMrdVRZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1NeTYxQS83WDBETCszUzRYczNETlNiZ0hJdlhoMVpXRjVKRU10Rk1GbTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KTmhHNEVjY2R2OXJhU2pBWDRJbmhCRHZRaGVxWkcxQ00rMDNCRkJTRmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUQzL08vVVp4OHlpUHQzamhsT05RZGg5RTNGVmcvd2l4a25qbWJ2SzNtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzVHbkNZZkFwcDBTRTJnYWkzSDlOajZ6WERiSjFvWDYvNEJNaC9zU1ZSOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNhK09sOVhEM0QwTVJQNlBhSkZQT0RqWWY5WGJKU1FsL3VObTgzQnVnc0FNMTVSOXZieWRIaEE0SWJjenNUZ0Q0dnVTWm9IQXdDR1RKeU5BTHpHckRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEzLCJhZHZTZWNyZXRLZXkiOiJxSVdIT3YzZWJLdnlSTWY3KzJia2pyK25mdkVkYlNVYkN3aGhnMytjOU1ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwNHd0aG4zSFN3eWkwX2ZvVkpnTWlRIiwicGhvbmVJZCI6ImUzOWE2MzZiLWUwOGItNDdkOS05YmIzLWVjNDQ0ZTE4Y2NhNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSUk96QTVwdXFXZmt2K1BtWVhLNnFTUHJjSmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkpRNVM4TnRBR0ZIYzJCOXJJQ0creDhQaTc0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFRSE1XRjNFIiwibWUiOnsiaWQiOiIxODI5MzcwMzU5MTozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQdWswS2NDRUxLbG5yY0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTWFNCdThVWEJjRXE2djBVWUsyZ0ZwbERkTERhYnlQbGd5aXNTNnUyQ2c4PSIsImFjY291bnRTaWduYXR1cmUiOiJnV09nTFJHNnRuZHRZZUtwZ1RkZzhvSitPZTZQcElsWWk4UDFRTy8yaDcrcG1PYWZpdnN4SEJidUF1eU5vSUVCT1k4VmJNYnBGMlBtdzMvK25VSW9Bdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaS9pU3Z4SGwwM0NScGd6UEdtNG00TmNDUDczNVJNSHZPbUFya0xYWTVGUlhJV2Z3ZHFaNWdOLzBsOVhRWm1COHpsS1pJSGQwdUNxZGZWaUpDdzk0Qmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxODI5MzcwMzU5MTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVsMGdidkZGd1hCS3VyOUZHQ3RvQmFaUTNTdzJtOGo1WU1vckV1cnRnb1AifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY0NTI0MTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUDlnIn0=' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '50932539509' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? 'POWERED BY HAMZA': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
LANG: process.env.LANG || 'ENG' , //URDU OR ENG
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO  

};
