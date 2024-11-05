import { quejas } from '$lib/server/database/schema';
import { db } from '$lib/server/database/client';

export const actions = {
    agregarQueja: async ({ request }) => {
        const data = Object.fromEntries(await request.formData());

        const nuevaQueja = {
            idEstudiante: Number(data.idEstudiante), // Asegúrate de convertir a número si es necesario
            fecha: String(data.fecha),
            alimento: String(data.alimento),
            tipoQueja: String(data.tipoQueja),
            problema: String(data.problema),
        };

        try {
            await db.insert(quejas).values(nuevaQueja);
        } catch (error) {
            console.error("Error al insertar la queja:", error);
        }
    }
};