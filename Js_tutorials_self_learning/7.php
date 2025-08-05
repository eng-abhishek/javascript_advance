<?php
// sum of even and odd number
$start = 1;
$end = 10;
$even_num = [];
$odd_num = [];

for($i= $start; $i<=$end; $i++){
     
    if($i % 2 == 0){

        $even_num[] = $i;
    
    }else{
 
        $odd_num[] = $i;

    }

}

echo "Sum of even_num = ".print_r($even_num);
echo"<br>";
echo "=======================================";
echo"<br>";

echo "Sum of even_num = ".array_sum($even_num);

echo"<br>";

echo "=======================================";

echo"<br>";

echo "Sum of odd_num = ".print_r($odd_num);

echo"<br>";

echo "Sum of odd_num = ".array_sum($odd_num);
?>