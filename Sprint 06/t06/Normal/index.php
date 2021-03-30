<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Quantum space</title>
</head>

<body>
  <p>In quantum space you were absent for 
  <?php
  function calculate_time(){
	$d_1 = new DateTime('1939-01-01T00:00:00.012345Z');
	$d_2 = new DateTime('NOW');
	return $d_1->diff($d_2);
}
  $time = calculate_time();				
  echo "In real life you were absent for " . $time->format("%Y") . 	" years, " . $time->format("%m") . " months, " . $time->format("%d") . " days\n"; 
  ?> </p></body>

</html>
