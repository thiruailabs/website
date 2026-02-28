<script>
let {
title,
status,
statusBg = 'bg-[#fedf19] dark:bg-[#fedf19]',
statusText = 'text-[#202020] dark:text-neutral-900',
padding = 'p-6',
titleSize = 'text-xl',
interactive = false,
faded = false,
children,
footer
} = $props();
</script>

<div class="flex flex-col h-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg {padding} {interactive ? 'hover:shadow-lg transition-shadow' : ''} {faded ? 'opacity-75' : ''}">
<div class="flex items-start justify-between mb-4 gap-4">
<h3 class="{titleSize} font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
{#if status}
<span class="px-3 py-1 {statusBg} {statusText} text-xs font-semibold rounded-full whitespace-nowrap">{status}</span>
{/if}
</div>

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
