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
