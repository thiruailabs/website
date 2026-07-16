<script lang="ts">
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/config/site';

	interface Props {
		title?: string;
		description?: string;
		image?: string;
		type?: 'website' | 'article';
		publishedAt?: string;
		canonical?: string;
	}

	let { 
		title = siteConfig.title,
		description = siteConfig.description,
		image = siteConfig.defaultImage,
		type = 'website',
		publishedAt,
		canonical
	}: Props = $props();

	let fullTitle = $derived(title === siteConfig.title ? title : `${title} | ${siteConfig.name}`);
	let imageUrl = $derived(image.startsWith('http') ? image : `${siteConfig.url}${image}`);
	let canonicalUrl = $derived(canonical || `${siteConfig.url}${$page.url.pathname}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:type" content={type} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content={siteConfig.name} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={siteConfig.author.twitter} />
	<meta name="twitter:creator" content={siteConfig.author.twitter} />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	{#if publishedAt}
		<meta property="article:published_time" content={publishedAt} />
		<meta property="article:author" content={siteConfig.author.name} />
	{/if}
</svelte:head>
