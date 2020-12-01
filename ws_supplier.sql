-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2020 at 03:24 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ws_supplier`
--

-- --------------------------------------------------------

--
-- Table structure for table `bahan_supplier`
--

CREATE TABLE `bahan_supplier` (
  `id_bahan` int(11) NOT NULL,
  `nama_bahan` varchar(256) NOT NULL,
  `harga_per_satuan` int(8) NOT NULL,
  `satuan` varchar(256) NOT NULL,
  `nama_supplier` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bahan_supplier`
--

INSERT INTO `bahan_supplier` (`id_bahan`, `nama_bahan`, `harga_per_satuan`, `satuan`, `nama_supplier`) VALUES
(1, 'susu', 10000, 'liter', 'ultra milk'),
(2, 'almond', 50000, 'kilogram', 'chunky'),
(3, 'caramel', 40000, 'kilogram', 'caramelomelomelo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bahan_supplier`
--
ALTER TABLE `bahan_supplier`
  ADD PRIMARY KEY (`id_bahan`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bahan_supplier`
--
ALTER TABLE `bahan_supplier`
  MODIFY `id_bahan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
