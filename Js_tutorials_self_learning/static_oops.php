
<!--
Static Members: Static variables or static functions are directly related with class. It can access static variables or functions directly with the class names. Use the ‘static’ keyword to declare a static function or static variable.
-->

<?php
class test{
	
	public static $data = "This is statis variable";
    
    public static function xyz(){
    	echo"This is a static function";
    }
}

echo test::$data;
echo"<br>";
echo test::xyz();
?>