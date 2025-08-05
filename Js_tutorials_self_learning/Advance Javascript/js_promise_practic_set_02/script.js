let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("i am an error..."));
    }, 3000);
  });
};

const funct = async () => {
  try {
    let f = await p();
    console.log(f);
  } catch (error) {
    console.log(error);
  }
};

funct();
