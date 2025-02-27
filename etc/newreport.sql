-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 27, 2025 at 12:57 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newreport`
--

-- --------------------------------------------------------

--
-- Table structure for table `report_administrative_areas`
--

CREATE TABLE `report_administrative_areas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_administrative_areas`
--

INSERT INTO `report_administrative_areas` (`id`, `name`, `state`, `created_at`, `updated_at`) VALUES
(1, 'الباحة', 1, '2025-02-26 19:48:24', '2025-02-26 19:48:24'),
(2, 'الجوف', 1, '2025-02-26 19:48:24', '2025-02-26 19:48:24'),
(3, 'الحدود الشمالية', 1, '2025-02-26 19:48:24', '2025-02-26 19:48:24'),
(4, 'الرياض', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(5, 'الشرقية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(6, 'القصيم', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(7, 'المدينة المنورة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(8, 'تبوك', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(9, 'جازان', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(10, 'حائل', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(11, 'عسير', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(12, 'مكة المكرمة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(13, 'نجران', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(14, 'غير ذلك', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25');

-- --------------------------------------------------------

--
-- Table structure for table `report_cache`
--

CREATE TABLE `report_cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report_cache_locks`
--

CREATE TABLE `report_cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report_departments`
--

CREATE TABLE `report_departments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_departments`
--

INSERT INTO `report_departments` (`id`, `name`, `state`, `created_at`, `updated_at`) VALUES
(1, 'إدارة الخدمات المساندة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(2, 'وحدة الخدمات العامة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(3, 'وحدة السلامة والصحة المهنية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(4, 'وحدة تقنية المعلومات', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(5, 'غير ذلك', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25');

-- --------------------------------------------------------

--
-- Table structure for table `report_establishments`
--

CREATE TABLE `report_establishments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_establishments`
--

INSERT INTO `report_establishments` (`id`, `name`, `state`, `created_at`, `updated_at`) VALUES
(1, 'عمادة الكلية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(2, 'وكالة الكلية للجودة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(3, 'وكالة الكلية لشؤون المتدربين', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(4, 'وكالة الكلية لشؤون المدربين', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(5, 'قسم تقنية الاعمال', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(6, 'قسم تقنية السياحة والضيافة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(7, 'قسم التقنية المدنية والمعمارية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(8, 'قسم التقنية الكهربائية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(9, 'قسم التقنية الميكانيكية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(10, 'قسم تقنية البيئة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(11, 'قسم الدراسات العامة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(12, 'قسم التنسيق الوظيفي', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(13, 'قسم القبول والتسجيل', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(14, 'قسم التدرب الإلكتروني', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(15, 'وحدة الإتصال المؤسسي', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(16, 'وحدة التدريب التعاوني', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(17, 'وحدة التوجيه والإرشاد', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(18, 'وحدة تقنية المعلومات', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(19, 'وحدة صندوق المتدربين', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(20, 'وحدة السلامة والصحة المهنية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(21, 'وحدة النشاط', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(22, 'مركز الموهبة والابتكار', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(23, 'مركز الأعمال وخدمة المجتمع', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(24, 'العيادة الطبية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(25, 'المستودع', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(26, 'مطعم الكلية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(27, 'مكتبة الكلية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(28, 'القرطاسية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(29, 'غير ذلك', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25');

-- --------------------------------------------------------

--
-- Table structure for table `report_executing_agencies`
--

CREATE TABLE `report_executing_agencies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_executing_agencies`
--

INSERT INTO `report_executing_agencies` (`id`, `name`, `state`, `created_at`, `updated_at`) VALUES
(1, 'عمادة الكلية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(2, 'وكالة الكلية للجودة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(3, 'وكالة الكلية لشؤون المتدربين', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(4, 'وكالة الكلية لشؤون المدربين', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(5, 'قسم تقنية الاعمال', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(6, 'قسم تقنية السياحة والضيافة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(7, 'قسم التقنية المدنية والمعمارية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(8, 'قسم التقنية الكهربائية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(9, 'قسم التقنية الميكانيكية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(10, 'قسم تقنية البيئة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(11, 'قسم الدراسات العامة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(12, 'قسم التنسيق الوظيفي', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(13, 'قسم القبول والتسجيل', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(14, 'قسم التدرب الإلكتروني', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(15, 'وحدة الإتصال المؤسسي', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(16, 'وحدة التدريب التعاوني', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(17, 'وحدة التوجيه والإرشاد', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(18, 'وحدة تقنية المعلومات', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(19, 'وحدة صندوق المتدربين', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(20, 'وحدة السلامة والصحة المهنية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(21, 'وحدة النشاط', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(22, 'مركز الموهبة والابتكار', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(23, 'مركز الأعمال وخدمة المجتمع', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(24, 'إدارة الخدمات المساندة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(25, 'العيادة الطبية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(26, 'المستودع', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(27, 'مطعم الكلية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(28, 'مكتبة الكلية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(29, 'القرطاسية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(30, 'غير ذلك', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25');

-- --------------------------------------------------------

--
-- Table structure for table `report_failed_jobs`
--

CREATE TABLE `report_failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report_jobs`
--

CREATE TABLE `report_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report_job_batches`
--

CREATE TABLE `report_job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report_maintenance_requesting_agencies`
--

CREATE TABLE `report_maintenance_requesting_agencies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_maintenance_requesting_agencies`
--

INSERT INTO `report_maintenance_requesting_agencies` (`id`, `name`, `state`, `created_at`, `updated_at`) VALUES
(1, 'عمادة الكلية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(2, 'وكالة الكلية للجودة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(3, 'وكالة الكلية لشؤون المتدربين', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(4, 'وكالة الكلية لشؤون المدربين', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(5, 'قسم تقنية الاعمال', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(6, 'قسم تقنية السياحة والضيافة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(7, 'قسم التقنية المدنية والمعمارية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(8, 'قسم التقنية الكهربائية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(9, 'قسم التقنية الميكانيكية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(10, 'قسم تقنية البيئة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(11, 'قسم الدراسات العامة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(12, 'قسم التنسيق الوظيفي', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(13, 'قسم القبول والتسجيل', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(14, 'قسم التدرب الإلكتروني', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(15, 'وحدة الإتصال المؤسسي', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(16, 'وحدة التدريب التعاوني', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(17, 'وحدة التوجيه والإرشاد', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(18, 'وحدة تقنية المعلومات', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(19, 'وحدة صندوق المتدربين', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(20, 'وحدة السلامة والصحة المهنية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(21, 'وحدة النشاط', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(22, 'مركز الموهبة والابتكار', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(23, 'مركز الأعمال وخدمة المجتمع', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(24, 'إدارة الخدمات المساندة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(25, 'العيادة الطبية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(26, 'المستودع', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(27, 'مطعم الكلية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(28, 'مكتبة الكلية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(29, 'القرطاسية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(30, 'غير ذلك', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25');

-- --------------------------------------------------------

--
-- Table structure for table `report_maintenance_types`
--

CREATE TABLE `report_maintenance_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_maintenance_types`
--

INSERT INTO `report_maintenance_types` (`id`, `name`, `state`, `created_at`, `updated_at`) VALUES
(1, 'صيانة دورية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(2, 'صيانة وقائية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(3, 'صيانة طارئة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(4, 'غير ذلك', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25');

-- --------------------------------------------------------

--
-- Table structure for table `report_migrations`
--

CREATE TABLE `report_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_migrations`
--

INSERT INTO `report_migrations` (`id`, `migration`, `batch`) VALUES
(18, '0001_01_01_000000_create_users_table', 1),
(19, '0001_01_01_000001_create_cache_table', 1),
(20, '0001_01_01_000002_create_jobs_table', 1),
(21, '2014_10_12_100000_create_password_resets_table', 1),
(22, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(23, '2025_01_17_194043_create_administrative_areas_table', 1),
(24, '2025_01_18_202024_create_establishments_table', 1),
(25, '2025_01_18_202059_create_report_types_table', 1),
(26, '2025_01_18_205930_create_executing_agencies_table', 1),
(27, '2025_01_18_205930_create_resources_table', 1),
(28, '2025_01_18_205930_create_training_classes_table', 1),
(29, '2025_01_18_205931_create_maintenance_types_table', 1),
(30, '2025_01_18_205931_create_performance_indicators_table', 1),
(31, '2025_01_18_205932_create_departments_table', 1),
(32, '2025_01_18_205932_create_maintenance_requesting_agencies_table', 1),
(33, '2025_01_18_205932_create_request_types_table', 1),
(34, '2025_01_22_224644_create_report_processes_table', 1),
(35, '2025_01_22_224654_create_report_feedback_table', 2),
(36, '2025_01_30_231128_create_semesters_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `report_password_resets`
--

CREATE TABLE `report_password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report_password_reset_tokens`
--

CREATE TABLE `report_password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report_performance_indicators`
--

CREATE TABLE `report_performance_indicators` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_performance_indicators`
--

