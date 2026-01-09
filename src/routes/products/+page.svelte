<script>
	import WaitlistModal from '$lib/components/WaitlistModal.svelte';
	
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
	<div class="max-w-3xl mb-12">
		<h1 class="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Products</h1>
		<p class="text-lg text-neutral-600 leading-relaxed">
			Building a portfolio of focused AI products that solve real problems. Each product is designed to be production-ready with proper authentication, billing, and infrastructure.
		</p>
	</div>

	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 mb-6">In Progress</h2>
		
		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
				<div class="flex items-start justify-between mb-4">
					<h3 class="text-2xl font-semibold text-neutral-900">LinkedIn Ghostwriter</h3>
					<span class="px-3 py-1 bg-[#fedf19] text-[#202020] text-xs font-semibold rounded-full whitespace-nowrap">Building</span>
				</div>
				
				<div class="space-y-4 mb-6">
					<p class="text-neutral-700 leading-relaxed">
						Turn voice notes into authentic LinkedIn posts. Style learning, quality gates, and scheduling built-in. 
						For founders who want to post consistently without sounding like corporate AI.
					</p>
					
					<div>
						<h4 class="text-sm font-semibold text-neutral-700 mb-1">Who it's for</h4>
						<p class="text-neutral-600">Solo entrepreneurs, consultants, and professionals building personal brands on LinkedIn</p>
					</div>
				</div>
				
				<div class="flex gap-3">
					<a 
						href="/products/linkedin-ghostwriter"
						class="inline-flex items-center gap-1 px-4 py-2 bg-[#202020] text-white font-medium rounded-md hover:bg-[#fe1817] transition-colors"
					>
						Learn more
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</a>
					<button 
						on:click={openWaitlist}
						class="inline-flex items-center gap-1 px-4 py-2 bg-[#fe1817] text-white font-medium rounded-md hover:bg-[#202020] transition-colors"
					>
						Join waitlist
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 mb-6">Upcoming Ideas</h2>
		
		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-white border border-neutral-200 rounded-lg p-8 opacity-75">
				<div class="flex items-start justify-between mb-4">
					<h3 class="text-2xl font-semibold text-neutral-900">Competitor Intelligence Agent</h3>
					<span class="px-3 py-1 bg-[#202020] text-white text-xs font-semibold rounded-full whitespace-nowrap">Idea</span>
				</div>
				
				<div class="space-y-4 mb-6">
					<div>
						<h4 class="text-sm font-semibold text-neutral-700 mb-1">Audience</h4>
						<p class="text-neutral-600">Startup founders, product managers, and marketing leaders monitoring competitors</p>
					</div>
					
					<div>
						<h4 class="text-sm font-semibold text-neutral-700 mb-1">Outcome</h4>
						<p class="text-neutral-600">
							Continuous 24/7 monitoring of competitors across multiple channels with AI-powered analysis and proactive alerts
						</p>
					</div>
				</div>
				
				<p class="text-sm text-neutral-500 italic">Coming soon</p>
			</div>

			<div class="bg-white border border-neutral-200 rounded-lg p-8 opacity-75">
				<div class="flex items-start justify-between mb-4">
					<h3 class="text-2xl font-semibold text-neutral-900">Research & Report Generator</h3>
					<span class="px-3 py-1 bg-[#202020] text-white text-xs font-semibold rounded-full whitespace-nowrap">Idea</span>
				</div>
				
				<div class="space-y-4 mb-6">
					<div>
						<h4 class="text-sm font-semibold text-neutral-700 mb-1">Audience</h4>
						<p class="text-neutral-600">Consultants, analysts, and researchers needing comprehensive reports</p>
					</div>
					
					<div>
						<h4 class="text-sm font-semibold text-neutral-700 mb-1">Outcome</h4>
						<p class="text-neutral-600">
							Multi-agent system that researches topics deeply and generates publication-quality reports with proper citations
						</p>
					</div>
				</div>
				
				<p class="text-sm text-neutral-500 italic">Coming soon</p>
			</div>
		</div>
	</section>

	<section class="bg-[#202020] border border-neutral-700 rounded-lg p-8 max-w-3xl">
		<h2 class="text-xl font-semibold text-[#fedf19] mb-3">Product Philosophy</h2>
		<p class="text-neutral-300 leading-relaxed">
			Each product is built with a systems-first mindset: production-ready infrastructure, proper authentication and billing, comprehensive observability, and a focus on solving specific problems exceptionally well rather than being a generic solution.
		</p>
	</section>
</div>
