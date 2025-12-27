import { error } from '@sveltejs/kit';
import { translations, type Lang } from '$lib';

export function load({ params }) {
	const lang = params.lang as Lang;

	if (!(lang in translations)) {
		throw error(404, 'Language not supported');
	}

	return { lang, tr: translations[lang] };
}
