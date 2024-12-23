const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID ||"aZhC0AIa#0i4NC3VxKuYHNo5hA6gLDEKoBxMFB2HfWev5gMYUDUk"
MONGODB: process.env.MONGODB || "mongodb://mongo:TcJLZkZMuoSQQOrjIbDZYeaqESHaFhCu@mongodb.railway.internal:27017",
};
