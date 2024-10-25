import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const grupo = sqliteTable("grupo", {
	id: integer().primaryKey(),
	nomGrup: text("nom_grup"),
});

export const grado = sqliteTable("grado", {
	id: integer().primaryKey(),
	idGrupo: integer("id_grupo").references(() => grupo.id),
});

export const quejas = sqliteTable("Quejas", {
	idQueja: integer("id_queja").primaryKey({ autoIncrement: true }),
	idEstudiante: integer("id_estudiante").notNull().references(() => estudiantes.idEstudiante),
	fecha: text().notNull(),
	alimento: text().notNull(),
	tipoQueja: text("tipo_queja").notNull(),
	problema: text().notNull(),
});

export const estudiantes = sqliteTable("Estudiantes", {
	idEstudiante: integer("id_estudiante").primaryKey({ autoIncrement: true }),
	nombre: text({ length: 100 }).notNull(),
	grupo: text({ length: 10 }).notNull(),
	grado: text({ length: 10 }).notNull(),
	pin: text({ length: 10 }).notNull(),
	correo: text({ length: 100 }).notNull(),
});

