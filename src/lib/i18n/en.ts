import type { TranslationSchema } from './schema';

export const en: TranslationSchema = {
	nav: {
		home: 'Home',
		about: 'About',
		contact: 'Contact',
	},
	footer: {
		tagline: 'Clear digital solutions for growing businesses',
		copyright: '© Northwave Consulting',
	},
	errors: {
		'404': { message: 'Page not found', action: 'Go back home' },
		unknown: { message: 'Unknown error', action: 'Go back home' },
	},
};
