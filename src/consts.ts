export const SITE = {
	title: 'Kitsune Documentation',
	description: 'Kitsune Documentation',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/kitsune-soc/docs/tree/main`;

export const COMMUNITY_INVITE_URL = ``; // TODO: Create Discord server/Matrix room

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'joinkitsune',
	appId: '8NTRUXJOUV',
	apiKey: 'ee18455917eebc32022b1f44ba10bf09',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'About': [
			{ text: 'Introduction', link: 'en/introduction' }
		],
		'Running Kitsune': [
			{ text: 'Installation', link: 'en/running/installation' },
			{ text: 'Basic Configuration', link: 'en/running/basic-configuration' }
		],
		'Configuring Kitsune': [
			{ text: 'Cache', link: 'en/configuring/cache' },
			{ text: 'Database', link: 'en/configuring/database' },
			{ text: 'Search', link: 'en/configuring/search' },
			{ text: 'Storage', link: 'en/configuring/storage' },
			{ text: 'OIDC (Single sign-on)', link: 'en/configuring/oidc' },
		]
	},
};
