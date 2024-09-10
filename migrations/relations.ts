import { relations } from "drizzle-orm/relations";
import { grupo, grado, estudiante } from "./schema";

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

export const estudianteRelations = relations(estudiante, ({one}) => ({
	grupo: one(grupo, {
		fields: [estudiante.idGrupo],
		references: [grupo.id]
	}),
}));