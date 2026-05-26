<script>
  import WaitlistModal from '$lib/components/WaitlistModal.svelte';
  
  let isWaitlistOpen = false;
  
  function openWaitlist() {
    isWaitlistOpen = true;
  }
</script>

<svelte:head>
  <title>PolicyForge - Cybersecurity Policies in Minutes, Not Weeks - Thiru AI Labs</title>
  <meta 
    name="description" 
    content="Generate compliant cybersecurity policies in minutes instead of weeks. Answer 15–20 questions about your tech stack, get framework-aligned policies ready for audit submission. No expensive consulting. Insurance renewal ready." 
  />
</svelte:head>

<WaitlistModal bind:isOpen={isWaitlistOpen} productName="PolicyForge" />

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

  <!-- ============================================
       HERO SECTION
       ============================================ -->
  <section class="mb-16">
    <div class="flex items-center gap-3 mb-4">
      <span class="px-3 py-1 bg-[#fedf19] text-[#202020] text-xs font-semibold rounded-full">
        Building Now
      </span>
    </div>

    <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">
      PolicyForge
    </h1>

    <p class="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
      Meet your cybersecurity compliance deadline. Answer 15–20 questions about your technology stack and controls. 
      Get framework-aligned security policies ready for audit submission in minutes instead of weeks. 
      No $5k–$15k consulting fees. No weeks of discovery meetings.
    </p>

    <div class="bg-[#fedf19] text-[#202020] rounded-lg p-4 mb-8">
      <p class="font-semibold">
        Typical scenario: Insurance renewal deadline is Feb 1. You have 17 days. Consulting would take 3–4 weeks. PolicyForge generates policies in 1 day.
      </p>
    </div>
  </section>

  <!-- ============================================
       PROBLEM SECTION
       ============================================ -->
  <section class="mb-16">
    <h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">
      The Problem
    </h2>

    <div class="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 space-y-4">
      <p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
        You run a 20–50 person company in a regulated industry—healthcare, fintech, SaaS, or something else that handles sensitive data. 
        Your insurance renewal is in 17 days. Or you just received a compliance audit notice with 60–90 days to respond.
      </p>

      <p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
        <strong>You need documented cybersecurity policies.</strong> Not templates. Not generic PDFs. 
        Policies that reference <em>your actual technology stack</em>, describe <em>your actual controls</em>, 
        and satisfy <em>your chosen compliance framework</em> (SOC 2, ISO 27001, HIPAA, NIST, CMMC).
      </p>

      <p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
        Your options today:
      </p>

      <ul class="text-neutral-700 dark:text-neutral-400 space-y-2 ml-4">
        <li>
          <strong>Hire a consultant:</strong> $5k–$15k. 2–3 weeks of discovery meetings. Takes you away from product and growth. Deadline risk: you miss Feb 1.
        </li>
        <li>
          <strong>Download a template:</strong> Free or $99. Totally generic. Auditor asks "You use Okta for access control?" You say yes. Auditor asks "Why isn't it in your policy?" You realize your template never mentioned it. Now you're rewriting policies two weeks before the deadline.
        </li>
        <li>
          <strong>Use ChatGPT:</strong> Free. But you have no way to know if the policies are actually compliant. Did it hit all the SOC 2 Trust Service Criteria? Did it miss something critical? You submit, auditor finds gaps, you have 2 weeks to fix it.
        </li>
      </ul>

      <p class="text-neutral-700 dark:text-neutral-400 leading-relaxed mt-4">
        <strong>The root problem:</strong> You know your tech stack. You know your controls. But translating that into framework-compliant policies 
        requires expertise that you don't have, can't afford to hire quickly, and is too risky to DIY with ChatGPT.
      </p>
    </div>
  </section>

  <!-- ============================================
       SOLUTION SECTION
       ============================================ -->
  <section class="mb-16">
    <h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">
      The Solution
    </h2>

    <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
      PolicyForge transforms your technology stack into compliant cybersecurity policies in one day.
    </p>
    
    <div class="space-y-6">
      <!-- Step 1 -->
      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center font-bold text-[#202020]">
            1
          </div>
          <div>
            <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              Answer the interview
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              PolicyForge asks 15–20 conversational questions about your organization: industry, team size, technology stack 
              (which cloud providers do you use? how do you manage access?), data types you handle, security controls you've already implemented, 
              and which compliance framework you need to meet.
            </p>
            <p class="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">
              Time investment: <strong>15–20 minutes</strong>. No expertise required—just describe your actual setup.
            </p>
          </div>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center font-bold text-[#202020]">
            2
          </div>
          <div>
            <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              PolicyForge generates your policies
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              PolicyForge maps your interview responses to your chosen framework and generates complete policy documents: 
              Incident Response, Access Control, Data Classification, Security Awareness, Vendor Management, etc.
            </p>
            <p class="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">
              Time investment: <strong>1–2 minutes</strong> (automated). Policies are organization-specific, not generic templates. 
              If you said you use Okta, the policy cites Okta. If you use GitHub for code review, the policy reflects that.
            </p>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center font-bold text-[#202020]">
            3
          </div>
          <div>
            <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              Review and export
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Read through the policies. Make any edits (add company name, adjust language if needed). Export as PDF or Word. 
              Submit directly to your auditor, insurance carrier, or customers.
            </p>
            <p class="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">
              Time investment: <strong>30–60 minutes</strong> (you, reviewing). Policies are audit-ready out of the box.
            </p>
          </div>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 bg-[#fedf19] rounded-lg flex items-center justify-center font-bold text-[#202020]">
            4
          </div>
          <div>
            <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              Stay current with annual refresh
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              At 6-month intervals, PolicyForge reminds you to review and refresh your policies. Changed your tech stack? 
              Added new controls? Re-run the interview (takes 10 minutes) and regenerate. Policies stay current. No consultant needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================
       COMPARISON TABLE
       ============================================ -->
  <section class="mb-16">
    <h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">
      PolicyForge vs. Your Alternatives
    </h2>

    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-neutral-300 dark:border-neutral-600">
            <th class="text-left py-3 px-4 font-semibold text-neutral-900 dark:text-neutral-100">
              Factor
            </th>
            <th class="text-left py-3 px-4 font-semibold text-neutral-900 dark:text-neutral-100">
              PolicyForge
            </th>
            <th class="text-left py-3 px-4 font-semibold text-neutral-900 dark:text-neutral-100">
              Consulting
            </th>
            <th class="text-left py-3 px-4 font-semibold text-neutral-900 dark:text-neutral-100">
              Generic Templates
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-neutral-200 dark:divide-neutral-700">
          <tr>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              <strong>Cost</strong>
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400 bg-green-50 dark:bg-green-900/20">
              $99–$299
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              $5k–$15k
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              $0–$99
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              <strong>Time to Policies</strong>
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400 bg-green-50 dark:bg-green-900/20">
              1 day
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              2–3 weeks
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              1 hour (but generic)
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              <strong>Organization-Specific</strong>
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400 bg-green-50 dark:bg-green-900/20">
              Yes (references your tech stack)
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              Yes (human-written)
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              No (you customize)
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              <strong>Framework-Aligned</strong>
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400 bg-green-50 dark:bg-green-900/20">
              Yes (auditable)
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              Yes
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              Maybe (template quality varies)
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              <strong>Risk of Auditor Rejection</strong>
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400 bg-green-50 dark:bg-green-900/20">
              Low (&lt;10% rework)
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              Very low
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              High (gaps common)
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              <strong>Annual Updates</strong>
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400 bg-green-50 dark:bg-green-900/20">
              Built-in ($99 refresh)
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              Additional consulting cost
            </td>
            <td class="py-3 px-4 text-neutral-700 dark:text-neutral-400">
              Manual (you maintain)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- ============================================
       KEY FEATURES
       ============================================ -->
  <section class="mb-16">
    <h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">
      Key Features
    </h2>

    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          15–20 Minute Interview
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          Conversational questions about your organization, tech stack, data, and controls. 
          No compliance expertise required. Guided step-by-step.
        </p>
      </div>

      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          Framework Selection
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          Choose your framework: SOC 2 Type II, ISO 27001, HIPAA, NIST Cybersecurity Framework, CMMC, or others. 
          Policies align to your chosen standard.
        </p>
      </div>

      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          Organization-Specific Policies
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          Policies reference your actual technology stack, names, and controls. Not generic templates. 
          Auditors see concrete evidence of alignment.
        </p>
      </div>

      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          Complete Policy Suite
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          Incident Response, Access Control, Data Classification, Security Awareness, Vendor Management, 
          Encryption, Asset Management, and more.
        </p>
      </div>

      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          Multiple Export Formats
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          Export as PDF (print-ready), Word (for internal editing), or HTML. 
          Submit directly to auditors, insurance carriers, or customers.
        </p>
      </div>

      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          Annual Refresh Reminders
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          At 6-month intervals, PolicyForge reminds you to review and refresh. 
          Changed your tech stack? Re-run the interview and regenerate in 10 minutes.
        </p>
      </div>
    </div>
  </section>

  <!-- ============================================
       WHO IT'S FOR
       ============================================ -->
  <section class="mb-16">
    <h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">
      Who It's For
    </h2>

    <div class="space-y-4">
      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          Healthcare Practices & Clinics
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          You handle HIPAA-regulated patient data. Insurance renewal requires documented policies. You have 17 days. 
          PolicyForge generates HIPAA-aligned policies in 1 day.
        </p>
      </div>

      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          Fintech & Payment Startups
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          You handle financial data and PCI compliance. Investors and customers demand SOC 2 evidence. 
          PolicyForge generates SOC 2-aligned policies that satisfy audit requirements.
        </p>
      </div>

      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          B2B SaaS Companies
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          Your enterprise customers require SOC 2 or ISO 27001 before signing contracts. 
          PolicyForge generates compliant policies that unblock deals.
        </p>
      </div>

      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          Government Contractors & Defense Tech
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          You need NIST or CMMC compliance for government contracts. PolicyForge aligns your policies to required frameworks.
        </p>
      </div>

      <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          20–50 Person Teams Without a Dedicated Compliance Officer
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          You don't have budget for a full compliance team. But you have real compliance obligations. 
          PolicyForge lets you create policies without hiring external consultants.
        </p>
      </div>
    </div>
  </section>

  <!-- ============================================
       TIMELINE
       ============================================ -->
  <section class="mb-16">
    <h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">
      Timeline to Audit-Ready
    </h2>

    <div class="space-y-4">
      <!-- Timeline Item 1 -->
      <div class="flex gap-6">
        <div class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-[#fedf19] text-[#202020] font-bold flex items-center justify-center text-lg">
            1
          </div>
          <div class="w-1 h-20 bg-gradient-to-b from-[#fedf19] to-neutral-300 dark:to-neutral-600 mt-2"></div>
        </div>
        <div class="pb-8">
          <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Day 1 Morning: Interview
          </h3>
          <p class="text-neutral-600 dark:text-neutral-400 mt-2">
            You answer 15–20 questions about your org and tech stack. Takes 15–20 minutes.
          </p>
        </div>
      </div>

      <!-- Timeline Item 2 -->
      <div class="flex gap-6">
        <div class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-[#fedf19] text-[#202020] font-bold flex items-center justify-center text-lg">
            2
          </div>
          <div class="w-1 h-20 bg-gradient-to-b from-[#fedf19] to-neutral-300 dark:to-neutral-600 mt-2"></div>
        </div>
        <div class="pb-8">
          <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Day 1 Afternoon: Generation & Review
          </h3>
          <p class="text-neutral-600 dark:text-neutral-400 mt-2">
            PolicyForge generates complete policies. You review and make edits (30–60 minutes).
          </p>
        </div>
      </div>

      <!-- Timeline Item 3 -->
      <div class="flex gap-6">
        <div class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-[#fedf19] text-[#202020] font-bold flex items-center justify-center text-lg">
            3
          </div>
        </div>
        <div class="">
          <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Day 2: Submit to Auditor
          </h3>
          <p class="text-neutral-600 dark:text-neutral-400 mt-2">
            Export and send to auditor or insurance carrier. Audit-ready.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================
       PRICING
       ============================================ -->
  <!-- <section class="mb-16">
    <h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">
      Pricing
    </h2>

    <div class="bg-white dark:bg-neutral-800 border-2 border-[#fedf19] rounded-lg p-8 max-w-md">
      <div class="mb-6">
        <div class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          $299
          <span class="text-lg font-normal text-neutral-600 dark:text-neutral-400">/policy package</span>
        </div>
        <p class="text-neutral-600 dark:text-neutral-400">
          One-time cost per framework. Annual refresh reminders included. Compare to $5k–$15k consulting.
        </p>
      </div>

      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-neutral-700 dark:text-neutral-400">Guided 15–20 minute interview</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-neutral-700 dark:text-neutral-400">Organization-specific policy generation</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-neutral-700 dark:text-neutral-400">Complete policy suite (8+ policies)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-neutral-700 dark:text-neutral-400">Framework alignment (SOC 2, ISO 27001, HIPAA, NIST, CMMC)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-neutral-700 dark:text-neutral-400">PDF, Word, and HTML export</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-[#fe1817] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-neutral-700 dark:text-neutral-400">6-month refresh reminders + optional re-interview</span>
        </li>
      </ul>

      <div class="flex justify-center mt-8">
        <button 
          on:click={openWaitlist}
          class="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#fe1817] text-white font-semibold rounded-md hover:bg-[#fedf19] hover:text-[#202020] transition-colors"
        >
          Join the waitlist
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

  </section> -->


  <!-- ============================================
       FAQ
       ============================================ -->
  <section class="mb-16">
    <h2 class="text-2xl font-bold text-neutral-900 dark:text-[#fedf19] mb-6">
      Frequently Asked Questions
    </h2>

    <div class="space-y-4">
      <!-- FAQ 1 -->
      <details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
          <span>How do I know the policies are actually compliant?</span>
          <span class="transition duration-300 group-open:-rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="mt-3 text-neutral-600 dark:text-neutral-400">
          PolicyForge is built on framework requirements, not generic templates. Every policy generated is traced back to specific 
          framework control requirements (SOC 2 Trust Service Criteria, NIST CSF, ISO 27001:2022, HIPAA rules, etc.). 
          Policies are reviewed and validated against real auditor checklists. Before public launch, we're submitting generated policies 
          to 2–3 real auditors to measure acceptance rate (target: &lt;10% rework requests).
        </p>
      </details>

      <!-- FAQ 2 -->
      <details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
          <span>What if my insurance carrier or auditor rejects the policies?</span>
          <span class="transition duration-300 group-open:-rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="mt-3 text-neutral-600 dark:text-neutral-400">
          We don't guarantee acceptance (auditor decisions are ultimately their call), but our goal is &lt;10% rework rate. 
          If there are rework requests, the requested changes are usually small (add more detail here, clarify that section, add a date). 
          You'll have time to fix before your deadline. If you want a validation call with our team to discuss specific auditor feedback, 
          we're available during beta.
        </p>
      </details>

      <!-- FAQ 3 -->
      <details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
          <span>Do the policies need legal review before submission?</span>
          <span class="transition duration-300 group-open:-rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="mt-3 text-neutral-600 dark:text-neutral-400">
          PolicyForge policies are cybersecurity control documents, not legal contracts. They don't require legal review before auditor submission. 
          That said, you should always review your own policies before submission (not just for compliance, but to ensure they're accurate). 
          Most customers spend 30–60 minutes reviewing.
        </p>
      </details>

      <!-- FAQ 4 -->
      <details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
          <span>Which frameworks does PolicyForge support?</span>
          <span class="transition duration-300 group-open:-rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="mt-3 text-neutral-600 dark:text-neutral-400">
          At launch: SOC 2 Type II, ISO 27001:2022, HIPAA. Post-launch roadmap: NIST Cybersecurity Framework, CMMC, PCI DSS, GDPR, others. 
          If your framework is not listed, reach out—we may add it to the roadmap.
        </p>
      </details>

      <!-- FAQ 5 -->
      <details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
          <span>What if I don't know the answers to the interview questions?</span>
          <span class="transition duration-300 group-open:-rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="mt-3 text-neutral-600 dark:text-neutral-400">
          PolicyForge asks questions about YOUR tech stack and controls—things you already know about. We've designed the interview 
          to be conversational and clear. If a question doesn't apply (e.g., "Do you use encryption in transit?" and you haven't implemented 
          that yet), you can skip or answer "not yet." The system adapts.
        </p>
      </details>

      <!-- FAQ 6 -->
      <details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
          <span>Can I edit the policies after they're generated?</span>
          <span class="transition duration-300 group-open:-rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="mt-3 text-neutral-600 dark:text-neutral-400">
          Yes. You can edit policies before exporting. Edits are tracked in the Word/PDF version. We also support re-generating 
          if you realize you answered an interview question incorrectly.
        </p>
      </details>

      <!-- FAQ 7 -->
      <details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
          <span>What happens after the insurance renewal deadline passes?</span>
          <span class="transition duration-300 group-open:-rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="mt-3 text-neutral-600 dark:text-neutral-400">
          Your policies are stored in your PolicyForge account. At 6-month intervals, PolicyForge reminds you to review and refresh 
          (especially if you've changed your tech stack or controls). If you've made changes, you can re-run the interview (10 minutes) 
          and regenerate updated policies. This prepares you for your next annual audit or insurance renewal.
        </p>
      </details>

      <!-- FAQ 8 -->
      <details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
          <span>When will PolicyForge launch?</span>
          <span class="transition duration-300 group-open:-rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="mt-3 text-neutral-600 dark:text-neutral-400">
          Currently in pre-beta validation phase (validating assumptions with real auditors and customers). Expected launch: Q3 2025. 
          Waitlist members will get early access and founding member pricing.
        </p>
      </details>

      <!-- FAQ 9 -->
      <details class="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex items-center justify-between font-semibold text-neutral-900 dark:text-neutral-100 cursor-pointer">
          <span>Is there a free trial?</span>
          <span class="transition duration-300 group-open:-rotate-180">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="mt-3 text-neutral-600 dark:text-neutral-400">
          Yes. All users will get a free trial during beta to test PolicyForge with your real organization data. 
          You can generate policies, review them, and test export before paying. Waitlist members get priority beta access.
        </p>
      </details>
    </div>
  </section>

  <!-- ============================================
       FINAL CTA
       ============================================ -->
  <section class="bg-neutral-50 dark:bg-[#202020] border border-neutral-200 dark:border-neutral-700 rounded-lg p-12 text-center">
    <h2 class="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
      Your insurance deadline is in 17 days. PolicyForge gets you compliant in 1.
    </h2>
    <p class="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
      Join the waitlist for early access, beta access, and founding member pricing. 
      Pre-beta users help shape the product and validate assumptions with real auditors.
    </p>
    <button 
      on:click={openWaitlist}
      class="inline-flex items-center gap-2 px-6 py-3 bg-[#fe1817] text-white font-semibold rounded-md hover:bg-[#fedf19] hover:text-[#202020] transition-colors"
    >
      Join the waitlist
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
    <p class="text-base text-neutral-600 dark:text-neutral-300 mt-4">
      No spam. Unsubscribe anytime.
    </p>
  </section>

</div>
