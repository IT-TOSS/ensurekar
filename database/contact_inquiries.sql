-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2026 at 09:54 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ensurekar`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_inquiries`
--

CREATE TABLE `contact_inquiries` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `origin` varchar(100) DEFAULT NULL COMMENT 'Form origin: Talk_To_Expert, contact, etc.',
  `email_sent` tinyint(1) DEFAULT 0 COMMENT 'Whether email was sent successfully',
  `email_sent_to` varchar(255) DEFAULT NULL COMMENT 'Email address where notification was sent',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `contact_inquiries`
--

INSERT INTO `contact_inquiries` (`id`, `first_name`, `last_name`, `email`, `phone`, `subject`, `message`, `origin`, `email_sent`, `email_sent_to`, `created_at`, `updated_at`) VALUES
(6, 'Krishna', 'Gaus', 'krishna.toss.it@gmail.com', '7723854844', 'Private Limited Incorporation Registration', '', 'Talk_To_Expert', 1, 'krishna.toss.it@gmail.com', '2026-01-17 10:51:09', '2026-01-17 10:51:09'),
(7, 'krishna', 'vishw', 'dhaneshwari.tosscs@gmail.com', '221231256', 'Startup India Registration', '', 'Talk_To_Expert', 1, 'krishna.toss.it@gmail.com', '2026-01-19 06:07:51', '2026-01-19 06:07:51'),
(8, 'Krishna', 'Vishwakarma', 'Krishna.vishwakarma@tosssolution.in', '7723854844', 'Private Limited Incorporation Registration', 'hello \n', 'Talk_To_Expert', 1, 'krishna.toss.it@gmail.com', '2026-01-19 07:01:03', '2026-01-19 07:01:03'),
(9, 'krishna', 'Gaus', 'admin@apatkal.com', '7521369779', 'Private Limited Incorporation Registration', '', 'Talk_To_Expert', 1, 'krishna.toss.it@gmail.com', '2026-01-19 07:04:21', '2026-01-19 07:04:21'),
(10, 'Krishna', 'Vishwakarma', 'krishna.toss.it@gmail.com', '7521369779', 'Private Limited Incorporation Registration', '', 'Talk_To_Expert', 1, 'krishna.toss.it@gmail.com', '2026-01-19 07:04:48', '2026-01-19 07:04:48'),
(11, 'krishna', 'Gaus', 'geetanjali.tosscs@gmail.com', '7723854844', 'Private Limited Incorporation Registration', '', 'Talk_To_Expert', 1, 'krishna.toss.it@gmail.com', '2026-01-19 07:08:47', '2026-01-19 07:08:47'),
(12, '', 'Business ', 'Toss125training@gmail.com', '7898140799', 'Private Limited Incorporation Registration', '', 'Talk_To_Expert', 1, 'krishna.toss.it@gmail.com', '2026-01-19 07:11:22', '2026-01-19 07:11:22'),
(13, 'Krishna', 'Vishwakarma', 'Krishna.vishwakarma@tosssolution.in', '7723854844', 'Private Limited Incorporation Registration', '', 'Talk_To_Expert', 1, 'krishna.toss.it@gmail.com', '2026-01-19 07:15:53', '2026-01-19 07:15:53'),
(14, 'krishna', 'Gaus', 'Krishna.vishwakarma@tosssolution.in', '7723854844', 'Private Limited Incorporation Registration', '', 'Talk_To_Expert', 1, 'krishna.toss.it@gmail.com', '2026-01-19 07:21:53', '2026-01-19 07:21:53'),
(15, 'krishna', 'Business ', 'krishna.toss.it@gmail.com', '7723854844', 'Private Limited Incorporation Registration', 'qqaa', 'Talk_To_Expert', 1, 'krishna.toss.it@gmail.com', '2026-01-19 07:24:48', '2026-01-19 07:24:48'),
(16, 'Krishna', 'Gaus', 'admin@apatkal.com', '7723854844', 'Private Limited Incorporation Registration', 'asdfgh', 'Talk_To_Expert', 1, 'krishna.toss.it@gmail.com', '2026-01-19 08:42:18', '2026-01-19 08:42:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_inquiries`
--
ALTER TABLE `contact_inquiries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_email` (`email`),
  ADD KEY `idx_origin` (`origin`),
  ADD KEY `idx_created_at` (`created_at`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_inquiries`
--
ALTER TABLE `contact_inquiries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
