import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const about = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/about' }),
	schema: z.object({
		headline: z.string(),
	}),
});

const education = defineCollection({
	loader: glob({ pattern: '**/*.yaml', base: './src/content/education' }),
	schema: z.object({
		title: z.string(),
		institution: z.string(),
		end: z.number().int(),
		kind: z.enum(['degree', 'cert']),
	}),
});

export const collections = { about, education };
