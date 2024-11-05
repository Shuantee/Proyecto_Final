import type { RequestEvent } from '@sveltejs/kit';
import { db } from '$lib/server/database/client';
import { quejas } from '$lib/server/database/schema';

export const actions = {
    quejas: async ({ request }: RequestEvent) => {
        // Extraer los datos del formulario
        const peticion = Object.fromEntries(await request.formData());
        
        // Convertir la fecha a texto para que coincida con el esquema
        const fechaTexto = new Date().toISOString();

        // Inserción en la base de datos
        await db.insert(quejas).values({
            idEstudiante: Number(peticion.id), 
            fecha: fechaTexto, 
            alimento: peticion.alimento,
            tipoQueja: peticion.tipo,
            problema: peticion.problema,
        });

        return { success: true };
    }
};
