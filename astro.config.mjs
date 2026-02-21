// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Dunce Hustle Docs',
			logo: {
				src: './src/assets/logo-no-bg.png',
				alt: 'Dunce Hustle',
				replacesTitle: false,
			},
			favicon: '/favicon.ico',
			head: [
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: '/og-image.png' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: '/og-image.png' } },
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ktappdev/dunce-hustle-docs' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Overview', slug: 'guides/overview' },
					],
				},
				{
					label: 'Game Mechanics',
					items: [
						{ label: 'Economy & Trading', slug: 'mechanics/economy' },
						{ label: 'Travel & Events', slug: 'mechanics/travel-events' },
						{ label: 'Combat & PvP', slug: 'mechanics/combat' },
						{ label: 'Loadout & Stats', slug: 'mechanics/loadout' },
					],
				},
				{
					label: 'AI & Bots',
					items: [
						{ label: 'Bot Behavior', slug: 'ai/bots' },
					],
				},
			],
		}),
	],
});
