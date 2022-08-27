<template>
  <header class="w-full text-sm bg-brand-blue-1">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a href="/" class="flex items-center h-full text-xl">{{ company }}</a>
        <h2 class="flex items-center h-full ml-8">
          Developed by : {{ author.firstName("Mike") }}
          {{ author.lastName("Jones, Who ?") }}
        </h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Boogle Careers",
      author: {
        firstName: String,
        lastName: String,
      },
    };
  },
};
</script>
