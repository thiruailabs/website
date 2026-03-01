<script>
	import WaitlistModal from '$lib/components/WaitlistModal.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';

	let isWaitlistOpen = false;

	function openWaitlist() {
		isWaitlistOpen = true;
	}
</script>

<svelte:head>
	<title>Products - Thiru AI Labs</title>
</svelte:head>

<WaitlistModal bind:isOpen={isWaitlistOpen} productName="LinkedIn Ghostwriter Agent" />

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
	<div class="max-w-3xl mb-16">
		<h1 class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Products</h1>
		<div class="prose prose-lg max-w-none">
			<p class="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
				Building a portfolio of focused AI products that solve real problems. Each product is designed to be production-ready with proper authentication, billing, and infrastructure.
			</p>
			<p class="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
				Each product is built with a systems-first mindset: production-ready infrastructure, proper authentication and billing, comprehensive observability, and a focus on solving specific problems exceptionally well rather than being a generic solution.
			</p>
		</div>
	</div>

	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">In Progress</h2>
		
		<div class="grid md:grid-cols-2 gap-6 items-stretch">
			<ProductCard 
				title="LinkedIn Ghostwriter"
				status="Building"
				padding="p-8"
				titleSize="text-2xl"
				interactive={true}
			>
				<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
					Turn voice notes into authentic LinkedIn posts. Style learning, quality gates, and scheduling built-in.
					For founders who want to post consistently without sounding like corporate AI.
				</p>
				
				<div>
					<h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Who it's for</h4>
					<p class="text-neutral-600 dark:text-neutral-400">Solo entrepreneurs, consultants, and professionals building personal brands on LinkedIn</p>
				</div>

				{#snippet footer()}
					<div class="flex gap-3 mt-auto">
						<a 
							href="/products/linkedin-ghostwriter" 
							class="inline-flex flex-1 justify-center items-center gap-1 px-4 py-2 bg-[#202020] dark:bg-neutral-700 text-white font-medium rounded-md hover:bg-[#fedf19] hover:text-[#fe1817] transition-colors text-center"
						>
							Learn more
							<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</a>
						<button 
							on:click={openWaitlist}
							class="inline-flex flex-1 justify-center items-center gap-1 px-4 py-2 bg-[#fe1817] text-white font-medium rounded-md hover:bg-[#fedf19] hover:text-[#fe1817] transition-colors text-center"
						>
							Join waitlist
							<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>
				{/snippet}
			</ProductCard>
		</div>
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Upcoming Ideas</h2>
		
		<div class="grid md:grid-cols-2 gap-6 items-stretch">
			<ProductCard 
				title="Competitor Intelligence Agent"
				status="Idea"
				statusBg="bg-[#202020] dark:bg-neutral-700"
				statusText="text-white"
				padding="p-8"
				titleSize="text-2xl"
				faded={true}
			>
				<div>
					<h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Audience</h4>
					<p class="text-neutral-600 dark:text-neutral-400">Startup founders, product managers, and marketing leaders monitoring competitors</p>
				</div>
				
				<div>
					<h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Outcome</h4>
					<p class="text-neutral-600 dark:text-neutral-400">
						Continuous 24/7 monitoring of competitors across multiple channels with AI-powered analysis and proactive alerts
					</p>
				</div>

				{#snippet footer()}
					<p class="text-sm text-neutral-500 dark:text-neutral-400 italic mt-auto">Coming soon</p>
				{/snippet}
			</ProductCard>

			<ProductCard 
				title="Research & Report Generator"
				status="Idea"
				statusBg="bg-[#202020] dark:bg-neutral-700"
				statusText="text-white"
				padding="p-8"
				titleSize="text-2xl"
				faded={true}
			>
				<div>
					<h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Audience</h4>
					<p class="text-neutral-600 dark:text-neutral-400">Consultants, analysts, and researchers needing comprehensive reports</p>
				</div>
				
				<div>
					<h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Outcome</h4>
					<p class="text-neutral-600 dark:text-neutral-400">
						Multi-agent system that researches topics deeply and generates publication-quality reports with proper citations
					</p>
				</div>

				{#snippet footer()}
					<p class="text-sm text-neutral-500 dark:text-neutral-400 italic mt-auto">Coming soon</p>
				{/snippet}
			</ProductCard>
		</div>
	</section>

</div>
