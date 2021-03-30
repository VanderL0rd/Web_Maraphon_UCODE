<?php 
namespace Space\Quantum;
use DateTime;

function calculate_time(){
	$d_1 = new DateTime('1939-01-01');
	$d_2 = new DateTime('NOW');
	$d_3 = $d_1->diff($d_2);
	$arr[0] = $d_3->format('%Y') - 70;
	$arr[1] = $d_3->format('%m') + 4;
	$arr[2] = $d_3->format('%d');
	return $arr;
}
?>