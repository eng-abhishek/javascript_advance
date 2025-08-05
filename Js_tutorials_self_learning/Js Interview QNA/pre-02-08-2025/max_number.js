let arr = [40,20,30,55,11,9,8,6,16];
let max = arr[0];

for(i=1;i<arr.length;i++){
  
   if(arr[i] > max){
      max = arr[i];
   }

}

console.log(max);