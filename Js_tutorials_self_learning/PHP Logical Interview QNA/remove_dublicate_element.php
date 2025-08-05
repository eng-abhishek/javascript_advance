<?php
// Online PHP compiler to run PHP program online
// Print "Try programiz.pro" message
$array = [1,2,1,2,3,3,4,4,5,5,6,6,7];
$new_array = [];
for($i=0;$i<count($array);$i++){
   if(!in_array($array[$i],$new_array)){
      $new_array[] = $array[$i];
   }
}

print_r($new_array);
?>