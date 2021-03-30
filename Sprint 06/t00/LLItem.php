<?php

class LLItem {
	public $data;
	public $next;
	function __construct($value){
		$this->data = $value;
		$this->next = null;
	}
}

?>