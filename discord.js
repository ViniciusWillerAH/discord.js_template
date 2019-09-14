var Discord = require('discord.js'); // loads library
var client = new Discord.Client(); // create a instance of a client

// ## register events on CLIENT , debug reasons
(["disconnect", "channelCreate", "channelUpdate", "channelPinsUpdate", "channelDelete", "emojiCreate", "emojiDelete", "emojiUpdate", "message", "messageUpdate", "messageDelete", "messageDeleteBulk", "messageReactionAdd", "messageReactionRemove", "messageReactionRemoveAll", "typingStart", "typingStop", "userUpdate", "clientUserGuildSettingsUpdate", "clientUserSettingsUpdate", "guildCreate", "guildDelete", "guildBanAdd", "guildBanRemove", "guildMemberAdd", "guildMemberRemove", "guildMemberAvailable", "guildMembersChunk", "guildMemberSpeaking", "guildMemberUpdate", "guildUnavailable", "guildUpdate", "presenceUpdate", "rateLimit", "ready", "reconnecting", "resume", "roleCreate", "roleDelete", "roleUpdate", "userNoteUpdate", "userUpdate", "voiceStateUpdate", "voiceStateUpdate"])
.forEach(function(eventName) {
    try {
        client.on(eventName, function() {
            console.log(eventName, arguments);
            /*
	    for (var i = 0; i < arguments.length; i++) {
	    	console.log(arguments[i]);
	    }
	    */
        });
    } catch (e) {}
});
client.on("error", (e)=>console.error(e));
client.on("warn", (e)=>console.warn(e));
client.on("debug", console.info(e));
client.on("disconnect", console.warn);

client.login("your token here. it is hidden in your bot dev screen at discord.");



// line 5 repeats for each word in the array to a new function that contains 
