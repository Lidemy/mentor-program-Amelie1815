<?php
    require_once('conn.php');
    $error_message = '';

    if (!empty($_POST['username'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Prepare and bind
        $stmt = $conn->prepare("SELECT * FROM Amelie1815_users where username=?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) { // Username exist
            $row = $result->fetch_assoc();

            if (password_verify($password, $row['password'])) { // Log in successful
                // Create session ID
                $session_id = uniqid();
                // Insert session ID into database
                $stmt = $conn->prepare("INSERT INTO Amelie1815_users_certificate (id, user_id) VALUES (?, ?)");
                $stmt->bind_param("ss", $session_id, $row['id']);
                $stmt->execute();
                // Set cookie
                setcookie("session_id", $session_id, time()+3600*24);
                header('Location: index.php');
            }
            else { // Wrong password
                $error_message = 'Incorrect password. Please log in again.';
            };
        } else { // Wrong username
            $error_message = 'Incorrect username. Please log in again.';
        };

        $stmt->close();
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