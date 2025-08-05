// ================================================
// if you use async on any function then it will return the promise

// async function hurry() {
//   return 7;
// }

// hurry().then((x) => {
//   alert(x);
// });

// ================================================

async function weatherPrediction() {
  let delhiWather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Delhi Weather 10 C");
    }, 1000);
  });

  let bangloruWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Bangoloru Weather 20 C");
    }, 7000);
  });
  // delhiWather.then(alert); OR
  // bangloruWeather.then(alert);  We can do it like this way

  // We can do it using smart way..

  console.log("Delhi weather fetching plz wait....");
  let delW = await delhiWather;
  console.log("Delhi weather fetched successfully" + delW);

  console.log("Bangoloru weather fetching plz wait....");
  let bangW = await bangloruWeather;
  console.log("Bangoloru weather fetched successfully" + bangW);

  return [delW, bangW];
}

let weatherP = weatherPrediction();

weatherP.then((value) => {
  console.log(value);
});

// console.log(weatherP);
