// It working for iterable object Like String OR Array

let arr = ['a','b','c','d','e']

for(let iterable of arr){
  console.log(iterable)
}

/*  output like this
a
b
c
d
e
*/

let string_1 = "Abhishek"

for(let string_iterable of string_1){
  console.log(string_iterable)
}
/*
Output is
a
b
c
d
e
A
b
h
i
s
h
e
k
*/