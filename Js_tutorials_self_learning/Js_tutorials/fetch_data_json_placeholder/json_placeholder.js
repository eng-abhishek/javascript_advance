const fetchcontent = async (url) => {
  let con = await fetch(url);
  let a = await con.json();
  return a;
};
var i = 1;
setInterval(async function () {
  let url = "https://jsonplaceholder.typicode.com/todos/" + i;
  console.log(await fetchcontent(url));
  i++;
}, 3000);
