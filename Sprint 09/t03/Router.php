<?php
    class Router{
        public $arguments = array();
        function set(){
            if($_GET){
                foreach($_GET as $index => $value){
                    $this->arguments[$index] = $value;
                }
            }
        }
        function printing(){
            $res = '{';
            if($this->arguments){
                foreach($this->arguments as $index => $value){
                    $res .= "'$index': '$value', ";
                }
            }
            $res = substr($res, 0, -2);
            $res .= "}";
            echo $res;
        }
    }
?>