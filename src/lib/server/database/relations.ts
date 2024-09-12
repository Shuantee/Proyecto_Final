import { relations } from "drizzle-orm/relations";
import { grupo, grado, estudiante, pae, quejas, menu, alimento } from "./schema";

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

export const quejasRelations = relations(quejas, ({one, many}) => ({
	pae: one(pae, {
		fields: [quejas.idPae],
		references: [pae.id]
	}),
	estudiante: one(estudiante, {
		fields: [quejas.idEstudiantes],
		references: [estudiante.id]
	}),
	alimentos: many(alimento),
}));

export const paeRelations = relations(pae, ({one, many}) => ({
	quejas: many(quejas),
	menu: one(menu, {
		fields: [pae.idMenu],
		references: [menu.id]
	}),
	alimentos: many(alimento),
}));

export const menuRelations = relations(menu, ({many}) => ({
	paes: many(pae),
}));

export const alimentoRelations = relations(alimento, ({one}) => ({
	pae: one(pae, {
		fields: [alimento.idPae],
		references: [pae.id]
	}),
	queja: one(quejas, {
		fields: [alimento.idQuejas],
		references: [quejas.id]
	}),
}));