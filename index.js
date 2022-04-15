const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

var waifus = [
	'Aulick',
	'Beagle',
	'Bulldog',
	'Cassin',
	'Comet',
	'Craven',
	'Cresent',
	'Cygnet',
	'Downes',
	'Foote',
	'Foxhound',
	'Kisaragi',
	'McCall',
	'Mikazuki',
	'Minazuki',
	'Mutsuki',
	'Shiranui',
	'Spence',
	'Uzuki',
	'Z20',
	'Z21',
	'Acasta',
	'Akatsuki',
	'Amazon',
	'Arashiro',
	'Ardent',
	'Ariake',
	'Asashio',
	'Alywin',
	'Bache',
	'Bailey',
	'Benson',
	'Bush',
	'Dewey',
	'Echo',
	'Fletcher',
	'Forbin',
	'Fortune',
	'Fumizuki',
	'Gridley',
	'Halsey Powell',
	'Hamakaze',
	'Hammann',
	'Hatakaze',
	'Hatsuharu',
	'Hatsushimo',
	'Hazelwood',
	'Hobby',
	'Hunter',
	'Ikazuchi',
	'Inazuma',
	'Isokaze',
	'Jenkins',
	'Jersey',
	'Juno',
	'Jupiter',
	'Kagerou',
	'Kalk',
	'Kamikaze',
	'Kimberly',
	'Kiyonami',
	'Kuroshio',
	'Le Mars',
	'Matsukaze',
	'Michishio',
	'Nagatsuki',
	'Oite',
	'Ooshio',
	'Oyashio',
	'Radford',
	'Shiratsuyu',
	'Sims',
	'Smalley',
	'Stanly',
	'Tanikaze',
	'Thatcher',
	'Urakaze',
	'Wakaba',
	'Yuugure',
	'Z18',
	'Z19',
	'22',
	'33',
	'An Shan',
	'Ayanami',
	'Blanc',
	'Carabiniere',
	'Chang Chun',
	'Charles Ausburne',
	'Cooper',
	'Eskimo',
	'Fu Shun',
	'Fubuki',
	'Glowworm',
	'Gremyashchy',
	'Grenville',
	'Gromky',
	'Grozny',
	'Hanazuki',
	'Hardy',
	'Harutsuki',
	'Hibiki',
	'Icarus',
	'Javelin',
	'Kasumi',
	'Kizuna AI',
	'Opiniatre',
	'Laffey',
	'Le Téméraire',
	'Libeccio',
	'Maestrale',
	'Maillé Brézé',
	'Makinami',
	'Matchless',
	'Maury',
	'Minsk',
	'Morrison',
	'Mullany',
	'Musketeer',
	'Naganami',
	'Natsuiro Matsuri',
	'Nicholas',
	'Nicoloso De Recco',
	'Nizuki',
];



client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'waifu') {
		await interaction.reply({embeds: [ randomWaifuEmbed ]});
	}
});



const randomWaifuEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(waifus[Math.floor(Math.random() * waifus.length)])
	.setDescription('Some description here')
	.setImage('https://media.discordapp.net/attachments/686040688428843078/818373156476551168/image0.gif')


client.login(token);
