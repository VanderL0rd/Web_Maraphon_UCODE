<?php
    session_start();
function reminder($email, $conn){
    $query = "SELECT pwd 
              FROM users
              WHERE email = ?";
    if($stmt = mysqli_prepare($conn, $query)){
        mysqli_stmt_bind_param($stmt, "s", $param1);
        $param1 = $email;
        if(mysqli_stmt_execute($stmt)){
            mysqli_stmt_store_result($stmt);
            if(mysqli_stmt_num_rows($stmt) == 1){
                mysqli_stmt_bind_result($stmt, $pwd_res);
                if(mysqli_stmt_fetch($stmt)){
                    $_SESSION["pwd"] = $pwd_res;
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
