<?php
include 'config.php';

$sql = "INSERT INTO visit_dates (visit_date) VALUES (CURRENT_TIMESTAMP)";
if ($mysqli->query($sql) === TRUE) {
    echo "Visit date recorded successfully";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}
?>