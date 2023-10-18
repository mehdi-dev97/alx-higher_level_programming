-- Create id_not_null on hbtn_0d_2 if not exists
CREATE TABLE IF NOT EXISTS id_not_null (
    `id` INT(11) DEFAULT 1,
    `name` VARCHAR(256)
);