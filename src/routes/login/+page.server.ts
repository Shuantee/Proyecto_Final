import type { Cookies } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/database/client';
import { estudiantes } from '$lib/server/database/schema';
import { eq } from 'drizzle-orm';

export const load = async () => {
    // Lógica de carga si es necesaria
};

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
        const user = await db.select().from(estudiantes).where(eq(estudiantes.correo, data.email));

        // Verificar si el usuario existe y el PIN es correcto
        if (!user || user.length === 0 || user[0].pin !== pin) {
            return fail(400, { credentials: true });
        }

        if (user.length > 1) {
            return fail(400, { duplicate: true });
        }

        // Generar token de sesión
        const authenticatedUser = crypto.randomUUID();

        // Guardar token en la base de datos (asegúrate de que `token` existe en el esquema de `estudiantes`)
        await db
            .update(estudiantes)
            .set({ token: authenticatedUser })
            .where(eq(estudiantes.correo, data.email));

        // Crear la cookie de sesión
        cookies.set('session', authenticatedUser, {
            path: '/',
            maxAge: 60 * 60 * 24 * 30
        });

        // Redireccionar al usuario
        throw redirect(302, '/');
    }
};
