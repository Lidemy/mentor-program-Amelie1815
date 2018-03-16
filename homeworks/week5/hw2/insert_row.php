<?php
	require('conn.php');
    $sql = "INSERT INTO comments (nickname, content, parent_id) VALUES ('" . addslashes($_POST['nickname']) . "', '" . addslashes($_POST['content']) . "', '" . $_POST['parent_id'] . "')";
    // 筆記：注意單雙引號用法
    // 筆記：為了防止變數內含有單雙引號，造成 SQL query 指令錯誤，使用 addslashes() 來處理

	if( $conn->query($sql) === TRUE ) {
		header("Location: ./index.php");        // 筆記：若成功則轉址回 index.php
    }
    else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	$conn->close();
?>