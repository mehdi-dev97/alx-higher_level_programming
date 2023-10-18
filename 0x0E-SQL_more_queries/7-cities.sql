-- Create db hbtn_0d_usa and in this db create table cities if twice is not exists
CREATE DATABASE IF NOT EXISTS `hbtn_0d_usa`;
USE `hbtn_0d_usa`;
CREATE TABLE IF NOT EXISTS `cities`(
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(256) NOT NULL,
    `state_id` INT(11) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT UNIQUE_ID UNIQUE(id),
    CONSTRAINT states_fk FOREIGN KEY(`state_id`) REFERENCES `states`(id)
);