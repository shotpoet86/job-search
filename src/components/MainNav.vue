<template>
  <header class="w-full text-sm bg-brand-blue-1">{{ nav }}</header>
  <div class="fixed top-0 left-0 w-full h-16 bg-white">
    <div
      class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
    >
      <a href="/" class="flex items-center h-full text-xl">Boogle Careers</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  props: {
    nav: String,
  },
};
</script>
