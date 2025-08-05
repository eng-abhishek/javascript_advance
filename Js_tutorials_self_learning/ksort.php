<?php

$ass_array = array(
                  'm' => 'mango',
                  'p' => 'papaya',
                  'g' => 'gova',
                  't' => 'termine',
                  'a' => 'apple',
                  'l' => 'lemao',
                  );

echo"<pre>";
print_r($ass_array);
echo"<pre>";

echo"-------- After sorting------------";

ksort($ass_array);

echo"<pre>";
print_r($ass_array);
echo"<pre>";


?>