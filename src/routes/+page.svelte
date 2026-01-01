<svelte:head>
	<title>Thiru AI Labs - AI Systems Studio</title>
</svelte:head>

<!-- Hero Section - Split Design -->
<section class="grid md:grid-cols-2 min-h-[400px]">
	<!-- Left Side - Dark with Live Status Indicator -->
	<div class="bg-[#202020] hidden md:flex items-center justify-center">
		<div class="text-center px-8">
			<!-- Pulse indicator -->
			<div class="flex items-center justify-center gap-3 mb-4">
				<span class="relative flex h-3 w-3">
					<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe1817] opacity-75"></span>
					<span class="relative inline-flex rounded-full h-3 w-3 bg-[#fe1817]"></span>
				</span>
				<span class="text-[#fe1817] text-sm font-semibold uppercase tracking-wider">Currently Building</span>
			</div>
			<!-- Product name -->
			<h3 class="text-white text-2xl md:text-3xl font-bold mb-2">LinkedIn Ghostwriter Agent</h3>
			<p class="text-neutral-400 text-sm max-w-xs mx-auto">AI that turns voice notes into LinkedIn posts that sound authentically like you</p>
		</div>
	</div>
	
	<!-- Right Side - Dark with Logo and CTAs -->
	<div class="bg-[#202020] px-8 py-12 md:px-20 lg:px-32 flex flex-col justify-center items-center text-center">
		<!-- Full Logo with rounded corners -->
		<div class="mb-6">
			<img src="/logo.png" alt="Thiru AI Labs" class="h-32 md:h-36 lg:h-40 rounded-xl" />
		</div>
		
		<p class="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6 max-w-lg">
			A solo AI systems studio building production-grade agentic micro-SaaS and automation systems.
		</p>
		
		<!-- CTAs with rounded borders -->
		<div class="flex flex-col sm:flex-row gap-4">
			<a 
				href="/products" 
				class="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-[#202020] transition-all group"
			>
				Explore products
				<svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
				</svg>
			</a>
			<a 
				href="https://nickthiru.dev/writing" 
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#fedf19] text-[#fedf19] font-medium rounded-full hover:bg-[#fedf19] hover:text-[#202020] transition-all group"
			>
				Read Nick's writing
				<svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
				</svg>
			</a>
		</div>
	</div>
</section>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

	<section class="py-16 border-t border-neutral-200">
		<div class="mb-12">
			<h2 class="text-3xl font-bold text-neutral-900 mb-3">Products</h2>
			<p class="text-lg text-neutral-600">Building focused AI workflows for real-world problems</p>
		</div>
		
		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
				<div class="flex items-start justify-between mb-4">
					<h3 class="text-xl font-semibold text-neutral-900">Future of Jobs AI Chat</h3>
					<span class="px-3 py-1 bg-[#fedf19] text-[#202020] text-xs font-semibold rounded-full">Building</span>
				</div>
				<p class="text-neutral-600 mb-4">
					Interactive AI assistant helping professionals understand and navigate the evolving job market in the age of AI.
				</p>
				<a href="/products" class="inline-flex items-center gap-1 text-[#202020] font-medium hover:text-[#fe1817] hover:gap-2 transition-all">
					Learn more
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>

			<div class="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
				<div class="flex items-start justify-between mb-4">
					<h3 class="text-xl font-semibold text-neutral-900">More Products Coming</h3>
					<span class="px-3 py-1 bg-[#202020] text-white text-xs font-semibold rounded-full">Idea</span>
				</div>
				<p class="text-neutral-600 mb-4">
					Exploring new opportunities in agentic automation and specialized AI workflows for knowledge workers.
				</p>
				<a href="/products" class="inline-flex items-center gap-1 text-[#202020] font-medium hover:text-[#fe1817] hover:gap-2 transition-all">
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
				<div class="bg-white border border-neutral-200 rounded-lg p-6 border-l-4 border-l-[#fe1817]">
					<h3 class="text-lg font-semibold text-neutral-900 mb-2">Systems-First Approach</h3>
					<p class="text-neutral-600">
						Every product is built as a complete system with proper architecture, not just a prototype or demo.
					</p>
				</div>
				
				<div class="bg-white border border-neutral-200 rounded-lg p-6 border-l-4 border-l-[#fedf19]">
					<h3 class="text-lg font-semibold text-neutral-900 mb-2">Production Focus</h3>
					<p class="text-neutral-600">
						Authentication, billing, observability, and infrastructure are first-class concerns from day one.
					</p>
				</div>
				
				<div class="bg-white border border-neutral-200 rounded-lg p-6 border-l-4 border-l-[#202020]">
					<h3 class="text-lg font-semibold text-neutral-900 mb-2">Small, Focused Workflows</h3>
					<p class="text-neutral-600">
						Building specialized AI agents for specific tasks, not generic chatbots that try to do everything.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>
