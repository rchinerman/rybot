const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  try{
    let fields = [];
    fs.readdir("./commands", (err, files) => {    
      let jsfiles = files.filter(f => f.split(".").pop() === "js");  
      jsfiles.forEach((f) => {
        let props = require(`./${f}`);
        fields.push({"name": `\`${props.help.name}`, "value": `${props.help.about}`});
      });
      message.channel.send({embed: {
        color: 3447003,
        title: "Commands",      
        fields: fields
      }});
    });
  } catch(err){
    console.log(err.stack);
  }
}

module.exports.help = {
  name: "help",
  about: "Prints out a short message describing each command."
}