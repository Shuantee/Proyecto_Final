import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const estudiantes = sqliteTable("Estudiantes", {
    idEstudiante: integer("id_estudiante").primaryKey({ autoIncrement: true }),
    nombre: text("nombre").notNull(),
    grupo: integer("grupo").references(() => grupo.id),
    grado: integer("grado").references(() => grado.id),
    pin: text("pin").notNull(),
    correo: text("correo").notNull(),
});

export const quejas = sqliteTable("Quejas", {
    idQueja: integer("id_queja").primaryKey({ autoIncrement: true }),
    idEstudiante: integer("id_estudiante").notNull().references(() => estudiantes.idEstudiante),
    fecha: text("fecha").notNull(),
    alimento: text("alimento").notNull(),
    tipoQueja: text("tipo_queja").notNull(),
    problema: text("problema").notNull(),
});

export const grupo = sqliteTable("grupo", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    gradoId: integer("grado_id").notNull().references(() => grado.id),
    nombre: text("nombre").notNull(),
});

export const grado = sqliteTable("grado", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    nombre: text("nombre").notNull(),
});