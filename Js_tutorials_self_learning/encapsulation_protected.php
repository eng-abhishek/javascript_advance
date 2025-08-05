<?php

 // Encapsulation is all about wrapping the data and method in a single unit. Object-Oriented programming sets the access level for member functions or variables. It means from where it needs to be accessed. There are three kinds of access levels or access specifiers.

class TV{

// Member variable
  
  protected $model;
  public $volume;

 // Member function

  function volumeUP(){
   $this->volume++;
  }

  function valumeDown(){
   $this->volume--;
  }

  function __construct($m,$v){
  
   $this->volume = $v;
   $this->model = $m;

  }

}

class AndroidTV extends TV{

  function displayModelName(){
  return $this->model;
  }

}

// instance of a class

  $obj = new AndroidTV('LG',5);
  echo $obj->displayModelName();

?>