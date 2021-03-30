<?php 
class EatException extends Exception {
	public function __construct($message = "No more junk food, dumpling", $code = 0, Throwable $previous = null) {
        parent::__construct($message, $code, $previous);
    }
}
?>