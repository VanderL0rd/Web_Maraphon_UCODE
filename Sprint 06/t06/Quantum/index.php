<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Quantum space</title>
</head>

<body>
  <p>
  <?php 
	function calculate_time(){
		$d_1 = new DateTime('1939-01-01');
		$d_2 = new DateTime('NOW');
		$d_3 = $d_1->diff($d_2);
		$arr[0] = $d_3->format('%Y') - 70;
		$arr[1] = $d_3->format('%m') + 4;
		$arr[2] = $d_3->format('%d');
		return $arr;
	}
	$time = calculate_time();
	echo "\nIn quantum space you were absent for " . $time[0] . " years, " .
    $time[1] . " months, " . $time[2] . " days\n";
?>
</p></body>

</html>