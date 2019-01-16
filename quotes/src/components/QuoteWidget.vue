<template>
  <div v-if="quotesList.length > 0" class="quotesDisplayContainer">
    <div
      v-for="(quote,index) in quotesList"
      :key="index"
      class="quoteWidget"
      @click="deleteQuote(index)"
    >{{quote}}</div>
    <p class="badge badge-info text-center">Click On a Quote To Delete iT</p>
  </div>
  <div v-else>
    <h4 class="text-center">No Quotes</h4>
  </div>
</template>

<script>
export default {
  props: ["quotesList", "deleteQuote"]
};
</script>

<style scoped>
.quotesDisplayContainer {
  width: 100%;
  display: block;
}
.quoteWidget {
  height: 120px;
  width: 30%;
  display: inline-flex;
  padding: 20px;
  font: bold italic 16px fantasy;
  color: teal;
  margin: 10px;
  border: 1px solid #b4b4cc;
  box-shadow: 1px 1px 1px lightgray;
}
.quoteWidget:hover {
  box-shadow: 1px 1px 1px crimson;
  cursor: pointer;
}
p {
  display: block;
}
</style>
