<template>
  <h3 class="text-center">Welcome To {{libraryName}} Library</h3>
</template>


<script>
export default {
  props: ["libraryName"]
};
</script>

<style scoped>
h3{
  padding: 50px;
}
</style>
