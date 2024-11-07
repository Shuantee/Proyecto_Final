import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/database/client';
import { quejas } from '$lib/server/database/schema';
import { eq } from 'drizzle-orm'; // Asegúrate de importar eq

export const load = async ({ locals }) => {
    // Verificar si el usuario está autenticado
    if (!locals.user) {
        throw redirect(302, '/login');
    }

    // Cargar las quejas del usuario
    const userQuejas = await db.select()
        .from(quejas)
        .where(eq(quejas.idEstudiante, locals.user.id));

    return {
        quejas: userQuejas
    };
};

export const actions = {
    agregarQueja: async ({ request, locals }) => {
        if (!locals.user) {
            throw redirect(302, '/login');
        }

        const data = await request.formData();
        const fecha = data.get('fecha');
        const alimento = data.get('alimento');
        const tipoQueja = data.get('tipoQueja');
        const problema = data.get('problema');

        if (!fecha || !alimento || !tipoQueja || !problema) {
            return fail(400, { error: 'Todos los campos son requeridos' });
        }

        const nuevaQueja = {
            idEstudiante: locals.user.id,
            fecha: String(fecha),
            alimento: String(alimento),
            tipoQueja: String(tipoQueja),
            problema: String(problema),
        };

        try {
            await db.insert(quejas).values(nuevaQueja);
            return { success: true };
        } catch (error) {
            console.error("Error al insertar la queja:", error);
            return fail(500, { error: 'Error al registrar la queja' });
        }
    }
};