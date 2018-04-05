### Amelie1815_users

Name | Type | Describe
--- | --- | ---
id | int(11) | AUTO_INCREMENT, primary
username | varchar(16) | Unique, utf8_unicode_ci
password | varchar(255) | From `password_hash($password, PASSWORD_DEFAULT)`, utf8_unicode_ci
nickname | varchar(64) | Nickname, utf8_unicode_ci

### Amelie1815_comments

Name | Type | Describe
--- | --- | ---
id | int(11) | AUTO_INCREMENT, primary
user_id | int(11) | Corresponding user ID
content | text | From `addslashes($_POST['content'])`, utf8_unicode_ci
created_at | datetime | CURRENT_TIMESTAMP
parent_id | int(11) | Its parent ID

### Amelie1815_users_certificate

Name | Type | Describe
--- | --- | ---
id | varchar(32) | From `uniqid()`, primary, utf8_unicode_ci
user_id | int(11) | Corresponding user ID
