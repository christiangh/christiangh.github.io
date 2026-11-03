import type { es } from './es';

/**
 * English UI strings. Must define exactly the same keys as `es`.
 */
export const en = {
	// Meta
	'meta.title': 'Christian García Herreras · Senior Frontend Developer',
	'meta.description':
		'Senior frontend developer specialized in Angular. I design scalable frontend architectures and work with Astro and AI applied to development.',
} satisfies Record<keyof typeof es, string>;
