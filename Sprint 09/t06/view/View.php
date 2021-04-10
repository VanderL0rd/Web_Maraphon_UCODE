<?php 
    class View{
        public function __construct($f_path){
            $this->file_path=$f_path;
        }
        function render(){
            ob_clean();
            $file = file_get_contents($this->file_path);
            if($file){
                echo $file;
                return true;
            }else{
                return false;
            }
        }
    }