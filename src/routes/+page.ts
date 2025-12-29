import { defaultLocale } from '$lib/i18n/index.js';
import { redirect } from '@sveltejs/kit';

export function load({ url }) {
	if (url.pathname === '/') redirect(307, `/${defaultLocale}`);
}
