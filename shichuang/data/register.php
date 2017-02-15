<?php
    header('Content-Type: text/plain');
	$userphone=$_REQUEST['userphone'];
	$userpw = $_REQUEST['userpw'];
	$conn=mysqli_connect('127.0.0.1','root','','sc',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$sql = "INSERT INTO user VALUES(NULL,'$userphone','$userpw')";
	$result=mysqli_query($conn,$sql);
	if($result){
        	echo '注册成功！<br>';
        	echo '用户编号：'.mysqli_insert_id($conn);
        }else {
        	echo '注册失败！<br>';
        	echo '请检查SQL：'.$sql;
        }