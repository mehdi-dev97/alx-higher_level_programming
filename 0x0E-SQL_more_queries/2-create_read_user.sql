-- Create user_0d_2 and database hbtn_0d_2 and set only Select privilege on this user
CREATE USER IF NOT EXISTS `user_0d_2`@`localhost` IDENTIFIED BY 'user_0d_2_pwd';
CREATE DATABASE IF NOT EXISTS `hbtn_0d_2` CHARSET='utf8';
GRANT SELECT on `hbtn_0d_2`.* TO `user_0d_2`@`localhost` WITH GRANT OPTION;
