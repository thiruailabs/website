<svelte:head>
	<title>Thiru AI Labs - AI Systems Studio</title>
</svelte:head>

<!-- Hero Section - Split Design -->
<section class="grid md:grid-cols-2 min-h-[400px]">
	<!-- Left Side - Dark with Live Status Indicator -->
	<div class="bg-brand-dark dark:bg-neutral-950 hidden md:flex items-center justify-center">
		<div class="text-center px-8">
			<!-- Pulse indicator -->
			<div class="flex items-center justify-center gap-3 mb-4">
				<span class="relative flex h-3 w-3">
					<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe1817] opacity-75"></span>
					<span class="relative inline-flex rounded-full h-3 w-3 bg-[#fe1817]"></span>
				</span>
				<span class="text-[#fe1817] dark:text-[#fedf19] text-sm font-semibold uppercase tracking-wider">Currently Building</span>
			</div>
			<!-- Product name -->
			<h3 class="text-white dark:text-neutral-100 text-2xl md:text-3xl font-bold mb-2">LinkedIn Ghostwriter Agent</h3>
			<p class="text-neutral-300 dark:text-neutral-400 text-sm max-w-xs mx-auto">AI that turns voice notes into LinkedIn posts that sound authentically like you</p>
		</div>
	</div>
	
	<!-- Right Side - Dark with Logo and CTAs -->
	<div class="bg-brand-dark dark:bg-neutral-950 px-8 py-12 md:px-20 lg:px-32 flex flex-col justify-center items-center text-center">
		<!-- Full Logo with rounded corners -->
		<div class="mb-6">
			<img src="/logo.png" alt="Thiru AI Labs" class="h-32 md:h-36 lg:h-40 rounded-xl" />
		</div>
		
		<p class="text-neutral-300 dark:text-neutral-400 text-lg md:text-xl leading-relaxed mb-3 max-w-lg">
			A solo AI systems studio building production-grade, agentic AI systems and SaaS products. 
		</p>

		<p class="text-neutral-300 dark:text-neutral-400 text-md md:text-xl leading-relaxed mb-1 max-w-lg">
			<a href="https://nickthiru.dev/writing/what-are-ai-agents" target="_blank" rel="noopener noreferrer" class="text-[#fedf19] hover:underline inline-flex items-center gap-1">
          What are AI agents and agentic AI systems, anyway? →
			</a>
		</p>

		<p class="text-neutral-300 text-md md:text-xl leading-relaxed mb-6 max-w-lg">
			<a href="https://nickthiru.dev/writing/why-building-solo" target="_blank" rel="noopener noreferrer" class="text-[#fedf19] hover:underline inline-flex items-center gap-1">
				And why a <i>solo</i> studio? →
			</a>
		</p>
		
		<!-- CTAs with rounded borders -->
		<div class="flex flex-col sm:flex-row gap-4">
			<a 
				href="/products" 
				class="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-[#fe1817] hover:text-brand-white transition-all group"
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
				class="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-[#fe1817] hover:text-brand-white transition-all group"
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

	<section class="py-16">
		<div class="mb-12 flex items-start justify-between">
			<div>
				<h2 class="section-heading text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-3">Products</h2>
				<p class="text-lg text-neutral-600 dark:text-neutral-400">Building focused AI workflows for real-world problems</p>
			</div>
			<a 
				href="/products" 
				class="inline-flex items-center gap-1 text-brand-dark dark:text-neutral-300 hover:text-[#fe1817] font-medium transition-colors mt-1"
			>
				View all
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
				</svg>
			</a>
		</div>
		
		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
				<div class="flex items-start justify-between mb-4">
					<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100">LinkedIn Ghostwriter Agent</h3>
					<span class="px-3 py-1 bg-[#fedf19] dark:bg-[#fedf19] text-brand-dark dark:text-neutral-900 text-xs font-semibold rounded-full">Building</span>
				</div>
				<p class="text-neutral-600 dark:text-neutral-400 mb-4">
					AI that turns voice notes into LinkedIn posts that sound authentically like you. Captures ideas on-the-go and learns your unique style over time.
				</p>
				<a href="/products/linkedin-ghostwriter" class="inline-flex items-center gap-1 text-brand-dark dark:text-neutral-300 font-medium hover:text-[#fe1817] hover:gap-2 transition-all">
					Learn more
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
				<div class="flex items-start justify-between mb-4">
					<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100">More Products Coming</h3>
					<span class="px-3 py-1 bg-brand-dark dark:bg-neutral-700 text-white dark:text-neutral-200 text-xs font-semibold rounded-full">Idea</span>
				</div>
				<p class="text-neutral-600 dark:text-neutral-400 mb-4">
					Exploring new opportunities in agentic AI automation and specialized AI workflows for knowledge workers.
				</p>
				<a href="/products" class="inline-flex items-center gap-1 text-brand-dark dark:text-neutral-300 font-medium hover:text-[#fe1817] hover:gap-2 transition-all">
					View roadmap
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>
		</div>
	</section>

	<section class="py-16">
		<div class="max-w-3xl mx-auto">
			<h2 class="section-heading text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-8 text-center">The Approach</h2>
			
			<div class="space-y-6">
				<div class="bg-white border dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 rounded-lg p-6 border-l-4 border-l-[#fe1817] dark:border-l-[#fe1817]">
					<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Systems-First Approach</h3>
					<p class="text-neutral-600 dark:text-neutral-400">
						Every product is built as a complete system with proper architecture, not just a prototype or demo. Production-ready from day one with scalable infrastructure and clean code.
					</p>
				</div>
				
				<div class="bg-white border dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 rounded-lg p-6 border-l-4 border-l-[#fedf19] dark:border-l-[#fedf19]">
					<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Production Focus</h3>
					<p class="text-neutral-600 dark:text-neutral-400">
						Authentication, billing, observability, and infrastructure are first-class concerns from day one. No shortcuts, no technical debt, no "we'll fix it later."
					</p>
				</div>
				
				<div class="bg-white border dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 rounded-lg p-6 border-l-4 border-l-brand-dark dark:border-l-neutral-100">
					<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Small, Focused Workflows</h3>
					<p class="text-neutral-600 dark:text-neutral-400">
						Building specialized AI agents for specific tasks, not generic chatbots that try to do everything. Each product solves one problem exceptionally well.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Tech Stack Section -->
	<section class="py-16 bg-neutral-50 dark:bg-neutral-900">
		<div class="max-w-5xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="section-heading text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-3">Built With Modern AI Infrastructure</h2>
				<p class="text-lg text-neutral-600 dark:text-neutral-400">Production-grade stack for reliable, scalable AI systems</p>
			</div>
			
			<div class="grid md:grid-cols-3 gap-8">
				<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 text-center">
					<div class="w-12 h-12 bg-[#fe1817]/10 dark:bg-[#fe1817]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
						<svg class="w-6 h-6 text-[#fe1817]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</div>
					<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">AI & LLMs</h3>
					<p class="text-sm text-neutral-600 dark:text-neutral-400 mb-3">OpenAI GPT-4, Claude, LangChain, LangGraph for agentic AI workflows</p>
				</div>

				<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 text-center">
					<div class="w-12 h-12 bg-[#fedf19]/20 dark:bg-[#fedf19]/40 rounded-lg flex items-center justify-center mx-auto mb-4">
						<svg class="w-6 h-6 text-brand-dark dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
						</svg>
					</div>
					<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Infrastructure</h3>
					<p class="text-sm text-neutral-600 dark:text-neutral-400 mb-3">AWS CDK, Supabase, PostgreSQL, serverless architecture</p>
				</div>

				<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 text-center">
					<div class="w-12 h-12 bg-brand-dark/10 dark:bg-neutral-700/50 rounded-lg flex items-center justify-center mx-auto mb-4">
						<svg class="w-6 h-6 text-brand-dark dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
						</svg>
					</div>
					<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Frontend</h3>
					<p class="text-sm text-neutral-600 dark:text-neutral-400 mb-3">SvelteKit, TypeScript, TailwindCSS for modern UX</p>
				</div>
			</div>

			<div class="mt-8 text-center">
				<p class="text-md text-neutral-500 dark:text-neutral-400">
					Every component chosen for production reliability, not just developer convenience
				</p>
			</div>
		</div>
	</section>

	<!-- Building in Public Section -->
	<section class="py-16">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="section-heading text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-3">Building in Public</h2>
				<p class="text-lg text-neutral-600 dark:text-neutral-400">Transparent development, real learnings, authentic progress</p>
			</div>

			<div class="grid md:grid-cols-2 gap-6">
				<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 bg-blue-500/10 dark:bg-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Business & Operations</h3>
							<p class="text-sm text-neutral-600 dark:text-neutral-400">
								Practical insights on pricing, distribution, building in public, and running a portfolio of AI products as a solo founder.
							</p>
						</div>
					</div>
				</div>

				<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 bg-purple-500/10 dark:bg-purple-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Product News</h3>
							<p class="text-sm text-neutral-600 dark:text-neutral-400">
								Build logs, learnings, and updates on AI products developed and shipped for Thiru AI Labs.
							</p>
						</div>
					</div>
				</div>

				<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 bg-green-500/10 dark:bg-green-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Engineering Deep-Dives</h3>
							<p class="text-sm text-neutral-600 dark:text-neutral-400">
								Detailed technical breakdowns of architecture decisions, implementation challenges, and solutions from building specific products.
							</p>
						</div>
					</div>
				</div>

				<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 bg-[#fedf19]/20 dark:bg-[#fedf19]/40 rounded-lg flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 text-brand-dark dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Technical Writing</h3>
							<p class="text-sm text-neutral-600 dark:text-neutral-400">
								General insights on agentic AI systems, industry trends, emerging patterns, and broader technical perspectives beyond specific products.
							</p>
						</div>
					</div>
				</div>

				<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 bg-brand-dark/10 dark:bg-neutral-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 text-brand-dark dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Metrics & Progress</h3>
							<p class="text-sm text-neutral-600 dark:text-neutral-400">
								Real numbers, honest updates on what's working and what's not. No vanity metrics, just authentic progress tracking.
							</p>
						</div>
					</div>
				</div>

				<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 bg-[#fe1817]/10 dark:bg-[#fe1817]/20 rounded-lg flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 text-[#fe1817]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Community Feedback</h3>
							<p class="text-sm text-neutral-600 dark:text-neutral-400">
								Open to feedback, questions, and collaboration. Building products people actually want to use.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-8 text-center">
				<a 
					href="https://nickthiru.dev/writing" 
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white font-medium rounded-lg hover:bg-[#fe1817] transition-colors"
				>
					Read the articles
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</a>
			</div>
		</div>
	</section>

	<!-- Founder Credibility Section -->
	<section class="py-16 bg-neutral-50 dark:bg-neutral-900">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="section-heading text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-3">About the Founder</h2>
				<p class="text-lg text-neutral-600 dark:text-neutral-400">Business and engineering background meets AI systems expertise</p>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 md:p-10">
				<div class="flex flex-col md:flex-row gap-8 items-start">
					<div class="shrink-0">
						<img src="/founder-image.jpeg" alt="Nick Thiru" class="w-32 h-32 rounded-lg object-cover object-top" />
					</div>
					<div class="flex-1">
						<h3 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Nick Thiru</h3>
						<div class="space-y-4 text-neutral-600 dark:text-neutral-400">
							<p>
								High-ranking corporate executive-turned software engineer with deep expertise in building production AI systems. Now focused on agentic AI workflows, LLM orchestration, and scalable infrastructure.
							</p>
							<p>
								Previously built systems at scale. Now building focused AI products as a solo founder, applying enterprise-grade engineering practices to SaaS products and systems.
							</p>
							<div class="flex flex-wrap gap-3 mt-6">
								<span class="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-full">AI Systems Architecture</span>
								<span class="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-full">LangGraph & Agents</span>
								<span class="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-full">AWS Infrastructure</span>
								<span class="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-full">Sveltekit Frontend</span>
								<span class="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-full">Full-Stack Web</span>
								<span class="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-full">Production Engineering</span>
								<span class="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-full">Business Administration</span>
							</div>
						</div>
						<div class="mt-6 flex gap-5">
							<a 
								href="https://nickthiru.dev" 
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1 text-brand-dark dark:text-neutral-300 hover:text-[#fe1817] font-medium transition-colors"
							>
								Personal website
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
							<a 
								href="https://linkedin.com/in/nick-thiru" 
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1 text-brand-dark dark:text-neutral-300 hover:text-[#fe1817] font-medium transition-colors"
							>
								LinkedIn
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
							<a 
								href="https://twitter.com/nickthiru" 
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1 text-brand-dark dark:text-neutral-300 hover:text-[#fe1817] font-medium transition-colors"
							>
								Twitter/X
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
							<a 
								href="https://github.com/nickthiru" 
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1 text-brand-dark dark:text-neutral-300 hover:text-[#fe1817] font-medium transition-colors"
							>
								GitHub
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Why Solo Section -->
	<section class="py-16">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="section-heading text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Why a Solo Studio?</h2>
			<p class="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
				To be clear, it's building solo <em>with AI-augmentation</em>. Solo allows for rapid iteration, deep focus, and authentic products without the overhead of team coordination or investor pressures. Every decision optimized for product quality and customer value, not growth metrics or fundraising narratives.
			</p>
			<a 
				href="https://nickthiru.dev/writing/why-building-solo" 
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 text-brand-dark dark:text-neutral-300 hover:text-[#fe1817] font-semibold text-lg transition-colors"
			>
				Read the full philosophy
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
				</svg>
			</a>
		</div>
	</section>
</div>
