function scriptLoaded(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("script loaded successfully..");
    callback();
  };
  document.body.appendChild(script);
}

function loading_complete() {
  alert("Loading completed....");
}

scriptLoaded(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  loading_complete
);
