import mdx from '@astrojs/mdx';
import purgecss from 'astro-purgecss';
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://Equationzhao.github.io',
	integrations: [mdx(), sitemap(), purgecss()],
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
});
