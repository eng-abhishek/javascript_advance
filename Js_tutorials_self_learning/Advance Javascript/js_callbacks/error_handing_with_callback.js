function scriptLoaded(src, callback) {
  //console.log(src);
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Script Loaded Successfully...");
    callback(null, src);
  };
  script.onerror = function () {
    console.log("I am error.");
    callback(new Error("This is test error message..."));
  };
  document.body.appendChild(script);
  //   callback();
}

function showAlertMessage(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("Script Loaded Alerts");
}

scriptLoaded(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  showAlertMessage
);
