<?php
$a = '1';
$b = &$a; // Sets $b to a reference to $a


echo $b."<br>"; // $b value is still one

echo $a."<br>"; // $b value is still one


$b = "2$b"; // here u write "2 and $b = 1" which means b = 21 and also Sets $a to 21

// echo $b."<br>"; // $b value is still one

echo $a."<br>"; // $b value is still one

//  echo $a.", ".$b;
?>