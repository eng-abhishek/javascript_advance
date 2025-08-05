<?php
class A{
	function add_number($num1,$num2){
    $sum = $num1+$num2;
    return $sum;
	}
}

class B extends A{
   function display(){
   	echo "display";
   }
}

 $obj = new B();
 //$obj->display();
 echo $obj->add_number(1,3);
?>