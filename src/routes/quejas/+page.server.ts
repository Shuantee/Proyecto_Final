import type { RequestEvent } from '@sveltejs/kit';

import { db } from '$lib/server/database/client'
import { quejas } from '$lib/server/database/schema'


export const actions = {
    quejas: async ({ request }: { request: RequestEvent }) => {

        const peticion = Object.fromEntries(await request.formData())
        console.log(peticion)
        const ana = await db.select().from(quejas)
        

       await db.insert(quejas).values(
            {
                idEstudiante: 3,
                fecha: new Date(),
                alimento: "sfsdffd",
                tipoQueja: peticion.tipo,
                problema: peticion.problema,
            }
        )
        return
    }
}





