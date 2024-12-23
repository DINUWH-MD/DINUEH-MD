const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID ||"eBBG0TyR#mdo4rTIZg0IQg43sWCa2C81mp3rVAZ22GcQ1CL2oEn4"
MONGODB: process.env.MONGODB || "mongodb://mongo:TcJLZkZMuoSQQOrjIbDZYeaqESHaFhCu@mongodb.railway.internal:27017",
};
