import { defaultLang, type Lang, ui, type UiKey } from './ui';

export function getLang(locale: string | undefined): Lang {
	return locale && locale in ui ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
	return (key: UiKey): string => ui[lang][key];
}

/** Page path without its locale prefix: "/en/projects/x/" → "projects/x/". */
export function stripLocale(pathname: string): string {
	const [, first = '', ...rest] = pathname.split('/');
	return (first in ui ? rest : [first, ...rest]).join('/');
}
