let url = "https://jsonplaceholder.typicode.com/photos";
let data_url = fetch(url);
data_url
  .then((res) => {
    return res.json();
  })
  .then((val) => {
    // console.log(val);
    ihtml = "";
    for (item in val) {
      if (val[item].id < 25) {
        ihtml += `
            <div class="col-sm-4">
            <div class="card">
              <img src="${val[item].thumbnailUrl}" alt="Avatar" style="width: 100%" />
              <div class="container">
                <h4><b>${val[item].title}</b></h4>
                <p>${val[item].title}</p>
                <a href="${val[item].url}">Read More</a>
              </div>
            </div>
          </div>
        `;
      }
      //console.log();
    }
    console.log(ihtml);

    let all_card_container = document.getElementById("all_card_container");
    all_card_container.innerHTML = ihtml;
  });
