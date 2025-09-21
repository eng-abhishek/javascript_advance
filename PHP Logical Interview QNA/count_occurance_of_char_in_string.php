<?php
$string = "hello abhishek";
$alphabet = range('a','z');

for($i=0;$i<count($alphabet);$i++){
    $val = substr_count(strtolower($string),$alphabet[$i]);
    if($val > 0){
      echo $alphabet[$i].":".$val."<br>";
    }
}
?>