<?php

interface ControllerInterface{
    function __construct();
    function execute();
}

class Main implements ControllerInterface{
    function __construct(){
        $this->view = new View();
    }
    function execute(){
        $this->view->render();
    }
}