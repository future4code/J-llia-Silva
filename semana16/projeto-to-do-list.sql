CREATE TABLE to_do_list_users (
id VARCHAR (255) PRIMARY KEY,
name VARCHAR (255) NOT NULL, 
nickname VARCHAR (255) NOT NULL UNIQUE, 
email VARCHAR (255) NOT NULL UNIQUE
);
CREATE TABLE to_do_list_tacks(
id VARCHAR (255) PRIMARY KEY,
title VARCHAR (255) NOT NULL, 
description VARCHAR (300) DEFAULT "Sem descrição",
deadline DATE, 
status ENUM("TO DO", "DOING", "DONE") DEFAULT "TO DO", 
author_id VARCHAR (255), 
FOREIGN KEY (author_id) REFERENCES to_do_list_users(id)
);
CREATE TABLE to_do_list_assignes(
task_id VARCHAR (255),
assigne_id VARCHAR (255),
PRIMARY KEY (task_id, assigne_id ),
FOREIGN KEY(task_id) REFERENCES to_do_list_tacks(id),
FOREIGN KEY(assigne_id ) REFERENCES to_do_list_users(id)
);

SELECT tasks.*, users.nickname FROM to_do_list_tacks AS tasks
JOIN to_do_list_users AS users
ON author_id = users.id;

SELECT * FROM to_do_list_users