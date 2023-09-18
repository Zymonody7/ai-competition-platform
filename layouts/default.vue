<script setup lang="ts"></script>

<template>
  <div class="lg:min-w-[1024px] bg-gray-100 flex flex-col min-h-screen">
    <CPHeader />
    <main class="container m-auto mt-20">
      123
      <slot />
    </main>
    <CPFooter />
  </div>
</template>
