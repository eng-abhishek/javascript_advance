let arr = [40,20,30,55,11,9,8,6,6,16];
let l = 0;
let s_l = 0;

for(i=0;i<=arr.length;i++){
  
if(arr[i] > l){
  s_l = l;
  l =arr[i];
}else if((arr[i] > s_l) && (arr[i] != l) ){
  s_l = arr[i];
}
}

console.log(s_l);