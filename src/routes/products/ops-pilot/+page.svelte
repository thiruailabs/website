<script>
	import WaitlistModal from '$lib/components/WaitlistModal.svelte';
	
	let isWaitlistOpen = false;
	
	function openWaitlist() {
		isWaitlistOpen = true;
	}
</script>

<svelte:head>
	<title>OpsPilot - Operational Intelligence for Solo Founders - Thiru AI Labs</title>
	<meta name="description" content="Run your entire business with enterprise-grade operational intelligence. Unified view across finance, billing, support, and monitoring. AI agents that detect risks, automate workflows, and surface growth opportunities. Data isolation guaranteed." />
</svelte:head>

<WaitlistModal bind:isOpen={isWaitlistOpen} productName="OpsPilot" />

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
	<!-- Hero Section -->
	<div class="mb-16">
		<div class="flex items-center gap-3 mb-4">
			<span class="px-3 py-1 bg-[#fedf19] text-[#202020] text-xs font-semibold rounded-full">Building Now</span>
		</div>
		<h1 class="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">OpsPilot</h1>
		<p class="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
			Unified operational intelligence for solo founders and small teams. See your entire business at a glance. 
			AI agents that detect risks, automate workflows, and surface growth opportunities — with your data completely isolated.
		</p>
	</div>

	<!-- The Problem -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">The Problem</h2>
		<div class="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 space-y-4">
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				You're running a real business with real customers, real cash flow risk, and real operational complexity. 
				But you're doing it with the operational infrastructure of a side project.
			</p>
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				Your data lives in five to ten disconnected tools—QuickBooks, Stripe, Intercom, AWS, HubSpot. 
				To answer a simple question like "which customers have declined usage AND have overdue invoices AND unresolved support tickets," 
				you have to manually check each tool, correlate the data in your head, and hope you didn't miss anyone.
			</p>
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				Meanwhile, <strong>10–15 hours per week</strong> disappear into operational administration: 
				gathering data, checking status dashboards, reconciling accounts, triaging support tickets, 
				monitoring service health. Hours that should go to product, growth, and customers—but instead go to 
				keeping the lights on.
			</p>
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				And the signals you can't see? A customer about to churn. A revenue recovery sitting uncaught in Stripe. 
				An expansion opportunity hiding in the data. An incident escalating across systems.
				These things exist in your data today. You just can't see them because no single tool has the full picture.
			</p>
		</div>
	</section>

	<!-- The Solution -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">The Solution</h2>
		<p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
			OpsPilot connects all your operational data into a unified layer, then deploys AI agents 
			that reason across your entire business to detect risks, automate workflows, and surface decisions 
			that would otherwise require a dedicated operations team.
		</p>
		
		<div class="space-y-6">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center">
						<svg class="w-6 h-6 text-[#202020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">1. Connect your tools</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							OpsPilot integrates with the tools you already use—QuickBooks, Xero, Stripe, Intercom, Zendesk, HubSpot, AWS, 
							GitHub, and more. No data migration. No switching systems. Connectors are configured in minutes.
						</p>
					</div>
				</div>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center">
						<svg class="w-6 h-6 text-[#202020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
						</svg>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">2. Get unified visibility</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							All your operational data flows into a single, normalized layer. Finance, billing, support, monitoring, sales—
							all correlated and queryable from one dashboard. See your entire business at a glance.
						</p>
					</div>
				</div>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center">
						<svg class="w-6 h-6 text-[#202020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">3. Deploy AI agents</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Domain-specific agents automatically detect cross-domain risks—churn signals, billing failures, cash flow shortfalls, 
							service degradation. Respond to support tickets. Flag overdue invoices. Triage incidents. Generate outreach.
						</p>
					</div>
				</div>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center">
						<svg class="w-6 h-6 text-[#202020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">4. Human-in-the-loop control</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							No autonomous publishing. No black-box decisions. Every agent action is presented for your review and approval. 
							You maintain full control while agents handle the work that would otherwise require hiring an operations team.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Key Features -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Key Features</h2>
		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Integration Marketplace</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Pre-built connectors to QuickBooks, Xero, Stripe, Intercom, Zendesk, HubSpot, AWS, GitHub, Slack, and more. 
					Zero migration required—plug in your existing tools and start getting unified intelligence immediately.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Unified Data Layer</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Normalized, cross-domain data model ingests and correlates finance, billing, support, monitoring, and sales data 
					into a single operational substrate. Query across domains with a single view.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Domain Agents</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					AI agents that specialize in finance, support, billing, monitoring, and sales. They reason across unified data 
					to surface risks, automate workflows, and surface decisions—all with human approval controls.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Cross-Domain Intelligence</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Agents correlate signals across domains to answer questions no single tool can: 
					"Which customers have declined usage, overdue invoices, AND unresolved tickets?" (churn risk). 
					Expand opportunities that would otherwise stay hidden.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Data Sovereignty Architecture</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Tenant-isolated storage, embeddings, agent memory, and LLM context. Business-sensitive operations route to 
					self-hosted or zero-retention enterprise models. Your operational data never benefits competitors on the platform.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Native Modules (Optional)</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					OpsPilot-built replacements for individual domains—finance, support, billing, monitoring, HR, sales—
					available as optional upgrades when you're ready to consolidate away from point solutions.
				</p>
			</div>
		</div>
	</section>

	<!-- What You Get Done -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">What Agents Can Do</h2>
		<div class="space-y-3">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 flex items-start gap-3">
				<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
				</svg>
				<span class="text-neutral-700 dark:text-neutral-400"><strong>Detect risks early</strong> — Identify churn signals, billing failures, cash flow shortfalls, and service degradation before they escalate</span>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 flex items-start gap-3">
				<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
				</svg>
				<span class="text-neutral-700 dark:text-neutral-400"><strong>Automate workflows</strong> — Handle support ticket triage, invoice follow-ups, incident routing, and outreach—with your approval</span>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 flex items-start gap-3">
				<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
				</svg>
				<span class="text-neutral-700 dark:text-neutral-400"><strong>Surface growth signals</strong> — Identify customers approaching usage limits, customers with expansion potential, and upsell opportunities</span>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 flex items-start gap-3">
				<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
				</svg>
				<span class="text-neutral-700 dark:text-neutral-400"><strong>Forecast and plan</strong> — Cash flow projections, churn probability scores, and seasonal operational pattern detection</span>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 flex items-start gap-3">
				<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
				</svg>
				<span class="text-neutral-700 dark:text-neutral-400"><strong>Learn over time</strong> — Agents accumulate your operational history and improve their scoring based on what actually drives outcomes for you</span>
			</div>
		</div>
	</section>

	<!-- Who It's For -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Who It's For</h2>
		<div class="space-y-4">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Solo SaaS Founders ($10K–$500K ARR)</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					You have real customers, real revenue, and real operational complexity. But you haven't yet justified hiring operations staff. 
					OpsPilot gives you the operational intelligence of a dedicated operations team without the headcount.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Small Teams Managing Multiple Tools</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					You're drowning in point solutions and context-switching. OpsPilot connects them without requiring you to abandon 
					the tools you know and have configured. You get unified intelligence while keeping your existing workflows intact.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Data Privacy-First Organizations</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					You're concerned about competitive exposure on shared platforms. OpsPilot's architecture guarantees tenant isolation at 
					the storage, embedding, and LLM context layers. Your operational intelligence never benefits competitors.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Founders Who Want Control</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					You don't want black-box automation. You want AI agents that present decisions for your review and approval. 
					You want to see the reasoning. OpsPilot operates in a human-in-the-loop model where you stay in control.
				</p>
			</div>
		</div>
	</section>

	<!-- How It's Different -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Why OpsPilot</h2>
		<div class="space-y-6">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Integration-First, Not Replacement-First</h3>
				<p class="text-neutral-600 dark:text-neutral-400 mb-3">
					Unlike Odoo and Holded, which demand you migrate away from your existing tools, OpsPilot connects to the systems you already use—
					QuickBooks, Stripe, Intercom, HubSpot. You get unified intelligence from day one without data migration, no switching costs, 
					no workflow disruption.
				</p>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Cross-Domain Intelligence as Core Value</h3>
				<p class="text-neutral-600 dark:text-neutral-400 mb-3">
					Unlike QuickBooks or HubSpot individually, OpsPilot reasons across all your operational domains simultaneously. 
					The questions you can answer grow exponentially: Which customers have declined usage AND have overdue invoices AND unresolved support tickets? 
					These signals are structurally invisible to any single tool.
				</p>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Data Isolation as Architecture, Not Policy</h3>
				<p class="text-neutral-600 dark:text-neutral-400 mb-3">
					Unlike Salesforce Einstein and HubSpot AI, which process user data through shared commercial infrastructure, OpsPilot enforces 
					tenant isolation at the storage, embedding, agent memory, and LLM context layers. Business-sensitive operations route exclusively 
					to self-hosted or zero-retention enterprise models. Your data never trains models that benefit your competitors.
				</p>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Compounding Intelligence Over Time</h3>
				<p class="text-neutral-600 dark:text-neutral-400 mb-3">
					Unlike Zapier, which automates discrete workflows without memory or reasoning, OpsPilot accumulates your operational history 
					and uses it to improve agent decisions. The system gets smarter the longer you use it, detecting patterns in your churn signals, 
					billing behaviors, and seasonal cycles that you've built up over time.
				</p>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">ERP-Grade Scope at Founder Velocity</h3>
				<p class="text-neutral-600 dark:text-neutral-400 mb-3">
					Unlike SAP Business One and NetSuite, which require dedicated implementation teams and months of onboarding, OpsPilot is built 
					for a single founder to configure in a session. No consultants. No complex data models. Just connect your tools and start getting 
					operational intelligence immediately.
				</p>
			</div>
		</div>
	</section>

	<!-- Pricing -->
	<!-- <section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Pricing</h2>
		<div class="bg-white dark:bg-neutral-800 border-2 border-[#fedf19] rounded-lg p-8 max-w-md">
			<div class="mb-6">
				<div class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">$99<span class="text-lg font-normal text-neutral-600 dark:text-neutral-400">/month</span></div>
				<p class="text-neutral-600 dark:text-neutral-400">Transparent pricing. No per-connector fees. No usage limits.</p>
			</div>
			<ul class="space-y-3 mb-8">
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Unlimited connectors to integrated tools</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Unified operational data layer</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Domain agents (finance, support, billing, monitoring)</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Cross-domain risk detection & alerting</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Tenant-isolated data sovereignty</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Human-in-the-loop agent controls</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">API access for custom integrations</span>
				</li>
			</ul>
			<div class="flex justify-center mt-8">
				<button 
					on:click={openWaitlist}
					class="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#fe1817] text-white font-semibold rounded-md hover:bg-[#fedf19] hover:text-[#202020] transition-colors"
				>
					Join the waitlist
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>
		</div>
	</section> -->

	<!-- FAQ -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Frequently Asked Questions</h2>
		<div class="space-y-4">
			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>How does OpsPilot keep my data isolated?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					OpsPilot enforces data isolation at the architectural level, not just contractually. Every tenant's data is isolated at the storage layer, 
					embedding namespace, agent memory, and LLM context level. Business-sensitive operations (financial decisions, churn predictions) route 
					exclusively to self-hosted open models or enterprise-tier zero-retention services. Your operational intelligence never trains shared models 
					and is never accessible to other platform users.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>Do I have to migrate my data out of QuickBooks / Stripe / Intercom?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					No. OpsPilot is integration-first, not replacement-first. You keep all your data in your existing tools and connect them to OpsPilot 
					via pre-built connectors. Data flows into OpsPilot's unified layer in real time, but your source of truth stays wherever it is today—
					QuickBooks, Stripe, Intercom, etc. You can add OpsPilot as an additional intelligence layer without disrupting your existing workflows.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>How long does integration setup take?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					Most connectors can be configured in minutes via OAuth or API key authentication. OpsPilot handles the data normalization and mapping 
					automatically. We target setup time under 15 minutes for standard integrations and under an hour for complex configurations.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>Can agents act autonomously, or do they always need approval?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					OpsPilot operates on a human-in-the-loop continuum. Early on, agents surface recommendations for your review and approval. As trust builds 
					and you see their reliability, you can gradually increase automation. But the default is always approval gates on consequential actions—
					especially anything involving financial or customer-facing decisions. You're always in control.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>What if OpsPilot isn't compatible with a tool I use?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					OpsPilot has an open API for third-party integrations and an integration marketplace. Pre-built connectors cover the dominant platforms 
					(QuickBooks, Xero, Stripe, Intercom, Zendesk, HubSpot, AWS, GitHub, Slack, etc.), and for long-tail tools, you can build custom connectors 
					or request integrations.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>How do agents learn from my data over time?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					OpsPilot accumulates your operational history—which customers churned, which billing issues were recovered, which support patterns led to 
					customer escalations. This data is stored in a tenant-isolated memory that agents use to improve their future recommendations. Over time, 
					agents learn what patterns actually drive outcomes for your business, and their scoring becomes progressively more accurate.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>When will OpsPilot launch?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					Currently in active development. Waitlist members will get early access and founding member pricing. 
					Expected launch: Q3 2026.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>Is there a free trial?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					Yes. Early access beta users will receive a 30-day trial to evaluate OpsPilot with their real operational data and existing tools. 
					Waitlist members get priority access to the beta.
				</p>
			</details>
		</div>
	</section>

	<!-- Final CTA -->
	<section class="bg-neutral-50 dark:bg-[#202020] border border-neutral-200 dark:border-neutral-700 rounded-lg p-12 text-center">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Ready to run your business like an enterprise—without the team?</h2>
		<p class="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
			Join the waitlist to get early access, founding member pricing, and a chance to shape the future of operational intelligence for founders.
		</p>
		<button 
			on:click={openWaitlist}
			class="inline-flex items-center gap-2 px-6 py-3 bg-[#fe1817] text-white font-semibold rounded-md hover:bg-[#fedf19] hover:text-[#202020] transition-colors"
		>
			Join the waitlist
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button>
		<p class="text-base text-neutral-600 dark:text-neutral-300 mt-4">No spam. Unsubscribe anytime.</p>
	</section>
</div>
