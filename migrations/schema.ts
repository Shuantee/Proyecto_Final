import { sqliteTable, AnySQLiteColumn, integer, foreignKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const grupo = sqliteTable("GRUPO", {
	id: integer("ID").primaryKey(),
	nomGrup: text("nom_grup", { length: 255 }),
});

export const grado = sqliteTable("GRADO", {
	id: integer("ID").primaryKey(),
	idGrupo: integer("ID_grupo").references(() => grupo.id),
});