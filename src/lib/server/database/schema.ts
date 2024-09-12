import { sqliteTable, integer, text, foreignKey, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const grupo = sqliteTable("grupo", {
	id: integer("id").primaryKey(),
	nomGrup: text("nom_grup").unique(),
	idGrado: integer(grado_id).references(()=>grado.id)
});

export const grado = sqliteTable("grado", {
	id: integer("id").primaryKey(),
	nombre: text("nombre").unique()
});

export const estudiante = sqliteTable("estudiante", {
	id: integer("id").primaryKey(),
	nomEstudiante: text("nom_estudiante"),
	idGrupo: integer("id_grupo").references(() => grupo.id),
});

export const quejas = sqliteTable("quejas", {
	id: integer("id").primaryKey(),
	idEstudiantes: integer("id_estudiantes").references(() => estudiante.id),
	idPae: integer("id_pae").references(() => pae.id),
	fecha: numeric("fecha"),
	problema: text("problema"),
	nomQueja: text("nom_queja"),
	tipoAlimento: text("tipo_alimento"),
});

export const pae = sqliteTable("pae", {
	id: integer("id").primaryKey(),
	idFoto: integer("id_foto"),
	tipoAlimento: text("tipo_alimento"),
});

export const ingrediente = sqliteTable("ingrediente", {
	id: integer("id").primaryKey(),
	nomIngrediente: text("nom_ingrediente"),
});

export const alimento = sqliteTable("alimento", {
	id: integer("id").primaryKey(),
	idQuejas: integer("id_quejas").references(() => quejas.id),
	idPae: integer("id_pae").references(() => pae.id),
	idTipoAlimento: integer("id_tipo_alimento"),
});