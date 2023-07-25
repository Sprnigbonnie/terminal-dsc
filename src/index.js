require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`✅🤖 ${client.user.tag} is ready to terminate.`);

  client.user.setActivity({
    name: 'my terminal in VSCode',
    type: ActivityType.Watching,
  })
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'h') {
    interaction.reply('h');
  }

  if (interaction.commandName === 'ping') {
    interaction.reply('pong, also the latency is idk');
  }

  if (interaction.commandName === 'add') {
    const num1 = interaction.options.get('number-a').value;
    const num2 = interaction.options.get('number-b').value;

    interaction.reply(`The sum is ${num1 + num2}.`)
  }

  if (interaction.commandName === 'embed') {
    const embed = new EmbedBuilder()
    .setTitle('uhh title')
    .setDescription('uhhh description lololol heathrow terminals')
    .setColor('Random')
    .addFields(
      { 
      name: 'uhh this is field title', 
      value:'h value lol', 
      inline:true,
    },
    { 
      name: 'uhh this is another field title', 
      value:'2h value lol', 
      inline:true,
    }
    );

    interaction.reply({ embeds: [embed] });
  }
});

client.login(process.env.TOKEN);
