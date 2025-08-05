<?php
//Referance:  https://www.youtube.com/watch?v=R57n33zxgIw&t=1200s

$arr = [40,30,20,10,35];
$largest = 0;
$s_largest = 0;
for($i=0;$i<count($arr);$i++){
      if($arr[$i] > $largest){
          $s_largest = $largest;
          $largest = $arr[$i];
      }elseif(($arr[$i] > $s_largest) && ($arr[$i] != $largest)){
          $s_largest = $arr[$i];
      }
    }
print_r($s_largest);
?>