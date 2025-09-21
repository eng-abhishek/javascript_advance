<?php
$n = 10;
$a = -1;
$b = 1;
$c = 0;
$series = [];

for($i=0;$i<10;$i++){
      
   $c = $a+$b;   
   $a = $b;
   $b = $c;
   $series[] = $c;
   print_r($c);

}

print_r($series);
?>