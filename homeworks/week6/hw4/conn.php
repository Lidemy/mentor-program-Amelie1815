<?php

$servername = "localhost";
$username = "mentor_admin";
$password = "mentor_admin123";
$dbname = "mentor_program_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn, "utf8");

// Check connection 若連線不成功則不執行 php、列出錯誤
if( $conn->connect_error ){
	die("Connection failed: " . $conn->connect_error);
}

?>