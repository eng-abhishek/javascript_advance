
<!---
class abc { 
  public function test() { 
    echo "test from class ABC"; 
  } 
} 

trait test { 
  public function test2() { 
    echo "test2 method of test trait"; 
  } 
} 

class one extends abc { 
  use test; 
} 

class two extends abc { 
  use test; 
} 

class three extends abc { 
  
} 

class four extends abc { 
  
} 

class five extends abc { 
  
} 

$obj = new one; 
$obj->test2(); 

Traits: Traits was introduced in PHP5.4. It is the mechanism for code reuse in single inheritance language. The ‘trait’ keyword is used to define it.

* Trait is also similar to the classes.

* Here, taking a class abc and its functionality in all the child classes. So accessing the properties of abc class in all the child classes. Now consider a scenario where we need another function to be accessed only in class one and two but not in the rest of the classes. If you will define that function in the same class abc it will be available in all the classes which are extending class abc. So the solution is we can define that method in trait.

* https://www.geeksforgeeks.org/php-common-terminology-in-oop/
-->

<?php

trait Logger{
  
  public function log($message){
   echo $message;
  }
}

class Blog{
	
	use Logger;

    function store(){
     // need to manage log
     $this->log('This is my blog log');
    }
}

class Comment{

	use Logger;

    function store(){
     // need to manage log
     $this->log('This is my comment log');
    }
}

$blog = new Blog();
$comment = new Comment();

$blog->store();
echo"<br>";
$comment->store();

?>