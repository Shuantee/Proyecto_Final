import { getSession } from '$lib/server/database/auth';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const session = getSession(event.cookies);
    event.locals.user = session;
    
    const response = await resolve(event);
    return response;
};