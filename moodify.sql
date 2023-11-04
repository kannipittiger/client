-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 03, 2023 at 08:43 PM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moodify`
--

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE `songs` (
  `songID` int(255) NOT NULL,
  `title` varchar(200) NOT NULL,
  `artist` varchar(200) DEFAULT NULL,
  `song` varchar(500) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `background` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=tis620;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`songID`, `title`, `artist`, `song`, `image`, `background`) VALUES
(1, 'Lavalamp', 'CUCO', 'https://audio.jukehost.co.uk/buM5vIGR3O63vrHHqSmcXaieadVRI3as', 'https://i.ibb.co/nCgB5FF/sddefault.jpg', 'https://i.ibb.co/JnSffjh/maxresdefault.jpg'),
(2, 'Cool', 'Daniel Caesar', 'https://audio.jukehost.co.uk/8fJs3eQei198an19ooxRcQOi78gYHYX3', 'https://i.ibb.co/MgBwMKn/1-Akv-Ntn-Jyq-Th-Yznyt-Qs9-VKQ.jpg', 'https://i.ibb.co/kK84p6B/1-Akv-Ntn-Jyq-Th-Yznyt-Qs9-VKQ.jpg'),
(3, 'Self Care', 'Mac Miller\r\n', 'https://audio.jukehost.co.uk/iC0nRXII4WnxJbxMdE9TBJdDJFgF0gqt', 'https://i.ibb.co/wWjJXyt/Mac-Miller-Swimming.png', 'https://i.ibb.co/bPYLTBN/Mac-Miller-Self-Care1580.jpg'),
(4, 'On N Over', 'Alec Orachi', 'https://audio.jukehost.co.uk/igpTv1Y1ORxp4CojXssDDYaFgpNVIT5L', 'https://i.ibb.co/Xj5fDWk/https-images-genius-com-334d703aad759f48aa4cdfd0207b7d37-500x500x1.jpg', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWI2Z3VyMWxoNzM0MmRhZDRwaTF0aDdsbnA0aDgzczF2MjZoZXA3eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SrQdEqdCEPlMIWEBgo/giphy-downsized-large.gif'),
(5, 'Roommates', 'Malcolm Todd', 'https://audio.jukehost.co.uk/9VfgsUXSKgJBE1WyASzVWPcH9AgeqtLq', 'https://i.ibb.co/m9c9gt8/ab67616d0000b27349f60b0c99640d3de0f0f372.jpg', 'https://i.ibb.co/zhffmVk/Screenshot-2023-11-02-012112.png'),
(6, 'Shut up My Moms Calling', 'Hotel Ugly', 'https://audio.jukehost.co.uk/EZTjzq0MUIkDiKCc8NvhtXkJzWT9OEy2', 'https://i.ibb.co/ZXmq0Sc/ab67616d0000b273350ab7a839c04bfd5225a9f5.jpg', 'https://i.ibb.co/JqhtndB/71-Sl-Bmswe-NL.jpg'),
(7, 'Valentina', 'Daniel Caesar', 'https://audio.jukehost.co.uk/Em9tYoEUqzXgB2FrIhXnUj6CRBPWBWT3', 'https://i.ibb.co/6swg4qc/artworks-AS4r-Zv-EUTz-Yy-0-t500x500.jpg', 'https://i.ibb.co/54hdQQX/hq720.jpg'),
(8, 'Not Thinkin\' Bout You', 'Ruel', 'https://audio.jukehost.co.uk/caCj59s6D2j430CYqFhC1jTh0tDS3pOq', 'https://i.ibb.co/3zW2mjh/72664672c334e13887485df7dd70dcf4-1000x1000x1.jpg', 'https://i.ibb.co/3sqgFmn/ruel-not-thinkin-bout-you.gif'),
(9, 'Russ', 'Missin You Crazy', 'https://audio.jukehost.co.uk/HeFUICcBQ1sb8fc4qOFgoTnQ9ceig3vX', 'https://i.ibb.co/tbqW5zw/ab67616d00001e0247912996054fec2a1ef78035.jpg', 'https://i.ibb.co/D4zHSNK/2bbe6209d999c5f5067b070aa528b037.jpg'),
(10, 'Bad Habit', 'Steve Lacy', 'https://audio.jukehost.co.uk/H7tTGg6G4wXiVqAiSLcYhRR9izIgXQAg', 'https://i.ibb.co/j3rCLz7/ab67616d0000b27368968350c2550e36d96344ee.jpg', 'https://i.ibb.co/cTcX196/images.jpg'),
(11, 'golden hour', 'JVKE', 'https://audio.jukehost.co.uk/PMneTiwOGfXsPU07HK9iHAxFi5PabAb6', 'https://i.ibb.co/rMCGshL/JVKE-Golden-Hour.png', 'https://i.ibb.co/VNnH3wR/x1080.jpg'),
(12, 'Coffee', 'Beabadoobee', 'https://audio.jukehost.co.uk/37T31vyKQnbMB62vteVAWlmeXySOQUei', 'https://i.ibb.co/Zmt8Pjp/9890b06dda93810c3af9ec37d2ed2236-1000x1000x1.jpg', 'https://i.ibb.co/BVtz2Qg/maxresdefault-1.jpg'),
(13, 'Tip Toe', 'HYBS', 'https://audio.jukehost.co.uk/IsoG8hUrlzkfGGqw9H3NeNThvwsIGhGa', 'https://i.ibb.co/wptLRBV/download.jpg', 'https://i.ibb.co/HTdbMQd/hq720-1.jpg'),
(14, 'Keep Cold', 'Numcha', 'https://audio.jukehost.co.uk/lqMpIuvnN5W3tpQOnmKxJFVSERO2usoI', 'https://i.ibb.co/ZV3Xckh/ab67616d0000b27362d71c428d413ebb56649c9b.jpg', 'https://i.ibb.co/nRY9s49/EU5r50-MU4-AAB8js.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(100) NOT NULL,
  `username` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=tis620;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `username`, `password`, `email`) VALUES
(4, 'j', 'j', 'nanthapong2555@gmail.com'),
(5, 'jj', 'jj', 'jxy2555@gmail.com'),
(7, 'jay', 'jay', 'nanthapong2546@gmail.com'),
(8, '1', '11111111', 'somying@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`songID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
