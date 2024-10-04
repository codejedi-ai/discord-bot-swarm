import {getURL, token, clientId } from './getauth.js';
import { Client, GatewayIntentBits } from 'discord.js';
console.log(`Authorize your bot by visiting this URL: \n${getURL(clientId)}`);
const client = new Client({ intents: [GatewayIntentBits.Guilds, 
                                      GatewayIntentBits.GuildMessages, 
                                      GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('interactionCreate', async interaction => {
    //console.log(`[${interaction.author.tag}]: ${interaction.content}`);
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });
client.on('messageCreate', message => {
    // console.log(`[${message.author.tag}]: ${message.content}`);
    // print the mssage channel, message server, and message content and message sener
    console.log(`[${message.channel}]: ${message.guild} - ${message.author.tag}: ${message.content}`);
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login(token);
