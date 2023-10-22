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

export const COMMUNITY_INVITE_URL = `https://matrix.to/#/#kitsune-space:matrix.org`;

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
		'Specification': [
			{ text: 'Webfinger', link: 'en/spec/webfinger' },
			{ text: 'HTTP signatures', link: 'en/spec/http-signatures' }
		],
		'Running Kitsune': [
			{ text: 'Installation', link: 'en/running/installation' },
			{ text: 'Basic Configuration', link: 'en/running/basic-configuration' }
		],
		'Configuring Kitsune': [
			{ text: 'Cache', link: 'en/configuring/cache' },
			{ text: 'Captcha', link: 'en/configuring/captcha' },
			{ text: 'Database', link: 'en/configuring/database' },
			{ text: 'Emailing', link: 'en/configuring/email' },
			{ text: 'Federation filter', link: 'en/configuring/federation-filter' },
			{ text: 'Instance', link: 'en/configuring/instance' },
			{ text: 'Job scheduler', link: 'en/configuring/job-scheduler' },
			{ text: 'Link embedding', link: 'en/configuring/link-embedding' },
			{ text: 'Messaging', link: 'en/configuring/messaging' },
			{ text: 'OIDC (Single sign-on)', link: 'en/configuring/oidc' },
			{ text: 'OpenTelemetry', link: 'en/configuring/opentelemetry' },
			{ text: 'Search', link: 'en/configuring/search' },
			{ text: 'Storage', link: 'en/configuring/storage' },
		]
	},
};
