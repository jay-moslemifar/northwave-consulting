import { i18nState } from '$lib/i18n/state.svelte';
import type { Locale } from './config';
import { en } from './en';
import { nl } from './nl';
import type { StringTranslationKey, TranslationSchema } from './schema';

const translations: Record<Locale, TranslationSchema> = {
	en,
	nl,
};

export function setLocale(locale: Locale) {
	i18nState.currentLocale = locale;
}

export function getLocale() {
	return i18nState.currentLocale;
}

function resolveKey(obj: unknown, path: string): unknown {
	return path.split('.').reduce<unknown>((acc, part) => {
		if (typeof acc === 'object' && acc !== null && part in acc) {
			return (acc as Record<string, unknown>)[part];
		}
		return undefined;
	}, obj);
}

export function t(key: StringTranslationKey): string {
	const value = resolveKey(translations[getLocale()], key);

	if (typeof value !== 'string') {
		console.warn(`Missing or non-string translation for "${key}"`);
		return key;
	}

	return value;
}

export function tError(status: number, field: 'message' | 'action') {
	const errors = translations[getLocale()].errors;
	const key = String(status);

	if (key in errors) {
		return errors[key as keyof typeof errors][field];
	}

	return errors.unknown[field];
}
