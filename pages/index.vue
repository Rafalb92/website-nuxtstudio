<template>
  <UContainer class="w-full h-full flex flex-col items-center justify-center">
    <UButton class="px-4 py-2" color="violet" variant="solid">Button</UButton>

    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme
            ><USelect
              v-model="$colorMode.preference"
              :options="['system', 'light', 'dark']"
          /></ColorScheme>
        </div>
      </template>
      <UButton
        icon="i-heroicons-book-open"
        to="https://ui.nuxt.com"
        target="_blank"
        >Open Nuxt UI Documentation</UButton
      >
    </UCard>
    <ContentDoc v-slot="{ doc }">
      <article>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </UContainer>
</template>
