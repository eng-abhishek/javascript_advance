<?php

 // Encapsulation is all about wrapping the data and method in a single unit. Object-Oriented programming sets the access level for member functions or variables. It means from where it needs to be accessed. There are three kinds of access levels or access specifiers.

class TV{

// Member variable

  public $model;
  private $valume;

 // Member function

  function valumeUP(){
   $this->valume++;
  }

  function valumeDown(){
   $this->valume--;
  }

  function __construct($m,$v){
   
   $this->valume = $v;
   $this->model = $m;

  }
}

// create instance of an class

  $obj = new TV('LG',2);
  echo $obj->model;

?>