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
	<header class="sticky top-0 z-50 bg-[#fedf19]/95 backdrop-blur-sm shadow-sm">
		<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<a href="/" class="flex items-center hover:opacity-90 transition-opacity">
					<img src="/icon.svg" alt="Thiru AI Labs" class="h-14" />
				</a>
				
				<div class="flex items-center gap-8">
					<a 
						href="/products" 
						class="text-base font-semibold text-[#202020] hover:text-[#fe1817] transition-colors"
						class:text-[#fe1817]={$page.url.pathname === '/products'}
					>
						Products
					</a>
					<a 
						href="/about" 
						class="text-base font-semibold text-[#202020] hover:text-[#fe1817] transition-colors"
						class:text-[#fe1817]={$page.url.pathname === '/about'}
					>
						About
					</a>
					<a 
						href="/contact" 
						class="text-base font-semibold text-[#202020] hover:text-[#fe1817] transition-colors"
						class:text-[#fe1817]={$page.url.pathname === '/contact'}
					>
						Contact
					</a>
					<a 
						href="https://nickthiru.dev/writing" 
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center px-3 py-1.5 bg-[#fe1817] text-white text-base font-semibold rounded-md hover:bg-[#202020] transition-colors"
					>
						Visit Nick's writing
					</a>
				</div>
			</div>
		</nav>
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="bg-[#202020] mt-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div class="md:col-span-2">
					<h3 class="text-lg font-semibold text-[#fe1817] mb-2">Thiru AI Labs</h3>
					<p class="text-sm text-neutral-400 max-w-md">
						A solo AI systems studio building production-grade agentic micro-SaaS and automation systems.
					</p>
				</div>
				
				<div>
					<h4 class="text-sm font-semibold text-white mb-3">Navigation</h4>
					<ul class="space-y-2">
						<li><a href="/products" class="text-sm text-neutral-400 hover:text-[#fe1817] transition-colors">Products</a></li>
						<li><a href="/about" class="text-sm text-neutral-400 hover:text-[#fe1817] transition-colors">About</a></li>
						<li><a href="/contact" class="text-sm text-neutral-400 hover:text-[#fe1817] transition-colors">Contact</a></li>
					</ul>
				</div>
				
				<div>
					<h4 class="text-sm font-semibold text-white mb-3">Legal</h4>
					<ul class="space-y-2">
						<li><a href="/legal/privacy" class="text-sm text-neutral-400 hover:text-[#fe1817] transition-colors">Privacy</a></li>
						<li><a href="/legal/terms" class="text-sm text-neutral-400 hover:text-[#fe1817] transition-colors">Terms</a></li>
					</ul>
				</div>
			</div>
			
			<div class="mt-8 pt-8 border-t border-neutral-700">
				<p class="text-sm text-neutral-500 text-center">
					© {new Date().getFullYear()} Thiru AI Labs. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
</div>
