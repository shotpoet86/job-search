<template>
  <img
    :src="imageLink"
    alt="User Profile Image"
    class="w-8 h-8 object-contain rounded"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://www.seekpng.com/png/small/87-871938_regular-show-mordecai-scared.png",
    };
  },
};
</script>

<style scoped></style>
