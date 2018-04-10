<?php
  require_once('conn.php');
	// Use cookie to find user
	$session_id = $_COOKIE["session_id"];
	$user_stmt = $conn->prepare("SELECT * FROM Amelie1815_users_certificate WHERE id=?");
	$user_stmt->bind_param("s", $session_id);
	$user_stmt->execute();
	$result = $user_stmt->get_result();
	$user_row = $result->fetch_assoc();

  // Insert new comment into database
	$content = addslashes($_POST['content']);
	$parent_id = $_POST['parent_id'];
	$stmt = $conn->prepare("INSERT INTO Amelie1815_comments (user_id, content, parent_id) VALUES (?, ?, ?)");
	$stmt->bind_param("isi", $user_row[user_id], $content, $parent_id);
	$stmt->execute();

	header("Location: ./index.php");
	$conn->close();
?>