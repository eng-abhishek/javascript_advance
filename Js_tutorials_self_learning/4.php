<?php
$string = "ABCDEF";


// Method 1
//echo strrev($string);
$emp_string = "";

for($i= strlen($string)-1;$i>=0;$i--){

$emp_string.=$string[$i];

}

print_r($emp_string);

?>