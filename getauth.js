import dotenv from 'dotenv';
dotenv.config();


const getURL = (clientId) => {
  const permissions = '8';
  const oauth2Url = `https://discordapp.com/oauth2/authorize?&client_id=${clientId}&scope=bot&permissions=${permissions}`;
  return oauth2Url;
};


const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;

export {getURL, token, clientId };