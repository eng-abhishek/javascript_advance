<?php
class SomeClass{
   
   function __construct(){
   
   $this->name ="Abhi";
   $this->name;
   }
   
   function __destruct(){
   echo "Destroc the constructor ".$this->name;
   }
}

$obj = new SomeClass();
$obj;
?>