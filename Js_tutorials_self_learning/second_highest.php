<?php
$arr1 = [3,5,9,4,1,2];

for($i=0;$i<=count($arr1);$i++){
  
   $temp = '';
   for($j=0;$j<count($arr1)-$i-1; $j++){
     

      if($arr1[$j] > $arr1[$j+1]){
      // swap it

       $temp = $arr1[$j+1];
       
       $arr1[$j+1] = $arr1[$j];

       $arr1[$j] = $temp;

      }
   }
}

echo"<pre>";
print_r($arr1);
echo"<pre>";
print_r(array_reverse($arr1)[1]);
?>