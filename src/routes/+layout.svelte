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
			<div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
				<div class="md:col-span-6 lg:col-span-4 flex flex-col gap-6">
					<div>
						<h3 class="text-lg font-semibold text-[#fe1817] mb-2">Thiru AI Labs</h3>
						<p class="text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
							A solo AI systems studio building production-grade, agentic AI SaaS products and systems.
						</p>
					</div>

					<!-- Social links -->
					<div class="flex items-center gap-4">
						<a
							href="https://twitter.com/nickthiru"
							target="_blank"
							rel="noopener noreferrer"
							class="text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] transition-colors"
							aria-label="Twitter"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
							</svg>
						</a>
						<a
							href="https://github.com/nickthiru"
							target="_blank"
							rel="noopener noreferrer"
							class="text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] transition-colors"
							aria-label="GitHub"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
							</svg>
						</a>
						<a
							href="https://linkedin.com/in/nick-thiru"
							target="_blank"
							rel="noopener noreferrer"
							class="text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] transition-colors"
							aria-label="LinkedIn"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</a>
					</div>
				</div>

				<div class="md:col-span-3 lg:col-span-2 lg:col-start-9">
					<h4 class="text-sm font-semibold text-brand-dark dark:text-neutral-200 mb-3">Navigation</h4>
					<ul class="space-y-2">
						<li><a href="/about" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors">About</a></li>
						<li><a href="/products" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors">Products</a></li>
						<li><a href="/consult" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors">Consult</a></li>
						<li><a href="/contact" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors">Contact</a></li>
					</ul>
				</div>

				<div class="md:col-span-3 lg:col-span-2">
					<h4 class="text-sm font-semibold text-brand-dark dark:text-neutral-200 mb-3">Legal</h4>
					<ul class="space-y-2">
						<li><a href="/legal/privacy" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors">Privacy Policy</a></li>
						<li><a href="/legal/terms" class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#fe1817] dark:hover:text-[#fe1817] transition-colors">Terms of Service</a></li>
					</ul>
				</div>
			</div>

			<div class="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-center">
				<p class="text-sm text-neutral-500 dark:text-neutral-500 text-center">
					&copy; {new Date().getFullYear()} Thiru AI Labs. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
</div>
