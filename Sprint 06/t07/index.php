<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<p>Name of file: <?php echo $_SERVER['SCRIPT_NAME']; ?></p>
	<p>Arguments given to file: <?php echo $_SERVER['argv']; ?></p>
	<p>IP address: <?php echo $_SERVER['SERVER_ADDR']; ?></p>
	<p>Server name: <?php echo $_SERVER['SERVER_NAME']; ?></p>
	<p>Protocol: <?php echo $_SERVER['SERVER_PROTOCOL']; ?></p>
	<p>Query method: <?php echo $_SERVER['REQUEST_METHOD']; ?></p>
	<p>User-Agent information: <?php echo $_SERVER['HTTP_USER_AGENT']; ?></p>
	<p>IP address of the client: <?php echo $_SERVER['REMOTE_ADDR']; ?></p>
	<p>List of parameters passed by URL: <?php echo $_SERVER['PATH_INFO']; ?></p>
</body>
</html>