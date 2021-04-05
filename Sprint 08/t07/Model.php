<?php 

abstract class Model
{
    protected $table;
    protected $database_conn;
    public function __construct($database_conn,$table)
    {
        $this->setTable($table);
        $this->setConnection($database_conn);
    }

    protected function setTable($table){
        $this->table = $table;
    }

    protected function setConnection($database_conn){
        $this->database_conn = $database_conn;
    }

    abstract public function find($id);

    abstract public function delete();

    abstract  public function save();



}

?>