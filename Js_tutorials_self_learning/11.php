<?php
// Online PHP compiler to run PHP program online
// Print "Try programiz.pro" message

$arr = [[1, 3], [4, 6], [8, 10], [15, 18]];

$arr_1 = [];

for($i=0;$i<count($arr);$i++){
    
    if(($arr[$i][1] > $arr[$i+1][0]) && isset($arr[$i+1])){
        $arr_1[$i][0] = $arr[$i][0];
        $arr_1[$i][1] = $arr[$i+1][1];
        $i++;
    }else{
        $arr_1[$i][0] = $arr[$i][0];
        $arr_1[$i][1] = $arr[$i][1];
    }
    // }
}
    print_r($arr_1);

?>