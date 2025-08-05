<?php

$arr = array(20,40,30,60,10,80);

$max= $arr[0];

for($i=1;$i<count($arr);$i++){

  if($arr[$i] > $max){
  	
  	$max = $arr[$i];

  }
}
echo $max;
?>