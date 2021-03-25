<?php
function total($num, $val, $cur = 0){
	$cur += $val * $num; 
	return $cur;
}


// $basket_total= total(1, 0.1);
// $basket_total= total(1, 0.2,  $basket_total);
// echo"\nPrice of order is $basket_total\n";
// $basket_total= total(3, 1.4,  $basket_total);
// echo"\nPrice of order is $basket_total\n";
?>