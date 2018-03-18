<?php
	require('conn.php');
	$user_id = $_COOKIE['user_id'];
	$content = addslashes($_POST['content']);
	$parent_id = $_POST['parent_id'];

  $sql = "INSERT INTO Amelie1815_comments (user_id, content, parent_id) VALUES ('$user_id', '$content', '$parent_id')";

	if( $conn->query($sql) === TRUE ) {
		header("Location: ./index.php");        // 筆記：若成功則轉址回 index.php
    }
    else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	$conn->close();
?>