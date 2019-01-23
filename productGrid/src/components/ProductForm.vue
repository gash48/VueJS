<template>
  <form @submit="addProduct">
    <div class="row">
      <div class="col-md-6 col-xs-6">
        <p class="fieldLabel">Name :</p>
        <input type="text" class="form-control" v-model="productName" required>
      </div>
      <template v-if="getFilters">
        <div class="col-md-6 col-xs-6" v-for="(value, key) in getFilters" :key="key">
          <p class="fieldLabel">{{key | filterLabel}} :</p>
          <select :name="key" v-model="productData[key]" class="form-control" required>
            <option
              v-for="(option, index) in value"
              :key="index"
              :value="option"
            >{{option | filterOptionLabel(key)}}</option>
            <option value="other">Other</option>
          </select>
          <input
            v-show="productData[key] === 'other'"
            type="text"
            style="float: right"
            v-model="otherChoice[key]"
            :placeholder="`Specify ${key}`"
            class="form-control"
            :required="productData[key] === 'other'"
          >
        </div>
      </template>
    </div>
    <div class="row">
      <div class="col-md-12 col-xs-12 text-center">
        <button type="submit" class="btn btn-primary">Add Product</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CONSTANTS from "../store/constants";

export default {
  data() {
    return {
      filters: this.getFilters,
      productName: "",
      productData: {},
      otherChoice: {}
    };
  },
  methods: {
    ...mapActions(["addProducts"]),
    addProduct(event) {
      event.preventDefault();
      let payload = {
        name: this.productName,
        url: CONSTANTS.DEFAULT_IMAGE,
        ...this.productData,
        ...this.otherChoice
      };
      this.addProducts(payload);
    }
  },
  computed: {
    ...mapGetters(["getFilters"])
  }
};
</script>

<style scoped>
.col-md-6,
.col-xs-6 {
  padding: 10px;
  text-align: left;
}
.fieldLabel {
  display: inline-block;
  text-transform: capitalize;
  width: 100px;
}
.form-control {
  display: inline-flex;
  width: 74%;
}
</style>
