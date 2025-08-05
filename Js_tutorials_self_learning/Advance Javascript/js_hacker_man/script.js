let messages = [
  "message..",
  "initialization..",
  "trying to getting username..",
  "username is abhi..",
  "try to getting contact details",
  "list of contact details downloaded successfully...",
  "press enter to getting more informtion from divice",
];

const sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

const showHack = async (messages) => {
  await sleep(2);
  console.log(messages);
};

(async () => {
  for (i = 0; i < messages.length; i++) {
    //console.log(messages[i]);
    await showHack(messages[i]);
  }
})();

// showHack();
