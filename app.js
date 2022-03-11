require('dotenv').config()
const { Client } = require('discord.js');
const { botIntents, commands, prefix } = require('./options');
const config = require('./config');

const client = new Client({
	intents: botIntents,
	partials: ['CHANNEL', 'MESSAGE'],
});

client.on('ready', () => {
	console.log('Logged in as ' + client.user.tag);
});

const startBot = () => {
	client.login(config.DISCORD_TOKEN);
};

client.on('messageCreate', async (msg) => {
	if (msg.author.bot) return;
	if (!msg.content.startsWith(prefix)) return;

	const userCmd = msg.content.slice(prefix.length);

	if (userCmd === commands.getName) {
		msg.reply(msg.author.username);
	} else {
		msg.reply('I do not understand your command');
	}
});

if(config.ACTIVATE_BOT){
	startBot();
	console.log('bot started');
}

module.exports = startBot;