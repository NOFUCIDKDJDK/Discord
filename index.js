const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Manila', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1087940913348743189')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/losfutbolitos') //Must be a youtube video link 


    .setName('/yxn')
    .setDetails(`/yxn [${formatTime()}]`)
    .setStartTimestamp(Date.now())

.setAssetsLargeImage('https://media.discordapp.net/attachments/1010307595539599464/1130966539743547413/E4A5698E-0EBD-46C0-9CC8-9834202C1821.gif?ex=65c29d2b&is=65b0282b&hm=b85afbc85586d5a39ce1ffaa98e6110bedf6f1ce6e699fdcf9dfb1a8ee643d1a&=') 

    .addButton('/yxn', 'https://grabify.link/PLR2VR')

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `/yxn`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
