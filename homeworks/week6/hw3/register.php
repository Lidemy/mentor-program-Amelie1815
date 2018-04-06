<?php
    require_once('conn.php');
    $error_message = '';

    if (!empty($_POST['username'])) {
        // Check if username has been taken
        $username = $_POST['username'];
        $check_stmt = $conn->prepare("SELECT * FROM Amelie1815_users where username=?");
        $check_stmt->bind_param("s", $username);
        $check_stmt->execute();
        $result = $check_stmt->get_result();

        if ($result->num_rows > 0) {
            $error_message = 'This username is already taken. please choose another one.';
        } else {
            // Insert new user into database
            $nickname = $_POST['nickname'];
            $password = $_POST['password'];
            $password_hash = password_hash($password, PASSWORD_DEFAULT);

            $stmt = $conn->prepare("INSERT INTO Amelie1815_users (username, password, nickname) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $username, $password_hash, $nickname);
            $stmt->execute();
    
            // Create session ID
            $session_id = uniqid();
            // Insert session ID into database
            $stmt = $conn->prepare("INSERT INTO Amelie1815_users_certificate (id, user_id) VALUES (?, ?)");
            $stmt->bind_param("ss", $session_id, $row['id']);
            $stmt->execute();
            // Set cookie
            setcookie("session_id", $session_id, time()+3600*24);    
            header('Location: index.php');        
        };
    
        $conn->close();

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
                <?php
                    if ($error_message !== '') {
                        echo $error_message;
                    }
                ?>
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