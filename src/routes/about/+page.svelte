<script>
	import AboutTheFounder from "$lib/components/AboutTheFounder.svelte";
	import WhySoloStudio from "$lib/components/WhySoloStudio.svelte";
</script>

<svelte:head>
<title>About - Thiru AI Labs</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div class="max-w-3xl mx-auto">
<h1 class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">About Thiru AI Labs</h1>

<div class="prose prose-lg max-w-none">
<div class="space-y-6 text-neutral-700 dark:text-neutral-400 leading-relaxed">
<p>
Thiru AI Labs is the solo AI systems studio of Nick Thiru, focused on building production-grade agentic AI SaaS products and systems that solve real-world problems, mostly in the business domain. Rather than building generic chatbots that attempt to do everything, Thiru AI Labs develops specialized agents designed for particular use cases and audiences.
</p>

<p>
Combining full-stack web development, AWS/CDK infrastructure, and LangGraph-based agent workflows, Thiru AI Labs designs, builds, and operates production-grade AI systems. Every product here is built as a complete system with proper infrastructure, authentication, billing, and observability from day one.
</p>

<p>
This approach prioritizes production readiness, systems thinking, and real-world utility over flashy demos. Each product is built to be sustainable, scalable, and genuinely useful for its target audience.
</p>
</div>
</div>
</div>

<!-- Founder Credibility Section from Homepage -->
<AboutTheFounder />

<!-- Why Solo Section from Homepage -->
<WhySoloStudio />
</div>
