-- Create db hbtn_0d_usa and in this db create table states if twice is not exists
CREATE DATABASE IF NOT EXISTS `hbtn_0d_usa`;
USE `hbtn_0d_usa`;
CREATE TABLE IF NOT EXISTS `states`(
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(256) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT UNIQUE_ID UNIQUE(id)
);