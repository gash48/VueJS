<template>
  <div class="stocksContainer">
    <app-stock-widget :cardData="cardData" @stockHandler="stockHandler"></app-stock-widget>
  </div>
</template>

<script>
import StockWidget from "./StockWidget.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      cardData: {
        type: "buy",
        data: null
      }
    };
  },
  created() {
    this.cardData.data = this.getStocks.map(stock => {
      stock.quantity = "";
      return stock;
    });
  },
  methods: {
    ...mapActions(["buyStock"]),
    stockHandler(stock) {
      this.buyStock(stock);
    }
  },
  computed: {
    ...mapGetters(["getStocks"])
  },
  components: {
    appStockWidget: StockWidget
  }
};
</script>

<style scoped>
</style>
