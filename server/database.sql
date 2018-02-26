-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: itmanagement
-- ------------------------------------------------------
-- Server version	5.7.21-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bestellungen`
--

DROP TABLE IF EXISTS `bestellungen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bestellungen` (
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tischnummer` bigint(20) unsigned NOT NULL,
  `drinks` varchar(256) NOT NULL,
  `transactionid` varchar(256) NOT NULL,
  PRIMARY KEY (`timestamp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bestellungen`
--

LOCK TABLES `bestellungen` WRITE;
/*!40000 ALTER TABLE `bestellungen` DISABLE KEYS */;
INSERT INTO `bestellungen` VALUES ('2018-02-09 23:15:46',1337,'Wodka[1]','0x120e7bf8b5f24e00c04738973f95d2841eadbdb2aae05e5bf796332499cb7d88'),('2018-02-18 00:01:13',1338,'Wodka[2],Tequila[1]','0xc8b1d30c2c9bcbd28bb9de5e2abe838560cd052f05648531f89de639752bc2e1'),('2018-02-18 01:06:46',1,'Zombie: [1]   JimBean: [5]   ','0x075658f61306dd085be71acfa001c038485f313d0bcfeec51c9b079def74f796'),('2018-02-18 01:10:01',1,'Zombie: [1]   Wodka: [2]   Tequila: [3]   JimBean: [4]   ','0x075658f61306dd085be71acfa001c038485f313d0bcfeec51c9b079def74f796'),('2018-02-18 01:20:47',5,'JimBean: [5]   ','0x075658f61306dd085be71acfa001c038485f313d0bcfeec51c9b079def74f796'),('2018-02-18 01:32:47',1,'Zombie: [1]   Wodka: [2]   Tequila: [5]   JimBean: [5]   ','0x075658f61306dd085be71acfa001c038485f313d0bcfeec51c9b079def74f796'),('2018-02-18 19:28:48',1,'Zombie: [1]   Wodka: [1]   Tequila: [1]   JimBean: [1]   ','0x075658f61306dd085be71acfa001c038485f313d0bcfeec51c9b079def74f796'),('2018-02-18 20:05:26',4,'Zombie: [3]   ','0x075658f61306dd085be71acfa001c038485f313d0bcfeec51c9b079def74f796'),('2018-02-18 20:06:33',1,'Zombie: [5]   Wodka: [4]   Tequila: [3]   JimBean: [2]   ','0x075658f61306dd085be71acfa001c038485f313d0bcfeec51c9b079def74f796');
/*!40000 ALTER TABLE `bestellungen` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-26 21:46:32
