<?php

/* Depedency Injection with Interface */

/* this one is the service */
interface PaymentService{

    public function pay();

    }

/* this one is the clint */
class Customer implements PaymentService{
    public PaymentService $service;
    public function pay(){
     return "Your Payment successfull ";
    }

}

$customer = new Customer();
echo $customer->pay();

?>