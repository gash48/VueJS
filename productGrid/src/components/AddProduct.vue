<template>
  <div>
    <div class="row">
      <div class="col-xs-6 col-md-6 text-left">
        <span class="formModify" @click="noOfProducts++">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </span>
      </div>
      <div class="col-xs-6 col-md-6 text-right">
        <span class="formModify" @click="noOfProducts--">
          <i class="fa fa-minus" aria-hidden="true"></i>
        </span>
      </div>
    </div>
    <div class="row" v-if="noOfProducts > 0">
      <div class="col-md-12 col-xs-12 formWrapper" v-for="item in noOfProducts" :key="item">
        <div class="card">
          <div class="bg-form">
            Product
            <b>{{item}}</b>
          </div>
          <div class="card-body">
            <app-product-form></app-product-form>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="noStocks">No Products To Add</div>
    </div>
  </div>
</template>

<script>
import productForm from "./ProductForm";

export default {
  data() {
    return {
      noOfProducts: 1
    };
  },
  components: {
    appProductForm: productForm
  }
};
</script>

<style scoped>
.bg-form {
  background: #17a2b880;
  padding: 10px;
}
.formModify {
  font-size: 20px;
  display: inline-block;
  padding: 20px;
}
.formModify:hover {
  cursor: pointer;
  opacity: 0.6;
}
.noStocks {
  font-weight: bold;
  margin: auto;
}
.formWrapper {
  margin: 10px auto;
}
</style>