INSERT INTO `report_performance_indicators` (`id`, `name`, `state`, `created_at`, `updated_at`) VALUES
(1, 'نسبة المدربين المستفيدين من الدورات التدريبية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(2, 'نسبة المدرب للمتدرب', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(3, 'تكلفة المتدرب السنوية (ريال سعودي)', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(4, 'معدل التخرج حسب الدفعه (%)', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(5, 'معدل التوظيف خلال 6 شهور من التخرج (%)', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(6, 'عدد الخريجين (#)', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(7, 'عدد مذكرات التفاهم والشراكات (#)', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(8, 'معدل التسرب للمتدربين (%)', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(9, 'معدل التعثر', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(10, 'متوسط المعدل التراكمي GPA لمتدربي المنشأة التدريبية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(11, 'عدد المتدربين المشاركين في الأعمال التطوعيه والبرامج والفعاليات', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(12, 'معدل رضا المدربين', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(13, 'معدل الرضا الكلي للمتدربين', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(14, 'معدل الرضا الكلي لأصحاب العمل', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(15, 'نسبة توفر الخدمات للمتدربين (%)', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(16, 'عدد المبتكرين والأفكار الإبداعية المطروحة من المنسوبين', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(17, 'معدل «قياس» لمتدربي المنشأة التدريبية (درجة)', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(18, 'نسبة المتدربين من خريجي الثانوية العامة من المنطقة (%)', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(19, 'عدد المقبولين', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(20, 'معدل تطبيق معايير الأمن والسلامة بالمنشأة التدريبية (%)', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(21, 'نسبة اشغال المقاعد التدريبية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(22, 'نسبة المقبولين للمتقدمين', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(23, 'معدل اشغال المرافق', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(24, 'متوسط النصاب التدريبي', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(25, 'غير ذلك', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25');

-- --------------------------------------------------------

--
-- Table structure for table `report_personal_access_tokens`
--

CREATE TABLE `report_personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report_report_feedback`
--

CREATE TABLE `report_report_feedback` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `report_process_id` char(36) NOT NULL,
  `is_liked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_report_feedback`
--

INSERT INTO `report_report_feedback` (`id`, `report_process_id`, `is_liked`, `created_at`, `updated_at`) VALUES
(1, '9fb5dfdb-a63c-4a4e-99e9-9ee553fd4ac5', 1, '2025-02-26 20:49:24', '2025-02-26 20:49:24'),
(2, '85280947-7ac9-4f8f-9822-76c45d8032bb', 1, '2025-02-26 20:54:05', '2025-02-26 20:54:05'),
(3, '577b0657-2fc4-4339-8e4d-5cbbe9739308', 1, '2025-02-26 20:55:14', '2025-02-26 20:55:14'),
(4, '375cb7ea-ba95-491e-86e1-5df0fcd310e9', 1, '2025-02-26 20:55:43', '2025-02-26 20:55:43'),
(5, 'ce28ba06-c584-4527-a443-5f125eb4035d', 1, '2025-02-26 20:56:07', '2025-02-26 20:56:07');

-- --------------------------------------------------------

--
-- Table structure for table `report_report_processes`
--

CREATE TABLE `report_report_processes` (
  `id` char(36) NOT NULL,
  `report_type_id` bigint(20) UNSIGNED NOT NULL,
  `generated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_report_processes`
--

INSERT INTO `report_report_processes` (`id`, `report_type_id`, `generated_at`, `created_at`, `updated_at`) VALUES
('04d04a85-a7af-4719-a9e3-522784f0e45b', 1, '2025-02-26 20:25:07', '2025-02-26 20:25:07', '2025-02-26 20:25:07'),
('18f8b56e-9a59-406f-bfca-478305922cf5', 1, '2025-02-26 20:29:21', '2025-02-26 20:29:21', '2025-02-26 20:29:21'),
('375cb7ea-ba95-491e-86e1-5df0fcd310e9', 1, '2025-02-26 20:55:43', '2025-02-26 20:55:43', '2025-02-26 20:55:43'),
('577b0657-2fc4-4339-8e4d-5cbbe9739308', 1, '2025-02-26 20:55:14', '2025-02-26 20:55:14', '2025-02-26 20:55:14'),
('61f6f374-f4f5-4386-b226-5c0c24521687', 1, '2025-02-26 20:22:49', '2025-02-26 20:22:49', '2025-02-26 20:22:49'),
('688bc189-7c58-4227-9779-b827ac031253', 1, '2025-02-26 20:32:58', '2025-02-26 20:32:58', '2025-02-26 20:32:58'),
('72822c58-ba3b-48c7-acca-9bf7821d4579', 1, '2025-02-26 20:11:30', '2025-02-26 20:11:30', '2025-02-26 20:11:30'),
('85280947-7ac9-4f8f-9822-76c45d8032bb', 1, '2025-02-26 20:54:05', '2025-02-26 20:54:05', '2025-02-26 20:54:05'),
('891b4611-82ce-4434-80d1-cc5bc43ff4ff', 1, '2025-02-26 20:31:16', '2025-02-26 20:31:16', '2025-02-26 20:31:16'),
('8f475afb-b0fd-44b1-a7b4-b95d24df763c', 1, '2025-02-26 20:24:41', '2025-02-26 20:24:41', '2025-02-26 20:24:41'),
('9fb5dfdb-a63c-4a4e-99e9-9ee553fd4ac5', 1, '2025-02-26 20:49:24', '2025-02-26 20:49:24', '2025-02-26 20:49:24'),
('c8c4ae89-06ea-4341-92fb-caca24e5843b', 1, '2025-02-26 20:26:00', '2025-02-26 20:26:00', '2025-02-26 20:26:00'),
('ce28ba06-c584-4527-a443-5f125eb4035d', 1, '2025-02-26 20:56:07', '2025-02-26 20:56:07', '2025-02-26 20:56:07'),
('ddb9eeeb-7a5f-43d1-a3b0-fd91a41424b9', 1, '2025-02-26 20:08:02', '2025-02-26 20:08:02', '2025-02-26 20:08:02');

-- --------------------------------------------------------

--
-- Table structure for table `report_report_types`
--

CREATE TABLE `report_report_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_report_types`
--

INSERT INTO `report_report_types` (`id`, `name`, `state`, `created_at`, `updated_at`) VALUES
(1, 'achievement', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(2, 'maintenance', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(3, 'financial', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25');

-- --------------------------------------------------------

--
-- Table structure for table `report_request_types`
--

CREATE TABLE `report_request_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_request_types`
--

INSERT INTO `report_request_types` (`id`, `name`, `state`, `created_at`, `updated_at`) VALUES
(1, 'إضاءة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(2, 'تكييف', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(3, 'دهان', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(4, 'سباكة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(5, 'كهرباء', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(6, 'مصعد', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(7, 'صيانة أجهزة حاسب آلي', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(8, 'صيانة أجهزة عرض', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(9, 'صيانة معمل', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(10, 'غير ذلك', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25');

-- --------------------------------------------------------

--
-- Table structure for table `report_resources`
--

CREATE TABLE `report_resources` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_resources`
--

INSERT INTO `report_resources` (`id`, `name`, `state`, `created_at`, `updated_at`) VALUES
(1, 'بشرية فقط', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(2, 'مادية فقط', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(3, 'بشرية ومادية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(4, 'لا يوجد', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(5, 'غير ذلك', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25');

-- --------------------------------------------------------

--
-- Table structure for table `report_semesters`
--

CREATE TABLE `report_semesters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_semesters`
--

INSERT INTO `report_semesters` (`id`, `name`, `state`, `created_at`, `updated_at`) VALUES
(1, 'الفصل التدريبي الأول ١٤٤٦', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(2, 'الفصل التدريبي الثاني ١٤٤٦', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(3, 'الفصل التدريبي الصيفي ١٤٤٦', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(4, 'الفصل التدريبي الأول ١٤٤٧', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(5, 'الفصل التدريبي الثاني ١٤٤٧', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(6, 'الفصل التدريبي الصيفي ١٤٤٧', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(7, 'الفصل التدريبي الأول ١٤٤٨', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(8, 'الفصل التدريبي الثاني ١٤٤٨', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(9, 'الفصل التدريبي الصيفي ١٤٤٨', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(10, 'الفصل التدريبي الأول ١٤٤٩', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(11, 'الفصل التدريبي الثاني ١٤٤٩', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(12, 'الفصل التدريبي الصيفي ١٤٤٩', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(13, 'غير ذلك', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25');

-- --------------------------------------------------------

--
-- Table structure for table `report_sessions`
--

CREATE TABLE `report_sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report_training_classes`
--

CREATE TABLE `report_training_classes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_training_classes`
--

INSERT INTO `report_training_classes` (`id`, `name`, `state`, `created_at`, `updated_at`) VALUES
(1, 'إدارة الخدمات المساندة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(2, 'وحدة الخدمات العامة', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(3, 'وحدة السلامة والصحة المهنية', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(4, 'وحدة تقنية المعلومات', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25'),
(5, 'غير ذلك', 1, '2025-02-26 19:48:25', '2025-02-26 19:48:25');

-- --------------------------------------------------------

--
-- Table structure for table `report_users`
--

CREATE TABLE `report_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `report_administrative_areas`
--
ALTER TABLE `report_administrative_areas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_cache`
--
ALTER TABLE `report_cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `report_cache_locks`
--
ALTER TABLE `report_cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `report_departments`
--
ALTER TABLE `report_departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_establishments`
--
ALTER TABLE `report_establishments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_executing_agencies`
--
ALTER TABLE `report_executing_agencies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_failed_jobs`
--
ALTER TABLE `report_failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `report_failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `report_jobs`
--
ALTER TABLE `report_jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `report_jobs_queue_index` (`queue`);

--
-- Indexes for table `report_job_batches`
--
ALTER TABLE `report_job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_maintenance_requesting_agencies`
--
ALTER TABLE `report_maintenance_requesting_agencies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_maintenance_types`
--
ALTER TABLE `report_maintenance_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_migrations`
--
ALTER TABLE `report_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_password_resets`
--
ALTER TABLE `report_password_resets`
  ADD KEY `report_password_resets_email_index` (`email`);

--
-- Indexes for table `report_password_reset_tokens`
--
ALTER TABLE `report_password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `report_performance_indicators`
--
ALTER TABLE `report_performance_indicators`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_personal_access_tokens`
--
ALTER TABLE `report_personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `report_personal_access_tokens_token_unique` (`token`),
  ADD KEY `report_personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `report_report_feedback`
--
ALTER TABLE `report_report_feedback`
  ADD PRIMARY KEY (`id`),
  ADD KEY `report_report_feedback_report_process_id_foreign` (`report_process_id`);

--
-- Indexes for table `report_report_processes`
--
ALTER TABLE `report_report_processes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `report_report_processes_report_type_id_foreign` (`report_type_id`);

--
-- Indexes for table `report_report_types`
--
ALTER TABLE `report_report_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_request_types`
--
ALTER TABLE `report_request_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_resources`
--
ALTER TABLE `report_resources`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_semesters`
--
ALTER TABLE `report_semesters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_sessions`
--
ALTER TABLE `report_sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `report_sessions_user_id_index` (`user_id`),
  ADD KEY `report_sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `report_training_classes`
--
ALTER TABLE `report_training_classes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_users`
--
ALTER TABLE `report_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `report_users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `report_administrative_areas`
--
ALTER TABLE `report_administrative_areas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `report_departments`
--
ALTER TABLE `report_departments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `report_establishments`
--
ALTER TABLE `report_establishments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `report_executing_agencies`
--
ALTER TABLE `report_executing_agencies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `report_failed_jobs`
--
ALTER TABLE `report_failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `report_jobs`
--
ALTER TABLE `report_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `report_maintenance_requesting_agencies`
--
ALTER TABLE `report_maintenance_requesting_agencies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `report_maintenance_types`
--
ALTER TABLE `report_maintenance_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `report_migrations`
--
ALTER TABLE `report_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `report_performance_indicators`
--
ALTER TABLE `report_performance_indicators`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `report_personal_access_tokens`
--
ALTER TABLE `report_personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `report_report_feedback`
--
ALTER TABLE `report_report_feedback`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `report_report_types`
--
ALTER TABLE `report_report_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `report_request_types`
--
ALTER TABLE `report_request_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `report_resources`
--
ALTER TABLE `report_resources`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `report_semesters`
--
ALTER TABLE `report_semesters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `report_training_classes`
--
ALTER TABLE `report_training_classes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `report_users`
--
ALTER TABLE `report_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `report_report_feedback`
--
ALTER TABLE `report_report_feedback`
  ADD CONSTRAINT `report_report_feedback_report_process_id_foreign` FOREIGN KEY (`report_process_id`) REFERENCES `report_report_processes` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `report_report_processes`
--
ALTER TABLE `report_report_processes`
  ADD CONSTRAINT `report_report_processes_report_type_id_foreign` FOREIGN KEY (`report_type_id`) REFERENCES `report_report_types` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
