require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(port, () => {
  console.log(`Birbit listening on port ${port}`)
})

const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.DISCORD_BOT_TOKEN);

const usedCommandRecently = new Set();

client.on('ready', () => {
  console.log('Bot is ready!')
})

client.on('message', (message) => {
  if (usedCommandRecently.has(message.author.id)) {
    
  } else {
    if (message.author.id === process.env.ADAN_ID && message.content.toLowerCase().indexOf('gay') !== -1) {
      message.channel.send('https://cdn.discordapp.com/attachments/546172628738768911/813584521500164136/unknown.png');
      usedCommandRecently.add(message.author.id);
    setTimeout(() => {
      usedCommandRecently.delete(message.author.id);
    }, 60000) // 60 seconds
    } else if(message.author.id === process.env.JUSTIN_ID && message.content.toLowerCase().indexOf('racist') !== -1) {
      message.channel.send('https://cdn.discordapp.com/attachments/759952933356961865/848986930531926086/justin.png')
      usedCommandRecently.add(message.author.id);
    setTimeout(() => {
      usedCommandRecently.delete(message.author.id);
    }, 60000) // 60 seconds
    } else if(message.author.id === process.env.ANDREW_ID && message.content.toLowerCase().indexOf('black') !== -1) {
      message.channel.send('https://cdn.discordapp.com/attachments/853997203525074964/867078481522196520/image0.png')
      usedCommandRecently.add(message.author.id);
    setTimeout(() => {
      usedCommandRecently.delete(message.author.id);
    }, 60000) // 60 seconds
    } else if(message.author.id === process.env.ADAM_ID && message.content.toLowerCase().indexOf('milf') !== -1) {
      message.channel.send('https://cdn.discordapp.com/attachments/546172628738768911/868910486228459563/video0.mov')
      usedCommandRecently.add(message.author.id);
    setTimeout(() => {
      usedCommandRecently.delete(message.author.id);
    }, 60000) // 60 seconds
    }
  }
  
})