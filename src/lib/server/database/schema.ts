import { sqliteTable, foreignKey, integer, text } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"

export const estudiantes = sqliteTable("estudiantes", {
	idEstudiante: integer("id_estudiante").primaryKey({ autoIncrement: true }),
	nombre: text().notNull(),
	grupo: integer().references(() => grupo.id),
	grado: integer().references(() => grado.id),
	pin: text().notNull(),
	correo: text().notNull(),
});

export const quejas = sqliteTable("quejas", {
	idQueja: integer("id_queja").primaryKey({ autoIncrement: true }),
	idEstudiante: integer("id_estudiante").notNull().references(() => estudiantes.idEstudiante),
	fecha: text().notNull(),
	alimento: text().notNull(),
	tipoQueja: text("tipo_queja").notNull(),
	problema: text().notNull(),
});

export const grupo = sqliteTable("grupo", {
	id: integer().primaryKey({ autoIncrement: true }),
	gradoId: integer("grado_id").notNull().references(() => grado.id),
	nombre: text().notNull(),
});

export const grado = sqliteTable("grado", {
	id: integer().primaryKey({ autoIncrement: true }),
	nombre: text().notNull(),
});

export const drizzleMigrations = sqliteTable("__drizzle_migrations", {
});

