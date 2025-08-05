<script>
let num1 = 20;
let num2 = 60;
let list_of_prime = [];

for(i=num1; i<num2; i++){
   
   for(j=2;j<i;j++){
    if((i%j) == 0){
          break;
    }
   }
   if(i == j){
    list_of_prime.push(i);
    }
}
console.log(list_of_prime);

</script>