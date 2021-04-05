<?php
    class DatabaseConnection{
        public function __construct($host, $port, $username, $password, $database){
            $this->servername = $host;
            $this->username = $username;
            $this->password = $password;
            $this->database = $database;
            $this->port = $port;
            $this->conn = mysqli_connect($this->servername, $this->username, $this->password, $this->database, $this->port);
        }
        function __destruct(){
            mysqli_close($this->conn);
        }
        public function getConnectionStatus(){
            if($this->conn) return true;
            else return false;
        }
    }
?>