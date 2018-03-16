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
            if(isset($_COOKIE["user_id"])) {
        ?>
        <a href="./logout.php" class="nav">Log Out</a>
        <?php
            }
        ?>
        </div></div>
        <div class="container">

        <?php
            if(!isset($_COOKIE["user_id"])) {
        ?>
            <div class="notice">
                Please <a href="./login.php" class="nav">log in</a> to leave a message.<br>
                <a href="./register.php" class="nav">Not a member?</a>
            </div>
        <?php
            } else {
                // 用 cookie 找出 nickname
                $user_id = $_COOKIE['user_id'];
                $user_sql = "SELECT * FROM users WHERE id = $user_id";
                $user_result = $conn->query($user_sql);
                $user_row = $user_result->fetch_assoc();
        ?>
                <div class="notice">Hello, <?php echo $user_row['nickname'] ?>.</div>
                <!-- 留言輸入區 -->
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
				$sql = "SELECT comments.id, comments.content, comments.created_at, users.nickname 
                FROM comments JOIN users 
                WHERE parent_id = 0 AND comments.user_id = users.id 
                ORDER BY comments.created_at DESC";

                $result = $conn->query( $sql );
				if( $result->num_rows > 0 ){
					while( $row = $result->fetch_assoc()){
			?>
                        <!-- 留言顯示區 -->
                        <div class="msg_box">
                            <div class="nickname"><?php echo $row['nickname']; ?></div>
                            <div class="created_at"><?php echo $row['created_at']; ?></div>
                            <hr>
                            <div class="content"><?php echo nl2br($row['content']); ?></div><!-- nl2br() 顯示換行 -->

                            <?php 
                                $sub_sql = "SELECT comments.id, comments.content, comments.created_at, users.nickname 
                                FROM comments JOIN users 
                                WHERE parent_id = '".$row['id']."' AND comments.user_id = users.id 
                                ORDER BY comments.created_at DESC";

                                $sub_result = $conn->query($sub_sql);
			            	    if( $sub_result->num_rows > 0 ){
			            	    	while( $sub_row = $sub_result->fetch_assoc() ){
			            	?>
                                        <!-- 子留言顯示區 -->
                                        <div class="sub_msg_box">
                                            <div class="nickname"><?php echo $sub_row['nickname']; ?></div>
                                            <div class="created_at"><?php echo $sub_row['created_at']; ?></div>
                                            <hr>
                                            <div class="content"><?php echo nl2br($sub_row['content']); ?></div>
                                        </div>
                            <?php 
                                    }
                                }
                            ?>
                            <?php
                                if(isset($_COOKIE["user_id"])) {
                            ?>
                            <!-- 子留言輸入區 -->
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
