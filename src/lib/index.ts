import { en } from './i18n/en';
import { nl } from './i18n/nl';

export const translations = { en, nl } as const;
export type Lang = keyof typeof translations;
