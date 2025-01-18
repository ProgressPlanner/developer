// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";
const year = new Date().getFullYear();

/** @type {import("@docusaurus/types").Config} */
export default {
	title: "Progress Planner developer portal",
	url: "https://developer.progressplanner.com",
	baseUrl: "/",

	favicon: "img/icon_progress_planner.svg",
	trailingSlash: true,
	i18n: {
		defaultLocale: "en",
		locales: [ "en" ],
	},
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	markdown: {
		mermaid: true,
	},

	scripts: [
		{
			src: 'https://plausible.io/js/script.js', 
			defer: true, 'data-domain': 'developer.progressplanner.com'
		}
	],
	
	headTags: [
		{
			tagName: "meta",
			attributes: {
				property: "og:site_name",
				content: "Progress Planner developer portal",
			},
		},
		{
			tagName: "script",
			attributes: {
				type: "application/ld+json",
			},
			innerHTML: "{\n" +
					   '\t"@context": "https://schema.org",\n' +
					   '\t"@graph": [\n' +
					   "\t\t{\n" +
					   '\t\t\t"@type": "WebSite",\n' +
					   '\t\t\t"@id": "https://developer.progressplanner.com/#website",\n' +
					   '\t\t\t"url": "https://developer.progressplanner.com/",\n' +
					   '\t\t\t"name": "Progress Planner Developer",\n' +
					   '\t\t\t"description": "Docs for Progress Planner",\n' +
					   '\t\t\t"publisher": {\n' +
					   '\t\t\t\t"@id": "https://progressplanner.com/#organization"\n' +
					   "\t\t\t},\n" +
					   '\t\t\t"potentialAction": [\n' +
					   "\t\t\t\t{\n" +
					   '\t\t\t\t\t"@type": "SearchAction",\n' +
					   '\t\t\t\t\t"target": {\n' +
					   '\t\t\t\t\t\t"@type": "EntryPoint",\n' +
					   '\t\t\t\t\t\t"urlTemplate": "https://developer.progressplanner.com/search/?q={search_term_string}"\n' +
					   "\t\t\t\t\t},\n" +
					   '\t\t\t\t\t"query-input": "required name=search_term_string"\n' +
					   "\t\t\t\t}\n" +
					   "\t\t\t],\n" +
					   '\t\t\t"inLanguage": "en-US",\n' +
					   '\t\t\t"copyrightHolder": {\n' +
					   '\t\t\t\t"@id": "https://progressplanner.com/#organization"\n' +
					   "\t\t\t}\n" +
					   "\t\t},\n" +
					   "\t\t{\n" +
					   '\t\t\t"@type": [\n' +
					   '\t\t\t\t"Organization",\n' +
					   '\t\t\t\t"Brand"\n' +
					   "\t\t\t],\n" +
					   '\t\t\t"@id": "https://progressplanner.com/#organization",\n' +
					   '\t\t\t"name": "Progress Planner",\n' +
					   '\t\t\t"url": "https://progressplanner.com/",\n' +
					   '\t\t\t"logo": {\n' +
					   '\t\t\t\t"@type": "ImageObject",\n' +
					   '\t\t\t\t"inLanguage": "en-US",\n' +
					   '\t\t\t\t"@id": "https://progressplanner.com/#/schema/logo/image/",\n' +
					   '\t\t\t\t"url": "https://progressplanner.com/wp-content/uploads/2024/11/icon_progress_planner_emilia.svg",\n' +
					   '\t\t\t\t"contentUrl": "https://progressplanner.com/wp-content/uploads/2024/11/icon_progress_planner_emilia.svg",\n' +
					   '\t\t\t\t"width": 500,\n' +
					   '\t\t\t\t"height": 500,\n' +
					   '\t\t\t\t"caption": "Progress Planner"\n' +
					   "\t\t\t},\n" +
					   '\t\t\t"image": {\n' +
					   '\t\t\t\t"@id": "https://progressplanner.com/#/schema/logo/image/"\n' +
					   "\t\t\t},\n" +
					   '\t\t\t"sameAs": [\n' +
					   '\t\t\t\t"https://progressplanner.com",\n' +
					   "\t\t\t]\n" +
					   "\t\t}\n" +
					   "\t]\n" +
					   "}",
		},
	],

	themes: [
		require.resolve( "@docusaurus/theme-mermaid" ),
		[
			require.resolve( "@easyops-cn/docusaurus-search-local" ),
			{
				hashed: true,
				indexBlog: false,
				docsRouteBasePath: "/",
			},
		],
	],

	presets: [
		[
			"classic",
			/** @type {import("@docusaurus/preset-classic").Options} */
			(
				{
					docs: {
						routeBasePath: "/",
						sidebarPath: require.resolve( "./sidebars.js" ),
						editUrl: "https://github.com/emilia-capital/developer/tree/main/",
					},
					theme: {
						customCss: require.resolve( "./src/css/custom.css" ),
					},
					sitemap: {
						lastmod: "date",
						priority: null,
						changefreq: null,
					},
				}
			),
		],
	],

	themeConfig:
	/** @type {import("@docusaurus/preset-classic").ThemeConfig} */
		(
			{
				navbar: {
					style: "primary",
					logo: {
						height: "50px",
						alt: "Progress Planner Logo",
						src: "img/logo_progress_planner_diap.svg",
					},
					items: [
						{
							href: "https://github.com/emilia-capital/progress-planner",
							label: "GitHub",
							position: "right",
						},
						{
							type: "search",
							position: "right",
						},
					],
				},
				footer: {
					style: "dark",
					links: [
						{
							title: "Progress Planner",
							items: [
								{
									label: "Our blog",
									href: "https://progressplanner.com/blog/",
								},
								{
									label: "About us",
									href: "https://progressplanner.com/about-progress-planner/",
								}
							],
						},
						{
							title: "The plugin",
							items: [
								{
									label: "Install",
									href: "https://progressplanner.com/download/",
								},
								{
									label: "Pro",
									href: "https://progressplanner.com/pro/",
								}
							],
						},
						{
							title: "Legal",
							items: [
								{
									label: "Terms of Service",
									href: "https://progressplanner.com/terms-of-service/",
								},
								{
									label: "Privacy policy",
									href: "https://progressplanner.com/privacy-policy/",
								}
							],
						},
					],
					copyright: `Copyright © ${year} Emilia Projects BV. Built with Docusaurus.`,
				},
				prism: {
					additionalLanguages: [ "php", "json" ],
					theme: prismThemes.github,
					darkTheme: prismThemes.dracula,
				},
			}
		),
};
