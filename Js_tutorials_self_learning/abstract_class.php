

<!--Abstract Classes: Like the keyword is saying, Abstract means not completed. Abstract classes are those classes where functions are declared but not implemented.-->

<!--
Abstract Classes: Like the keyword is saying, Abstract means not completed. Abstract classes are those classes where functions are declared but not implemented.
-->

<?php
abstract class ABC{
	public abstract function xyz();
}

class def extends ABC{

public function xyz(){

 echo"Your Most Welcome";

}

}

$obj = new def();
$obj->xyz();

?>