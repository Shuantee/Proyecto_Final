import { sqliteTable, integer, text, foreignKey, numeric } from "drizzle-orm/sqlite-core"


export const grupo = sqliteTable("grupo", {
	id: integer().primaryKey(),
	nomGrup: text("nom_grup"),
});

export const grado = sqliteTable("grado", {
	id: integer().primaryKey(),
	idGrupo: integer("id_grupo").references(() => grupo.id),
});

export const estudiante = sqliteTable("estudiante", {
	id: integer().primaryKey(),
	nomEstudiante: text("nom_estudiante"),
	idGrupo: integer("id_grupo").references(() => grupo.id),
});

export const quejas = sqliteTable("quejas", {
	id: integer().primaryKey(),
	idEstudiantes: integer("id_estudiantes").references(() => estudiante.id),
	idPae: integer("id_pae").references(() => pae.id),
	fecha: numeric(),
	problema: text(),
	nomQueja: text("nom_queja"),
	tipoAlimento: text("tipo_alimento"),
});

export const ingrediente = sqliteTable("ingrediente", {
	id: integer().primaryKey(),
	nomIngrediente: text("nom_ingrediente"),
});

export const pae = sqliteTable("pae", {
	id: integer().primaryKey(),
	idFoto: integer().notNull(),
	tipoAlimento: text().notNull(),
});

