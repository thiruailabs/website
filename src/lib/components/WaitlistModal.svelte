<script lang="ts">
	import { onMount } from 'svelte';
	
	export let isOpen = false;
	export let productName = "LinkedIn Ghostwriter Agent";
	
	function closeModal() {
		isOpen = false;
	}
	
	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}
	
	// Trigger Tally to load embeds when modal opens
	$: if (isOpen && typeof window !== 'undefined' && (window as any).Tally) {
		setTimeout(() => {
			(window as any).Tally.loadEmbeds();
		}, 100);
	}
</script>

{#if isOpen}
	<div 
		class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
		on:click={handleBackdropClick}
		on:keydown={(e) => e.key === 'Escape' && closeModal()}
		role="button"
		tabindex="0"
	>
		<div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
			<div class="p-6 border-b border-neutral-200 flex items-center justify-between">
				<div>
					<h2 class="text-2xl font-bold text-neutral-900">Join the Waitlist</h2>
					<p class="text-sm text-neutral-600 mt-1">{productName}</p>
				</div>
				<button 
					on:click={closeModal}
					class="text-neutral-400 hover:text-neutral-600 transition-colors"
					aria-label="Close modal"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			
			<div class="p-6">
				<div class="mb-6">
					<p class="text-neutral-700 mb-4">
						Be the first to know when we launch. We'll send you early access and exclusive updates.
					</p>
					<div class="bg-[#fedf19] bg-opacity-10 border border-[#fedf19] rounded-lg p-4">
						<p class="text-sm text-neutral-700">
							<strong>Early bird benefit:</strong> Waitlist members get 20% off the first 3 months.
						</p>
					</div>
				</div>
				
				<!-- Tally Form Embed -->
				<iframe 
					data-tally-src="https://tally.so/embed/NplAJG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
					loading="lazy" 
					width="100%" 
					height="529" 
					frameborder="0" 
					marginheight="0" 
					marginwidth="0" 
					title="Join the Waitlist for LinkedIn Ghostwriter Agent"
					class="rounded-lg"
				></iframe>
				
				<p class="text-xs text-neutral-500 mt-4 text-center">
					We respect your privacy. Unsubscribe at any time.
				</p>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Prevent body scroll when modal is open */
	:global(body:has(.fixed)) {
		overflow: hidden;
	}
</style>
