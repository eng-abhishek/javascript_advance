<!---
	Self is user for call or use static veraiable of function 
-->
<?php

class test{
	public static $data = "This is static data";
    
    public static function getStaticData(){
    	return self::$data;
    }
}

 $obj = new test();
 echo $obj->getStaticData();

?>