import { redirect } from '@sveltejs/kit';

export function load({ url }) {
	if (url.pathname === '/') redirect(307, '/en');
}
