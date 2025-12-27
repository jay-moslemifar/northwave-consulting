import { redirect } from '@sveltejs/kit';

export function load({ params }) {
	if (!params.lang) {
		throw redirect(307, '/en');
	}
}
