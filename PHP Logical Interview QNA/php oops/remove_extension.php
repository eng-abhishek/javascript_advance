<?php
$filename = "ram.png";
echo"<pre>";
print_r(pathinfo($filename));

/*
Output
Array
(
    [dirname] => .
    [basename] => ram.png
    [extension] => png
    [filename] => ram
)
*/

echo"<pre>";
print_r(basename($filename));

/* Output
   ram.png
*/
?>