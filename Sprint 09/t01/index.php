<?php
include "models/find.php";

$conn = mysqli_connect('127.0.0.1', 'vchukhrii', 'securepass', 'sword');
$loging = false;

if($_POST){
    if(!empty($_POST['login']) && !empty($_POST['pwd'])){
        $login = $_POST['login'];
        $pwd = $_POST['pwd'];
        find_user($login,$pwd,$conn);
        header("location: indicate.php");
    }
    else{
        $loging = false;
    }
}
else{
    $loging = false;
}
if($loging == false){
    include('index.html');
}