const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.append(script);
    script.onload = () => {
      resolve(1);
    };
    script.onerror = () => {
      reject(0);
    };
  });
};

p1 = loadScript(
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
);

p1.then((value) => {
  console.log(value);
})
  .then(() => {
    console.log("second script is ready..");
  })
  .catch((err) => {
    console.log(err);
  });
