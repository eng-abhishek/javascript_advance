


<!--
Polymorphism: Polymorphism means many types or many forms. It means suppose you have created an interface also classes that will implement this interface class. These classes will have different functionality and they all will share this common interface.
-->

<?php

interface LoggerInterface{
	public function log($message);
}

class EmailLogger implements LoggerInterface{
    
    public function log($message){
     echo $message;
    }
}

class CallingLog implements LoggerInterface{

   public function log($message){
   echo $message;
   }
}

$email_obj = new EmailLogger();
$calling_obj = new CallingLog();

$email_obj->log("This is email log");
echo"<br>";
$calling_obj->log("This is Calling Log");
?>