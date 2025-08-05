<?php 
/*   0 1 1 2 3 5 8 ......  
     logic= first + second;
     first=second;
     second=first;
*/

$first=0;
$second=0;
$next=0;
for($i=0;$i<=5;$i++){
if($i<=1){

$second=$i;
$next=$first + $second;
}else{
$next=$first + $second;

$first=$second;
$second=$next;
}
echo $next;
}
?>