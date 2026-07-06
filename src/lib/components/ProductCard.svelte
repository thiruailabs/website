<script lang="ts">
import type { Product } from '$lib/config/products';

let {
	product = undefined,
	title = undefined,
	status = undefined,
	statusBg = 'bg-[#fedf19] dark:bg-[#fedf19]',
	statusText = 'text-[#202020] dark:text-neutral-900',
	padding = 'p-6',
	titleSize = 'text-xl',
	faded = false,
	titleSlot,
	children,
	footer
}: {
	product?: Product;
	title?: string;
	status?: string;
	statusBg?: string;
	statusText?: string;
	padding?: string;
	titleSize?: string;
	faded?: boolean;
	titleSlot?: any;
	children?: any;
	footer?: any;
} = $props();

// If a product object is provided, use its properties
let displayTitle = $derived(product ? product.title : title);
let displayStatus = $derived(product ? product.status : status);
let displayStatusBg = $derived(product && product.statusBg ? product.statusBg : statusBg);
let displayStatusText = $derived(product && product.statusText ? product.statusText : statusText);
</script>

<div class="flex flex-col h-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg {padding} {faded ? 'opacity-75' : ''}">
	<!-- Title row -->
	<div class="flex items-start justify-between mb-4 gap-4">
		{#if titleSlot}
			{@render titleSlot()}
		{:else}
			<h3 class="{titleSize} font-semibold text-neutral-900 dark:text-neutral-100">{displayTitle}</h3>
		{/if}
		{#if displayStatus}
			<span class="px-3 py-1 {displayStatusBg} {displayStatusText} text-xs font-semibold rounded-full whitespace-nowrap">{displayStatus}</span>
		{/if}
	</div>

	<!-- Content area -->
	<div class="flex-1 flex flex-col">
		<div class="text-neutral-600 dark:text-neutral-400 space-y-4">
			{@render children()}
		</div>

		{#if footer}
			<div class="mt-auto pt-6">
				{@render footer()}
			</div>
		{/if}
	</div>
</div>
