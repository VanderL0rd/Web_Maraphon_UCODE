<?php

class Avenger{

	function __construct($name, $alias, $gender, $age, $power){
		$this->name = $name;
		$this->alias = $alias;
		$this->gender = $gender;
		$this->age = $age;
		$this->power = $power;
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
$first_avenger = new Avenger("Tony Stark", "Iron Man", "man", 38,
["intelligence", "durability", "magnetism"]);
$second_avenger = new Avenger("Natasha Romanoff", "Black Widow", "woman", 35,
["agility", "martial arts"]);
echo "*** calling \$first_avenger() ***\n";
$first_avenger();
echo "*** calling echo \$second_avenger ***\n";
echo $second_avenger;
echo "*** calling \$second_avenger() ***\n";
$second_avenger();

?>