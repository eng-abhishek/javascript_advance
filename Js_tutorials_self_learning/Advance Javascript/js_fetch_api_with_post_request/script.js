let options = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    title: "Abhishek",
    body: "Soni",
    userID: 10,
  }),
};

let p = fetch("https://jsonplaceholder.typicode.com/posts", options);

// let p = fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then((re) => re.json())
//   .then((json) => console.log(json));

p.then((response) => response.json()).then((json) => console.log(json));
