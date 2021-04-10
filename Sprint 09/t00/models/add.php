<?php

function add_user($login, $pwd, $f_name, $email, $conn){
    $query = "INSERT INTO users (login, pwd, email, f_name) VALUES (?, ?, ?, ?)";
    if($stmt = mysqli_prepare($conn, $query)){
        mysqli_stmt_bind_param($stmt, "ssss", $param1, $param2, $param3, $param4);
        $param1 = $login;
        $param2 = $pwd;
        $param3 = $email;
        $param4 = $f_name;
        if(mysqli_stmt_execute($stmt)){
            // Redirect to login page
           echo "<h2 class='success'>User was successfuly created!</h2>";
        } else{
            echo "<h2 class='error'>Oops! Something went wrong. Please try again.</h2>";
        }
        mysqli_stmt_close($stmt);
    }
}
