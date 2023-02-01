DROP TABLE IF EXISTS administrator;

CREATE TABLE administrator (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  email varchar(200) NOT NULL,
  hashedPassword varchar(100) NOT NULL,
  passwordToken varchar(100) 
);

INSERT INTO administrator (firstname, lastname, email, hashedPassword) VALUES ('Madeline', 'Thomas', 'maddie.thms@gmail.com', "$argon2id$v=19$m=65536,t=5,p=1$cHKCeWcTAbFAoQip2FBoSQ$YEwzjtbjy/r88czZmo+Ess3AGPYvhonN2HTureWf3NY");

DROP TABLE IF EXISTS climber;

CREATE TABLE climber (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  age INT,
  genre varchar(45) NOT NULL,
  country varchar(100),
  picture varchar(255),
  avatar varchar(255),
  date_creation DATETIME NOT NULL DEFAULT NOW() 
);

INSERT INTO climber (firstname, lastname, age, genre, country, picture, avatar, date_creation) VALUES ('Adam', 'Ondra', '29', "Man", "Cesky Horolezecky Svaz", 'adam_ondra.jpg','avatar_adam_ondra.jpg', '2022-10-13 12:12:23'),('Akiyo', 'Noguchi', "32", "Woman", "Japan", 'adam_ondra.jpg','avatar_adam_ondra.jpg', '2022-10-13 12:12:23');


DROP TABLE IF EXISTS practice;

CREATE TABLE practice (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  practice_name varchar(100) NOT NULL
);

INSERT INTO practice (practice_name) VALUES ('Bloc'),('Voie'),('Indoor'),('Outdoor');

DROP TABLE IF EXISTS climber_practice;

CREATE TABLE climber_practice (
  climber_id int,
  practice_id int,
  FOREIGN KEY (climber_id) REFERENCES climber(id),
  FOREIGN KEY (practice_id) REFERENCES practice_id(id)
);