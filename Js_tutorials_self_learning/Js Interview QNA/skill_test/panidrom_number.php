<?php
/*
121
131
141
151
All these no are called panidrom no
*/

$given_no=121;
$reverse_no=0;
$divide_no=0;
$tmp_no=$given_no;

while($tmp_no>0){
$tmp_no=$tmp_no/10;
$r=$tmp_no%10;
$reverse_no=$reverse_no*10+$r;
}
 print_r($reverse_no);
?>