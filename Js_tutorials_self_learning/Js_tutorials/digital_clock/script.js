setInterval(function () {
  let a = new Date();
  let hours = a.getHours() < 9 ? "0" + a.getHours() : a.getHours();
  let min = a.getMinutes() < 9 ? "0" + a.getMinutes() : a.getMinutes();
  let second = a.getSeconds() < 9 ? "0" + a.getSeconds() : a.getSeconds();
  let date = a.getDate() < 9 ? "0" + a.getDate() : a.getDate();
  let month = a.getMonth() < 9 ? "0" + a.getMonth() : a.getMonth();
  let year = a.getFullYear();
  let after_noon = 1;
  if (hours > 12) {
    while (after_noon <= 11) {
      hours = after_noon;
      after_noon = after_noon + 1;
    }
  }

  let date_format = date + "-" + month + "-" + year;

  document.querySelector(".date").innerHTML = date_format;

  document.querySelector(".hours").innerHTML = hours;

  document.querySelector(".minute").innerHTML = min;

  document.querySelector(".second").innerHTML = second;
}, 500);

// console.log(hours, min, second, date, month, year);
