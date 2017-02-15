<?php
header('Content-Type: application/json');
$output = [];
$conn = mysqli_connect('127.0.0.1','root','','sc', 3306);
mysqli_query($conn, 'SET NAMES UTF8');
$sql = "SELECT * FROM user";
$result = mysqli_query($conn, $sql);
 while(true){
     $row=mysqli_fetch_assoc($result);
              if(!$row){
                  break;
               }
                $output[]=$row;
     }
 echo json_encode($output);
 ?>