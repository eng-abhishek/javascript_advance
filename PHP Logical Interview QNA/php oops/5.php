<?php
$a= 5;
$b= 6;

echo "======== Before reverse =======<br>";
echo "a = " .$a."<br>";
echo "b = " .$b;
echo "<br>";

$b = $a+$b;
$a = $b-$a;
$b = $b-$a;


echo "======== After reverse =======<br>";
echo "a = " .$a."<br>";
echo "b = " .$b;
?>