const client = require("..");

client.on('ready', () => {
    console.log(`${client.user.username} is online!`);
    client.user.setActivity({
        name : `/help | Real_IceyDev`,
        type : "WATCHING",
    })
})

/**
Coded by: Real_IceyDev
License: Creative Commons Legal Code
Whetū, best music bot of 2022.
*/
