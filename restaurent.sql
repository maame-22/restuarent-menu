-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 01, 2025 at 02:35 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurent`
--

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `id` int(11) NOT NULL,
  `name` varchar(70) NOT NULL,
  `price` int(10) NOT NULL,
  `category` varchar(70) NOT NULL,
  `img` varchar(70) NOT NULL,
  `ingra` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`id`, `name`, `price`, `category`, `img`, `ingra`) VALUES
(1, '', 0, '', '', ''),
(2, 'Shish Kebab', 450, 'Lunch', 'file-1753717262106.jpg\r\n', 'Spaghetti or nice mix vegetable'),
(3, 'Rose', 350, 'Lunch', 'file-1753717305193.jpg', 'Goat meat carrot vegetable rosemary garlic spaghetti or rice'),
(4, 'Spaghetti', 200, 'Lunch', 'file-1753717358155.jpg', 'Spaghetti with nice mix vegetable'),
(5, 'Fasting Ferfer', 200, 'Lunch', 'file-1753717406205.jpg', 'shredded injera mixed with a spiced sauce'),
(6, 'Grilled Chicken', 500, 'Lunch', 'file-1753717452947.jpg', 'Perfectly Grilled Chicken'),
(8, 'Beer/Liver', 200, 'Breakfast', 'file-1753726383416.jfif', 'Garlic pepper onion salt Chile tomato'),
(9, 'Green beans ', 250, 'Breakfast', 'file-1753727446646.jpeg', 'Onion tomato pepper garlic'),
(10, 'Scramble egg', 200, 'Breakfast', 'file-1753727503917.jpeg', 'Onion tomato pepper'),
(11, 'Normal full', 180, 'Breakfast', 'file-1753727548345.jpeg', 'Mage stock black pepper garlicea try tomato'),
(12, 'Special full', 230, 'Breakfast', 'file-1753727594695.jpeg', 'Mage stock onion Chite garlic carry'),
(13, 'Egg sandwich', 300, 'Breakfast', 'file-1753727649332.jfif', 'Eggs brad/maynness'),
(14, 'Omelet', 300, 'Breakfast', 'file-1753727695466.jpg', 'Egg onion tomato'),
(15, 'Porijge', 200, 'Breakfast', 'file-1753727740161.jpeg', 'Oates milk sugar'),
(16, 'suqaar', 250, 'Breakfast', 'file-1753776816526.jpg', 'meat tomato onion potato');

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `facebook` varchar(250) NOT NULL,
  `instagram` varchar(250) NOT NULL,
  `twitter` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`id`, `email`, `phone`, `location`, `facebook`, `instagram`, `twitter`) VALUES
(1, ' Tilmanhotel@gmail.com', '+251969999890', 'dembel,addis ababa', 'https://www.facebook.com/', 'https://www.instagram.com/', 'https://x.com/');

-- --------------------------------------------------------

--
-- Table structure for table `juice`
--

CREATE TABLE `juice` (
  `id` int(11) NOT NULL,
  `img` varchar(50) NOT NULL,
  `name` varchar(70) NOT NULL,
  `price` int(10) NOT NULL,
  `category` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `juice`
--

INSERT INTO `juice` (`id`, `img`, `name`, `price`, `category`) VALUES
(1, 'mango.jfif', 'Mango Juice', 200, 'juice'),
(2, 'avocado.jfif', 'Avocado Juice', 200, 'juice'),
(3, 'orange.jfif', 'Orange Juice', 200, 'juice'),
(4, 'banana.jfif', 'Banana juice', 200, 'juice'),
(5, 'watermelon.jfif', 'Watermelon Juice', 200, 'juice'),
(6, 'chocolatecake.jpg', 'Chocolate Cake', 1200, 'juice'),
(7, 'creamcake.jfif', 'Cream Cake', 100, 'juice'),
(8, 'cupcake.jfif', 'Cup Cake', 80, 'juice'),
(9, 'icecream.jfif', 'Ice Cream', 90, 'juice'),
(19, 'file-1753719466230.webp', 'fanta', 50, 'Beverage'),
(21, 'file-1753719695507.jpg', 'Coke Cola', 50, 'Beverage'),
(22, 'file-1753720066269.webp', 'Ananas', 50, 'Beverage'),
(23, 'file-1753720256784.jpg', 'Sprite', 50, 'Beverage'),
(24, 'file-1753720996789.jpg', 'Macchiato', 70, 'Beverage'),
(25, 'file-1753721060158.jfif', 'Tea Latte', 70, 'Beverage'),
(26, 'file-1753721108867.jpg', 'Coffee Latte', 70, 'Beverage'),
(29, 'file-1753995691642.jpg', 'milkshake', 400, 'Juice');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(70) NOT NULL,
  `password` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'tilman12@gmail.com', 'tilman123@');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `juice`
--
ALTER TABLE `juice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `juice`
--
ALTER TABLE `juice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
