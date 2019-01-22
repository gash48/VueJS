<template>
  <div class="container-fluid">
    <p>
      <a class="btn btn-secondary" @click="menuToggle">
        <i class="fa fa-filter" aria-hidden="true"></i>
      </a>
      Products
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { eventBus } from "../main";
import EVENTS from "../store/events";

export default {
  data() {
    return {
      menuSwitch: false
    };
  },
  methods: {
    menuToggle() {
      this.menuSwitch = !this.menuSwitch;
      eventBus.$emit(EVENTS.MENU_TOGGLE, this.menuSwitch);
    }
  }
};
</script>

<style scoped>
.container-fluid {
  background-color: #5f5f5f;
  position: fixed;
  padding: 10px;
}
.container-fluid p {
  margin: 0;
  color: white;
}
.fa {
  font-size: 26px;
  padding: 0px 10px;
}
</style>
