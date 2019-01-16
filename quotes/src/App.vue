<template>
  <div class="container-fluid">
    <app-header></app-header>
    <app-progress-bar :quotesCount="quotes.length"></app-progress-bar>
    <app-quote-input :quoteValue="currentQuote" :inputHandler="quoteInputHandler">
      <button slot="addQuoteButton" class="btn btn-primary" @click="submitQuote">Add Quote</button>
    </app-quote-input>
    <app-quote-widget :quotesList="quotes" :deleteQuote="deleteQuote"></app-quote-widget>
  </div>
</template>

<script>
import header from "./components/Header.vue";
import progressBar from "./components/ProgressBar.vue";
import quoteInput from "./components/QuoteInput.vue";
import quoteWidget from "./components/QuoteWidget.vue";
import { QuoteLIMIT } from "./appConstants.js";

export default {
  data() {
    return {
      quoteLimit: QuoteLIMIT,
      currentQuote: "",
      quotes: []
    };
  },
  created() {},
  methods: {
    quoteInputHandler(event) {
      this.currentQuote = event.target.value;
    },
    submitQuote() {
      if (!this.currentQuote) {
        alert(`Quote Field must Not be empty`);
        return;
      }else if(this.quotes.length === this.quoteLimit){
        alert(`Cannot Add More Quotes. Limit Reached.`);
        return;
      }
      this.quotes.push(this.currentQuote);
      this.currentQuote = "";
    },
    deleteQuote(index){
      this.quotes.splice(index, 1);
    }
  },
  components: {
    appHeader: header,
    appProgressBar: progressBar,
    appQuoteInput: quoteInput,
    appQuoteWidget: quoteWidget
  }
};
</script>

<style>
.centerContent {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pad-20 {
  padding: 20px;
}
</style>
