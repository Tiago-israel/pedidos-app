CREATE DATABASE  IF NOT EXISTS `pedidos` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `pedidos`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pedidos
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.30-MariaDB

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
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id` varchar(40) NOT NULL,
  `Nome` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `AssinaturaAlteracao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `foto` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES ('08d5bb29-f1a4-e08d-7689-a5501c567ba0','tiago israel rodrigues da silva','tiagoisrael77@hotmail.com','2018-05-16 12:38:36','melhores-hot-dogs-de-nova-york-1014x598.jpg'),('08d5bb2c-84c4-a637-8fac-e559319b53b2','julia','ajkfeitas@gmail.com','2018-05-16 12:57:02','703683069_preview_steamworkshop_webupload_previewfile_311216028_preview.jpg'),('08d5bb2c-b95b-6be7-14e5-e33ed0117a14','Maria Silva','ana@gmail.com','2018-05-16 12:58:30','cozinha-simples-massa-de-pizza-facil.jpg');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedido` (
  `Id` varchar(255) NOT NULL,
  `Data` date DEFAULT NULL,
  `IdCliente` varchar(255) DEFAULT NULL,
  `AssinaturaAlteracao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Numero` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`),
  KEY `fk_cliente_id_idx` (`IdCliente`),
  CONSTRAINT `fk_cliente_id` FOREIGN KEY (`IdCliente`) REFERENCES `cliente` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidoitem`
--

DROP TABLE IF EXISTS `pedidoitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidoitem` (
  `Id` varchar(255) NOT NULL,
  `Quantidade` decimal(10,2) DEFAULT NULL,
  `ValorTotal` decimal(10,2) DEFAULT NULL,
  `IdProduto` varchar(255) DEFAULT NULL,
  `IdPedido` varchar(255) DEFAULT NULL,
  `AssinaturaAlteracao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`),
  KEY `fk_produto_id_idx` (`IdProduto`),
  KEY `fk_pedido_id_idx` (`IdPedido`),
  CONSTRAINT `fk_pedido_id` FOREIGN KEY (`IdPedido`) REFERENCES `pedido` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_produto_id` FOREIGN KEY (`IdProduto`) REFERENCES `produto` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidoitem`
--

LOCK TABLES `pedidoitem` WRITE;
/*!40000 ALTER TABLE `pedidoitem` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidoitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produto` (
  `Id` varchar(255) NOT NULL,
  `Codigo` int(11) DEFAULT NULL,
  `Descricao` longtext,
  `Preco` decimal(10,2) DEFAULT NULL,
  `AssinaturaAlteracao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES ('8e0dae8c-0dd6-4dec-a47e-8a09c4b5affb',1,'Nike',10.00,'2018-04-21 18:35:25'),('b4c8765f-cce8-4a93-a20d-ea2604dfd01e',444,'teste',77.00,'2018-04-21 18:49:00');
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-16 11:01:53
