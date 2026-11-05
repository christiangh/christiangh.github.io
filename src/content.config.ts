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

const experience = defineCollection({
	loader: glob({ pattern: '**/*.yaml', base: './src/content/experience' }),
	schema: z.object({
		role: z.string(),
		company: z.string(),
		start: z.number().int(),
		end: z.number().int().optional(),
		location: z.string(),
		summary: z.string(),
		stack: z.array(z.string()),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.yaml', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			stack: z.array(z.string()),
			repo: z.url(),
			demo: z.url().optional(),
			image: image().optional(),
			order: z.number().int(),
		}),
});

export const collections = { about, education, experience, projects };
