CREATE USER 'weebook'@'localhost' IDENTIFIED BY 'weebook123';

GRANT ALL PRIVILEGES ON weebook.* TO 'weebook'@'localhost';

select user, host from mysql.user;

FLUSH PRIVILEGES;

ALTER USER
    'weebook' @'localhost' IDENTIFIED
WITH
    mysql_native_password BY 'weebook123';

show tables;