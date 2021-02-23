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

client.on('ready', () => {
  console.log('Bot is ready!')
})

client.on('message', (message) => {
  if (message.author.id === process.env.ADAN_ID && message.content.toLowerCase().indexOf('gay') !== -1) {
    message.channel.send('https://cdn.discordapp.com/attachments/546172628738768911/813584521500164136/unknown.png')
  }
})