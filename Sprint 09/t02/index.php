<?php
session_start();
include "models/remind.php";

$conn = mysqli_connect('127.0.0.1', 'vchukhrii', 'securepass', 'sword');
$loging = false;

if($_POST){
    if(!empty($_POST['email'])){
        $email = $_POST['email'];
        reminder($email,$conn);
        $pwd = $_SESSION["pwd"];
        mail($email, "Remind", "Your password: " . $pwd);
    }
}
include('index.html');
echo "<center><p>Check your email<br>";
echo "Return to <a href='../t01/index.php'>Sign in</a></center>";