<?php
 abstract class bank{
      
      // this is abstract method
      public abstract function rate_of_intrest();
      
      // this is non abstract method
      public function account(){
      	echo"Non abstract method need to define body at time time of create a function";
      }

  } 

class sbi extends bank{

   // SBI Bank Must To write the definiation of rate_of_intrest other wise it gives error

   public function rate_of_intrest(){
    echo "sib give 0.5% rate of intrest";
   }

}

class hdfc extends bank{

   // SBI Bank Must To write the definiation of rate_of_intrest other wise it gives error

   public function rate_of_intrest(){
    echo "hdfc give 0.8% rate of intrest";
   }
} 

$obj_sbi = new sbi();
$obj_sbi->rate_of_intrest();
echo"<br>";
$obj_sbi->account();
echo"<br>";
echo"=====================";
echo"<br>";
$obj_hdfc = new hdfc();
$obj_hdfc->rate_of_intrest();
echo"<br>";

?>