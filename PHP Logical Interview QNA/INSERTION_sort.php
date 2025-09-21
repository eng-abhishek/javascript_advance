<?php

$arr = [40,10,30,15,20,10];
// arr[0] not need to compair it bcz it is 0 element
for($i=1;$i<count($arr);$i++){
     
     $key = $arr[$i];
     $j = $i-1;
   
   while(($j >= 0) AND $arr[$j] > $key){
     $arr[$j+1] = $arr[$j];
     $j--; 
   }
    $arr[$j+1] = $key;
}

print_r($arr);
?>