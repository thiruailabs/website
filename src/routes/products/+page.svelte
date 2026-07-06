<script lang="ts">
  import WaitlistModal from '$lib/components/WaitlistModal.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { getAllProducts, secureStackVision } from '$lib/config/products';
  import type { Product } from '$lib/config/products';

  let isWaitlistOpen = false;
  let selectedProduct = '';
  let selectedProductId = '';

  const products: Product[] = getAllProducts();

  function openWaitlist(productName: string, productId: string) {
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
  <div class="mb-16">
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
      {#each products as product}
        <ProductCard {product} padding="p-8" titleSize="text-2xl">
          <!-- Title section - min-h reserves space for longest title (2 lines) -->
          {#snippet titleSlot()}
            <div class="min-h-[4rem]">
              <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{product.title}</h3>
            </div>
          {/snippet}

          <!-- Description section - min-h reserves space for longest description -->
          <div class="min-h-[10rem] mb-6">
            <p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>
          
          <!-- Who it's for section - min-h reserves space for longest audience text -->
          <div class="min-h-[6rem]">
            <h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
              Who it's for
            </h4>
            <p class="text-neutral-600 dark:text-neutral-400">
              {product.targetAudience}
            </p>
          </div>

          {#snippet footer()}
            <div class="flex gap-3 mt-auto">
              <a
                href="/products/{product.slug}"
                class="inline-flex flex-1 justify-center items-center gap-1 px-4 py-2 bg-[#202020] dark:bg-neutral-700 text-white font-medium rounded-md hover:bg-[#fedf19] hover:text-[#fe1817] transition-colors text-center"
              >
                Learn more
                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <button
                on:click={() => openWaitlist(product.title, product.waitlistId)}
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
      {/each}
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
				title={secureStackVision.title}
				status={secureStackVision.status}
				statusBg={secureStackVision.statusBg}
				statusText={secureStackVision.statusText}
				padding="p-8"
				titleSize="text-2xl"
				faded={false}
			>
				<p class="text-neutral-700 dark:text-neutral-400 leading-relaxed mb-6">
					{@html secureStackVision.description}
				</p>

				{#each secureStackVision.phases as phase}
					<!-- Phase {phase.number} -->
					<div class="mb-8">
						<div class="flex items-center gap-3 mb-4">
							<div class="h-8 w-8 rounded-full bg-[#fe1817] text-white flex items-center justify-center text-sm font-bold">{phase.number}</div>
							<h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300">{phase.title}</h4>
						</div>
						
						<div class="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 space-y-3 ml-11">
							{#each phase.items as item}
								<div class="flex gap-3">
									<div class="text-[#fe1817] font-bold text-xl flex-shrink-0">→</div>
									<div>
										<h4 class="font-semibold text-neutral-900 dark:text-neutral-100">{item.name}</h4>
										<p class="text-neutral-600 dark:text-neutral-400 text-sm">
											{@html item.description}
										</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/each}

				<!-- Strategic Fit -->
				<div class="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
					<h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
						Strategic Fit
					</h4>
					<p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
						{secureStackVision.strategicFit}
					</p>
					<p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
						<strong>Why we're different:</strong> {secureStackVision.differentiator}
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
							<strong>Timeline:</strong> {secureStackVision.timeline}
						</p>
						<p class="text-sm text-neutral-500 dark:text-neutral-400 italic">
							{secureStackVision.timelineNote}
						</p>
					</div>
				{/snippet}
			</ProductCard>

		</div>
	</section>


</div>
