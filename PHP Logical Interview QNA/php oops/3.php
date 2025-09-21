<?php
$num = 48;
$index = [];

for($i=2;$i<$num;$i++){
     
     $index[] = $i;	
     
     if($num%$i == 0){
     
     echo $num." is not prime number";
     
     break;
     }
}

if(count($index) == ($num-2)){

	echo $num." is prime number";
}

?>