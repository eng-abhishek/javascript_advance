<?php
class A{
	function test($num1,$num2){
	 return $num1+$num2;
	}
}

$a = new A();
echo $a->test(1,3);
?>