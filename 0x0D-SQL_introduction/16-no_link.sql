-- all record when name is not empty
SELECT `score`, `name` 
FROM `second_table` 
WHERE `name` != "" 
ORDER BY `score` DESC;