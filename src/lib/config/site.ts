export const siteConfig = {
	name: "Thiru AI Labs",
	title: "Thiru AI Labs",
	description: "A solo AI systems studio building production-grade, agentic AI systems and SaaS products.",
	url: "https://thiruailabs.com",
	author: {
		name: "Nick Thiru",
		email: "contact@nickthiru.dev",
		twitter: "@nickthiru",
		github: "thiruailabs",
		linkedin: "nick-thiru",
	},
	social: {
		twitter: "https://twitter.com/nickthiru",
		github: "https://github.com/thiruailabs",
		linkedin: "https://linkedin.com/in/nick-thiru",
	},
	defaultImage: "/logo-icon.png",
} as const;

export type SiteConfig = typeof siteConfig;
