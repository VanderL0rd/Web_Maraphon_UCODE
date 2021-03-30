<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>

<body>
	<?php 
		echo "<fieldset><h1> POST </h1>" . $_POST;
		echo "<br>{<br>\t[name] => " . $_POST['name'];
		echo "<br>\t[mail] => " . $_POST['mail'];
		echo "<br>\t[age] => " . $_POST['num'];
		echo "<br>\t[description] => " . $_POST["about"];
		echo "<br>\t[photo] => " . $_POST["photo"] . "<br>}<br>
		</fieldset>";
	?>
	<form action="index.php" method="post">
		<fieldset>
			<legend>About candidate</legend>
			Name <input type="text" name="name" placeholder="Tell your name">
			E-mail <input type="text" name="mail" placeholder="Tell your e-mail"> 
			Age <input type="number" name="num"><br><br>
			About <textarea name="about" cols="40" rows="7" placeholder="Tell about yourself">
			</textarea><br>
			Your photo: <input type="file" name="photo">
		</fieldset>
		<input type="reset" value="Clear"> 
		<input type="submit" value="Submit">
	</form>	
</body>
</html>