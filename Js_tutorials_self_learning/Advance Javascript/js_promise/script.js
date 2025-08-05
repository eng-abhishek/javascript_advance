let promises = new Promise(function (resolve, reject) {
  alert("I am an alert in promise");
  resolve(56);
  //reject();
});

console.log("Hello One");

setTimeout(function () {
  alert("Hello Two after two second. ");
}, 2000);

console.log("My name is" + "Hello Three");

console.log(promises);
