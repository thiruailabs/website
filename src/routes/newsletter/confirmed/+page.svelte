<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<svelte:head>
  <title>Email Confirmed | Thiru AI Labs</title>
</svelte:head>

<div class="mx-auto max-w-2xl px-6 py-24 text-center">
  <div class="mb-8">
    <svg
      class="mx-auto h-16 w-16 text-green-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </div>

  <h1 class="mb-4 text-3xl font-bold">Email Confirmed!</h1>
  <p class="mb-8 text-lg text-gray-600 dark:text-gray-400">
    Thank you for confirming your email. You're now subscribed to the <br><em>Nick Thiru Dev Notes</em> newsletter.
  </p>

  <div class="mb-12 space-y-4 text-left">
    <h2 class="text-xl font-semibold">What's next?</h2>
    <ul class="space-y-2 text-gray-600 dark:text-gray-400">
      <li class="flex items-start gap-2">
        <span class="mt-1 text-green-500">✓</span>
        You'll receive updates on new AI products and launches
      </li>
      <li class="flex items-start gap-2">
        <span class="mt-1 text-green-500">✓</span>
        Early access to waitlists for upcoming products
      </li>
      <li class="flex items-start gap-2">
        <span class="mt-1 text-green-500">✓</span>
        Insights on AI systems and agentic workflows
      </li>
    </ul>
  </div>

  <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
    <a
      href="https://www.nickthiru.dev/writing"
      class="rounded-lg px-6 py-3 font-medium bg-[#fe1817] text-white font-medium rounded-md hover:bg-[#fedf19] hover:text-[#fe1817] transition-colors text-center"
    >
      Read the Blog
    </a>
    <button
      on:click={() => goto("/products")}
      class="rounded-lg px-6 py-3 font-medium bg-[#202020] dark:bg-neutral-700 text-white font-medium hover:bg-[#fedf19] hover:text-[#fe1817] transition-colors text-center"
    >
      View Products
    </button>
  </div>
</div>
