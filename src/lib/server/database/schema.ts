import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const grupo = sqliteTable("grupo", {
  id: integer("id").primaryKey(),
  nomGrup: text("nom_grup").notNull(),
});

export const grado = sqliteTable("grado", {
  id: integer("id").primaryKey(),
  idGrupo: integer("id_grupo").references(() => grupo.id).notNull(),
});

export const estudiantes = sqliteTable("Estudiantes", {
  idEstudiante: integer("id_estudiante").primaryKey({ autoIncrement: true }),
  nombre: text("nombre", { length: 100 }).notNull(),
  grupo: text("grupo", { length: 10 }).notNull(),
  grado: text("grado", { length: 10 }).notNull(),
  pin: text("pin", { length: 10 }).notNull(),
  correo: text("correo", { length: 100 }).notNull(),
});

export const quejas = sqliteTable("Quejas", {
  idQueja: integer("id_queja").primaryKey({ autoIncrement: true }),
  idEstudiante: integer("id_estudiante")
    .references(() => estudiantes.idEstudiante)
    .notNull(),
  fecha: text("fecha").notNull(),
  alimento: text("alimento").notNull(),
  tipoQueja: text("tipo_queja").notNull(),
  problema: text("problema").notNull(),
});
