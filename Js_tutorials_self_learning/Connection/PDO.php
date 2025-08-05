<?php
// $user_id = "1";
// $db= "{mysql:host=localhost;'dbname=exch_2024'}";
// $db_connect = new PDO($db,'root','');
// $sql= $db_connect->prepare('select * from user where id ?');
// $sql->bind_param('i',$user_id);
// $sql->execute();
// $sql->close();
// $db_connect->close();

$conn_name = mysqli_connect("localhost","root","");


if(mysqli_connect_errno()){
print_r(mysqli_connect_errno());
}

?>