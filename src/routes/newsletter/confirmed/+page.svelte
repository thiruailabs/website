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
    Thank you for confirming your email. You're now subscribed to the <em>Nick Thiru Dev Notes</em> newsletter.
  </p>

  <div class="flex flex-col gap-7 sm:flex-row sm:justify-center">
    <a
      href="https://www.nickthiru.dev/writing"
      class="flex w-full sm:w-auto justify-center items-center gap-1.5 rounded-lg px-6 py-3 font-medium bg-[#fe1817] text-white hover:bg-[#fedf19] hover:text-[#fe1817] transition-colors"
    >
      Read the Blog
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
    </a>
    <button
      on:click={() => goto("/products")}
      class="flex w-full sm:w-auto justify-center items-center gap-1.5 rounded-lg px-6 py-3 font-medium bg-[#202020] dark:bg-neutral-700 text-white hover:bg-[#fedf19] hover:text-[#fe1817] transition-colors"
    >
      View Products
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</div>
