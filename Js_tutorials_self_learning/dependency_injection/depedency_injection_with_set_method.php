<?php

/* Depedency Injection with setter Method */
/* Depedency Injection with set Method Injection */
class PaymentService{
public function pay(){
 echo "Your Transaction is success";
}

}

class Customr{
     
    public PaymentService $service;
    public function setPaymentService(PaymentService $service){
       $this->service = $service;
    }
}

$service = new PaymentService();

$customer = new Customr();

$customer->setPaymentService($service);

echo $customer->service->pay();
?>