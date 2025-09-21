<?php
class emp{
   private $id;
   private $sal;
   private $dob;
   
   
   public function __construct($id,$sal,$dob){
    $this->id = $id;
    $this->sal = $sal;
    $this->dob = $dob;
   }
   
   public function getEmpDetails(){
      return $this->id." - ".$this->sal." - ".$this->dob."<br>";
   }
}

class empFactory{
     public static function createEmp($id,$sal,$dob){
       return new emp($id,$sal,$dob);
     }
}


$obj = empFactory::createEmp(1,"25K","10-05-1998");
echo"<pre>";
print_r($obj->getEmpDetails());

$obj = empFactory::createEmp(2,"30K","10-05-1995");
echo"<pre>";
print_r($obj->getEmpDetails());
?>