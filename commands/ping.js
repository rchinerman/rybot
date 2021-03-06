module.exports.run = async (bot, message, args) => {
  try{
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    } catch(err){
    console.log(err.stack);
  }
}

module.exports.help = {
  name: "ping",
  usage: ".ping",
  about: "Responds with the bot's latency."
}