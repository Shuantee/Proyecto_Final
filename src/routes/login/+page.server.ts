import type { Cookies } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/database/client';
import { estudiante } from '$lib/server/database/tables';
import { eq } from 'drizzle-orm';

export const load = async () => {};
  //jueputa ome sin esos cambios no hay login que gonorrea que maricada con Ana, saquemosla del grupo >:( 
export const actions = {
	login: async ({ request, cookies }: { request: Request; cookies: Cookies }) => {
		const data = Object.fromEntries(await request.formData());
		const pin = String(data.pin);

		// Verificar que todos los campos estén presentes
		if (
			typeof data.email !== 'string' ||
			typeof data.pin !== 'string' ||
			!data.email ||
			!data.pin
		) {
			return fail(400, { invalid: true });
		}

		// Buscar estudiante en la base de datos
		const user = await db.select().from(estudiante).where(eq(estudiante.correo, data.email));

		if (!user || user.length === 0 || user[0].pin !== pin) {
			return fail(400, { credentials: true });
		}

		if (user.length > 1) {
			return fail(400, { duplicate: true });
		}

		// Generar token de sesión
		const authenticatedUser = crypto.randomUUID();

		// Guardar token en la base de datos
		await db
			.update(estudiante)
			.set({ token: authenticatedUser })
			.where(eq(estudiante.correo, data.email));

		// Crear la cookie de sesión
		cookies.set('session', authenticatedUser, {
			path: '/',
			maxAge: 60 * 60 * 24 * 30
		});

		// Redireccionar al usuario
		throw redirect(302, '/');
	}
};
