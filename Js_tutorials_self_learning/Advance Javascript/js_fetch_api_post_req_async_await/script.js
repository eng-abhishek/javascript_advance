const createToDo = async (todo_param) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo_param),
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options); // return a promise
  let response = await p.json(); // return a promise
  return response;
};

const getToDoData = async (id) => {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  let r = await response.json();
  return r;
};

const mainFun = async () => {
  let todo_param = {
    title: "Abhishek",
    body: "Soni",
    userID: 10,
  };
  let todo = await createToDo(todo_param);
  let gettodo_val = await getToDoData(10);
  // console.log(todo);
  console.log(gettodo_val);
};

mainFun();

// p.then((response) => response.json()).then((json) => console.log(json));
