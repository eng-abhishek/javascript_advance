<?php

$num = 67;

$step = $num/2;

function is_prime($num,$step){

  if($num == 1){
    return 0;
  }

  for($i=2;$i<= $step; $i++){
     
      if($num % $i == 0){
       return 0;
      }
      return 1;
  }
   
}

$is_prime = is_prime($num,$step);

if($is_prime == 1){
  echo"Prime";
}else{
	echo"Not Prime";
}
?>