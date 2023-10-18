-- Create unique_id on hbtn_0d_2 if not exists
CREATE TABLE IF NOT EXISTS unique_id (
    `id` INT(11) DEFAULT 1,
    `name` VARCHAR(256),
    CONSTRAINT UNIQUE_ID UNIQUE(id)
);