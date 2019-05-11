process.on("error",console.error);

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

client.on("ready", () => {
    /*
	client.user.setPresence({
		"game": {
			name: "presence Setted"
		}
	})
	.then(console.log)
	.catch (console.error);
    */
});

//Event for when bot is dissconnected
client.on("disconnect", (event) => {
	console.log(`Client has closed with status code ${event.code} and reason ${event.reason}`);
    
    last.disconnect = event;
});

//Event for messages sent to any of the discord channels
client.on("message", (message) => {
	console.log({
        "event": "message",
		"message": message
	});
});

//Event for a message delete
client.on("messageDelete", (message) => {
	console.log({
        "event": "messageDelete",
		"message": message
	});
});

//Event for a message edit
client.on("messageUpdate", (oldMessage, newMessage) => {
	console.log({
		"event": "messageUpdate",
		"message": message
	});
});

//Event for people joining the server
client.on("guildMemberAdd", (member) => {
	console.log({
		"event": "guildMemberAdd",
		"member": member
	});
});

client.on("guildMemberRemove", (member) => {
	console.log({
		"event": "guildMemberRemove",
		"member": member
	});
});

//Event for a user update (eg changing their usernem)
client.on("userUpdate", (oldUser, newUser) => {
	console.log({
		"event": "userUpdate",
		"oldUser": oldUser,
		"newUser": newUser
	});
});

client.on('channelCreate', function (channel) {//Channel/
	console.log({
		"event": "channelCreate",
		"channel": channel
	});
});


client.on('channelDelete', function (channel) {//Channel/
	console.log({
		"event": "channelDelete",
		"channel": channel
	});
});


client.on('channelPinsUpdate', function (channel, time) {//Channel///Date/
	console.log({
		"event": "channelPinsUpdate",
		"channel": channel,
		"time": time
	});
});


client.on('channelUpdate', function (oldChannel, newChannel) {//Channel///Channel/
	console.log({
		"event": "channelUpdate",
		"oldChannel": oldChannel,
		"newChannel": newChannel
	});
});


client.on('clientUserGuildSettingsUpdate', function (clientUserGuildSettings) {//ClientUserGuildSettings/
	console.log({
		"event": "clientUserGuildSettingsUpdate",
		"clientUserGuildSettings": clientUserGuildSettings
	});
});


client.on('clientUserSettingsUpdate', function (clientUserSettings) {//ClientUserSettings/
	console.log({
		"event": "clientUserSettingsUpdate",
		"clientUserSettings": clientUserSettings
	});
});
/*
client.on('debug', function (info) {
	console.log({
		"event": "debug",
		"info": info
	});
});
 */


client.on('disconnect', function (eventE) {//any/
	console.log({
		"event": "disconnect",
		"event": eventE
	});
});


