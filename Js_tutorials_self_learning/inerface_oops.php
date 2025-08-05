
<!-- Interface is a special type of class in oops which have only abstract method  -->

<!-- And Absctact method is a method which have only method declaration , does not have 
     Method definiation or method body 
 -->

<!-- Interface Acts as a blue print or works as parent class for another class every child 
     class implements all abstract method of interface
 -- >

<!-- Interfaces: There is a limitation for inheritance in PHP that is you can not extend multiple classes.
     Through Interface you can achieve multiple inheritance property. Interfaces also worked like abstract classes.
     The ‘implements’ keyword is used for interfaces. There is a difference between abstract class and interface
     class. In abstract class define variables but in the interface, the class can not define variables. 
     It can also not create constructor function in interfaces. It can not declare a private or protected 
     function.
-->

<?php

interface A{
   public function abc();
}

interface B{
   public function xyz();
}

class C implements A,B{

    public function abc(){
      echo"This is abc";
    }

    public function xyz(){
       echo"This is xyz";
    }

}
 
$obj = new C();
$obj->abc();
echo"<br>";
$obj->xyz();

?>