<?php

/* Depedency Injection with constructor Method */

class PaymentService{
    public function pay(){
        return "Your transaction success";
    }   
}

class Customer{
 
 public PaymentService $service;

 // Constructor Injection
 public function __construct(PaymentService $service){
          
      // $this->service = new PaymentService();
      $this->service = $service;

    }
}

 $service = new PaymentService();
 $customer = new Customer($service);
 echo $customer->service->pay();
?>