<?php
$l=1;
$u=20;
for($i=($l+1); $i<=($u-1);$i++){

for($j=2;$j<$i;$j++){
if($i%$j==0){

break;
}else{
print_r($i."<br>");
break;
}
}
}
?>