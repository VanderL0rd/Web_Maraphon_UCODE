<?php
    session_start();
function find_user($login, $pwd, $conn){
    $query = "SELECT login, pwd, is_admin 
              FROM users
              WHERE login = ? AND pwd= ?";
    if($stmt = mysqli_prepare($conn, $query)){
        mysqli_stmt_bind_param($stmt, "ss", $param1, $param2);
        $param1 = $login;
        $param2 = $pwd;
        if(mysqli_stmt_execute($stmt)){
            mysqli_stmt_store_result($stmt);
            if(mysqli_stmt_num_rows($stmt) == 1){
                mysqli_stmt_bind_result($stmt, $login_res, $pwd_res, $is_admin);
                if(mysqli_stmt_fetch($stmt)){
                    $_SESSION["loggedin"] = true;
                    $_SESSION["login"] = $login_res;
                    $_SESSION["pwd"] = $pwd_res; 
                    if($is_admin == "TRUE"){
                    $_SESSION["is_admin"] = "Admin"; }
                    else{
                        $_SESSION["is_admin"] = 'User';
                    }
                }else{
                    echo "<h2 class='error'>Error.</h2>";
                }
            }
            else{
                echo "<h2 class='error'>Error.</h2>";
            }
        } else{
            echo "<h2 class='error'>Oops! Something went wrong. Please try again.</h2>";
        }
        mysqli_stmt_close($stmt);
    }
}
