import { en } from './locales/en';
import { es } from './locales/es';

export const languages = {
	es: 'Español',
	en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = { es, en } as const;

export type UiKey = keyof typeof es;
