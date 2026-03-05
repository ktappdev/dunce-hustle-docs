// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

// Set SITE_URL in your environment (recommended) or replace the fallback with your production docs URL.
const SITE_URL = process.env.SITE_URL || 'https://your-domain.com';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	integrations: [
		sitemap(),
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
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'Dunce Hustle Docs' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: `${SITE_URL}/og-image.png` } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: `${SITE_URL}/og-image.png` } },
			],
			components: {
				Head: './src/components/Head.astro',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Overview', slug: 'guides/overview' },
						{ label: 'FAQ', slug: 'faq' },
					],
				},
				{
					label: 'Game Mechanics',
					items: [
						{ label: 'Game Modes & World', slug: 'mechanics/game-modes' },
						{ label: 'Economy & Trading', slug: 'mechanics/economy' },
						{ label: 'The Safehouse', slug: 'mechanics/safehouse' },
						{ label: 'Insurance & Recovery', slug: 'mechanics/insurance-recovery' },
						{ label: 'Bounty & Heat', slug: 'mechanics/bounty' },
						{ label: 'Travel & Events', slug: 'mechanics/travel-events' },
						{ label: 'Combat & PvP', slug: 'mechanics/combat' },
						{ label: 'Loadout & Stats', slug: 'mechanics/loadout' },
						{ label: 'Profile Progression', slug: 'mechanics/profile-progression' },
						{ label: 'Awards', slug: 'mechanics/awards' },
					],
				},
				{
					label: 'AI & Bots',
					items: [
						{ label: 'Bot Behavior', slug: 'ai/bots' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Glossary', slug: 'reference/glossary' },
						{ label: 'Game Constants', slug: 'reference/game-constants' },
					],
				},
				{
					label: 'Updates',
					items: [
						{ label: 'Changelog', slug: 'changelog' },
					],
				},
			],
		}),
	],
});
