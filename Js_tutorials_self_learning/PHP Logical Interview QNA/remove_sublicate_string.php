<?php
$string = "Abhishek soni";
$array = str_split(strtolower($string));

$new_array = [];
for($i=0;$i<count($array);$i++){
  if(!in_array($array[$i],$new_array)){
      $new_array[] = $array[$i];
  }
}

print_r(implode($new_array));
?>