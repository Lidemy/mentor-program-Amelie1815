<?php
    require_once('conn.php');
    $error_message = '';
    if (!empty($_POST['username'])) {
        $username = $_POST['username'];
        $sql = "SELECT * FROM Amelie1815_users where username='$username'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) { // 有這帳號
            $row = $result->fetch_assoc();
            if (password_verify('"$_POST['.password.']"', $row['password'])) { // 帳號密碼正確
                setcookie("user_id", $row['id'], time()+3600*24);
                header('Location: index.php');
            }
            else { // 密碼錯誤
                $error_message = 'Incorrect password. Please log in again.';
            };
        } else { // 帳號錯誤
            $error_message = 'Incorrect username. Please log in again.';
        };
        $conn->close();
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Log In | Amelie's Message Board</title>
        <link rel="stylesheet" type="text/css" href="style1.css" />
    </head>
    <body>
        <div class="bar"><div class="navbar"><span class="nav_title">Amelie's Message Board</span></div></div>
        <div class="container">
            <div class="type_in">
                <div class="title">Log In</div>
                <?php
                    if ($error_message !== '') {
                        echo $error_message;
                    }
                ?>
                <form method="POST" action="login.php">
                    <div class="item" >Username: <input name='username' type='text' required /></div>
                    <div class="item" >Password: <input name='password' type='password' required /></div>
                    <input type='submit' />
                </form>
            </div>
        </div>
    </body>
</html>