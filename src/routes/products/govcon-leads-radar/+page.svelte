<script>
	import WaitlistModal from '$lib/components/WaitlistModal.svelte';
	import SEO from '$lib/components/SEO.svelte';
	
	let isWaitlistOpen = false;
	
	function openWaitlist() {
		isWaitlistOpen = true;
	}
</script>

<SEO
	title="GovCon Leads Radar - AI-Powered Federal Contracting Lead Intelligence"
	description="Turn raw federal contracting data into ranked, actionable lead lists. AI-driven tiering of USAspending.gov prospects, automated SAM.gov cross-referencing for compliance flags and POC data. Identify best-fit government sales prospects in minutes, not hours."
/>

<WaitlistModal bind:isOpen={isWaitlistOpen} productName="GovCon Leads Radar" productId="govcon_leads_radar" />

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
	<!-- Hero Section -->
	<div class="mb-16">
		<div class="flex items-center gap-3 mb-4">
			<span class="px-3 py-1 bg-[#fedf19] text-[#202020] text-xs font-semibold rounded-full">Building Now</span>
		</div>
		<h1 class="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">GovCon Leads Radar</h1>
		<p class="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
			Every company selling to the U.S. government can identify their best-fit prospects in minutes instead of hours. 
			GovCon Leads Radar turns raw federal contracting data into a ranked, actionable lead list. AI-driven tiering,
			automated SAM.gov cross-referencing, compliance flags, and point-of-contact (POC) data, all in one dashboard. Free your sales team
			to close deals instead of cross-referencing public data.
		</p>
	</div>

	<!-- The Problem -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">The Problem</h2>
		<div class="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 space-y-4">
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				You sell to the U.S. government. Your pipeline depends on finding the right prospects: vendors and buyers
				who are actively spending federal dollars. But prospecting means manually searching USAspending.gov,
				cross-referencing results with SAM.gov for registration status and debarment flags, and looking up
				point-of-contact data one lead at a time.
			</p>
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				Even if you're comfortable with USAspending.gov's filters, the site doesn't save your searches between sessions. 
				Every time you prospect, you start from zero. Re-entering criteria, re-scoring leads in your head,
				re-doing the same manual lookups.
			</p>
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				And the scoring? That's all on you. You have to judge which leads are worth pursuing based on contract value, 
				recency, NAICS codes, and award patterns, without any algorithmic help. The result is hours of research
				for a handful of leads, and no confidence that you're prioritizing the right ones.
			</p>
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				<strong>The root problem:</strong> The data is public, but turning it into a prioritized lead list requires 
				manual cross-referencing, session-only searches, and human judgment at scale. Work that doesn't close deals.
			</p>
		</div>
	</section>

	<!-- The Solution -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">The Solution</h2>
		<p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
			GovCon Leads Radar automates the entire prospecting workflow. Save persistent searches, get AI-tiered lead lists, 
			and see compliance flags and POC data pulled automatically from SAM.gov, all in one dashboard.
		</p>
		
		<div class="space-y-6">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center">
						<svg class="w-6 h-6 text-[#202020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">1. Save and run persistent searches</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Set up your search criteria once: NAICS codes, agency, contract value range, date range. Then save it.
							Unlike the source site's session-only search, your searches persist and can be re-run on demand or on a schedule.
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
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">2. Get AI-tiered lead lists</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Every match is scored and tiered automatically. The AI evaluates contract value, recency, NAICS alignment, 
							and award patterns to surface Tier 1 (best-fit) leads first. You see the highest-priority prospects at the top,
							not a raw data dump.
						</p>
					</div>
				</div>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center">
						<svg class="w-6 h-6 text-[#202020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101z" />
						</svg>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">3. Automated SAM.gov cross-referencing</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Every lead is automatically cross-referenced with SAM.gov for registration status, debarment flags, 
							NAICS codes, UEI, and point-of-contact data. No manual lookups. Compliance and risk flags appear 
							right alongside each lead.
						</p>
					</div>
				</div>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center">
						<svg class="w-6 h-6 text-[#202020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
						</svg>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">4. Export and act</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Export qualified leads to CSV or your CRM for outreach. Each lead includes source links back to 
							USAspending.gov and SAM.gov for independent verification, plus a data-freshness timestamp so you 
							know exactly when the information was last updated.
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
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Persistent Saved Searches</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Unlike the source site's session-only search, your search criteria persist. Re-run them on demand or set 
					a schedule. Get notified when new matches appear. Never start from zero again.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">AI-Driven Tiering & Scoring</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Leads are automatically tiered based on contract value, award recency, NAICS alignment, and award patterns. 
					Tier 1 leads surface first so you prioritize the prospects most likely to convert.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Automated Cross-Referencing</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					USAspending.gov award data is automatically cross-referenced with SAM.gov for registration status, 
					debarment flags, NAICS codes, UEI, and POC data. One unified view, no manual lookups required.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Compliance & Risk Flags</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Registration status, debarment flags, and other compliance signals appear alongside each lead. 
					Know before you reach out whether a prospect is in good standing.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">POC Discovery In-App</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Point-of-contact data pulled from SAM.gov and displayed in-app with access logging and periodic re-sync. 
					Plus a direct link to the lead's SAM.gov entity page for independent verification.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">CSV/CRM Export</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Export your tiered lead list to CSV or your CRM for outreach workflows. Each record includes source links 
					and data-freshness timestamps for auditability.
				</p>
			</div>
		</div>
	</section>

	<!-- Who It's For -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Who It's For</h2>
		<div class="space-y-4">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">GovCon Sales & BD Teams</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					You're responsible for keeping the pipeline full but don't have dedicated federal-data research staff. 
					Prospecting is a side task on top of your actual selling work. GovCon Leads Radar gives you back those hours.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Compliance Vendors</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					You sell cybersecurity, audit prep, or compliance services to government contractors. You need to identify 
					who's actively winning federal contracts and might need your services, fast.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">IT & Engineering Service Providers</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					You deliver technical services to federal agencies or prime contractors. You need to find the right buyers 
					based on NAICS codes, contract values, and award history, without manual research.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Any Entity Selling to the U.S. Government</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Whether you're a small business or mid-market, if your revenue depends on federal spending, this product 
					eliminates the manual prospecting grind and gives you a ranked, actionable lead list.
				</p>
			</div>
		</div>
	</section>

	<!-- Why GovCon Leads Radar -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Why GovCon Leads Radar</h2>
		<div class="space-y-6">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Modern, Automated Cross-Referencing</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Unlike established platforms with dated interfaces that still require manual research to cross-reference 
					contract and vendor data, GovCon Leads Radar automatically cross-references USAspending.gov and SAM.gov 
					and presents it in a single, tiered view. No manual lookups required.
				</p>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Built for Sellers, Not Bidders</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Unlike platforms designed to help contractors find opportunities to bid on, GovCon Leads Radar is built 
					to help sellers find vendors and buyers to sell to, inverting the use case entirely.
				</p>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Persistent, Scored Search vs. Manual Re-Entry</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Unlike the manual workflow of spreadsheets, repeated source site searches, and LinkedIn lookups, which
					require full manual re-entry and re-scoring every session, GovCon Leads Radar saves and schedules searches
					persistently and automatically re-scores/tiers new matches, so you never start from zero.
				</p>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">AI Tiering That Improves Over Time</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Unlike static filtering tools that return the same quality on day 100 as day 1, GovCon Leads Radar tracks 
					outcome feedback on tiered leads to validate that tiering correlates with real conversion, and improves
					scoring over time.
				</p>
			</div>
		</div>
	</section>

	<!-- Follow the Build -->
	<section class="mb-16 mx-4 sm:mx-6 lg:mx-10">
		<div class="bg-neutral-50 dark:bg-[#202020] border-4 border-neutral-200 dark:border-neutral-700 rounded-lg p-12 text-center">
			<h2 class="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Want to see how GovCon Leads Radar gets built?</h2>
			<p class="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
				GovCon Leads Radar is being built in public. Every architectural decision, engineering challenge, 
				and product direction gets documented and shared. So you can follow the journey from
				idea to production.
			</p>
			<a
				href="https://nickthiru.dev/writing?series=govcon-leads-radar"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 px-6 py-3 bg-[#fedf19] text-[#202020] font-semibold rounded-md hover:bg-[#fe1817] hover:text-white transition-colors"
			>
				Read the GovCon Leads Radar blog series
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
				</svg>
			</a>
		</div>
	</section>

	<!-- FAQ -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Frequently Asked Questions</h2>
		<div class="space-y-4">
			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>How accurate is the AI tiering?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					The scoring model uses contract value, award recency, NAICS alignment, and award patterns to differentiate 
					Tier 1 from Tier 3 leads. We validate tiering accuracy by tracking outcome feedback: whether Tier 1 leads
					actually convert at higher rates than Tier 3. This data is used to continuously improve the model.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>How fresh is the data?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					USAspending.gov and SAM.gov data have an inherent 1–2 week lag from source updates. Each lead displays a 
					data-freshness timestamp so you know exactly when the information was last synced. We monitor source APIs 
					for schema changes and rate-limit adjustments to maintain pipeline reliability.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>What compliance data is surfaced?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					Each lead shows SAM.gov registration status, debarment flags, NAICS codes, UEI, and available POC data. 
					All POC data is ingested via the SAM.gov API under a documented lawful basis, with access logging and 
					periodic re-sync. A direct link to the lead's SAM.gov entity page is provided for independent verification.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>Can I schedule searches to run automatically?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					Yes. Saved searches can be scheduled to run persistently. When new matches appear, you'll see them surfaced 
					in your dashboard. No need to manually re-run searches. New-match notifications keep you informed without
					requiring daily logins.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>What does GovCon Leads Radar cost?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					Pricing hasn't been finalized yet and will be determined before beta testing. Waitlist members will get 
					early access and founding member pricing. Expect pricing to reflect the value of automated prospecting 
					versus the cost of manual research hours.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>When will GovCon Leads Radar launch?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					Currently in active development. Expected launch is Q4 2026. Waitlist members will get early access 
					to beta testing before the public launch.
				</p>
			</details>
		</div>
	</section>

	<!-- Final CTA -->
	<section class="bg-neutral-50 dark:bg-[#202020] border-4 border-neutral-200 dark:border-neutral-700 rounded-lg mx-4 sm:mx-6 lg:mx-10 p-12 text-center">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Ready to identify your best-fit government prospects in minutes?</h2>
		<p class="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
			Join the waitlist to get early access, founding member pricing, and updates on the build.
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
