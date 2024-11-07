import { getSession } from '$lib/server/database/auth';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    // Obtener la sesión de las cookies
    const session = getSession(event.cookies);
    
    // Establecer el usuario en locals
    event.locals.user = session;

    // Proteger rutas que requieren autenticación
    if (event.url.pathname.startsWith('/quejas') && !session) {
        return new Response('Redirect', {
            status: 303,
            headers: { Location: '/login' }
        });
    }

    const response = await resolve(event);
    return response;
};