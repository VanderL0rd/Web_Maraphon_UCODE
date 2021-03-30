<?php

class Avenger{

	function __construct($name, $alias, $gender, $age, $power, $hp){
		$this->name = $name;
		$this->alias = $alias;
		$this->gender = $gender;
		$this->age = $age;
		$this->power = $power;
		$this->hp = $hp;
	}

	function __toString(){
		$str = "{$this->name}\n{$this->gender}\n{$this->age}\n";
		return $str;
	}

	function __invoke()
    {
        $str = "" . $this->alias . "\n";
		for($ind = 0; $ind < count($this->power); $ind++){
			$str .= $this->power[$ind] . "\n";
		}
		echo $str;
    }
}

?>