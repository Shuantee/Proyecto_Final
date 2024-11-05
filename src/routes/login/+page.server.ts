import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/database/client';
import { estudiantes } from '$lib/server/database/schema.js';
import { eq } from 'drizzle-orm';


export const load = async () => {};
export const actions = {
	handleLogin: async ({ request }: { request: Request; }) => {
		const data = Object.fromEntries(await request.formData());
		const pin = String(data.pin);

		// Verificar que todos los campos estén presentes
		if (
			typeof data.email !== 'string' ||
			typeof data.pin !== 'string' ||
            typeof data.name !== 'string' ||
			!data.email ||
			!data.pin ||
            !data.name 
		) {
			return fail(400, { invalid: true });
		}

		// Buscar estudiante en la base de datos
		const user = await db.select().from(estudiantes).where(eq(estudiantes.correo, data.email,));

		if (!user || user.length === 0 || user[0].pin !== pin) {
			return fail(400, { credentials: true });
		}

		if (user.length > 1) {
			return fail(400, { duplicate: true });
		}


		// Redireccionar al usuario
		throw redirect(302, '/');
	}
};

