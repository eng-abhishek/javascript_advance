<?php
// How do you calculate the number of vowels and consonants in a String?

$string = "Abhishek Soni";
$string = strtolower($string);
$voble = ["a","e","i","o","u"];

$arr_voble = [];
$arr_const = [];
$voble_count = 0;
$constant_count = 0;

for($i=0;$i<strlen($string);$i++){
    if(in_array($string[$i],$voble)){
     $voble_count++;
     $arr_voble[] = $string[$i];
    }else{
     
     if($string[$i] != ' '){
     $constant_count++;        
     $arr_const[] = $string[$i];   
     }
    }
}

echo $voble_count;
print_r($arr_voble);
echo $constant_count;
print_r($arr_const);

?>