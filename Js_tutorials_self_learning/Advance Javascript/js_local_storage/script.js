let url =
  "http://api.weatherstack.com/current?access_key=9333bc2ee061dd14f773a108f4fba34c&query='New York'";
let p = fetch(url);
p.then((response) => {
  //  console.log(response.headers);
  // //console.log(response);
  //  return response.json();
  // return response.text();
  // return response.formData();
  // return response.blob(); // return file size
  // return response.arrayBuffer(); // return memory Buffer Information
}).then((value) => {
  console.log(value);
});
