<template>
  <div class="card">
    <div class="card-header">
      <p>Book Logs
        <label>Total Titles -
          <b>{{totalBooks}}</b>. Total Books -
          <b>{{totalTitles}}</b>.
        </label>
      </p>
      <div class="card-body" v-if="logsList.length > 0">
        <p class="logMessage" v-for="(log, index) in logsList" :key="index">
          <b style="color:black">{{index + 1}}.</b>
          <b>{{log.bookName}}</b> by
          <b>{{log.bookAuthor}}</b> of
          <b>{{log.bookCategory}}</b>
          Category has been added. (Quantity
          <b>{{log.bookQuantity}}</b>)
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["logsList", "totalBooks", "totalTitles"]
};
</script>

<style scoped>
.logMessage {
  color: green;
  background-color: #17a2b870;
}
.logMessage:hover {
  box-shadow: 1px 2px 2px darkslategrey;
}
label {
  float: right;
}
</style>
