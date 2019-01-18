<template>
  <div>
    <div class="row" v-if="cardData.data.length > 0">
      <div class="col-md-6" v-for="(stock, index) in cardData.data" :key="index">
        <div class="card">
          <div class="card-header" :class="cardData.type === 'buy' ? 'bg-buy' : 'bg-sell'">
            {{stock.companyName}}
            <span
              class="priceLabel"
            >(Price : {{stock.stockPrice | inrCurrencyPipe}})</span>
          </div>
          <div class="card-body">
            <input
              type="number"
              class="form-control"
              v-model="stock.quantity"
              placeholder="Quantity"
              :disabled="cardData.type !== 'buy'"
            >
            <button
              class="btn btn-primary float-right"
              @click="cardData.type === 'buy' ? stockBuy(stock) : stockSell(index)"
            >{{cardData.type}}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="noStocks">No Stocks To {{cardData.type}} !</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    stockBuy(stock, index) {
      if (stock.quantity) {
        this.$emit("stockHandler", stock);
      } else {
        alert(`No Quantity to ${this.cardData.type}`);
      }
    },
    stockSell(index) {
      this.$emit("stockHandler", index);
    }
  },
  props: ["cardData", "stockHandler"]
};
</script>

<style scoped>
.btn {
  text-transform: capitalize;
}
.card {
  margin: 10px;
}
.card-body {
  background-color: rgba(0, 0, 0, 0.03);
}
.priceLabel {
  font-size: 10px;
  font-weight: bold;
}
.form-control {
  display: inline-flex;
  width: 40%;
}
.bg-buy {
  background: #17a2b880;
}
.bg-sell {
  background: #dc354380;
}
.noStocks {
  margin: auto;
  font-size: 20px;
  color: #942238;
  font-weight: bold;
}
</style>
