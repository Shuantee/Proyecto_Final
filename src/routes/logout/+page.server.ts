import { redirect } from '@sveltejs/kit';
import { destroySession } from '$lib/server/database/auth';

export async function POST({ cookies }) {
    destroySession(cookies);
    throw redirect(302, '/login');
}