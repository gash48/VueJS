<template>
  <div id="sidebar-wrapper">
    <ul class="sidebar-nav">
      <li class="sidebar-brand">
        <a href="#">Filters</a>
      </li>

      <li v-for="(value, key, index) in this.getFilters" :key="index" :data-access="key">
        <a href="#">{{ key | filterLabel }}</a>
        <app-filter-widget :options="value" :filterName="key"></app-filter-widget>
      </li>

      <li data-access="pagination">
        <a href="#">Pagination</a>
        <app-drop-down-filter :options="getPaginationOptions" :propName="'rpp'"></app-drop-down-filter>
      </li>
      <li data-access="sorting">
        <a href="#">Sorting</a>
        <app-drop-down-filter :options="getSortingOptions" :propName="'sort'"></app-drop-down-filter>
      </li>

      <li @click="resetAll">
        <a href="#">
          <i class="fa fa-refresh" aria-hidden="true"></i>Reset All
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import FilterWidget from "./FilterWidget.vue";
import DropDownFilter from "./DropDownFilter.vue";
import EVENTS from "../store/events";
import { eventBus } from "../main";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      filters: null,
      paginationValue: "",
      sortingValue: ""
    };
  },
  methods: {
    ...mapActions([
      "updateAppliedFilters",
      "updateSortingOption",
      "updatePaginationOption",
      "resetState"
    ]),
    resetAll() {
      eventBus.$emit(EVENTS.RESET_ALL, this);
      this.resetState();
    }
  },
  computed: {
    ...mapGetters([
      "getAppliedFilters",
      "getFilters",
      "getPaginationFilter",
      "getSortingFilter",
      "getSortingOptions",
      "getPaginationOptions"
    ])
  },
  created() {
    this.filters = this.getAppliedFilters;
    this.paginationValue = this.getPaginationFilter;
    this.sortingValue = this.getSortingFilter;

    eventBus.$on(EVENTS.FILTER_CHANGE, val => {
      this.filters[val.key] = [...val.value];
      this.updateAppliedFilters(this.filters);
    });

    eventBus.$on(EVENTS.DROPDOWN_CHANGE, val => {
      if (val.key === "sort") {
        this.updateSortingOption(val.value);
      } else {
        this.updatePaginationOption(val.value);
      }
    });
  },
  components: {
    appFilterWidget: FilterWidget,
    appDropDownFilter: DropDownFilter
  }
};
</script>

<style>
input[type="checkbox"],
input[type="radio"] {
  width: 20%;
  float: right;
}
a {
  text-transform: capitalize;
}
.fa-refresh {
  display: inline;
  margin-right: 10px;
}
</style>
