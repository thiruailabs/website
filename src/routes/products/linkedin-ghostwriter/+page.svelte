<script>
	import WaitlistModal from '$lib/components/WaitlistModal.svelte';
	
	let isWaitlistOpen = false;
	
	function openWaitlist() {
		isWaitlistOpen = true;
	}
</script>

<svelte:head>
	<title>LinkedIn Ghostwriter - Thiru AI Labs</title>
	<meta name="description" content="Turn voice notes into authentic LinkedIn posts. Style learning, quality gates, and scheduling built-in. For founders who want to post consistently without sounding like corporate AI." />
</svelte:head>

<WaitlistModal bind:isOpen={isWaitlistOpen} productName="LinkedIn Ghostwriter" />

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
	<!-- Hero Section -->
	<div class="mb-16">
		<div class="flex items-center gap-3 mb-4">
			<span class="px-3 py-1 bg-[#fedf19] text-[#202020] text-xs font-semibold rounded-full">Building Now</span>
		</div>
		<h1 class="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">LinkedIn Ghostwriter</h1>
		<p class="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
			Turn voice notes into authentic LinkedIn posts. Style learning, quality gates, and scheduling built-in. 
			For founders who want to post consistently without sounding like corporate AI.
		</p>
		<button 
			on:click={openWaitlist}
			class="inline-flex items-center gap-2 px-6 py-3 bg-[#fe1817] text-white font-semibold rounded-md hover:bg-[#202020] transition-colors text-lg"
		>
			Join the waitlist
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button>
	</div>

	<!-- The Problem -->
	<section class="mb-16">
		<h2 class="text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">The Problem</h2>
		<div class="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 space-y-4">
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				You know you should post on LinkedIn consistently. It's how you build your brand, attract clients, and establish authority.
			</p>
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				But writing posts takes <strong>time you don't have</strong>. You sit down to write, stare at a blank screen, 
				and either give up or force out something that doesn't sound like you.
			</p>
			<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
				Generic AI tools make it worse—they produce corporate-speak that screams "I used ChatGPT." 
				Your audience can tell, and it damages your credibility.
			</p>
		</div>
	</section>

	<!-- The Solution -->
	<section class="mb-16">
		<h2 class="text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">The Solution</h2>
		<p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
			LinkedIn Ghostwriter turns your raw thoughts into polished posts that sound like <em>you</em>—not a robot.
		</p>
		
		<div class="space-y-6">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center">
						<svg class="w-6 h-6 text-[#202020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
						</svg>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">1. Record a voice note</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Send a voice note via Telegram (or upload audio). Talk naturally—like you're explaining your idea to a friend. 
							No need to structure it perfectly.
						</p>
					</div>
				</div>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center">
						<svg class="w-6 h-6 text-[#202020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
						</svg>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">2. AI learns your style</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							The agent analyzes your past LinkedIn posts to understand your voice, tone, and writing patterns. 
							It doesn't just generate generic content—it writes like <em>you</em>.
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
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">3. Quality gates ensure it's good</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Every post is scored for hook strength, readability, and style match. If it doesn't meet quality thresholds, 
							the agent regenerates it automatically. You only see the best versions.
						</p>
					</div>
				</div>
			</div>

			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center">
						<svg class="w-6 h-6 text-[#202020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
						</svg>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">4. Review, edit, and post</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Get 2-3 variations to choose from. Pick one, make quick edits if needed, and post. 
							Or schedule it for later—the agent handles that too.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Key Features -->
	<section class="mb-16">
		<h2 class="text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Key Features</h2>
		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Style Learning</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Analyzes your past posts to match your unique voice, tone, and writing patterns. No generic AI voice.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Quality Gates</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Every post is scored for hook strength, readability, and authenticity. Bad outputs never reach you.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Multiple Variations</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Get 2-3 different versions of each post to choose from. Pick the one that resonates most.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Scheduling</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Schedule posts for optimal times. Maintain consistency without being glued to LinkedIn.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Telegram Integration</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Send voice notes directly via Telegram. No app switching, no friction—just record and send.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Production-Grade</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Built with LangGraph, proper error handling, observability, and infrastructure. Not a prototype.
				</p>
			</div>
		</div>
	</section>

	<!-- Who It's For -->
	<section class="mb-16">
		<h2 class="text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Who It's For</h2>
		<div class="space-y-4">
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 mb-2">Solo Founders & Entrepreneurs</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					You're building a product and need to build your brand simultaneously. You have ideas to share but no time to write.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 mb-2">Consultants & Freelancers</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					Your expertise is valuable, but client work takes priority. You need an easy way to stay visible and attract leads.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 mb-2">Technical Professionals</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					You have deep knowledge to share but writing isn't your strength. You'd rather talk through ideas than write them.
				</p>
			</div>
			<div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-neutral-900 mb-2">Busy Executives</h3>
				<p class="text-neutral-600 dark:text-neutral-400">
					You need to maintain thought leadership but your calendar is packed. Voice notes fit into your workflow.
				</p>
			</div>
		</div>
	</section>

	<!-- How It's Different -->
	<section class="mb-16">
		<h2 class="text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">How It's Different</h2>
		<div class="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
			<table class="w-full">
				<thead class="bg-[#202020] text-white">
					<tr>
						<th class="px-6 py-4 text-left font-semibold">Feature</th>
						<th class="px-6 py-4 text-left font-semibold">Generic AI Tools</th>
						<th class="px-6 py-4 text-left font-semibold">LinkedIn Ghostwriter</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-neutral-200 dark:divide-neutral-700">
					<tr>
						<td class="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-100">Voice Input</td>
						<td class="px-6 py-4 text-neutral-600 dark:text-neutral-400">❌ Type everything</td>
						<td class="px-6 py-4 text-neutral-900 dark:text-neutral-100">✅ Record voice notes</td>
					</tr>
					<tr>
						<td class="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-100">Style Learning</td>
						<td class="px-6 py-4 text-neutral-600 dark:text-neutral-400">❌ Generic corporate voice</td>
						<td class="px-6 py-4 text-neutral-900 dark:text-neutral-100">✅ Learns your unique style</td>
					</tr>
					<tr>
						<td class="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-100">Quality Control</td>
						<td class="px-6 py-4 text-neutral-600 dark:text-neutral-400">❌ You get what you get</td>
						<td class="px-6 py-4 text-neutral-900 dark:text-neutral-100">✅ Automated quality gates</td>
					</tr>
					<tr>
						<td class="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-100">Scheduling</td>
						<td class="px-6 py-4 text-neutral-600 dark:text-neutral-400">❌ Manual posting</td>
						<td class="px-6 py-4 text-neutral-900 dark:text-neutral-100">✅ Built-in scheduler</td>
					</tr>
					<tr>
						<td class="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-100">Infrastructure</td>
						<td class="px-6 py-4 text-neutral-600 dark:text-neutral-400">⚠️ Prototype quality</td>
						<td class="px-6 py-4 text-neutral-900 dark:text-neutral-100">✅ Production-grade system</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>

	<!-- Pricing -->
	<section class="mb-16">
		<h2 class="text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Pricing</h2>
		<div class="bg-white dark:bg-neutral-800 border-2 border-[#fedf19] rounded-lg p-8 max-w-md">
			<div class="mb-6">
				<div class="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">$29<span class="text-xl font-normal text-neutral-600 dark:text-neutral-400">/month</span></div>
				<p class="text-neutral-600 dark:text-neutral-400">Simple, transparent pricing. No hidden fees.</p>
			</div>
			<ul class="space-y-3 mb-8">
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Unlimited voice notes</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Unlimited post generations</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Style learning & quality gates</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Post scheduling</span>
				</li>
				<li class="flex items-start gap-2">
					<svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-neutral-700 dark:text-neutral-400">Telegram integration</span>
				</li>
			</ul>
			<button 
				on:click={openWaitlist}
				class="w-full px-6 py-3 bg-[#fe1817] text-white font-semibold rounded-md hover:bg-[#202020] transition-colors"
			>
				Join the waitlist
			</button>
		</div>
	</section>

	<!-- FAQ -->
	<section class="mb-16">
		<h2 class="text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">Frequently Asked Questions</h2>
		<div class="space-y-4">
			<details class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<summary class="font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">How does the style learning work?</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400">
					The agent analyzes your past LinkedIn posts to identify patterns in your writing—sentence structure, vocabulary, 
					tone, use of emojis, paragraph length, and more. It builds a style profile that guides post generation. 
					The more posts you've written, the better it matches your voice.
				</p>
			</details>

			<details class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<summary class="font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">What if I don't like the generated posts?</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400">
					You get 2-3 variations for every voice note. If none of them work, you can regenerate with different instructions 
					or edit them directly. The quality gates ensure you're starting with solid content, but you always have final control.
				</p>
			</details>

			<details class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<summary class="font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">How long should my voice notes be?</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400">
					Anywhere from 30 seconds to 5 minutes works well. Shorter notes work for quick insights or tips. 
					Longer notes work for stories or detailed explanations. The agent adapts to your input length.
				</p>
			</details>

			<details class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<summary class="font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">Can I use this for other platforms besides LinkedIn?</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400">
					Currently, it's optimized for LinkedIn's format and best practices. Support for Twitter/X and other platforms 
					may come in the future based on user feedback.
				</p>
			</details>

			<details class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<summary class="font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">What's the tech stack?</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400">
					Built with LangGraph for agent orchestration, OpenAI's Whisper for transcription, Claude/GPT-4 for generation, 
					AWS CDK for infrastructure, and proper observability with LangSmith. It's production-grade, not a prototype.
				</p>
			</details>

			<details class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<summary class="font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">When will it launch?</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400">
					Currently in active development. Waitlist members will get early access and founding member pricing. 
					Expected launch: Q1 2026.
				</p>
			</details>

			<details class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
				<summary class="font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">Is there a free trial?</summary>
				<p class="mt-3 text-neutral-600 dark:text-neutral-400">
					Yes, all new users will get a 14-day free trial to test the product. No credit card required to start.
				</p>
			</details>
		</div>
	</section>

	<!-- Final CTA -->
	<section class="bg-[#202020] border border-neutral-700 rounded-lg p-12 text-center">
		<h2 class="text-3xl font-bold text-white mb-4">Ready to post consistently without the pain?</h2>
		<p class="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
			Join the waitlist to get early access, founding member pricing, and updates on the build.
		</p>
		<button 
			on:click={openWaitlist}
			class="inline-flex items-center gap-2 px-8 py-4 bg-[#fe1817] text-white font-semibold rounded-md hover:bg-[#fedf19] hover:text-[#202020] transition-colors text-lg"
		>
			Join the waitlist
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button>
		<p class="text-sm text-neutral-400 mt-4">No spam. Unsubscribe anytime.</p>
	</section>
</div>
