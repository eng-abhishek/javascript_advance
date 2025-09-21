<?php

$string = "hello abhishek";
$new_str = '';
for($i=0;$i<strlen($string);$i++){
    if($i == 0){
      $new_str.=strtoupper($string[$i]); 
    }elseif($string[$i] == ' '){
      $new_str.=' ';
      $new_str.=strtoupper($string[$i+1]);
      $i++;
    }else{
      $new_str.=$string[$i];
    }
}

print_r($new_str);

?>
