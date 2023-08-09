`

<!-- USER -->
CREATE TABLE user (
    user_id int primary key auto_increment, user_name varchar(255),
    user_email varchar(50) unique, password varchar(50)
);

<!-- STORE -->
CREATE TABLE store (
    store_id int PRIMARY KEY AUTO_INCREMENT, store_name varchar(255), store_desc varchar(255), 
    user_id int, FOREIGN KEY (user_id) REFERENCES user(user_id)
);

<!-- CART -->

<!-- REVIEW -->

<!-- PRODUCT -->
CREATE TABLE product (
	product_id INT PRIMARY KEY AUTO_INCREMENT, product_name varchar(255), product_desc varchar(255),
	store_id int, user_id int, quantity int DEFAULT 1, price int, image varchar(255), category_id int, 
    FOREIGN KEY (store_id) REFERENCES store(store_id), 
    FOREIGN KEY (user_id) REFERENCES user(user_id), 
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

<!-- CATEGORY -->
CREATE TABLE category (category_id INT PRIMARY KEY AUTO_INCREMENT, category_name varchar(255));

<!-- ORDERS -->

<!-- PURCHASES -->

`