client.on('emojiCreate', function (emoji) {//Emoji/
	console.log({
		"event": "emojiCreate",
		"emoji": emoji
	});
});
client.on('emojiDelete', function (emoji) {//Emoji/
	console.log({
		"event": "emojiDelete",
		"emoji": emoji
	});
});
client.on('emojiUpdate', function (oldEmoji, newEmoji) {//Emoji///Emoji/
	console.log({
		"event": "emojiUpdate",
		"oldEmoji": oldEmoji,
		"newEmoji": newEmoji
	});
});
client.on('error', function (error) {//Error/
	console.log({
		"event": "error",
		"error": error
	});
});
client.on('guildBanAdd', function (guild, user) {//Guild///User/
	console.log({
		"event": "guildBanAdd",
		"guild": guild,
		"user": user
	});
});
client.on('guildBanRemove', function (guild, user) {//Guild///User/
	console.log({
		"event": "guildBanRemove",
		"guild": guild,
		"user": user
	});
});
client.on('guildCreate', function (guild) {//Guild/
	console.log({
		"event": "guildCreate",
		"guild": guild
	});
});
client.on('guildDelete', function (guild) {//Guild/
	console.log({
		"event": "guildDelete",
		"guild": guild
	});
});
client.on('guildMemberAdd', function (member) {//GuildMember/
	console.log({
		"event": "guildMemberAdd",
		"member": member
	});
});
client.on('guildMemberAvailable', function (member) {//GuildMember/
	console.log({
		"event": "guildMemberAvailable",
		"member": member
	});
});
client.on('guildMemberRemove', function (member) {//GuildMember/
	console.log({
		"event": "guildMemberRemove",
		"member": member
	});
});
client.on('guildMembersChunk', function (members, guild) {//GuildMember[]///Guild/
	console.log({
		"event": "guildMembersChunk",
		"members": members,
		"guild": guild
	});
});
client.on('guildMemberSpeaking', function (member, speaking) {//boolean//GuildMember/
	console.log({
		"event": "guildMemberSpeaking",
		"member": member,
		"speaking": speaking
	});
});
client.on('guildMemberUpdate', function (oldMember, newMember) {//GuildMember///GuildMember/
	console.log({
		"event": "guildMemberUpdate",
		"oldMember": oldMember,
		"newMember": newMember
	});
});
client.on('guildUnavailable', function (guild) {//Guild/
	console.log({
		"event": "guildUnavailable",
		"guild": guild
	});
});
client.on('guildUpdate', function (oldGuild, newGuild) {//Guild///Guild/
	console.log({
		"event": "guildUpdate",
		"oldGuild": oldGuild,
		"newGuild": newGuild
	});
});
client.on('message', function (message) {//Message/
	console.log({
		"event": "message",
		"message": message
	});
});
client.on('messageDelete', function (message) {//Message/
	console.log({
		"event": "messageDelete",
		"message": message
	});
});
client.on('messageDeleteBulk', function (messages) {//Collection < Snowflake, Message >/
	console.log({
		"event": "messageDeleteBulk",
		"messages": messages
	});
});
client.on('messageReactionAdd', function (messageReaction, user) {//MessageReaction///User/
	console.log({
		"event": "messageReactionAdd",
		"messageReaction": messageReaction,
		"user": user
	});
});
client.on('messageReactionRemove', function (messageReaction, user) {//MessageReaction///User/
	console.log({
		"event": "messageReactionRemove",
		"messageReaction": messageReaction,
		"user": user
	});
});
client.on('messageReactionRemoveAll', function (message) {//Message/
	console.log({
		"event": "messageReactionRemoveAll",
		"message": message
	});
});
client.on('messageUpdate', function (oldMessage, newMessage) {//Message///Message/
	console.log({
		"event": "messageUpdate",
		"oldMessage": oldMessage,
		"newMessage": newMessage
	});
});
client.on('presenceUpdate', function (oldMember, newMember) {//GuildMember///GuildMember/
	console.log({
		"event": "presenceUpdate",
		"oldMember": oldMember,
		"newMember": newMember
	});
});


client.on('rateLimit', function (rateLimit) {//RateLimitInfo/
	console.log({
		"event": "rateLimit",
		"rateLimit": rateLimit
	});
});


client.on('ready', function () {
	console.log({
		"event": "ready"
	});
});


client.on('reconnecting', function () {
	console.log({
		"event": "reconnecting"
	});
});


client.on('resume', function (replayed) {//number/
	console.log({
		"event": "resume",
		"replayed": replayed
	});
});


client.on('roleCreate', function (role) {//Role/
	console.log({
		"event": "roleCreate",
		"role": role
	});
});


client.on('roleDelete', function (role) {//Role/
	console.log({
		"event": "roleDelete",
		"role": role
	});
});


client.on('roleUpdate', function (oldRole, newRole) {//Role///Role/
	console.log({
		"event": "roleUpdate",
		"oldRole": oldRole,
		"newRole": newRole
	});
});

/*
client.on('typingStart', function (channel, user) {//Channel///User/
	console.log({
		"event": "typingStart",
		"channel": channel,
		"user": user
	});
});

client.on('typingStop', function (channel, user) {//Channel///User/
	console.log({
		"event": "typingStop",
		"channel": channel,
		"user": user
	});
});
*/

client.on('userNoteUpdate', function (user, oldNote, newNote) {//UserResolvable///string///string/
	console.log({
		"event": "userNoteUpdate",
		"user": user,
		"oldNote": oldNote,
		"newNote": newNote
	});
});


client.on('userUpdate', function (oldUser, newUser) {//User///User/
	console.log({
		"event": "userUpdate",
		"oldUser": oldUser,
		"newUser": newUser
	});
});


client.on('voiceStateUpdate', function (oldMember, newMember) {//GuildMember///GuildMember/
	console.log({
		"event": "voiceStateUpdate",
		"oldMember": oldMember,
		"newMember": newMember
	});
    
    oldMember.voiceChannelID != null
    newMember.voiceSessionID != null
});


client.on('warn', function (oldMember, newMember) {//GuildMember///GuildMember/
	console.log({
		"event": "warn",
		"oldMember": oldMember,
		"newMember": newMember
	});
});


client.login('Your Secret Here');

console.log(client);


