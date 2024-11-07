import { getSession } from '$lib/server/database/auth';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.user = getSession(event.cookies);

    // Proteger rutas que requieren autenticación
    const protectedRoutes = ['/quejas'];
    if (protectedRoutes.some(route => event.url.pathname.startsWith(route)) && !event.locals.user) {
        return new Response('Redirect', {
            status: 303,
            headers: { Location: '/login' }
        });
    }

    return await resolve(event);
};