const Discord = require('discord.js');
const bot = new Discord.Client();


const prefix = "~"

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    console.log(command);

   //udp.open(); //when udp.open is here, this waits until the bot.on command is triggered, but it only works once currently.


     udp.send({
        address: "/s_new",
        args: [
            {
                    type: "s",
                    value: command 
                }
            ]
    }, "127.0.0.1", 7500);
    console.log("Sent " + command + " to Max!"); //reports that command is undefined. Is it undefined beforehand? Perhaps the logic isn't quite there
    
   
    
    if(message.content.startsWith (prefix + 'ping')) {
    //    message.reply('pong');
        message.channel.sendMessage('pong');
    }
});


bot.login('MjgxOTU3MDY0NTMwNzIyODE3.C4fwyA.g4L8KCPeATsCSwr3zvyLGt4XfAs');

var osc = require("osc"),
    WebSocket = require("ws");

var getIPAddresses = function () {
    var os = require("os"),
    interfaces = os.networkInterfaces(),
    ipAddresses = [];

    for (var deviceName in interfaces){
        var addresses = interfaces[deviceName];

        for (var i = 0; i < addresses.length; i++) {
            var addressInfo = addresses[i];

            if (addressInfo.family === "IPv4" && !addressInfo.internal) {
                ipAddresses.push(addressInfo.address);
            }
        }
    }

    return ipAddresses;
};

var udp = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 7400,
    remoteAddress: "127.0.0.1",
    remotePort: 7500,
    metadata: true
    
    
});

udp.on("ready", function () {
    var ipAddresses = getIPAddresses();
    console.log("Listening for OSC over UDP.");
    ipAddresses.forEach(function (address) {
        console.log(" Host:", address + ", Port:", udp.options.localPort);
    });
    console.log("Broadcasting OSC over UDP to", udp.options.remoteAddress + ", Port:", udp.options.remotePort);
});




udp.open();// when udp.open is here, it seems to bypass that whole string of code. 


