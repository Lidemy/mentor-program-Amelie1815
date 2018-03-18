<?php
    require_once('conn.php');
    if (!empty($_POST['username'])) {
        $nickname = $_POST['nickname'];
        $username = $_POST['username'];
        $password = password_hash('"$_POST['.password.']"', PASSWORD_DEFAULT);
        $sql = "INSERT INTO Amelie1815_users (username, password, nickname) VALUES ('$username', '$password', '$nickname')";
        $result = $conn->query($sql);
        if ($result) {
            $last_id = $conn->insert_id;
            // 設定一個 24 小時之後會過期的 cookie
            setcookie("user_id", $last_id, time()+3600*24);
        }
        $conn->close();
        header('Location: index.php');
  };
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Register | Amelie's Message Board</title>
        <link rel="stylesheet" type="text/css" href="style1.css" />
    </head>
    <body>
        <div class="bar"><div class="navbar"><span class="nav_title">Amelie's Message Board</span></div></div>
        <div class="container">
            <div class="type_in">
                <div class="title">Register</div>
                <form method="POST" action="register.php">
                    <div class="item" >Username: <input name='username' type='text' required /></div>
                    <div class="item" >Password: <input name='password' type='password' required /></div>
                    <div class="item" >Nickname: <input name='nickname' type='text' required /></div>
                    <input type='submit' />
                </form>
            </div>
        </div>
    </body>
</html>