import dotenv from 'dotenv';
dotenv.config();

const clientId = '1096620642230607943';
const permissions = '8';
const oauth2Url = `https://discordapp.com/oauth2/authorize?&client_id=${clientId}&scope=bot&permissions=${permissions}`;

console.log(`Authorize your bot by visiting this URL: ${oauth2Url}`);

const token = process.env.TOKEN;

export { token, clientId };