<?php
class TV{

	public $volume = 2;
    
    function volumeUP(){
    	
    	// volume increase when call its function
        // this keyword create the instance of a particular object of calss
    	return $this->volume++;
    }
}

$obj = new TV();
$obj2 = new TV();

// Here you can see that value increase only for obj not for obj2 
// obj->volume show incremented valume 
// but obj2->volume show same value

echo $obj->volumeUP();
echo "<br>";
echo $obj->volume;


echo "<br>";
echo"result for object 2";
echo "<br>";
$obj2->volume;
?>