<?php

class Team {
	function __construct ($id, $avengers){
		$this->id = $id;
		$this->avengers = $avengers;
	}

	function battle ($damage){
		for($ind = 0; $ind < count($this->avengers); $ind++){
			$this->avengers[$ind]->hp -= $damage;
			if($this->avengers[$ind]->hp <=0){
				array_splice($this->avengers, $ind, 1);
				$ind--;
			}
		}
	}

	function calculate_losses($cloned_team){
		$num = count($cloned_team->avengers) - count($this->avengers);
		if ($num == 0){
			echo "We haven't lost anyone in this battle!\n";
		}
		else{
			echo "In this battle we lost " . $num . " Avenger(s).\n";
		}
	}
}
?>