import { defaultLang, type Lang, ui, type UiKey } from './ui';

export function getLang(locale: string | undefined): Lang {
	return locale && locale in ui ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
	return (key: UiKey): string => ui[lang][key];
}
