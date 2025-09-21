<?php
// 1018 
// o/p 1 =  10
//o/p 2 = 11

function convert_number($num){

$arr = [];

for($i=0; $i<strlen($num);$i++){
  //array_push($arr,$num[$i]);
    $arr[] = $num[$i];
}
  return (string)array_sum($arr);
}


$num = 110105;
$strnum = (string)$num;

$convert_number = convert_number($strnum);
echo $convert_number;
?>