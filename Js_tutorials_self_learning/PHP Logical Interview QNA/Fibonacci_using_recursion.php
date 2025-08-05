<?php
$n = 10;

$series = [];

function fab($n,$a,$b){
if($n > 0){
 $c = $b+$a;
 $a = $b;
 $b = $c;
 echo $c;
 return fab($n-1,$a,$b);   
}
}
$a = -1;
$b = 1;
fab(10,$a,$b);

print_r($series);
?>