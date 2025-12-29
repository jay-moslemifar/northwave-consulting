export type TranslationSchema = {
	nav: {
		home: string;
		about: string;
		contact: string;
	};
	footer: {
		tagline: string;
		copyright: string;
	};
	errors: { '404': { message: string; action: string } };
};

export type StringTranslationKey =
	| 'nav.home'
	| 'nav.about'
	| 'nav.contact'
	| 'footer.tagline'
	| 'footer.copyright'
	| 'errors.404.message'
	| 'errors.404.action';
