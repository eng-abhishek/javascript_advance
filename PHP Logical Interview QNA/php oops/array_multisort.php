<?php

$ass_array1 = array(
                  'm' => 'mango',
                  'p' => 'papaya',
                  'g' => 'gova',
                  't' => 'termine',
                  'a' => 'apple',
                  'l' => 'lemao',
                  );

$ass_array2 = array('name'=>'abhisheK','email'=>'abhi@gmail.com','address'=>'chhawani bazar basti');

array_multisort($ass_array1,$ass_array2);


echo"<pr>";
print_r($ass_array1);
echo"<pr>";

echo"==================================";

echo"<pr>";
print_r($ass_array2);
echo"<pr>";
?>