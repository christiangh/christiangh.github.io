import type { es } from './es';

export const en = {
	'meta.title': 'Christian García Herreras · Senior Frontend Developer',
	'meta.description':
		'Senior frontend developer specialized in Angular. I design scalable frontend architectures and work with Astro and AI applied to development.',

	'nav.label': 'Main',
	'nav.menu': 'menu',
	'nav.close': 'close',

	'section.about.title': 'About *me*',
	'section.education.title': 'Educa*tion*',
	'section.experience.title': 'Experi*ence*',
	'section.projects.title': 'Proj*ects*',
	'section.contact.title': 'Con*tact*',
} satisfies Record<keyof typeof es, string>;
