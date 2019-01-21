<template>
  <div class="headerBar">
    <ul class="headerList">
      <div class="inlineContainer">
        <router-link
          v-for="(route, index) in links"
          :key="index"
          tag="li"
          class="headerItem"
          :to="route.path"
        >
          <a>{{route.label}}</a>
        </router-link>
      </div>
      <div class="float-right inlineContainer">
        <li class="headerItem" :title="'Current Day ' + getDay" @click="dayIncrement">
          <a>End Day</a>
        </li>
        <li
          class="headerItem"
          @mouseenter="showActionList = true"
          @mouseleave="showActionList = false"
        >
          <a>Save & Load</a>
          <ul class="saveLoadList" v-show="showActionList">
            <li class="actionList" @click="saveStocks">
              <a>Save</a>
            </li>
            <li class="actionList" @click="loadStocks">
              <a>Load</a>
            </li>
          </ul>
        </li>
        <li class="headerItem">
          <b>Available Funds :</b>
          {{ getFunds | inrCurrencyPipe }}
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { routes } from "../navigation/routes";
import { mapGetters, mapActions } from "vuex";
import CONSTANTS from "../store/constants";

export default {
  data() {
    return {
      links: routes,
      showActionList: false
    };
  },
  methods: {
    ...mapActions(["dayIncrement","getUserState", "saveStocks", "loadStocks", "fetchAvailableStocks"]),
  },
  computed: {
    ...mapGetters(["getDay", "getFunds"])
  },
  created(){
    this.fetchAvailableStocks();
    this.loadStocks();
    this.getUserState();
  }
};
</script>

<style scoped>
.headerList {
  list-style: none;
  margin: 0px 10px;
  padding: 0px;
}
.headerItem {
  color: #675f5f;
  margin: 10px;
  padding: 10px;
}
.headerItem:hover {
  background: #dedede;
  border-radius: 10px;
  cursor: pointer;
}
.inlineContainer {
  display: inline-flex;
}
.saveLoadList {
  position: absolute;
  z-index: 99;
  list-style: none;
  width: 100px;
  text-align: center;
  margin: 10px auto;
  background: transparent;
  padding: 0px;
}
.actionList {
  padding: 10px;
  border: 1px solid #dedede;
  border-radius: 5px;
}
.actionList:hover {
  background: #dedede;
}
</style>
