<?php
    require_once('conn.php');
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewpoint" content="width=device-width,initial-scale=1">
        <title>Amelie's Message Board</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
    </head>
    <body>
        <div class="bar"><div class="navbar"><span class="title">Amelie's Message Board</span>
        <?php
            // If logged in, show logout button
            if(isset($_COOKIE["session_id"])) {
        ?>
        <a href="./logout.php" class="nav">Log Out</a>
        <?php
            }
        ?>
        </div></div>
        <div class="container">
        <?php
            // If not logged in, show login options
            if(!isset($_COOKIE["session_id"])) {
        ?>
            <div class="notice">
                Please <a href="./login.php" class="nav">log in</a> to leave a message.<br>
                <a href="./register.php" class="nav">Not a member?</a>
            </div>
        <?php
            } else {
                // Use cookie to find nickname
                $session_id = $_COOKIE["session_id"];
                // prepare and bind
                $user_stmt = $conn->prepare("SELECT * FROM Amelie1815_users JOIN Amelie1815_users_certificate WHERE Amelie1815_users_certificate.id = ? AND Amelie1815_users_certificate.user_id = Amelie1815_users.id");
                $user_stmt->bind_param("s", $session_id);
                $user_stmt->execute();
                $result = $user_stmt->get_result();
                $user_row = $result->fetch_assoc();
        ?>
                <div class="notice">Hello, <?php echo $user_row['nickname'] ?>.</div>
                <!-- Create a new comment -->
                <div class="type_in">
                    <form action="insert_row.php" method="post">
                        <textarea class="content" name="content" placeholder="Leave your message here" required></textarea>
                        <input name="parent_id" type="hidden" value="0" />
                        <input type="submit" value='submit'/>
                    </form>
                </div>
        <?php
            }
        ?>
            <?php
				$sql = "SELECT Amelie1815_comments.id, Amelie1815_comments.content, Amelie1815_comments.created_at, Amelie1815_users.nickname 
                FROM Amelie1815_comments JOIN Amelie1815_users 
                WHERE parent_id = 0 AND Amelie1815_comments.user_id = Amelie1815_users.id 
                ORDER BY Amelie1815_comments.created_at DESC";

                $result = $conn->query( $sql );
				if( $result->num_rows > 0 ){
					while( $row = $result->fetch_assoc()){
			?>
                        <!-- Show comments -->
                        <div class="msg_box">
                            <div class="nickname"><?php echo htmlspecialchars($row['nickname']); ?></div>
                            <div class="created_at"><?php echo $row['created_at']; ?></div>
                            <hr>
                            <div class="content"><?php echo nl2br(htmlspecialchars($row['content'])); ?></div>
                            <!-- Note: 先 htmlspecialchars() 跳脫，再用 nl2br() 包住所有的來顯示換行。用到多個函數時注意先後順序！ -->

                            <?php 
                                $sub_sql = "SELECT Amelie1815_comments.id, Amelie1815_comments.content, Amelie1815_comments.created_at, Amelie1815_users.nickname 
                                FROM Amelie1815_comments JOIN Amelie1815_users 
                                WHERE parent_id = '".$row['id']."' AND Amelie1815_comments.user_id = Amelie1815_users.id 
                                ORDER BY Amelie1815_comments.created_at DESC";

                                $sub_result = $conn->query($sub_sql);
			            	    if( $sub_result->num_rows > 0 ){
			            	    	while( $sub_row = $sub_result->fetch_assoc() ){
			            	?>
                                        <!-- Show sub-comments-->
                                        <div class="sub_msg_box">
                                            <div class="nickname"><?php echo htmlspecialchars($sub_row['nickname']); ?></div>
                                            <div class="created_at"><?php echo $sub_row['created_at']; ?></div>
                                            <hr>
                                            <div class="content"><?php echo nl2br(htmlspecialchars($sub_row['content'])); ?></div>
                                        </div>
                            <?php 
                                    }
                                }
                            ?>
                            <?php
                                if(isset($_COOKIE["session_id"])) {
                            ?>
                            <!-- Create a new sub-comment -->
                            <div class="sub_type_in">
                                <form action="insert_row.php" method="post">
                                    <textarea class="content" name="content" placeholder="Leave your message here" required></textarea>
                                    <input name="parent_id" type="hidden" value=<?php echo $row['id']; ?> />
                                    <input type="submit" value='reply'/>
                                </form>
                            </div>
                            <?php
                                }
                            ?>
                        </div>
            <?php
                    }
                }
            ?>
        </div>
    </body>
</html>
