import { setLocale, type Locale } from '$lib/i18n/index';

export function load({ params }) {
	const locale = params.lang as Locale;
	setLocale(locale);
	return;
}
