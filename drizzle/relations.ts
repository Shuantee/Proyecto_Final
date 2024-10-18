import { relations } from "drizzle-orm/relations";
import { grupo, grado, estudiante, quejas, pae } from "./schema";

export const gradoRelations = relations(grado, ({one}) => ({
	grupo: one(grupo, {
		fields: [grado.idGrupo],
		references: [grupo.id]
	}),
}));

export const grupoRelations = relations(grupo, ({many}) => ({
	grados: many(grado),
	estudiantes: many(estudiante),
}));

export const estudianteRelations = relations(estudiante, ({one, many}) => ({
	grupo: one(grupo, {
		fields: [estudiante.idGrupo],
		references: [grupo.id]
	}),
	quejas: many(quejas),
}));

export const quejasRelations = relations(quejas, ({one}) => ({
	estudiante: one(estudiante, {
		fields: [quejas.idEstudiantes],
		references: [estudiante.id]
	}),
	pae: one(pae, {
		fields: [quejas.idPae],
		references: [pae.id]
	}),
}));

export const paeRelations = relations(pae, ({many}) => ({
	quejas: many(quejas),
}));