<template>
  <div id="wrapper" :class="{'toggled': openMenu}">
    <app-side-bar></app-side-bar>
    <div id="page-content-wrapper">
      <app-header></app-header>
      <app-product-grid :products="getPaginatedProducts"></app-product-grid>
      <app-pagination-control
        :pages="getNoOfPages"
        :recordsToShow="getPaginationFilter"
        :currentPage="getCurrentPage"
        :totalRecords="getProducts.length"
      ></app-pagination-control>
    </div>
  </div>
</template>

<script>
import { eventBus } from "./main";
import { mapActions, mapGetters } from "vuex";
import EVENTS from "./store/events";
import header from "./components/Header.vue";
import sideBar from "./components/SideBar.vue";
import productGrid from "./components/ProductGrid.vue";
import paginationControl from "./components/Pagination.vue";

export default {
  data() {
    return {
      openMenu: false
    };
  },
  methods: {
    ...mapActions(["fetchProducts", "updateFiltersFromHash"])
  },
  watch: {
    "$route.hash": function(value) {
      this.updateFiltersFromHash(value);
    }
  },
  computed: {
    ...mapGetters([
      "getProducts",
      "getPaginatedProducts",
      "getCurrentPage",
      "getPaginationFilter",
      "getNoOfPages",
      "getHashState"
    ])
  },
  created() {
    this.fetchProducts();
    eventBus.$on(EVENTS.MENU_TOGGLE, val => {
      this.openMenu = val;
    });
  },
  components: {
    appHeader: header,
    appSideBar: sideBar,
    appProductGrid: productGrid,
    appPaginationControl: paginationControl
  }
};
</script>

<style>
#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 250px;
}

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #000;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}

#page-content-wrapper {
  width: 100%;
  position: absolute;
  /* padding: 15px; */
}

#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}

/* Sidebar Styles */

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-nav li {
  text-indent: 20px;
  line-height: 40px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #999999;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}

.sidebar-nav > .sidebar-brand a {
  color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
  color: #fff;
  background: none;
}
</style>
