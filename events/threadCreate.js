const client = require("..");

client.on("threadCreate", (thread) => {
  try {
    thread.join();
  } catch (e) {
    console.log(e.message);
  }
});

/**
Coded by: Real_IceyDev
License: Creative Commons Legal Code
Whetū, best music bot of 2022.
*/
