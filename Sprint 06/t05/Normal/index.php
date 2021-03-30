<?php 
namespace Space\Normal;
use DateTime;

function calculate_time(){
	$d_1 = new DateTime('1939-01-01T00:00:00.012345Z');
	$d_2 = new DateTime('NOW');
	return $d_1->diff($d_2);
}
?>