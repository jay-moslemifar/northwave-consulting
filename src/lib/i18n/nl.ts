import type { TranslationSchema } from './schema';

export const nl: TranslationSchema = {
	nav: {
		home: 'Home',
		about: 'Over ons',
		contact: 'Contact',
	},
	footer: {
		tagline: 'Heldere digitale oplossingen voor groeiende bedrijven',
		copyright: '© 2026 Northwave Consulting',
	},
	errors: {
		'404': { message: 'Pagina niet gevonden', action: 'Terug naar home' },
		unknown: { message: 'Onbekende fout', action: 'Terug naar home' },
	},
};
