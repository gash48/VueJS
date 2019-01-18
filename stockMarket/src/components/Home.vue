<template>
  <div>
    <div class="row">
      <div class="col-md-6 col-xs-6">
        <h2>Trade or View your portfolio</h2>
        <router-link tag="p" :to="{name : 'stocksPage'}">Check Out Your Demat Balance</router-link>
        <router-link tag="p" :to="{name : 'portFolioPage'}">View Avalable Stocks</router-link>
        <p @click="dayIncrement">Click On End Day to begin New Day</p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-12 col-xs-12">
        <h3>
          <label>Your Funds : {{ getFunds | inrCurrencyPipe }}</label>
          <label class="float-right">Current Day : {{getDay}}</label>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getFunds", "getDay"])
  },
  methods: {
    ...mapActions(["dayIncrement"])
  }
};
</script>

<style scoped>
p {
  margin-left: 20px;
  font-size: 14px;
  font-weight: 550;
}
p:hover {
  color: #007bff;
  opacity: 0.5;
  cursor: pointer;
}
</style>
