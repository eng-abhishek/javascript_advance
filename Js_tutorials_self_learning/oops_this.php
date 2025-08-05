<?php
class test{
	public $pen;
	public $copy;

	function __construct($var1,$var2){
    $this->pen = $var1;
    $this->copy = $var2;
	}

	public function display(){
		
		echo "your pen is ".$this->pen;
        echo"<br>";
        echo "your copy is ".$this->copy;

	}
}

$obj = new test('Cello','A4');
echo $obj->pen;
echo"<br>";
echo $obj->copy;
?>