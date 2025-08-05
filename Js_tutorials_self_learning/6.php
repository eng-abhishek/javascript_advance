<?php
// Factorial of a number

$num = 5;
$str = 1;

for($i=1;$i<=$num;$i++){
	$str = $i*$str;
}

print_r($str);

?>