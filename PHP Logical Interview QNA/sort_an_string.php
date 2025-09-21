<?php
$string = "LISTEN";
// convert it in to an array  using str_split()
// then apply array sort()
// then implode it menas convert it in to a string
$arr = str_split($string);
sort($arr);
$str_arr =implode($arr);
echo $str_arr;
?>