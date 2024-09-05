import { relations } from "drizzle-orm/relations";
import { grupo, grado } from "./schema";

export const gradoRelations = relations(grado, ({one}) => ({
	grupo: one(grupo, {
		fields: [grado.idGrupo],
		references: [grupo.id]
	}),
}));

export const grupoRelations = relations(grupo, ({many}) => ({
	grados: many(grado),
}));