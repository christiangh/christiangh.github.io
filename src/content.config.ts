import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const about = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/about' }),
	schema: z.object({
		headline: z.string(),
	}),
});

export const collections = { about };
