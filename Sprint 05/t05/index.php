<?php

class StrFrequency{
	function __construct($str){
		$this->str = $str;
	}
	function letterFrequencies(){
		$str_1 = strtoupper($this->str);
		$arr_1 = str_split($str_1);
		$arr_2 = array(
		"A" => 0,"B" => 0,"C" => 0,"D" => 0,"E" => 0,"F" => 0,"G" => 0,"H" => 0,"I" => 0,"J" => 0,"K" => 0,"L" => 0,"M" => 0,"N" => 0,"O" => 0,"P" => 0,"Q" => 0,"R" => 0,"S" => 0,"T" => 0,"U" => 0,"V" => 0,"W" => 0,"X" => 0,"Y" => 0,"Z" => 0);
		for ($ind = 0; $ind < count($arr_1); $ind++){
			$arr_2[$arr_1[$ind]]++;
		}
		$arr_3=array();
		for ($ind = "A", $jnd = 0; $ind <= "Z"; $ind++, $jnd++){
			if ($arr_2[$ind] > 0){
				$arr_3 += array_slice($arr_2, $jnd, 1);
			}
		}
		return $arr_3;
	}
	function wordFrequencies(){
		$arr = [];
		$string = strtoupper($this->str);
		$arr = array_count_values(str_word_count($string, 1));
		return $arr;
	}
	function reverseString(){
		$str_1 = strtoupper($this->str);
		$str_2 = substr($str_1, -1 * (strlen($str_1) - 1));
		return $str_2;
	}
}

// function test($string)
// {
// $obj = new StrFrequency($string);
// $symbol = $obj->letterFrequencies();
// echo "Letters in " . $string . "\n";
// foreach ($symbol as $k => $v) {
// echo "Letter ". $k . " is repeated " . $v . " times\n";
// }
// $symbol = $obj->wordFrequencies();
// echo "Words in " . $string . "\n";
// foreach ($symbol as $k => $v) {
// echo "Word ". $k . " is repeated " . $v . " times\n";
// }
// echo "Reverse the string: " . $string . "\n";
// echo $obj->reverseString() . "\n";
// }
// test("Face it, Harley-- you and your Puddin' are kaput!");
// echo "*************\n";
// test(" Test test 123 45 !0 f HeLlO wOrLd ");
// echo "*************\n";
// test("");
?>