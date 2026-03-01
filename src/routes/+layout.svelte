<script>
	import '../app.css';
	const favicon = "/logo-icon.png";
	import { page } from '$app/stores';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	
	let { children } = $props();

	let mobileMenuOpen = $state(false);

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}

	onMount(() => {
		theme.init();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Thiru AI Labs</title>
	<meta name="description" content="A solo AI systems studio building production-grade, agentic AI systems and SaaS products." />
</svelte:head>

<div class="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900">
	<header class="sticky top-0 z-50 bg-neutral-50/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
		<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<a href="/" class="flex items-center hover:opacity-90 transition-opacity" onclick={closeMenu}>
					<img src="/logo-icon.png" alt="Thiru AI Labs" class="h-12" />
				</a>

				<!-- Desktop nav -->
				<div class="hidden md:flex items-center gap-6">
					<a 
						href="/about" 
						class="text-base font-semibold text-[#202020] dark:text-neutral-200 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors"
						class:!text-[#fe1817]={$page.url.pathname === '/about'}
					>
						About
					</a>
					<a 
						href="/products" 
						class="text-base font-semibold text-[#202020] dark:text-neutral-200 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors"
						class:!text-[#fe1817]={$page.url.pathname === '/products' || $page.url.pathname.startsWith('/products/')}
					>
						Products
					</a>
					<a 
						href="/consult" 
						class="text-base font-semibold text-[#202020] dark:text-neutral-200 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors"
						class:!text-[#fe1817]={$page.url.pathname === '/consult'}
					>
						Consult
					</a>
					<a 
						href="/contact" 
						class="text-base font-semibold text-[#202020] dark:text-neutral-200 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors"
						class:!text-[#fe1817]={$page.url.pathname === '/contact'}
					>
						Contact
					</a>
					<ThemeToggle />
				</div>

				<!-- Mobile controls -->
				<div class="md:hidden flex items-center gap-2">
					<ThemeToggle />
					<button
						type="button"
						class="p-2 -mr-2 text-neutral-900 dark:text-neutral-200 hover:text-[#fe1817]"
						onclick={toggleMenu}
						aria-expanded={mobileMenuOpen}
						aria-controls="mobile-menu"
						aria-label="Toggle menu"
					>
						{#if mobileMenuOpen}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						{:else}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						{/if}
					</button>
				</div>
			</div>
		</nav>

		<!-- Mobile menu -->
		{#if mobileMenuOpen}
			<div id="mobile-menu" class="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900" transition:slide={{ duration: 200 }}>
				<ul class="px-6 py-4 space-y-4">
					<li>
						<a 
							href="/about" 
							class="block text-base font-semibold text-[#202020] dark:text-neutral-200"
							class:!text-[#fe1817]={$page.url.pathname === '/about'}
							onclick={closeMenu}
						>
							About
						</a>
					</li>
					<li>
						<a 
							href="/products" 
							class="block text-base font-semibold text-[#202020] dark:text-neutral-200"
							class:!text-[#fe1817]={$page.url.pathname === '/products' || $page.url.pathname.startsWith('/products/')}
							onclick={closeMenu}
						>
							Products
						</a>
					</li>
					<li>
						<a 
							href="/consult" 
							class="block text-base font-semibold text-[#202020] dark:text-neutral-200"
							class:!text-[#fe1817]={$page.url.pathname === '/consult'}
							onclick={closeMenu}
						>
							Consult
						</a>
					</li>
					<li>
						<a 
							href="/contact" 
							class="block text-base font-semibold text-[#202020] dark:text-neutral-200"
							class:!text-[#fe1817]={$page.url.pathname === '/contact'}
							onclick={closeMenu}
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		{/if}
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="bg-neutral-50 dark:bg-neutral-900 mt-16 border-t border-neutral-200 dark:border-neutral-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div class="md:col-span-2">
					<h3 class="text-lg font-semibold text-[#fe1817] mb-2">Thiru AI Labs</h3>
					<p class="text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
						A solo AI systems studio building production-grade, agentic AI SaaS products and systems.
					</p>
				</div>
				
				<div>
					<h4 class="text-sm font-semibold text-brand-dark dark:text-neutral-200 mb-3">Navigation</h4>
					<ul class="space-y-2">
						<li><a href="/about" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors">About</a></li>
						<li><a href="/products" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors">Products</a></li>
						<li><a href="/consult" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors">Consult</a></li>
						<li><a href="/contact" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors">Contact</a></li>
					</ul>
				</div>
				
				<div>
					<h4 class="text-sm font-semibold text-brand-dark dark:text-neutral-200 mb-3">Legal</h4>
					<ul class="space-y-2">
						<li><a href="/legal/privacy" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors">Privacy</a></li>
						<li><a href="/legal/terms" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors">Terms</a></li>
					</ul>
				</div>
			</div>
			
			<div class="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
				<p class="text-sm text-neutral-500 dark:text-neutral-500 text-center">
					© {new Date().getFullYear()} Thiru AI Labs. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
</div>
