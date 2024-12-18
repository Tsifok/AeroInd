-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-12-2024 a las 03:30:48
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `garry`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `components_general`
--

CREATE TABLE `components_general` (
  `id` int(11) NOT NULL,
  `comp_name` varchar(50) NOT NULL,
  `comp_specification` varchar(50) NOT NULL,
  `comp_color` varchar(50) DEFAULT NULL,
  `label` varchar(50) DEFAULT NULL,
  `kind` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `components_general`
--

INSERT INTO `components_general` (`id`, `comp_name`, `comp_specification`, `comp_color`, `label`, `kind`) VALUES
(1, 'Destilado', 'agua', NULL, NULL, NULL),
(2, 'Destilado', 'Kerosene', NULL, NULL, NULL),
(3, 'Gas', 'butano propano', NULL, NULL, NULL),
(4, 'Válvula', '9 oz', NULL, NULL, NULL),
(5, 'Concentrado Des. Amb', 'Floral', NULL, NULL, 'Desinfectante'),
(6, 'Concentrado Insect', 'mosquito', NULL, NULL, 'Insecticida'),
(7, 'Pulsador', 'BC45', 'blanco', NULL, NULL),
(8, 'Pulsador', 'BC20', 'negro', NULL, NULL),
(10, 'Envase', '9 oz', NULL, 'MosquiBad', NULL),
(11, 'Envase', '9 oz', NULL, 'Desinf. Amb. Marina', NULL),
(12, 'Envase', '9 oz', NULL, 'Desinf. Amb. Silvestre', NULL),
(13, 'Envase', '9 oz', NULL, 'Desinf. Amb. Floral', NULL),
(14, 'Envase', '9 oz', NULL, 'Desinf. Amb. Pino', NULL),
(15, 'Concentrado Des. Amb', 'Marina', NULL, NULL, 'Desinfectante'),
(16, 'Concentrado Des. Amb', 'Silvestre', NULL, NULL, 'Desinfectante'),
(17, 'Concentrado Des. Amb', 'Pino', NULL, NULL, 'Desinfectante'),
(18, 'Envase', '12 oz', NULL, 'Desinf. Amb. Mr Musculo', NULL),
(19, 'Pulsador', 'BD69', 'Blanco', NULL, NULL),
(20, 'Válvula', '12 oz', NULL, NULL, NULL),
(21, 'Concentrado Incecticida', 'para mosquitos', NULL, NULL, 'Incecticida'),
(22, 'Envase', '12 oz', NULL, 'Desinf. Amb. Fuelte', NULL),
(23, 'Jabon espuma', 'Gas', NULL, NULL, NULL),
(24, 'test reset form', 'test reset form', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `components_stock`
--

CREATE TABLE `components_stock` (
  `id` int(11) NOT NULL,
  `components_id` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `unit` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `components_stock`
--

INSERT INTO `components_stock` (`id`, `components_id`, `stock`, `unit`) VALUES
(1, 4, 196950, 'uni'),
(2, 7, 196950, 'uni'),
(3, 5, 361, 'lts'),
(4, 11, 51000, 'uni'),
(5, 12, 96900, 'uni'),
(6, 13, 35700, 'uni'),
(7, 14, 15300, 'uni'),
(8, 15, 650, 'lts'),
(9, 16, 979, 'lts'),
(10, 17, 155, 'lts');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `losses`
--

CREATE TABLE `losses` (
  `id` int(11) NOT NULL,
  `idProduct` int(11) NOT NULL,
  `percentage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `amound` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `sent_at` datetime NOT NULL,
  `finished_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `id_formulae` int(11) NOT NULL,
  `name` int(11) NOT NULL,
  `volume` int(11) NOT NULL,
  `unit` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_components`
--

CREATE TABLE `products_components` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_stock`
--

CREATE TABLE `products_stock` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'empleado'),
(2, 'gerente'),
(3, 'developer');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `dni` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `birthDate` date NOT NULL,
  `rol_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `password`, `dni`, `email`, `birthDate`, `rol_id`, `created_at`, `modified_at`, `deleted_at`) VALUES
(1, 'aa', 'aa', 'e0c9035898dd52fc65c41454cec9c4d2611bfb37', '0', 'aa@gmail.com', '2024-12-09', 3, '2024-12-12 17:47:26', NULL, NULL),
(32, 'Matias', 'Herman', '7faf6a79ddaecfe7b65910ead089181042089d0c', '46875990', 'hermanmatias03@gmail.com', '2024-12-01', 1, '2024-12-14 00:31:59', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `components_general`
--
ALTER TABLE `components_general`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `components_stock`
--
ALTER TABLE `components_stock`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `losses`
--
ALTER TABLE `losses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ProductID` (`productID`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products_components`
--
ALTER TABLE `products_components`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Dni` (`dni`),
  ADD UNIQUE KEY `Mail` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `components_general`
--
ALTER TABLE `components_general`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `components_stock`
--
ALTER TABLE `components_stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `losses`
--
ALTER TABLE `losses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products_components`
--
ALTER TABLE `products_components`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `products_formulae` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
