show databases;
create database jayant_db;
use jayant_db;

CREATE TABLE user (user_id int primary key auto_increment, user_name varchar(255), user_email varchar(50) unique, 
password varchar(50), gender varchar(10));

drop table user;
drop table store;
alter table user add primary key (user_id);

CREATE TABLE store (store_id int PRIMARY KEY AUTO_INCREMENT, store_name varchar(255), store_desc varchar(255), 
user_id int, FOREIGN KEY (user_id) REFERENCES user(user_id));

CREATE TABLE category (category_id INT PRIMARY KEY AUTO_INCREMENT, category_name varchar(255));

CREATE TABLE product (
	product_id INT PRIMARY KEY AUTO_INCREMENT, product_name varchar(255), product_desc varchar(255),
	store_id int, user_id int, quantity int DEFAULT 1, price int, image varchar(255), category_id int, 
    FOREIGN KEY (store_id) REFERENCES store(store_id), 
    FOREIGN KEY (user_id) REFERENCES user(user_id), 
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

ALTER TABLE user DROP COLUMN gender;
desc user;
desc store;
show tables;


INSERT INTO user (user_name, user_email, password, gender) VALUES ("user 1", "user1@gmail.com", "user1", "male");
INSERT INTO user (user_name, user_email, password, gender) VALUES ("user 2", "user2@gmail.com", "user2", "female");
SELECT * FROM user;

INSERT INTO category (category_name) VALUES ("Mobile"), ("Laptop");
SELECT * FROM category;

INSERT INTO store (store_name, store_desc, user_id) VALUES 
("STORE 1", "this is store 1", 2), ("store 1", "this is store 2", 1), ("store 2", "welcome to store 2", 1);
SELECT * FROM store;