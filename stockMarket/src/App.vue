<template>
  <div class="container">
    <div class="headContainer">
      <app-header></app-header>
    </div>
    <div class="routeContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from "./components/Header.vue";

export default {
  data() {
    return {};
  },
  components: {
    appHeader: header
  }
};
</script>

<style>
.centerContent {
  display: flex;
  justify-content: center;
  align-items: center;
}
.headContainer {
  margin: 20px auto;
  border: 1px solid #d5dada;
  background: #dedede50;
  box-shadow: 1px 1px 1px lightgrey;
  padding: 0px 10px;
  border-radius: 10px;
}
.routeContainer {
  border: 1px solid lavender;
  border-radius: 10px;
  padding: 20px;
}
</style>
