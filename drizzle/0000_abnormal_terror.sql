CREATE TABLE `Estudiantes` (
	`id_estudiante` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nombre` text(100) NOT NULL,
	`grupo` text(10) NOT NULL,
	`grado` text(10) NOT NULL,
	`pin` text(10) NOT NULL,
	`correo` text(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `grado` (
	`id` integer PRIMARY KEY NOT NULL,
	`id_grupo` integer NOT NULL,
	FOREIGN KEY (`id_grupo`) REFERENCES `grupo`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `grupo` (
	`id` integer PRIMARY KEY NOT NULL,
	`nom_grup` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `Quejas` (
	`id_queja` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`id_estudiante` integer NOT NULL,
	`fecha` text NOT NULL,
	`alimento` text NOT NULL,
	`tipo_queja` text NOT NULL,
	`problema` text NOT NULL,
	FOREIGN KEY (`id_estudiante`) REFERENCES `Estudiantes`(`id_estudiante`) ON UPDATE no action ON DELETE no action
);
