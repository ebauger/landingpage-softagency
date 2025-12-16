<script lang="ts">
  import { setLocale } from '../../../paraglide/runtime.js';
  import * as m from '../../../paraglide/messages.js';

  // Get page data as props
  let { data } = $props();

  // State for interactive demo
  let testUsername = $state('Developer');

  // Set locale based on URL parameter
  $effect(() => {
    if (data.lang) {
      console.log(`Setting locale to: ${data.lang}`);
      setLocale(data.lang);
    }
  });

  // Reactive computed values
  const currentLanguage = $derived(data.lang || 'en');
</script>

<svelte:head>
  <title>{m.test_page_title()}</title>
</svelte:head>

<div class="paraglide-test-container p-8 max-w-4xl mx-auto">
  <h1 class="text-3xl font-bold mb-6 text-center">{m.test_page_title()}</h1>

  <!-- Current Language Indicator -->
  <div class="current-language mb-6 p-4 bg-blue-50 rounded-lg text-center">
    <p class="text-lg font-semibold">{m.current_language({ lang: currentLanguage })}</p>
  </div>

  <!-- Language Navigation -->
  <div class="language-navigation mb-8 p-4 bg-gray-100 rounded-lg">
    <h2 class="text-xl font-semibold mb-4">{m.language_switcher()}</h2>
    <div class="flex gap-4 justify-center">
      <a
        href="/testparaglide/en"
        class="px-4 py-2 {currentLanguage === 'en' ? 'bg-blue-600' : 'bg-blue-500'} text-white rounded hover:bg-blue-600 transition-colors text-decoration-none"
      >
        {m.english()}
      </a>
      <a
        href="/testparaglide/fr"
        class="px-4 py-2 {currentLanguage === 'fr' ? 'bg-blue-600' : 'bg-blue-500'} text-white rounded hover:bg-blue-600 transition-colors text-decoration-none"
      >
        {m.french()}
      </a>
    </div>
    <p class="text-sm text-gray-600 text-center mt-2">
      Click the links to switch languages via URL
    </p>
  </div>

  <!-- Paraglide JS Translations -->
  <div class="paraglide-demo mb-8 p-4 bg-green-50 rounded-lg">
    <h2 class="text-xl font-semibold mb-4">{m.paraglide_translations()}</h2>
    <p class="mb-2">
      <strong>Example Message:</strong> {@html m.example_message({ username: testUsername })}
    </p>
    <p class="text-sm text-gray-600 mb-4">
      {m.example_description()}
    </p>
  </div>

  <!-- Welcome Message -->
  <div class="welcome-section mb-8 p-4 bg-purple-50 rounded-lg">
    <h2 class="text-xl font-semibold mb-4">{m.welcome_message({ username: testUsername })}</h2>
  </div>

  <!-- Comparison Section -->
  <div class="comparison-section mb-8 p-4 bg-yellow-50 rounded-lg">
    <h2 class="text-xl font-semibold mb-4">{m.system_comparison()}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="p-4 bg-white rounded border">
        <h3 class="font-semibold mb-2">{m.old_system()}</h3>
        <p class="mb-2">{m.old_system_description()}</p>
        <p class="text-sm text-gray-600">{m.old_system_example()}</p>
      </div>
      <div class="p-4 bg-white rounded border">
        <h3 class="font-semibold mb-2">{m.new_system()}</h3>
        <p class="mb-2">{m.new_system_description()}</p>
        <p class="text-sm text-gray-600">{m.new_system_example()}</p>
      </div>
    </div>
  </div>

  <!-- Interactive Demo -->
  <div class="interactive-demo mb-8 p-4 bg-indigo-50 rounded-lg">
    <h2 class="text-xl font-semibold mb-4">{m.interactive_demo()}</h2>
    <div class="mb-4">
      <label class="block mb-2">
        <span class="font-medium">{m.your_name()}</span>
        <input
          type="text"
          bind:value={testUsername}
          class="ml-2 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={m.enter_your_name()}
        />
      </label>
    </div>
    <div class="p-4 bg-white rounded border">
      <p class="font-medium mb-2">{m.translation_result()}</p>
      <p class="text-lg">{m.example_message({ username: testUsername || m.guest() })}</p>
    </div>
  </div>

  <!-- URL Structure Info -->
  <div class="url-structure mb-8 p-4 bg-teal-50 rounded-lg">
    <h2 class="text-xl font-semibold mb-4">URL-Based Language Switching</h2>
    <div class="space-y-2 text-sm">
      <p><strong>English:</strong> <code>/testparaglide/en</code></p>
      <p><strong>French:</strong> <code>/testparaglide/fr</code></p>
      <p><strong>Default:</strong> <code>/testparaglide</code> → redirects to <code>/testparaglide/en</code></p>
    </div>
  </div>

  <!-- Debug Info -->
  <div class="debug-info p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
    <h3 class="font-semibold mb-2">Debug Information</h3>
    <ul class="list-disc list-inside space-y-1">
      <li>URL language: {data.lang}</li>
      <li>Current language: {currentLanguage}</li>
      <li>Test username: {testUsername}</li>
      <li>Available functions: example_message, test_page_title, language_switcher, etc.</li>
      <li>URL pattern: /testparaglide/[lang]</li>
    </ul>
  </div>
</div>

<style>
  .paraglide-test-container {
    font-family: Arial, sans-serif;
  }

  .text-decoration-none {
    text-decoration: none;
  }
</style>