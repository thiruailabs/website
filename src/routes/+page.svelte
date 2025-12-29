<svelte:head>
	<title>Thiru AI Labs - AI Systems Studio</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	<section class="py-20 md:py-32">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
				Thiru AI Labs
			</h1>
			<p class="text-xl md:text-2xl text-neutral-600 mb-10 leading-relaxed">
				A solo AI systems studio building production-grade agentic micro‑SaaS and automation systems.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a 
					href="/products" 
					class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 text-white font-medium rounded-md hover:bg-neutral-800 transition-colors"
				>
					Explore products
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</a>
				<a 
					href="https://nickthiru.dev/writing" 
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-neutral-300 text-neutral-700 font-medium rounded-md hover:border-neutral-400 hover:bg-neutral-50 transition-colors"
				>
					Read Nick's writing
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</a>
			</div>
		</div>
	</section>

	<section class="py-16 border-t border-neutral-200">
		<div class="mb-12">
			<h2 class="text-3xl font-bold text-neutral-900 mb-3">Products</h2>
			<p class="text-lg text-neutral-600">Building focused AI workflows for real-world problems</p>
		</div>
		
		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
				<div class="flex items-start justify-between mb-4">
					<h3 class="text-xl font-semibold text-neutral-900">Future of Jobs AI Chat</h3>
					<span class="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">Building</span>
				</div>
				<p class="text-neutral-600 mb-4">
					Interactive AI assistant helping professionals understand and navigate the evolving job market in the age of AI.
				</p>
				<a href="/products" class="inline-flex items-center gap-1 text-neutral-900 font-medium hover:gap-2 transition-all">
					Learn more
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>

			<div class="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
				<div class="flex items-start justify-between mb-4">
					<h3 class="text-xl font-semibold text-neutral-900">More Products Coming</h3>
					<span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Idea</span>
				</div>
				<p class="text-neutral-600 mb-4">
					Exploring new opportunities in agentic automation and specialized AI workflows for knowledge workers.
				</p>
				<a href="/products" class="inline-flex items-center gap-1 text-neutral-900 font-medium hover:gap-2 transition-all">
					View roadmap
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>
		</div>
	</section>

	<section class="py-16 border-t border-neutral-200">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-3xl font-bold text-neutral-900 mb-8 text-center">How We Build</h2>
			
			<div class="space-y-6">
				<div class="bg-white border border-neutral-200 rounded-lg p-6">
					<h3 class="text-lg font-semibold text-neutral-900 mb-2">Systems-First Approach</h3>
					<p class="text-neutral-600">
						Every product is built as a complete system with proper architecture, not just a prototype or demo.
					</p>
				</div>
				
				<div class="bg-white border border-neutral-200 rounded-lg p-6">
					<h3 class="text-lg font-semibold text-neutral-900 mb-2">Production Focus</h3>
					<p class="text-neutral-600">
						Authentication, billing, observability, and infrastructure are first-class concerns from day one.
					</p>
				</div>
				
				<div class="bg-white border border-neutral-200 rounded-lg p-6">
					<h3 class="text-lg font-semibold text-neutral-900 mb-2">Small, Focused Workflows</h3>
					<p class="text-neutral-600">
						Building specialized AI agents for specific tasks, not generic chatbots that try to do everything.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>
