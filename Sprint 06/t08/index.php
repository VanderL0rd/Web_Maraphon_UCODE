<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h1>What Thanos did for the Soul Stone?</h1>
	<form action="index.php" method="post">
	<div >
	<input type="radio" name="Rad" value="1">Jumped from the mountain<br>
	<input type="radio" name="Rad" value="2">Made stone keeper too jump from the mountain<br>
	<input type="radio" name="Rad" value="3">Pushed Gamora off the mountain<br>

	<input type="submit">
	</form>
	<?php
		if($_POST["Rad"] != 3){
			echo "<br>Shame on you! Go and watch Avengers!";
		}
		else{
			echo "<br>Awesome!";
		}
	?>
	</div>
	</body>
</html>