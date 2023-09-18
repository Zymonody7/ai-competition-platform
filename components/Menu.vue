<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="transition-all duration-[0.2s] px-5 py-2 mx-1 rounded cursor-pointer hover:bg-blue-50 hover:text-blue-700 active:!bg-blue-100"
    :class="{ 'menu-item-active': active }"
  >
    <slot />
  </div>
</template>

<style>
.menu-item-active {
  background-color: rgb(239, 246, 255);
  color: rgb(29, 78, 216);
}
</style>
