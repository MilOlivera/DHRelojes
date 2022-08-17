-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: dhrelojes
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `idCategory` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Tinker'),(2,'Jaquet Droze'),(3,'Center Pompidou'),(4,'Colors of Nature');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order` (
  `idOrder` int(11) NOT NULL AUTO_INCREMENT,
  `idUserFK` int(11) NOT NULL,
  `compraRealizada` tinyint(4) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `update_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`idOrder`),
  KEY `idUserFK_idx` (`idUserFK`),
  CONSTRAINT `idUserFK` FOREIGN KEY (`idUserFK`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `idProduct` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `price` decimal(9,2) NOT NULL,
  `idCategoryFK` int(11) NOT NULL,
  `idProduct_imageFK` int(11) NOT NULL,
  `idOrderFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`idProduct`),
  KEY `idCategoryFK_idx` (`idCategoryFK`),
  KEY `idProduct_imageFK_idx` (`idProduct_imageFK`),
  KEY `idOrderFK_idx` (`idOrderFK`),
  CONSTRAINT `idOrderFK` FOREIGN KEY (`idOrderFK`) REFERENCES `order` (`idOrder`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`idCategoryFK`) REFERENCES `category` (`idCategory`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Midnight','Nuestra clásica forma DH, en un elegante diseño totalmente negro, con detalles sutiles de manecillas blancas luminiscentes e índices de acero en relieve. La Midnight Limited Edition se creó como una edición muy limitada de solo 100 relojes.',300.00,1,1,NULL),(2,'Black strap','Este es tu nuevo reloj favorito. Cuenta con una caja de acero inoxidable 316L pulido a mano de 38 mm, un acero de grado extra bajo en carbono que se usa a menudo en aplicaciones marinas debido a su alta resistencia a la corrosión. Una ventana de cristal de zafiro, conocida por su notable dureza (casi tan dura como el diamante) y resistencia a los arañazos, protege la esfera mínima y el movimiento Swiss Ronda. Las correas, flexibles pero resistentes, están hechas 100 % con cuero italiano de alta calidad teñido al vegetal.',150.00,1,2,NULL),(3,'Green strap','Este es tu nuevo reloj favorito. Cuenta con una caja de acero inoxidable 316L pulido a mano de 38 mm, un acero de grado extra bajo en carbono que se usa a menudo en aplicaciones marinas debido a su alta resistencia a la corrosión. Una ventana de cristal de zafiro, conocida por su notable dureza (casi tan dura como el diamante) y resistencia a los arañazos, protege la esfera mínima y el movimiento Swiss Ronda. Las correas, flexibles pero resistentes, están hechas 100 % con cuero italiano de alta calidad teñido al vegetal.',150.00,1,3,NULL),(4,'Camel strap','Este es tu nuevo reloj favorito. Cuenta con una caja de acero inoxidable 316L pulido a mano de 38 mm, un acero de grado extra bajo en carbono que se usa a menudo en aplicaciones marinas debido a su alta resistencia a la corrosión. Una ventana de cristal de zafiro, conocida por su notable dureza (casi tan dura como el diamante) y resistencia a los arañazos, protege la esfera mínima y el movimiento Swiss Ronda. Las correas, flexibles pero resistentes, están hechas 100 % con cuero italiano de alta calidad teñido al vegetal.',150.00,1,4,NULL),(5,'Butterfly','Esfera en madera petrificada Chinchilla Red y ónice negro con apliques en oro rojo 18 quilates grabados a mano. Caja en oro rojo 18 quilates. Mecanismo autómata de cuerda manual con sistema de activación mediante pulsador que acciona las alas de la mariposa y la rueda de la carroza. Movimiento mecánico de horas y minutos de cuerda automática. Reserva de marcha de 68 horas.',35000.00,2,5,NULL),(6,'Birds','Esfera de nácar blanco y ónice negro con apliques en oro rojo 18 quilates grabados y pintados a mano. Caja en oro rojo 18 quilates. Mecanismo autómata con animación de pájaros, eclosión y río. Movimiento mecánico de repetición de minutos de cuerda manual. Reserva de marcha de 48 horas.',50000.00,2,6,NULL),(7,'Magic Lotus','Esfera nácar blanco grabada y pintada a mano, centro de ónice negro. Caja y aureola en oro rojo 18 quilates. Decoración aplicada en oro rojo y amarillo 18 quilates grabada y pintada a mano. Movimiento autómata mecánico de cuerda manual con sistema de activación mediante pulsador. Mecanismo autómata con animación del estanque, la carpa y la flor de loto. Movimiento mecánico de horas y minutos de cuerda automática. Reserva de marcha de 68 horas. Diámetro 43 mm.',45000.00,2,7,NULL),(8,'Tropical bird','Esfera nácar blanco grabado y pintado a mano, centro de nácar blanco. Caja y aureola en oro rojo 18 quilates. Decoración aplicada en oro rojo 18 quilates grabada y pintada a mano. Movimiento mecánico de repetición de minutos de cuerda manual. Animación autómata del pavo real, las hojas tropicales, el colibrí, el tucán, las libélulas y la cascada. Reserva de marcha de 50 horas. Diámetro 47 mm',60000.00,2,8,NULL),(9,'Fridassss','holssssssssssssssssssssssssssssssssssssssssssssss',1523333.00,4,9,NULL),(10,'Debie','Este Gent artístico rinde homenaje al cuadro Ritratto di Dédie de Amedeo Modigliani. Este modelo, utiliza el mismo retrato como protagonista dentro de su esfera plateada. Además, este reloj de la colección Centre Pompidou incorpora una primicia: en la correa de arriba podrás ver la firma de Modigliani. El toque rosa de su caja y su hebilla de plástico brillante suaviza los tonos oscuros de su correa de silicona semitransparente.',1700.00,3,10,NULL),(11,'Black & White','Este reloj New Gent artístico conmemora el cuadro más famoso de Piet Mondrian, Composition en Rouge, Bleu et Blanc II. Lo hace con una correa de silicona negra mate y un estampado de colores en el estilo característico del artista. La esfera negra sirve de telón de fondo para unas agujas blanca y roja que completan el look de este reloj.',1000.00,3,11,NULL),(12,'Blue sky','Este modelo New Gent artístico rinde homenaje a la obra Bleu de Ciel de Vassily Kandinsky. Su correa de silicona semitransparente azul claro presenta un estampado de colores basado en el cuadro del conocido pintor. El color azul sigue extendiéndose por toda la caja de plástico mate semitransparente y también por la trabilla y la hebilla de silicona. ¡Los amantes del arte sabrán apreciarlo!',1500.00,3,12,NULL),(13,'Carousel','Este reloj Gent artístico rinde homenaje a Robert Delaunay, el gran icono del color. Su diseño multicolor inspirado en su obra Manège de cochons recubre toda la correa de silicona azul mate semitransparente, pero también su esfera, igualmente transparente. La ruedita de la esfera que muestra la fecha va cambiando de color y aporta un toque de personalidad a este reloj tan museístico. Si miramos de cerca este reloj de la colección Centre Pompidou, podemos apreciar fragmentos de los vestidos de las bailarinas de la obra original.',1600.00,3,13,NULL),(14,'Eiffel Tower','Este reloj Gent artístico homenajea el clásico cuadro de Robert Delaunay, La Tour Eiffel. Con él, el autor hace honor al ángulo «desde abajo» que se muestra en el cuadro original. El colorido de este reloj de la colección Centre Pompidou se vuelca sobre una correa de silicona semitransparente de color azul claro mate, una caja de plástico azul claro mate y una esfera de color plateado. Todo este reloj refleja a la perfección los dinámicos colores del cuadro original.',1250.00,3,14,NULL),(15,'Clear','Translúcido y clásico, este reloj tiene una caja transparente fabricada con plástico de origen biológico y una correa de TPU igualmente transparente. La esencia del tiempo es cristalina: Alrededor de la esfera, brilla un anillo plateado con índices negros y manecillas rojas, azules y amarillas.',700.00,3,15,NULL),(16,'Basalt','Este modelo de tamaño oversize cuenta con una robusta correa de silicona negra mate con estampados en distintos tonos de gris. Su caja y bisel, fabricados en BIOCERAMIC, también vienen en el mismo color negro mate. Su maciza esfera negra acentúa el acabado blanco y superluminoso de sus agujas negras. El segundero inspirado en la aguja de una brújula intensifica la experiencia.',1300.00,4,16,NULL),(17,'Artic','Artic',1500.00,4,17,NULL),(18,'Forest','Este modelo de tamaño oversize cuenta con una robusta correa de silicona verde mate con estampados en distintos tonos de verde. Su caja y bisel, fabricados en BIOCERAMIC, también vienen en el mismo color verde mate. Su maciza esfera verde acentúa el acabado blanco y superluminoso de sus agujas negras. El segundero inspirado en la aguja de una brújula intensifica la experiencia.',1700.00,4,18,NULL),(19,'Desert','Este modelo de tamaño oversize cuenta con una robusta correa de silicona beige mate con estampados en distintos tonos de beige. Su caja y bisel, fabricados en BIOCERAMIC, también vienen en el mismo color beige mate. Su maciza esfera marrón acentúa el acabado blanco y superluminoso de sus agujas negras. El segundero inspirado en la aguja de una brújula intensifica la experiencia.',1350.00,4,19,NULL),(20,'Canyon','Este modelo de tamaño oversize cuenta con una robusta correa de silicona color tierra mate con estampados en distintos tonos de color tierra. Su caja y bisel, fabricados en BIOCERAMIC, también vienen en el mismo color tierra mate. Su maciza esfera de color tierra acentúa el acabado blanco y superluminoso de sus agujas negras. El segundero inspirado en la aguja de una brújula intensifica la experiencia.',1550.00,4,20,NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_image`
--

DROP TABLE IF EXISTS `product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_image` (
  `idProduct_image` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`idProduct_image`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_image`
--

LOCK TABLES `product_image` WRITE;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` VALUES (1,'all-black.png'),(2,'new-black.png'),(3,'green-watch.png'),(4,'camel-strap.png'),(5,'butterfly.png'),(6,'bird.png'),(7,'magic-lotus.png'),(8,'tropical-bird.png'),(9,'frida.png'),(10,'debie.png'),(11,'black-white.png'),(12,'blue-sky.png'),(13,'carousel.png'),(14,'eiffel-tower.png'),(15,'clear.png'),(16,'basalt.png'),(17,'artic.png'),(18,'forest.png'),(19,'desert.png'),(20,'canyon.png');
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `idRole` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`idRole`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'cliente');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `size` (
  `idSize` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`idSize`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
INSERT INTO `size` VALUES (1,'Small'),(2,'Medium'),(3,'Large');
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `dni` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `idRoleFK` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'carl','tompson','carl@tomson.com',123,'123','$2a$10$LmPRWta33DlYW.FgmOsyV.DJ1q2djvtSUTMzG/4A987xIzcEJeKAS',2,NULL),(2,'121','11','11@11.com',2,'423','$2a$10$x9KFMN36HbwAMD2ryVI/2OhkLX1h8obODfxynxzR85rpcHlMAEzVm',2,NULL),(3,'Guido','Biagioni','g@g.com',36158697,'Siempre Viva 123','$2a$10$mQ4vX7l3r7zXt45uo.Hyh.6DPUV.GVT9kHfsLnKMGV2TAspINnq1C',2,'image-1654886394992.png'),(4,'Carlos','Sucio','x@x.com',99999999,'Algo 123','$2a$10$legK.ECd24RA8DLcZQZQWOIrzOMYpHILv1VUQKPeHmr4AjhG/IO8G',2,'image-1657990472125.png'),(5,'Marcelo','Tip','marce@tip.com',123123,'123','$2a$10$YGOa0Mi4xT3KBzLgZC7D3uHAeRZam2c9zwT9RN0xCQ7e2ufWV9jxa',2,'image-1658271294621.jpg'),(6,'Juan Carlos','Elde Siempre','a@a.com',111,'123','$2a$10$WZYx2sgu/HP2W6wCHf9Oy.m72EFLk9GSafm1bLf2uXqxn4jOCS.r.',1,'image-1658272055833.jpg'),(7,'sad','das','21@wqeqw.com',111,'222','$2a$10$BnFlYRrGqQ8HEc0wUTbBuu4i4Bdy0kGxoNje09xBIHFcjHtofBcva',2,'default-image.jfif'),(8,'asdasdsadas','dsadasdasd','a222222@a.com',2147483647,'rtetreterte','$2a$10$VOV2Ez5e6qzbkPCmMTjqKe7YXknpHyfcCk5onvIh9jzYCS16KWujG',2,'image-1658790352700.zip'),(9,'aaaaaaaaaa','aaaaaaaaaaa','b@b.com',234234234,'123123','$2a$10$B8K.nyYJ8AZ.0JsHuuqr9eKT1UOlxc40oFCkPP/mGq/vNezJjtnWG',2,'image-1658790411195.url'),(10,'aasdasdasd','asdasdasda','c@c.com',112312,'12312312','$2a$10$UwE9WrcEghaJmaxuWBsn5u1rPHGC7w4WWQ9d5X3jv1p7SvVlQQHFK',2,'image-1658790507458.exe'),(11,'dsadasdasd','asdasdsa','ddddddddd@a.com',2147483647,'444444444444444','$2a$10$PZhRDIsbwgIInQIXp.FqqufqQNlxFusDcCcoxwvovgzrpk2xCWMV2',2,'image-1658792336354.png'),(12,'asdasdsa','dasdasd','a444444444@a.com',2147483647,'eeeeeeeee','$2a$10$UAJUVFwiNX1KTXLR7IKksukBgAFN90/hXyJsJwX/Bvxm4DJlXeEUC',2,'image-1658792348301.jpg'),(13,'aaaaaaaaa','aaaaaaaaaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaaaaaaa@a.com',2147483647,'3333333333333333','$2a$10$DI8lzUMMPNuN9LyPe3abc.hjmnDzl58xBkDAmnZG/8Wn.0AH/p4q6',2,'image-1658792410817.png');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-16 23:50:10
