<?php

$arr1=[1,2,3];
$arr2=[4,5,6];
$new_array = [];

for($i=0;$i<count($arr2);$i++){
    $new_array[$arr1[$i]] = $arr2[$i];
}

print_r($new_array);

?>