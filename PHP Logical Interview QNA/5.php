<?php

$x =  3 + "15%" + "$25";

echo $x;

// With that understanding, we can see that "15%" evaluates to the numeric value 15 and "$25" evaluates
// to the numeric value zero, which explains why the result of the statement $x = 3 + "15%" + "$25" 
// is 18 (i.e., 3 + 15 + 0).

// Please note that as of PHP 7.2, this code produces an error.
?>