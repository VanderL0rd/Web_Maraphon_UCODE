<?php
function checkDivision($start = 1, $end = 60){
	for ($ind = $start; $ind <= $end; $ind++){
		$str = "";
		if($ind % 2 == 0){
			$str = $str . "The number " . strval($ind) . " is divisible by 2";
		}
		if ($ind % 3 == 0 && empty($str)){
			$str = $str . "The number " . strval($ind) . " is divisible by 3";
		}
		else if ($ind % 3 == 0){
			$str .= " is divisible by 3";
		}
		if ($ind % 10 == 0 && empty($str)){
			$str = $str . "The number " . strval($ind) . " is divisible by 10";
		}
		else if ($ind % 10 == 0) {
			$str .= " is divisible by 10";
		}
		if (empty($str))
		{
			$str .= "The number " . strval($ind) . " -";
		}
		$str .=  "\n";
		echo $str;
	}
}


// echo"\n*** Range is 58 - ... checkDivision(58) ***\n";
// checkDivision(58);
// echo"\n*** Range is ... - ... checkDivision() ***\n";
// checkDivision();
// echo"*** Range is 3 - 7 checkDivision(3,7) ***\n";
// checkDivision(3,7);
?>	