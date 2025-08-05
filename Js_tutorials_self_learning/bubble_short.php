<?php
$arr = [10,6,7,8,13,11];

$array_short = [];
$temp = '';

for($round=0;$round<count($arr);$round++){
  
   for($i=0;$i<count($arr)-$round-1;$i++){
   
   if($arr[$i] > $arr[$i+1]){
    
      // swap the number

       $temp = $arr[$i];
       $arr[$i] = $arr[$i+1];
       $arr[$i+1] = $temp;  
   }
   }
}

echo"<pre>";
print_r($arr);

?>