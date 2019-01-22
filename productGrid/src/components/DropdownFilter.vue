<template>
  <select class="filterSelectBox" v-model="selectedValue" @change="selectionHandler(propName)">
    <option v-for="(option, index) in options" :key="index" :value="option">By {{option}}</option>
  </select>
</template>

<script>
import { eventBus } from "../main";
import EVENTS from "../store/events";

export default {
  data() {
    return {
      selectedValue: ""
    };
  },
  props: ["options", "propName"],
  methods: {
    selectionHandler(propName) {
      eventBus.$emit(EVENTS.DROPDOWN_CHANGE, {
        key: propName,
        value: this.selectedValue
      });
    }
  },
  created() {
    const vueReference = this;
    eventBus.$on(EVENTS.RESET_ALL, () => {
      vueReference.selectedValue = "";
    });
  }
};
</script>

<style scoped>
.filterSelectBox {
  float: right;
  width: 80%;
}
</style>
