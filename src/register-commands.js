require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
  {
    name: 'h',
    description: 'Replies with h',
  },
  {
    name: 'ping',
    description: 'pong',
  },

  {
    name: 'add',
    description: 'Calculate two numbers by repr- adding them together.',
    options: [
      {
        name:'number-a'
        ,description: 'The first number, a.',
        type: ApplicationCommandOptionType.Number,
        required:true,
      },
      {
        name:'number-b'
        ,description: 'The second number, b.',
        type: ApplicationCommandOptionType.Number,
        required:true,
      }
    ]
  },
  {
    name: 'embed',
    description: 'One embedded message coming right up!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('Slash cmds success lol thank no errors');
  } catch (error) {
    console.log(`DUDE! ERROR JUST HAPPENED!! Hope you fix it soon: ${error}`);
  }
})();