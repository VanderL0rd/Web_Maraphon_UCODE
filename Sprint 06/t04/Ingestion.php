<?php 
class Ingestion{
	function __construct($id, $meal_type){
		$this->id = $id;
		$this->meal_type = $meal_type;
	}		
	function get_from_fridge($product){
		if($this->products->kcal_per_portion > 200){
			throw new Exception();
		}
	}
	function setProduct($prod){
		$this->products[$prod->getName()] = $prod;	
	}
	function getProducts()
	{
		return $this->products;
	}
}
?>	