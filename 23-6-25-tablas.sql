CREATE DATABASE  IF NOT EXISTS "proyecto-molones" /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `proyecto-molones`;
-- MySQL dump 10.13  Distrib 8.0.42, for macos15 (arm64)
--
-- Host: adulaba-yoli-adalab-yoli.g.aivencloud.com    Database: proyecto-molones
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '5d6cdbc5-4b67-11f0-82ae-862ccfb01228:1-42';

--
-- Table structure for table `data_author`
--

DROP TABLE IF EXISTS `data_author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data_author` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(45) NOT NULL,
  `job` varchar(45) NOT NULL,
  `image` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_author`
--

LOCK TABLES `data_author` WRITE;
/*!40000 ALTER TABLE `data_author` DISABLE KEYS */;
/*!40000 ALTER TABLE `data_author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_project`
--

DROP TABLE IF EXISTS `data_project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data_project` (
  `id_data_project` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `slogan` varchar(100) DEFAULT NULL,
  `tecnologies` varchar(100) NOT NULL,
  `repo` varchar(1000) NOT NULL,
  `demo` varchar(100) NOT NULL,
  `desc` varchar(1000) NOT NULL,
  `photo` binary(200) DEFAULT NULL,
  PRIMARY KEY (`id_data_project`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `demo_UNIQUE` (`demo`),
  UNIQUE KEY `slogan_UNIQUE` (`slogan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_project`
--

LOCK TABLES `data_project` WRITE;
/*!40000 ALTER TABLE `data_project` DISABLE KEYS */;
/*!40000 ALTER TABLE `data_project` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-23 13:28:48
