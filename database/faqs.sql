-- Dynamic FAQs (DB-driven)
-- Database: ensurekar
--
-- route_name supports multiple routes by storing a comma-wrapped list, e.g.
--   ",global,/private-limited-company-registration,/checkout,"
-- This keeps compatibility with older MySQL versions (no JSON required).

CREATE TABLE IF NOT EXISTS `faqs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(500) NOT NULL,
  `answer` longtext NOT NULL,
  `category` varchar(120) NOT NULL DEFAULT '',
  `route_name` text NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `idx_faqs_is_active` (`is_active`),
  KEY `idx_faqs_category` (`category`),
  KEY `idx_faqs_updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

