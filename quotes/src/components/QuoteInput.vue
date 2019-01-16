<template>
  <div class="quoteInputContainer">
    <div class="formWrapper">
      <label for="quote">Enter Quote</label>
      <input
        class="form-control"
        type="text"
        id="quote"
        :value="quoteValue"
        @input="inputHandler"
        placeholder="Enter Here"
      >
    </div>
    <div class="buttonWrapper">
      <slot name="addQuoteButton"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["inputHandler", "quoteValue"]
};
</script>

<style scoped>
.quoteInputContainer {
  margin: 20px;
  padding: 20px;
  border: 1px solid #dedede;
  border-radius: 10px;
  text-align: center;
}
.quoteInputContainer:hover {
  box-shadow: 2px 2px 1px 1px lavender;
}
.buttonWrapper {
  margin: 20px;
}
</style>
