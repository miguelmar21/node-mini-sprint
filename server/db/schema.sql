DROP DATABASE quoteApp;

CREATE DATABASE quoteApp;

USE quoteApp;

CREATE TABLE quotes (
  ID INT NOT NULL AUTO_INCREMENT,
  Quote VARCHAR(255),
  PRIMARY KEY (ID)
);

INSERT INTO quotes (Quote)
VALUES
  ('Never stop never stopping'),
  ('So it goes..'),
  ('The sun never sets on your dreams'),
  ('Are you going to eat that?'),
  ('I will become a coding GOD.');