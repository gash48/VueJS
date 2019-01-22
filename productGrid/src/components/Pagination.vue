<template>
  <div class="container-fluid paginationBar text-center">
    <div>
      <i class="fa fa-caret-left" data-direction="-1" aria-hidden="true" @click="changePage"></i>

      <div class="paginationControlContainer" v-if="pages > 0">
        <a
          v-for="page in pages"
          :key="page"
          class="paginationControlBox"
          @click="changePage"
          :class="{'selectedPage' : page === currentPage}"
          :data-direction="`page${page}`"
        >{{page}}</a>
      </div>

      <i class="fa fa-caret-right" data-direction="1" aria-hidden="true" @click="changePage"></i>
    </div>

    <div>
      <label v-if="pages == 0">
        <b>No Records To Display !</b>
      </label>
      <label v-else>
        Showing Page <b>{{currentPage}}</b> of <b>{{pages}}</b>. Total Products :- <b>{{totalRecords}}</b>
      </label>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["pages", "recordsToShow", "currentPage", "totalRecords"],
  methods: {
    ...mapActions(["updateCurrentPage"]),
    changePage(event) {
      const direction = event.target.getAttribute("data-direction");
      if (direction.includes("page")) {
        this.updateCurrentPage(Number(direction.slice(4)));
      } else {
        const newPage = this.currentPage + Number(direction);
        if (newPage > 0 && newPage < this.pages) {
          this.updateCurrentPage(this.currentPage + Number(direction));
        }
      }
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

.paginationBar {
  height: 85px;
  bottom: 0px;
}

.fa {
  font-size: 26px;
  padding: 0px 10px;
}

.paginationControlContainer {
  display: inline-flex;
}

.paginationControlBox {
  font-size: 20px;
  margin: 0px 5px;
  padding: 5px 15px;
  border-radius: 50%;
}

.paginationControlBox:hover,
.fa:hover {
  cursor: pointer;
  background-color: #00000038;
}

.selectedPage {
  background-color: #00000038;
}
</style>
