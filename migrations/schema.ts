import { sqliteTable, integer, foreignKey, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const grupo = sqliteTable("GRUPO", {
	id: integer("id").primaryKey(),
	nomGrup: text("nom_grup", { length: 255 }),
});

export const grado = sqliteTable("GRADO", {
	id: integer("id").primaryKey(),
	idGrupo: integer("id_grupo").references(() => grupo.id),
});

export const estudiante = sqliteTable("estudiante", {
	id: integer("id").primaryKey(),
	nomEstudiante: text("nom_estudiante"),
	idGrupo: integer("id_grupo").references(() => grupo.id),
});

export const quejas = sqliteTable ("quejas", {
	id: integer("id").primaryKey(),
	idestudiantes: integer("id_estudiantes").references(() => estudiante.id),
	idpae: integer("id_pae").references(() => pae.id),
	fecha: integer ("fecha"),
	problema: text ("problema"),
	nomqueja: text("nom_queja"),
	tipoalimento: text ("tipo_alimento")
});

export const pae = sqliteTable ("pae", {
	id: integer ("id").primaryKey(),
	idfoto: integer("id_foto").references(() => pae.id),
	tipoalimento: text("tipo_alimento"),
});

export const categorías = sqliteTable ("categorias", {
	id: integer ("id").primaryKey(),
	idqueja: integer ("id_queja").references (() => quejas.id)
});