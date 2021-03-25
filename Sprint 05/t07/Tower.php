<?php

class Tower extends Building{
	private $elev;
	private $area;
	private $height;

	public function setElevator($elev)
	{
		$this->elev = $elev;
	}
	public function setArcCapacity($area)
	{
		$this->area = $area;
	}
	public function setHeight($height)
	{
		$this->height = $height;
	}
	public function hasElevator(){
		$str = "+";
		if($this->elevator == true)
		{
			return $str;
		}
		else{
			$str = "-";
			return $str;
		}
	}
	public function getArcCapacity(){
		return $this->area;
	}
	public function getHeight(){
		return $this->height;
	}
	public function getFloorHeight(){
		return $this->height / $this->floors;
	}
}

?>