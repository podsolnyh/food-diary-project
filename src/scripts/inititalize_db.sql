USE food;

CREATE TABLE user
(
	id           INT          NOT NULL        AUTO_INCREMENT,
    username     VARCHAR(100) NOT NULL,
    email        VARCHAR(255) NOT NULL,
    password     TINYBLOB     NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE profile
(
	id           INT          NOT NULL        AUTO_INCREMENT,
    user_id      INT          NOT NULL,
    first_name   VARCHAR      NOT NULL,
    age          INT          NOT NULL,
    gender       VARCHAR      NOT NULL,
    lifestyle    VARCHAR      NOT NULL,
    weight       FLOAT        NOT NULL,
    height       FLOAT        NOT NULL,
    desired_height FLOAT      NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);


CREATE TABLE roles
(
	id        INT          NOT NULL AUTO_INCREMENT,
    name      VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE users_roles
(
	id      INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE dish
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR NOT NULL,
    is_request BOOLEAN NOT NULL,
    requested_by INT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (requested_by) REFERENCES user(id)
);

CREATE TABLE ingredient
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR NOT NULL,
    calories FLOAT NOT NULL,
    proteins FLOAT NOT NULL,
    fats FLOAT NOT NULL,
    carbohydrates FLOAT NOT NULL,
    PRIMARY KEY (id),
);

CREATE TABLE recipe
(
    id INT NOT NULL AUTO_INCREMENT,
    dish_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    FOREIGN KEY (dish_id) REFERENCES dish(id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredient(id),
    PRIMARY KEY (id),
);

CREATE TABLE journal_record
(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    dish_id INT NOT NULL,
    weight FLOAT NOT NULL,
    date TIMESTAMP NOT NULL,
    meal_type VARCHAR NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (dish_id) REFERENCES dish(id),
    PRIMARY KEY (id)
);