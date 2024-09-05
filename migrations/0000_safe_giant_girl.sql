-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `GRUPO` (
	`ID` integer PRIMARY KEY,
	`nom_grup` text(255)
);
--> statement-breakpoint
CREATE TABLE `GRADO` (
	`ID` integer PRIMARY KEY,
	`ID_grupo` integer,
	FOREIGN KEY (`ID_grupo`) REFERENCES `GRUPO`(`ID`) ON UPDATE no action ON DELETE no action
);

*/