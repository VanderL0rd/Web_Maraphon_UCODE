<?php

include(__DIR__. "/LLItem.php");

class LList implements IteratorAggregate{
	private $head;
	private $node;

	function __construct(){
		$this->head = null;
		$this->node = null;
	}

	function getFirst(){
		return $this->head->data;
	}

	function getLast(){
		$tail = $this->head;
		while($tail->next !== null){
			$tail = $tail->next;
		}
		return $tail->data;
	}

	function count(){
		$ind = 1;
		$tail = $this->head;
		while($tail->next !== null){
			$tail = $tail->next;
			$ind++;
		}
		return $ind;
	}

	function contains($value){
		$tail = $this->head;
		while($tail !== null){
			if ($tail->data == $value){
				return 1;
			}
			$tail = $tail->next;
		}
		return 0;
	}

	function clear(){
		$this->head = null;
	}

	function add($value){
		$node = new LLItem($value);
		if($this->head === null){
			$this->head = $node;
		}else{
			$tail = $this->head;
			while($tail->next !== null){
				$tail = $tail->next;
			}
			$tail->next = $node;
		}
	}

	function addArr($array){
		$num = count($array);
		for($ind = 0; $ind < $num; $ind++){
			$node = new LLItem($array[$ind]);
			if($this->head === null){
				$this->head = $node;
			}else{
				$tail = $this->head;
				while($tail->next !== null){
					$tail = $tail->next;
				}
				$tail->next = $node;
			}
		}
	}

	function remove($value){
		$tail = $this->head;
		while($tail->next !== null){
			if ($tail->next == $value)
			{
				$tail->next = $tail->next->next;
				return;
			}
			else if ($tail->data == $value){
				$this->head = $tail->next;
				return;
			}
			$tail=$tail->next;
		}
	}

	function removeAll($value){
		$tail = $this->head;
		while($tail->next !== null){
			if ($tail->next->data == $value)
			{
				$tail->next = $tail->next->next;
				
			}
			else if ($tail->data == $value){
				$this->head = $tail->next;
				
			}
			$tail=$tail->next;
		}
	}

	function toString(){
		$str = "";
		$tail = $this->head;
		while($tail !== null){
			if($tail->next !== null){
			$str .= $tail->data . ",  ";
			}else{
				$str .= $tail->data;
			}
			$tail = $tail->next;
		}
		echo $str . "\n";
	}
	
	function getIterator() {
		$this->node = $this->head;
        return new ArrayIterator($this->node);
    }

	public function current() {
        var_dump(__METHOD__);
		if($this->node == null){
			$this->node = $this->head;
		}
        return $this->node;
    }

	public function rewind() {
        var_dump(__METHOD__);
		$this->node = $this->head;
        return $this->node;
    }

	public function next() {
        var_dump(__METHOD__);
        $this->node = $this->node->next;
    }

	public function key() {
        var_dump(__METHOD__);
        return $this->node->data;
    }

	public function valid() {
        var_dump(__METHOD__);
        return isset($this->node);
    }
}

$list = new LList();
$list->addArr([100, 1, 2, 3, 100, 4, 5, 100]);
$list->removeAll(100);
$list->add(10);
echo "1) " . $list->contains(10) . "\n"; // 1
echo "2) " . $list->toString() . "\n"; // 1, 2, 3, 4, 5, 10
$sum = 0;
$iter = $list->getIterator();
foreach ($iter as $v){
	$sum += $v;
}
echo "3) " . $sum . "\n"; // 25
//$list->clear();
echo "4) " . $list->toString() . "\n";
?>