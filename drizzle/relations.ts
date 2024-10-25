import { relations } from "drizzle-orm/relations";
import { grupo, grado, estudiantes, quejas } from "./schema";

export const gradoRelations = relations(grado, ({one}) => ({
	grupo: one(grupo, {
		fields: [grado.idGrupo],
		references: [grupo.id]
	}),
}));

export const grupoRelations = relations(grupo, ({many}) => ({
	grados: many(grado),
}));

export const quejasRelations = relations(quejas, ({one}) => ({
	estudiante: one(estudiantes, {
		fields: [quejas.idEstudiante],
		references: [estudiantes.idEstudiante]
	}),
}));

export const estudiantesRelations = relations(estudiantes, ({many}) => ({
	quejas: many(quejas),
}));