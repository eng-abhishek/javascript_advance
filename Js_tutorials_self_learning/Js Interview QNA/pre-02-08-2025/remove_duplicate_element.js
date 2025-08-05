var s = "geeksforgeeks";
var n = s.length;

var exists = new Map();

var st = "";
  for (var i = 0; i < n; i++) {
    if (!exists.has(s[i])) {
      st += s[i];
      exists.set(s[i], 1);
    }
  }
   console.log(exists);
  console.log(st);