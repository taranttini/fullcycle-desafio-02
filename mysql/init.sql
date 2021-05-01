-- liberando acesso para todos host
-- USE `mysql`
-- UPDATE `user` SET `Host` = '%' WHERE `user` = 'root';
-- FLUSH PRIVILEGES;
-- criando base
CREATE DATABASE `nodedb`;

USE `nodedb`;

CREATE TABLE `nodedb`.`people` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

-- INSERT INTO `people` (`name`) VALUES
--     ('Shmi Skywalker'),
--     ('Anakin Skywalker'),
--     ('Darth Vader'),
--     ('Luke Skywalker'),
--     ('Leia Organa'),
--     ('Han Solo'),
--     ('Ben Solo'),
--     ('Kylo Ren');