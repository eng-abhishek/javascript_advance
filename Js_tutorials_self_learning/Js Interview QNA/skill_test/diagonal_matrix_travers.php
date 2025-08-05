// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let m = [['a','b','c','d','e'],['f','g','h','i','j'],['k','l','m','n','o'],['p','q','r','s','t']];

//console.log(m[0][0]);

let row = 4;
let col = 5;

for(let k=0; k<= (row-1); k++){
    i = k;
    j = 0;
    while(i >= 0){
        console.log(m[i][j]);
        i = i-1;
        j = j+1;
    }
    console.log("====");
}

for(let k=1; k<=(col -1); k++){
  i = row-1;
  j = k;
   
  while(j<=(col-1)){
      console.log(m[i][j]);
      i = i-1;
      j = j+1;
  }
  console.log("====");
}

// console.log(m[3][1]);
// console.log(m[2][2]);
     
console.log(m);