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
    .setURL('https://m.twitch.tv/discord')
      
      
    .setName('/yxn')
    .setDetails(`/yxn [${formatTime()}]`)
    .setStartTimestamp(Date.now())

.setAssetsLargeImage('https://cdn.discordapp.com/attachments/912467821114556489/1178041856764936202/copy_BC90C066-5974-4CAF-B399-53F109ED091C.gif?ex=65c7c279&is=65b54d79&hm=c45310b2019f916876ed2dcd65db7c714c14aa53c323807668b307289f1e3a3a&')

    .addButton('/yxn','http://gg.gg/18t82j')

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
