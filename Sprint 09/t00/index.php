<?php
include "index.html";
require_once "connection/conn_db.php";
include "models/models.php";

$conn = mysqli_connect('127.0.0.1', 'vchukhrii', 'securepass', 'sword');

if($_POST){
    if($_POST['pwd']==$_POST['con_pwd']){
        $login = $_POST['log'];
        $pwd = $_POST['pwd'];
        $f_name = $_POST['f_name'];
        $email = $_POST['email'];
        add_user($login, $pwd,$f_name, $email, $conn);
        $_POST = NULL;
    }else{
        echo "<h2 class='error'>Oops! Something went wrong. Please try again.</h2>";
    }
}