### Sim Simma, Who Got The Keys My Schema?

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN default false,
	date TIMESTAMP,
	PRIMARY KEY (id)
);