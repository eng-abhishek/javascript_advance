<?php

/* 
Rules :
   1) Private Static veariable
   2) Private constructor
   3) Public Static method return class 'Single Instance' 
*/

class Singleton{
	
	private static $instance = null;

	private function __construct(){
       echo"connect";
	}

	public static function showInstance(){

      if(self::$instance == null){
         self::$instance = new static();
      }else{
      	echo"Already connected";	 
      }

     return self::$instance;

	}

}
 $obj = Singleton::showInstance();
?>