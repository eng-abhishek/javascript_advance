<?php
class A{

  function __construct($num1,$num2){
  
  $this->num1 = $num1;
  $this->num2 = $num2;
  }

  function display(){
   
   $sum = $this->num1+$this->num2;
   return $sum;
  }

  

}

$num = new A(1,2);
echo $num->display();
?>