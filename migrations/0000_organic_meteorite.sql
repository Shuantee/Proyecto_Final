-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `grupo` (
	`id` integer PRIMARY KEY,
	`nom_grup` text
);
--> statement-breakpoint
CREATE TABLE `grado` (
	`id` integer PRIMARY KEY,
	`id_grupo` integer,
	FOREIGN KEY (`id_grupo`) REFERENCES `grupo`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `estudiante` (
	`id` integer PRIMARY KEY,
	`nom_estudiante` text,
	`id_grupo` integer,
	FOREIGN KEY (`id_grupo`) REFERENCES `grupo`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `quejas` (
	`id` integer PRIMARY KEY,
	`id_estudiantes` integer,
	`id_pae` integer,
	`fecha` numeric,
	`problema` text,
	`nom_queja` text,
	`tipo_alimento` text,
	FOREIGN KEY (`id_pae`) REFERENCES `pae`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id_estudiantes`) REFERENCES `estudiante`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `pae` (
	`id` integer PRIMARY KEY,
	`id_foto` integer,
	`tipo_alimento` text,
	`id_menu` integer,
	FOREIGN KEY (`id_menu`) REFERENCES `menu`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `ingrediente` (
	`id` integer PRIMARY KEY,
	`nom_ingrediente` text
);
--> statement-breakpoint
CREATE TABLE `alimento` (
	`id` integer PRIMARY KEY,
	`id_quejas` integer,
	`id_pae` integer,
	`id_tipo_alimento` integer,
	FOREIGN KEY (`id_pae`) REFERENCES `pae`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id_quejas`) REFERENCES `quejas`(`id`) ON UPDATE no action ON DELETE no action
);

*/