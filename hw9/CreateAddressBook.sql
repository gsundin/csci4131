# This code was used in MySQL Workbench to create the table

CREATE TABLE `addressbook` 
(
  `ID` int(11) NOT NULL AUTO_INCREMENT,

  `First Name` varchar(32) NOT NULL,

  `Last Name` varchar(32) NOT NULL,

  `Address Line 1` varchar(128) NOT NULL,

  `Address Line 2` varchar(128) DEFAULT NULL,

  `City` varchar(32) NOT NULL,

  `State` varchar(32) NOT NULL,

  `Zip Code` varchar(10) NOT NULL,

  PRIMARY KEY (`ID`)
)