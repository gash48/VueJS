<template>
  <div class="progress">
    <div
      class="progress-bar progress-bar-striped progress-bar-animated"
      :style="{width: quotesCount * 10 + '%'}"
    >{{quotesCount}} / 10</div>
  </div>
</template>

<script>
export default {
  props: ["quotesCount"]
};
</script>

<style scoped>
</style>
