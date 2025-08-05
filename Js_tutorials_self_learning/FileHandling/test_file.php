<?php
// $file= fopen( 'file11.txt','a');
// echo $file;
$myfile = fopen("file100.txt", "w") or die("Unable to open file!");
echo fgets($myfile);
// echo $myfile;
// echo fread($myfile,filesize("file11.txt"));
fclose($myfile);
?>