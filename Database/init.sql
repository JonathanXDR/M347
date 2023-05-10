Drop database if exists ToDo;
CREATE DATABASE IF NOT EXISTS `ToDo`;
use ToDo;
CREATE TABLE IF NOT EXISTS `ToDo`.`Categories` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `ToDo`.`Tasks` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NOT NULL,
    `description` VARCHAR(45) NOT NULL,
    `done` BIT NOT NULL,
    `category_id` INT NOT NULL REFERENCES `ToDo`.`Categories`(id),
    PRIMARY KEY (`id`)
);
INSERT INTO `ToDo`.`Categories` (`id`, `title`)
VALUES (1, 'Category 1'),
    (2, 'Category 2'),
    (3, 'Category 3'),
    (4, 'Category 4'),
    (5, 'Category 5');
INSERT INTO `ToDo`.`Tasks` (`title`, `description`, `done`, `category_id`)
VALUES ('Task 1', 'Description 1', 0, 1),
    ('Task 2', 'Description 2', 0, 2),
    ('Task 3', 'Description 3', 0, 3),
    ('Task 4', 'Description 4', 0, 4),
    ('Task 5', 'Description 5', 0, 5);