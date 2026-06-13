<script>
  import WaitlistModal from '$lib/components/WaitlistModal.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';

  let isWaitlistOpen = false;
  let selectedProduct = '';
  let selectedProductId = '';

  function openWaitlist(productName, productId) {
    selectedProduct = productName;
    selectedProductId = productId;
    isWaitlistOpen = true;
  }
</script>

<svelte:head>
  <title>Products - Thiru AI Labs</title>
</svelte:head>

<WaitlistModal
  bind:isOpen={isWaitlistOpen}
  productName={selectedProduct || 'Thiru AI Labs'}
  productId={selectedProductId}
/>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  
  <!-- ============================================
       PAGE HEADER
       ============================================ -->
  <div class="max-w-3xl mb-16">
    <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">
      Products
    </h1>
    <div class="max-w-none">
      <p class="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
        A growing portfolio of specialized AI applications and autonomous workflows, designed to solve concrete business bottlenecks rather than act as generic chatbots.
      </p>
    </div>
  </div>

  <!-- ============================================
       IN PROGRESS SECTION
       ============================================ -->
  <section class="mb-16">
    <h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">
      In Progress
    </h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

      <!-- Product 1: Social Engagement Radar -->
      <ProductCard 
        title="Social Engagement Radar"
        status="Building"
        padding="p-8"
        titleSize="text-2xl"
      >
        <p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
          Monitor X and LinkedIn conversations in real-time. Find relevant discussions about your topics, get AI-drafted responses ready to send.
          Plug into communities without manual monitoring.
        </p>
        
        <div>
          <h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
            Who it's for
          </h4>
          <p class="text-neutral-600 dark:text-neutral-400">
            Founders, product managers, and community builders looking to participate authentically on X
          </p>
        </div>

        {#snippet footer()}
          <div class="flex gap-3 mt-auto">
            <a 
              href="/products/social-engagement-radar" 
              class="inline-flex flex-1 justify-center items-center gap-1 px-4 py-2 bg-[#202020] dark:bg-neutral-700 text-white font-medium rounded-md hover:bg-[#fedf19] hover:text-[#fe1817] transition-colors text-center"
            >
              Learn more
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <button
              on:click={() => openWaitlist('Social Engagement Radar', 'social_engagement_radar')}
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

      <!-- Product 2: OpsPilot -->
      <ProductCard 
        title="OpsPilot"
        status="Building"
        padding="p-8"
        titleSize="text-2xl"
      >
        <p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
          SMB operators will be able to run their entire business with the operational intelligence previously available only to enterprises with dedicated finance, support, engineering, and operations teams.
        </p>
        
        <div>
          <h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
            Who it's for
          </h4>
          <p class="text-neutral-600 dark:text-neutral-400">
            Engineering leaders and ops teams managing fast-growing companies (20–200 people)
          </p>
        </div>

        {#snippet footer()}
          <div class="flex gap-3 mt-auto">
            <a 
              href="/products/opspilot" 
              class="inline-flex flex-1 justify-center items-center gap-1 px-4 py-2 bg-[#202020] dark:bg-neutral-700 text-white font-medium rounded-md hover:bg-[#fedf19] hover:text-[#fe1817] transition-colors text-center"
            >
              Learn more
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <button
              on:click={() => openWaitlist('OpsPilot', 'ops_pilot')}
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

      <!-- Product 2: PolicyForge -->
			<ProductCard 
				title="PolicyForge"
				status="Building"
				padding="p-8"
				titleSize="text-2xl"
			>
				<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
					Generate compliant cybersecurity policies in minutes instead of weeks. Answer 15–20 questions about your technology stack and controls. 
					Get framework-aligned security policies ready for audit submission. No expensive consulting.
				</p>
				
				<div>
					<h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Who it's for</h4>
					<p class="text-neutral-600 dark:text-neutral-400">Healthcare practices, fintech startups, B2B SaaS companies, and regulated SMBs with compliance deadlines</p>
				</div>

				{#snippet footer()}
					<div class="flex gap-3 mt-auto">
						<a 
							href="/products/policyforge" 
							class="inline-flex flex-1 justify-center items-center gap-1 px-4 py-2 bg-[#202020] dark:bg-neutral-700 text-white font-medium rounded-md hover:bg-[#fedf19] hover:text-[#fe1817] transition-colors text-center"
						>
							Learn more
							<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</a>
						<button
							on:click={() => openWaitlist('PolicyForge', 'policyforge')}
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

  <!-- ============================================
       UPCOMING IDEAS SECTION
       ============================================ -->
	<section class="mb-16">
		<h2 id="secure-stack" class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">
			Long-Term Vision: SecureStack
		</h2>
		
		<div class="grid md:grid-cols-1 gap-6 items-stretch">
			
			<!-- SecureStack Platform -->
			<ProductCard 
				title="SecureStack"
				status="Platform Vision"
				statusBg="bg-[#202020] dark:bg-neutral-700"
				statusText="text-white"
				padding="p-8"
				titleSize="text-2xl"
				faded={false}
			>
				<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed mb-6">
					A modular AI-native cybersecurity compliance platform for SMBs and the defense industry supply chain at large. 
					Each product reinforces the others, building a coherent story: 
					<strong>"We assessed our gaps, generated policies, scanned our codebase for crypto vulnerabilities, and had everything organized for our auditor in 4 weeks—using one integrated platform."</strong>
				</p>

				<!-- Phase 1: Foundation -->
				<div class="mb-8">
					<div class="flex items-center gap-3 mb-4">
						<div class="h-8 w-8 rounded-full bg-[#fe1817] text-white flex items-center justify-center text-sm font-bold">1</div>
						<h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Phase 1: Foundation (Q3–Q4 2026)</h4>
					</div>
					
					<div class="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 space-y-3 ml-11">
						<div class="flex gap-3">
							<div class="text-[#fe1817] font-bold text-xl flex-shrink-0">→</div>
							<div>
								<h4 class="font-semibold text-neutral-900 dark:text-neutral-100">PolicyForge</h4>
								<p class="text-neutral-600 dark:text-neutral-400 text-sm">
									Generate and manage security policies aligned to SOC 2, ISO 27001, HIPAA, NIST, CMMC. Fastest to build, global revenue, feeds everything downstream.
								</p>
							</div>
						</div>

						<div class="flex gap-3">
							<div class="text-[#fe1817] font-bold text-xl flex-shrink-0">→</div>
							<div>
								<h4 class="font-semibold text-neutral-900 dark:text-neutral-100">CipherScan</h4>
								<p class="text-neutral-600 dark:text-neutral-400 text-sm">
									Cryptographic vulnerability scanning and remediation. Detects weak crypto (RSA, ECC, MD5, SHA1) in codebases and live endpoints, generates AI-powered remediation guidance.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Phase 2: Comprehensive Compliance -->
				<div class="mb-8">
					<div class="flex items-center gap-3 mb-4">
						<div class="h-8 w-8 rounded-full bg-[#fe1817] text-white flex items-center justify-center text-sm font-bold">2</div>
						<h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Phase 2: Comprehensive Compliance (Q1 2027)</h4>
					</div>
					
					<div class="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 space-y-3 ml-11">
						<div class="flex gap-3">
							<div class="text-[#fe1817] font-bold text-xl flex-shrink-0">→</div>
							<div>
								<h4 class="font-semibold text-neutral-900 dark:text-neutral-100">ComplianceQ</h4>
								<p class="text-neutral-600 dark:text-neutral-400 text-sm">
									<strong>Turns compliance findings into audit-ready evidence.</strong> Interviews you about gaps, maps to CMMC/SOC 2/ISO 27001 controls, generates policies (via PolicyForge), collects artifacts, and organizes everything for your C3PAO assessor. The bridge between assessment and audit readiness.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Phase 3: Platform Expansion -->
				<div class="mb-8">
					<div class="flex items-center gap-3 mb-4">
						<div class="h-8 w-8 rounded-full bg-[#fe1817] text-white flex items-center justify-center text-sm font-bold">3</div>
					<h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Phase 3: Platform Expansion (Q2 2027)</h4>
					</div>
					
					<div class="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 space-y-3 ml-11">
						<div class="flex gap-3">
							<div class="text-[#fe1817] font-bold text-xl flex-shrink-0">→</div>
							<div>
								<h4 class="font-semibold text-neutral-900 dark:text-neutral-100">ThreatBrief</h4>
								<p class="text-neutral-600 dark:text-neutral-400 text-sm">
									Daily threat intelligence digest tailored to your industry and tech stack. Monitors CVE feeds, maps threats to your infrastructure, delivers executive-ready briefings.
								</p>
							</div>
						</div>

						<div class="flex gap-3">
							<div class="text-[#fe1817] font-bold text-xl flex-shrink-0">→</div>
							<div>
								<h4 class="font-semibold text-neutral-900 dark:text-neutral-100">VendorShield</h4>
								<p class="text-neutral-600 dark:text-neutral-400 text-sm">
									Third-party vendor risk management and assessment automation. Completes your security posture by auditing the tools and vendors you depend on.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Strategic Fit -->
				<div class="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
					<h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
						Strategic Fit
					</h4>
					<p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
						Designed for cybersecurity-regulated SMBs (healthcare, fintech, defense tech, SaaS) and DoD-adjacent partners. 
						Each product solves a specific bottleneck; together they form a complete security + compliance platform 
						that competes with Drata, Vanta, and enterprise GRC tools—but at SMB pricing and speed.
					</p>
					<p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
						<strong>Why we're different:</strong> Built by a founder shipping modern UX instead of enterprise bloat. Every recommendation is auditable and cited—not black-box scoring. Developed transparently in public so you see exactly what you're getting.
					</p>
				</div>

				<!-- Build in Public CTA -->
				<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
					<p class="text-sm text-blue-900 dark:text-blue-100">
						<strong>Follow the build journey:</strong> We ship in public on 
						<a href="https://www.linkedin.com/in/nick-thiru" target="_blank" class="underline hover:no-underline font-semibold">
							LinkedIn
						</a>
						{' '}and 
						<a href="https://x.com/nickthiru" target="_blank" class="underline hover:no-underline font-semibold">
							X/Twitter
						</a>
						{' '}— see exactly how this product evolves.
					</p>
				</div>

				{#snippet footer()}
					<div class="space-y-2">
						<p class="text-sm text-neutral-500 dark:text-neutral-400 italic">
							<strong>Timeline:</strong> PolicyForge (Q3 2026) → CipherScan (Q4 2026) → ComplianceQ (Q1 2027)
						</p>
						<p class="text-sm text-neutral-500 dark:text-neutral-400 italic">
							ThreatBrief & VendorShield follow based on customer feedback and market response.
						</p>
					</div>
				{/snippet}
			</ProductCard>

		</div>
	</section>


</div>