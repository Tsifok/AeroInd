-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-12-2024 a las 00:17:05
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de datos: `gurbarrysa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chem_concentrates`
--

CREATE TABLE `chem_concentrates` (
  `ID` int(11) NOT NULL,
  `kind` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `amount` int(11) NOT NULL,
  `unit` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `containers`
--

CREATE TABLE `containers` (
  `ID` int(11) NOT NULL,
  `kind` int(11) NOT NULL,
  `label` varchar(100) NOT NULL,
  `volume` float NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generalcomponents`
--

CREATE TABLE `generalcomponents` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `stock` int(11) NOT NULL,
  `unit` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `generalcomponents`
--

INSERT INTO `generalcomponents` (`ID`, `name`, `stock`, `unit`) VALUES
(1, 'Bolsa', 1000, 'unidades'),
(2, 'Bandeja', 1000, 'unidades'),
(3, 'Destilado Kerosene', 8000, 'gr'),
(4, 'Agua destilada', 9000, 'gr'),
(5, 'Gas Propano Butano', 9000, 'gr');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `losses`
--

CREATE TABLE `losses` (
  `ID` int(11) NOT NULL,
  `idProduct` int(11) NOT NULL,
  `percentage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `ID` int(11) NOT NULL,
  `kind` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `amound` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `finished_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productkind`
--

CREATE TABLE `productkind` (
  `ID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `ID` int(11) NOT NULL,
  `kind` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `volume` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pushbuttons`
--

CREATE TABLE `pushbuttons` (
  `ID` int(11) NOT NULL,
  `color` varchar(50) NOT NULL,
  `model` varchar(50) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `ID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`ID`, `name`) VALUES
(1, 'empleado'),
(2, 'gerente'),
(3, 'developer');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `DNI` varchar(15) NOT NULL,
  `Mail` varchar(100) NOT NULL,
  `birthDate` date NOT NULL,
  `rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`ID`, `name`, `lastname`, `password`, `DNI`, `Mail`, `birthDate`, `rol`) VALUES
(1, 'aa', 'aa', 'e0c9035898dd52fc65c41454cec9c4d2611bfb37', '0', 'aa@gmai.com', '2024-12-09', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valves`
--

CREATE TABLE `valves` (
  `ID` int(11) NOT NULL,
  `volume` float NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `chem_concentrates`
--
ALTER TABLE `chem_concentrates`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `containers`
--
ALTER TABLE `containers`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `generalcomponents`
--
ALTER TABLE `generalcomponents`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Name` (`name`);

--
-- Indices de la tabla `losses`
--
ALTER TABLE `losses`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ProductID` (`productID`);

--
-- Indices de la tabla `productkind`
--
ALTER TABLE `productkind`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `pushbuttons`
--
ALTER TABLE `pushbuttons`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Dni` (`DNI`),
  ADD UNIQUE KEY `Mail` (`Mail`);

--
-- Indices de la tabla `valves`
--
ALTER TABLE `valves`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `chem_concentrates`
--
ALTER TABLE `chem_concentrates`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `containers`
--
ALTER TABLE `containers`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `generalcomponents`
--
ALTER TABLE `generalcomponents`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `losses`
--
ALTER TABLE `losses`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productkind`
--
ALTER TABLE `productkind`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pushbuttons`
--
ALTER TABLE `pushbuttons`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `valves`
--
ALTER TABLE `valves`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `products` (`ID`);
COMMIT;
