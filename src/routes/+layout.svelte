<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Thiru AI Labs</title>
	<meta name="description" content="A solo AI systems studio building production-grade agentic micro-SaaS and automation systems." />
</svelte:head>

<div class="min-h-screen flex flex-col bg-neutral-50">
	<header class="border-b border-neutral-200 bg-white">
		<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<a href="/" class="text-xl font-semibold text-neutral-900 hover:text-neutral-700 transition-colors">
					Thiru AI Labs
				</a>
				
				<div class="flex items-center gap-8">
					<a 
						href="/products" 
						class="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
						class:text-neutral-900={$page.url.pathname === '/products'}
					>
						Products
					</a>
					<a 
						href="/about" 
						class="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
						class:text-neutral-900={$page.url.pathname === '/about'}
					>
						About
					</a>
					<a 
						href="/contact" 
						class="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
						class:text-neutral-900={$page.url.pathname === '/contact'}
					>
						Contact
					</a>
					<a 
						href="https://nickthiru.dev/writing" 
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1 px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-md hover:bg-neutral-800 transition-colors"
					>
						Visit Nick's writing
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
						</svg>
					</a>
				</div>
			</div>
		</nav>
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="border-t border-neutral-200 bg-white mt-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div class="md:col-span-2">
					<h3 class="text-lg font-semibold text-neutral-900 mb-2">Thiru AI Labs</h3>
					<p class="text-sm text-neutral-600 max-w-md">
						A solo AI systems studio building production-grade agentic micro-SaaS and automation systems.
					</p>
				</div>
				
				<div>
					<h4 class="text-sm font-semibold text-neutral-900 mb-3">Navigation</h4>
					<ul class="space-y-2">
						<li><a href="/products" class="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Products</a></li>
						<li><a href="/about" class="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">About</a></li>
						<li><a href="/contact" class="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Contact</a></li>
					</ul>
				</div>
				
				<div>
					<h4 class="text-sm font-semibold text-neutral-900 mb-3">Legal</h4>
					<ul class="space-y-2">
						<li><a href="/legal/privacy" class="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Privacy</a></li>
						<li><a href="/legal/terms" class="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Terms</a></li>
					</ul>
				</div>
			</div>
			
			<div class="mt-8 pt-8 border-t border-neutral-200">
				<p class="text-sm text-neutral-500 text-center">
					© {new Date().getFullYear()} Thiru AI Labs. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
</div>
