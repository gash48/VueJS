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
        type: "sell",
        data: null
      }
    };
  },
  created() {
    this.cardData.data = this.getStockBalance;
  },
  methods: {
    ...mapActions(["sellStock"]),
    stockHandler(stockIndex) {
      this.sellStock(stockIndex);
    }
  },
  computed: {
    ...mapGetters(["getStockBalance"])
  },
  components: {
    appStockWidget: StockWidget
  }
};
</script>

<style scoped>
</style>
