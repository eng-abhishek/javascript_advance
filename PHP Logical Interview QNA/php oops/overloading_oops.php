<?php
class ABC{

    public function add($num1,$num2){
    return $num1+$num2;
    }

    public function add($num1,$num2,$num3){
     return $num1+$num2+$num3;
    }
}

 $obj = new ABC();
 echo $obj->add(1,3);
?>