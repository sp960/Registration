-- CREATE TABLE userinfo(
--             userName VARCHAR(255),
--             userPassword VARCHAR(255),
--             MobileNo INT,
--             firstName VARCHAR(255),
--             lastName VARCHAR(255),
--             confirmPassword VARCHAR(255)
--             );

ALTER TABLE userinfo
ADD userId INT NOT NULL AUTO_INCREMENT,
ADD PRIMARY KEY(userId);
