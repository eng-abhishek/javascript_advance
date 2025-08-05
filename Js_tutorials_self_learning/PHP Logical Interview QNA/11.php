<?php
$str1 = 'yabadabadoo';
$str2 = 'yaba';

// strpos("I love with php","php") 
// output 12 

if (strpos($str1,$str2)) {
    echo "\"" . $str1 . "\" contains \"" . $str2 . "\"";
} else {
    echo "\"" . $str1 . "\" does not contain \"" . $str2 . "\"";
}

// you can correct it like this

if (strpos($str1,$str2) !== false ) {
    echo "\"" . $str1 . "\" contains \"" . $str2 . "\"";
} else {
    echo "\"" . $str1 . "\" does not contain \"" . $str2 . "\"";
}

// echo strpos("I love php, I love php too!","m");
// if not found it return null
?>