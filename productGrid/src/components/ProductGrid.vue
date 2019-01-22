<template>
  <div id="cardsContainer" v-if="products.length > 0">
    <div class="productCard" v-for="(product, index) in products" :key="index">
      <img class="card-img-top" :src="`/src/assets/images/${product.url}`">
      <div class="card-body">
        <h5 class="text-center">{{product.name}}</h5>
      </div>
    </div>
  </div>
  <div v-else>No Products To Display</div>
</template>

<script>
export default {
  props: ["products"]
};
</script>

<style scoped>
#cardsContainer {
  padding: 15px;
  margin-top: 50px;
}

.card-body {
  padding: 10px 10px 0px 5px;
}

.productCard {
  width: 200px;
  display: inline-block;
  box-shadow: 2px 3px 5px #dedede;
  margin: 5px 10px;
  cursor: pointer;
}

.card-img-top {
  width: 100%;
}

.productCard:hover {
  opacity: 0.6;
}
</style>
