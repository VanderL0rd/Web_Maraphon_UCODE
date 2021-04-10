<?php

session_start();

echo "<p>Login: " . $_SESSION["login"] . "<br>".
"Status: " . $_SESSION['is_admin'] . "</p>";
$loging = true;
        
echo '<a href="logout.php" 
class="">Sign Out of Your Account</a>';

?>