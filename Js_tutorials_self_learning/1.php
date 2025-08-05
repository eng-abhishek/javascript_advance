<?php 
$str = "abhioosoni";
$arr = [];

for($i=0;$i<strlen($str);$i++){
  array_push($arr,$str[$i]);
}

print_r(implode(array_unique($arr)));

?>