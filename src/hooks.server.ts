import { getSession } from '$lib/server/database/auth';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    // Obtener la sesión del usuario
    const session = getSession(event.cookies);
    event.locals.user = session;

    // Agregar los datos del usuario a la data de la página
    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace(
            '%user%',
            session ? JSON.stringify(session) : 'null'
        )
    });
};