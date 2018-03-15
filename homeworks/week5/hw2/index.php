<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewpoint" content="width=device-width,initial-scale=1">
        <title>Amelie's Message Board</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
    </head>
    <body>
        <div class="bar"><div class="title">Amelie's Message Board</div></div>
        <div class="container">
            <!-- 留言輸入區 -->
            <div class="type_in">
                <form action="insert_row.php" method="post">
                    <input class="nickname" name="nickname" type="text" placeholder="Your nickname" required />
                    <textarea class="content" name="content" placeholder="Leave your message here" required></textarea>
                    <input name="parent_id" type="hidden" value="0" /><!-- 在此新增的留言為父留言 -->
                    <input type="submit" value='submit'/>
                </form>
            </div>

            <?php
                // 把檔案 conn.php 複製貼上進來（ _once 避免多次引入相同內容）
                require_once('conn.php');

				// 讀取父留言
				$sql = "SELECT id, nickname, time, content FROM comments WHERE parent_id = 0 ORDER BY time DESC";
                $result = $conn->query( $sql );
                // 檢查留言數是否大於零
				if( $result->num_rows > 0 ){
					while( $row = $result->fetch_assoc()){
			?>
                        <!-- 留言顯示區 -->
                        <div class="msg_box">
                            <div class="nickname"><?php echo $row['nickname']; ?></div>
                            <div class="created_at"><?php echo $row['time']; ?></div>
                            <hr>
                            <div class="content"><?php echo nl2br($row['content']); ?></div><!-- nl2br() 顯示換行 -->

                            <?php 
			            	    // 讀取子留言
			            	    $sub_sql = "SELECT id, nickname, time, content FROM comments WHERE parent_id = '" . $row['id'] . "' ORDER BY time DESC";
                                $sub_result = $conn->query($sub_sql);
                                // 檢查留言數是否大於零
			            	    if( $sub_result->num_rows > 0 ){
			            	    	while( $sub_row = $sub_result->fetch_assoc() ){
			            	?>
                                        <!-- 子留言顯示區 -->
                                        <div class="sub_msg_box">
                                            <div class="nickname"><?php echo $sub_row['nickname']; ?></div>
                                            <div class="created_at"><?php echo $sub_row['time']; ?></div>
                                            <hr>
                                            <div class="content"><?php echo nl2br($sub_row['content']); ?></div>
                                        </div>
                            <?php 
                                    }
                                }
                            ?>

                            <!-- 子留言輸入區 -->
                            <div class="sub_type_in">
                                <form action="insert_row.php" method="post">
                                    <input class="nickname" name="nickname" type="text" placeholder="Your nickname" required />
                                    <textarea class="content" name="content" placeholder="Leave your message here" required></textarea>
                                    <input name="parent_id" type="hidden" value=<?php echo $row['id']; ?> />
                                    <input type="submit" value='reply'/>
                                </form>
                            </div>
                        </div>
            <?php
                    }
                }
            ?>
        </div>
    </body>
</html>
