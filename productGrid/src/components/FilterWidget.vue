<template>
  <ul class="dynList">
    <li v-for="(option, index) in options" :key="index">
      <input
        :type="filterName === 'sold_out' ? 'radio' : 'checkbox'"
        v-model="selectedValues"
        :value="option"
        class="form-control"
        @change="selectionHandler(filterName)"
      >
      {{ option | filterOptionLabel(filterName) }}
    </li>
  </ul>
</template>

<script>
import { eventBus } from "../main";
import EVENTS from "../store/events";

export default {
  data() {
    return {
      selectedValues: []
    };
  },
  props: ["options", "filterName"],
  methods: {
    selectionHandler(filterName) {
      eventBus.$emit(EVENTS.FILTER_CHANGE, {
        key: filterName,
        value: this.selectedValues
      });
    }
  },
  created() {
    const vueReference = this;
    eventBus.$on(EVENTS.RESET_ALL, () => {
      vueReference.selectedValues = [];
    });
  }
};
</script>

<style scoped>
.dynList {
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #dedede;
  margin-left: 10px;
  font-size: 13px;
}
</style>
