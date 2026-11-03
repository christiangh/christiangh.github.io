// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://christiangh.github.io',
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Libre Bodoni',
			cssVariable: '--font-libre-bodoni',
			weights: ['400 700'],
			styles: ['normal', 'italic'],
			subsets: ['latin'],
			fallbacks: ['serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Bricolage Grotesque',
			cssVariable: '--font-bricolage-grotesque',
			weights: ['300 800'],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'JetBrains Mono',
			cssVariable: '--font-jetbrains-mono',
			weights: ['400 700'],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['monospace'],
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
