<?php

$arr1=[1,2,3];
$arr2=[4,5,6];
for($i=0;$i<count($arr2);$i++){
    $arr1[] = $arr2[$i];
}

print_r($arr1);
?>