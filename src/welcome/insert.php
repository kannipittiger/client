<?php
$email = htmlspecialchars(trim($_POST["email"]));
$username = htmlspecialchars(trim($_POST["username"]));
$password = htmlspecialchars(trim($_POST["password"]));

$servername="localhost";
$username="root";
$password="";
$dbname="moodify";
//create connection
$conn=mysqli_connect($servername,$username,$password,$dbname);
if(!$conn){
    die("Connection failed ".mysqli_connect_error());
}
$sql="INSERT INTO `users`  (`email`,`username`,`password`) VALUES ('$email','$username','$password')";
$result=mysqli_query($conn,$sql);
if($result){
    alert("Sign up success");
}

mysqli_close($conn);
?>