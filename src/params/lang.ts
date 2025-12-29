import { LOCALES, type Locale } from '$lib/i18n';

export function match(value) {
	return LOCALES.includes(value as Locale);
}
