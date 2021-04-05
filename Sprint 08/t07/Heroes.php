<?php

class Heroes extends Model
{
    public $id;
    public $name = "";
    public $description = "";
    public $race = "";
    public $class_role = "";

    public function find($id)
    {
        if ($this->dbConnection->getConnectionStatus()){
            $response = mysqli_query($this->dbConnection->connection, "SELECT * FROM " . $this->table . " WHERE id = $id" . ";");
            if ($response) {
                $row = mysqli_fetch_assoc($response);
                $this->id = $row["id"];
                $this->name = $row["name"];
                $this->description = $row["description"];
                $this->race = $row["race"];
                $this->class_role = $row["class_role"];
            }
        }
    }

    public function delete()
    {
        if ($this->dbConnection->getConnectionStatus()) {
            $response = mysqli_query($this->dbConnection->connection, "SELECT id FROM " . $this->table . " WHERE id = " . $this->id . ";");
            $row = mysqli_fetch_assoc($response);
            if (!$row["name"]) {
                mysqli_query($this->dbConnection->connection, "DELETE name FROM " . $this->table . " WHERE id = " . $this->id . ";");
                $this->id = null;
                $this->name = null;
                $this->description = null;
                $this->race = null;
                $this->class_role = null;
            }
        }
    }

    public function save()
    {
        if ($this->connection->getConnectionStatus()) {
            $array = mysqli_query($this->connection->connection, "SELECT id FROM " . $this->table . " WHERE id = " . $this->id . ";");
            echo $array->field_count;
            $row = mysqli_fetch_assoc($array);
            if (!$row["name"]) {
                echo 'INSERT INTO heroes (id, name, description, race, class_role)
                VALUES ("' . $this->id . '", "' . $this->name . '", "' . $this->description . '", "' . $this->race . '", "' . $this->class_role . '");';
                mysqli_query($this->connection->connection, 'INSERT INTO heroes (id, name, description, race, class_role)
                    VALUES ("' . $this->id . '", "' . $this->name . '", "' . $this->description . '", "' . $this->race . '", "' . $this->class_role . '");');
            }
            else {
                mysqli_query($this->connection->connection, "UPDATE heroes SET id = " . $this->id . ", name = '" . $this->name . "', description = '" . $this->description . "', race = '" . $this->race . "', class_role = '" . $this->class_role . "'  WHERE id = " . $this->id . ";");
            }
        }
    }
}
?>