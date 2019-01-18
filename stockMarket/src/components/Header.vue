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
        <li class="headerItem">
          <a>Save & Load</a>
        </li>
        <li class="headerItem">
          <b>Available Funds :</b>
          {{ getFunds | inrCurrencyPipe }}
        </li>
      </div>
    </ul>
    <div class="row">
      <button class="btn btn-primary" @click="postData">Post Me</button>
    </div>
  </div>
</template>

<script>
import { routes } from "../navigation/routes";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      links: routes
    };
  },
  methods: {
    ...mapActions(["dayIncrement"]),
    postData() {
      // this.$http.get("data.json").then(
      //   res => {
      //     console.log(res);
      //   },
      //   err => {
      //     console.log(err);
      //   }
      // );
    }
  },
  computed: {
    ...mapGetters(["getDay", "getFunds"])
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
</style>
