import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/database/client';
import { estudiantes } from '$lib/server/database/schema.js';
import { eq } from 'drizzle-orm';
import { createSession } from '$lib/server/database/auth.js';

export const load = async ({ locals }) => {
    // Redirigir si ya está autenticado
    if (locals.user) {
        throw redirect(302, '/');
    }
    return {};
};

export const actions = {
    handleLogin: async ({ request, cookies }) => {
        const data = await request.formData();
        const email = data.get('email');
        const pin = data.get('pin');

        if (!email || !pin || typeof email !== 'string' || typeof pin !== 'string') {
            return fail(400, { error: 'Email y PIN son requeridos' });
        }

        try {
            const user = await db.select({
                idEstudiante: estudiantes.idEstudiante,
                nombre: estudiantes.nombre,
                pin: estudiantes.pin,
                correo: estudiantes.correo
            })
            .from(estudiantes)
            .where(eq(estudiantes.correo, email))
            .limit(1);

            if (user.length === 0) {
                return fail(400, { error: 'Usuario no encontrado' });
            }

            if (user[0].pin !== pin) {
                return fail(400, { error: 'PIN incorrecto' });
            }

            // Crear sesión
            createSession(cookies, {
                id: user[0].idEstudiante,
                nombre: user[0].nombre
            });

            return { success: true };
        } catch (error) {
            console.error('Error en el login:', error);
            return fail(500, { error: 'Error interno del servidor' });
        }
    }
};