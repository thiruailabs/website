<script lang="ts">
	interface Props {
		isOpen: boolean;
		productName?: string;
		productId: string;
	}
	
	let { isOpen = $bindable(false), productName = "Thiru AI Labs", productId }: Props = $props();
	
	let email = $state('');
	let firstName = $state('');
	let status = $state<'idle' | 'loading' | 'success' | 'error'>('idle');
	let errorMessage = $state('');
	let successMessage = $state('');
	
	function closeModal() {
		isOpen = false;
		// Reset form state when closing
		if (status === 'success') {
			setTimeout(() => {
				status = 'idle';
				email = '';
				firstName = '';
				successMessage = '';
			}, 300);
		}
	}
	
	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		status = 'loading';
		errorMessage = '';

		try {
			const response = await fetch('/api/join-waitlist', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ 
					email, 
					product_id: productId,
					first_name: firstName 
				})
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || 'Failed to join waitlist');
			}

			successMessage = result.message || "You've been added to the waitlist!";
			status = 'success';
			email = '';
			firstName = '';
		} catch (error) {
			status = 'error';
			errorMessage = error instanceof Error ? error.message : 'Something went wrong';
		}
	}
</script>

{#if isOpen}
	<div 
		class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
		onclick={handleBackdropClick}
		onkeydown={(e) => e.key === 'Escape' && closeModal()}
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
					onclick={closeModal}
					class="text-neutral-400 hover:text-neutral-600 transition-colors"
					aria-label="Close modal"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			
			<div class="p-6">
				{#if status === 'success'}
					<div class="bg-[#fedf19] bg-opacity-20 border border-[#fedf19] rounded-lg p-8 text-center">
						<svg class="w-16 h-16 mx-auto mb-4 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<p class="text-neutral-700 mb-4">
							{successMessage}
						</p>
						<button 
							onclick={closeModal}
							class="px-6 py-2 bg-brand-dark text-white font-medium rounded-md hover:bg-[#fe1817] transition-colors"
						>
							Close
						</button>
					</div>
				{:else}
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
					
					<form 
						onsubmit={handleSubmit}
						class="space-y-4"
					>
						<div>
							<label for="waitlist-firstName" class="block text-sm font-medium text-neutral-700 mb-2">
								First name (optional)
							</label>
							<input
								type="text"
								id="waitlist-firstName"
								bind:value={firstName}
								placeholder="Your first name"
								disabled={status === 'loading'}
								class="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#fe1817] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
							/>
						</div>
						
						<div>
							<label for="waitlist-email" class="block text-sm font-medium text-neutral-700 mb-2">
								Email address
							</label>
							<input
								type="email"
								id="waitlist-email"
								bind:value={email}
								placeholder="you@example.com"
								required
								disabled={status === 'loading'}
								class="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#fe1817] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
							/>
						</div>
						
						<!-- <button 
							type="submit" 
							disabled={status === 'loading'}
							class="w-full px-6 py-3 bg-[#fe1817] text-white font-medium rounded-md hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{status === 'loading' ? 'Joining...' : 'Join Waitlist'}
						</button> -->
						<button 
							type="submit" 
							disabled={status === 'loading'}
							class="w-full px-6 py-3 bg-[#fe1817] text-white font-medium rounded-md hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{#if status === 'loading'}
								<span class="inline-flex items-center">
									Joining<span class="loading-dots inline-block w-6 text-left"></span>
								</span>
							{:else}
								Join Waitlist
							{/if}
						</button>
					</form>
					
					{#if status === 'error'}
						<p class="text-sm text-red-600 mt-4 text-center">{errorMessage}</p>
					{/if}
					
					<p class="text-xs text-neutral-500 mt-4 text-center">
						No spam, unsubscribe at any time. We respect your privacy.
					</p>
				{/if}
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
