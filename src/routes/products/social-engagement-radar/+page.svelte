<script>
	import WaitlistModal from '$lib/components/WaitlistModal.svelte';
	
	let isWaitlistOpen = false;
	
	function openWaitlist() {
		isWaitlistOpen = true;
	}
</script>

<svelte:head>
	<title>Social Engagement Radar - Discover High-Value X & LinkedIn Conversations - Thiru AI Labs</title>
	<meta name="description" content="Discover high-value conversations on X and LinkedIn early. AI-powered conversation scoring, personalized reply angle generation, and human-approved publishing. Build your presence through meaningful engagement." />
</svelte:head>

<WaitlistModal bind:isOpen={isWaitlistOpen} productName="Social Engagement Radar" productId="social_engagement_radar" />

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
	<!-- Hero Section -->
	<div class="mb-16">
		<div class="flex items-center gap-3 mb-4">
			<span class="px-3 py-1 bg-[#fedf19] text-[#202020] text-xs font-semibold rounded-full">Building Now</span>
		</div>
		<h1 class="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Social Engagement Radar</h1>
		<p class="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
			A radar for discovering high-value conversations on X and LinkedIn early. Get AI-scored opportunities, personalized reply angles, 
			and human-approved drafts—all in one dashboard. Engage meaningfully and build your presence without endless scrolling.
		</p>
	</div>

	<!-- The Problem -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">The Problem</h2>
		<div class="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 space-y-4">
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				You want to grow your presence on X and LinkedIn through meaningful engagement. But engagement only works if you're early—
				if you reply after a conversation has cooled, you're invisible.
			</p>
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				So you do what everyone does: scroll endlessly, looking for reply-worthy conversations. 
				You bookmark posts, keep multiple tabs open, and monitor your niche obsessively, hoping to catch conversations 
				while they're still hot.
			</p>
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				Even when you find something worth replying to, <strong>writing a good reply takes time</strong>. 
				You need to match the tone of the conversation, add genuine value, and make sure you sound like yourself—not like a chatbot.
			</p>
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				And if you're managing <strong>multiple interests simultaneously</strong> (product discussions, AI/ML, SaaS operations, fundraising), 
				the cognitive load multiplies. You're constantly context-switching between different niches, different keywords, different audiences.
			</p>
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				The result? Most engagers either give up on timing and reply late (losing the engagement effect), 
				or resort to low-effort generic replies that don't build real relationships or influence.
			</p>
		</div>
	</section>

	<!-- The Solution -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">The Solution</h2>
		<p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
			Social Engagement Radar is a discovery engine for X and LinkedIn. Set up keywords for your niche(s), and the Radar surfaces 
			the best reply-worthy conversations as they happen. AI generates personalized reply angles, you pick one and edit if needed, 
			and publish with confidence. All from one dashboard.
		</p>
		
		<div class="space-y-6">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center">
						<svg class="w-6 h-6 text-[#202020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m0 18l4-4m0 0l4 4m-4-4v4m6-14h4a2 2 0 012 2v12a2 2 0 01-2 2h-4m0-18l-4 4m0 0l-4-4m4 4V3" />
						</svg>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">1. Configure your niche(s)</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Set up keywords for each area you want to engage in—Product Management, AI/ML, SaaS, Fundraising, etc. 
							Each space is independent, so your searches never mix together.
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
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">2. Get a ranked dashboard</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Every day, the Radar scans recent conversations matching your keywords and ranks them by engagement potential. 
							You see the top 10–20 opportunities—not an endless noisy feed. Decision is "which of these?" not "is there anything here?"
						</p>
					</div>
				</div>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center">
						<svg class="w-6 h-6 text-[#202020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">3. AI generates reply angles</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							For each opportunity, the system generates 2–3 distinct reply angles—different approaches to add value. 
							You pick the angle that resonates, and the AI drafts a full reply conditioned on your personal voice.
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
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">4. Review, edit, and publish</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Read the draft, make quick edits if needed, then publish directly to X or LinkedIn. No copy-pasting. No manual posting. 
							All from the Radar dashboard. Or schedule replies for optimal timing.
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
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Discovery-First</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Unlike content tools that treat engagement as secondary, Radar optimizes for finding reply-worthy conversations 
					as the primary workflow. Discovery is the product.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Opportunity Scoring</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Each conversation is scored on engagement potential, relevance, freshness, and author fit. 
					Only the highest-signal opportunities surface. No noise, no stale posts.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Multiple Reply Angles</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Get 2–3 distinct reply angles for each opportunity. Different approaches, same conversation. 
					Pick the angle that matches your voice and intention.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Personal Voice Learning</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					The system learns your writing style from your past X and LinkedIn posts. Drafts progressively sound more like you 
					as the system sees what you publish and edit.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Space-Based Organization</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Organize discovery into separate named spaces—one per interest. Each space has its own keywords and conversation history. 
					Switch instantly without re-configuring.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Outcome Tracking</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Log which replies led to DMs, follows, or collaborations. Over time, the system uses this data to improve 
					scoring and surface conversations more likely to drive real outcomes.
				</p>
			</div>
		</div>
	</section>

	<!-- Who It's For -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Who It's For</h2>
		<div class="space-y-4">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Solo Founders & Entrepreneurs</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					You're building a product and need to build your brand simultaneously. You have insights to share but limited time. 
					Radar makes it easy to engage early and often without abandoning product work.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Technical Professionals & Engineers</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					You have deep expertise but writing isn't your strength. You'd rather talk through ideas than write them. 
					Radar generates the drafts; you just approve and engage.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Consultants & Thought Leaders</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Your credibility is your currency. You need to stay visible and engage meaningfully, but your calendar is packed. 
					Radar finds the right moments to show up and add value.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">People Pursuing Multiple Interests</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					You engage across different topics (Product, AI, SaaS, Fundraising, etc.) and each requires different context. 
					Space-based organization lets you switch between interests without mental overhead.
				</p>
			</div>
		</div>
	</section>

	<!-- How It's Different -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Why Social Engagement Radar</h2>
		<div class="space-y-6">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Discovery-First, Not Content-Second</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Unlike Typefully, Hypefury, and Tweet Hunter, which optimize for content creation and scheduling first, 
					Radar makes discovery the primary workflow. Finding reply-worthy conversations early is the entire product.
				</p>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">High-Signal Over Volume</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Unlike the social platform's native search and feed, which return unranked noisy streams, Radar shows only the top 10–20 opportunities per day. 
					You're not drowning in options; you're choosing from curated, scored conversations.
				</p>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Personal Voice, Not Generic AI</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Unlike ChatGPT and Claude, which produce competent but voice-neutral drafts you have to restyle every time, 
					Radar learns your writing style from your published posts. Drafts progressively sound more like you.
				</p>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Human Approval Before Publishing</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Unlike automated engagement bots that publish without review, Radar presents drafts for your explicit approval. 
					You're always in control. No risk of reputation damage from unvetted content.
				</p>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Space-Based Organization for Multiple Interests</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Unlike broad social listening tools designed for brand monitoring across platforms, Radar is tuned for individual engagers 
					pursuing multiple interests. Setup takes minutes, and switching between spaces requires no re-configuration.
				</p>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Compounding Intelligence Via Feedback</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Unlike static discovery tools that return the same quality on day 100 as day 1, Radar improves over time. 
					Outcome capture feeds into improved scoring, and the product gets smarter with use.
				</p>
			</div>
		</div>
	</section>

	<!-- Pricing -->
	<!-- <section class="mb-16">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Pricing</h2>
		<div class="bg-white dark:bg-neutral-800 border-2 border-[#fedf19] rounded-lg p-8 max-w-md">
			<div class="mb-6">
				<div class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">$39<span class="text-lg font-normal text-neutral-600 dark:text-neutral-400">/month</span></div>
				<p class="text-neutral-600 dark:text-neutral-400">Simple pricing. All features included. No per-space or per-opportunity fees.</p>
			</div>
			<ul class="space-y-3 mb-8">
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Unlimited conversation discovery</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">AI reply angle generation & drafting</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Personal voice learning</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Opportunity scoring & ranking</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Unlimited spaces for multiple interests</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Outcome tracking & feedback loops</span>
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
					<span>How does the scoring algorithm work?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					The Radar scores conversations on engagement potential (recent activity, reply velocity), relevance (keyword match strength), 
					author fit (does the author typically engage with replies?), freshness (is this conversation still active?), and — over time — 
					outcome likelihood (based on your personal history of which replies led to business results). Only the highest-scoring opportunities 
					make the daily dashboard.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>How does personal voice learning work?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					The system analyzes your published X and LinkedIn posts to build a profile of your voice—sentence structure, vocabulary, tone, emoji usage, 
					paragraph length, and patterns. It captures the delta between AI-generated drafts and what you actually publish, 
					learning from your edits over time. The more posts you publish, the better the drafts match your style.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>What if I don't like a generated reply angle?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					You get 2–3 distinct reply angles for every opportunity. If none resonate, you can regenerate with different instructions, 
					or write your own from scratch using the Radar's drafting assistant. You're always in full control.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>Can I organize conversations by different topics or interests?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					Yes. You can create unlimited spaces—one per interest (Product Management, AI/ML, SaaS, Fundraising, etc.). 
					Each space has its own keywords, conversation history, and voice profile. Switching between spaces is instant and requires no re-configuration.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>How does outcome tracking work?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					After you publish a reply, you can log whether it led to DMs, follows, collaborations, or other business outcomes. 
					The Radar uses this data to improve its scoring algorithm over time—surfacing conversations that match patterns of your historically successful replies.
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
					Yes. All new users will get a 14-day free trial to test the product with real keyword configurations and conversations. 
					No credit card required to start.
				</p>
			</details>

			<details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
				<summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
					<span>When will Social Engagement Radar launch?</span>
					<span class="transition duration-300 group-open:-rotate-180">
						<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
					</span>
				</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400 animate-fadeIn">
					Currently in active development. Waitlist members will get early access and founding member pricing. 
					Expected launch: Q4 2025.
				</p>
			</details>
		</div>
	</section>

	<!-- Final CTA -->
	<section class="bg-neutral-50 dark:bg-[#202020] border border-neutral-200 dark:border-neutral-700 rounded-lg p-12 text-center">
		<h2 class="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Ready to engage early and build your presence?</h2>
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
