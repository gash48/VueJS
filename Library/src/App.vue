<template>
  <div class="container-fluid">
    <app-header :libraryName="libName"></app-header>
    <div class="row">
      <div class="col-md-6 col-xs-6">
        <app-book-details :fieldSettings="bookDetails.slice(0,2)" :inputHandler="inputHandler"></app-book-details>
      </div>
      <div class="col-md-6 col-xs-6">
        <app-book-details :fieldSettings="bookDetails.slice(2)" :inputHandler="inputHandler"></app-book-details>
      </div>
    </div>
    <div class="row pad-20">
      <div class="col-md-12 col-xs-12 centerContent">
        <button class="btn btn-primary" @click="submitBookInfo">Add Book</button>
      </div>
    </div>
    <div class="row pad-20">
      <div class="col-md-12 col-xs-12">
        <app-book-logs
          :logsList="bookLogsArray"
          :totalBooks="totalBooks"
          :totalTitles="totalTitles"
        ></app-book-logs>
      </div>
    </div>
  </div>
</template>

<script>
import header from "./components/Header.vue";
import bookDetails from "./components/BookDetails.vue";
import bookLogs from "./components/bookLogs.vue";
import { BookInformation } from "./appConstants.js";

export default {
  data() {
    return {
      libName: "Hogwarts",
      totalBooks: 0,
      totalTitles: 0,
      bookData: {},
      bookDetails: [],
      bookLogsArray: []
    };
  },
  created() {
    this.totalBooks = 0;
    this.totalTitles = 0;
    localStorage.clear();
    this.initializeBookInfo();
  },
  methods: {
    inputHandler(event) {
      const { name, value } = event.target;
      this.bookData[name] = value;
    },
    validateBooksInfo() {
      for (const value of Object.values(this.bookData)) {
        if (!value.length) {
          alert("One or more field is empty");
          return false;
        }
      }
      return true;
    },
    submitBookInfo() {
      if (this.validateBooksInfo()) {
        localStorage.setItem(
          `Book${localStorage.length}`,
          JSON.stringify(this.bookData)
        );
        this.bookLogsArray.push(this.bookData);
        this.totalBooks++;
        this.totalTitles += parseInt(this.bookData.bookQuantity, 10);
        this.initializeBookInfo();
      }
    },
    initializeBookInfo() {
      this.bookData = {};
      this.bookDetails = [];
      Object.keys(BookInformation).map(key => {
        const bInfo = BookInformation[key];
        this.bookData[key] = bInfo.defaultValue;
        this.bookDetails.push({
          key: key,
          type: bInfo.type,
          label: bInfo.label,
          defaultValue: bInfo.defaultValue,
          options: bInfo.options || []
        });
      });
    }
  },
  components: {
    appHeader: header,
    appBookLogs: bookLogs,
    appBookDetails: bookDetails
  }
};
</script>

<style>
.centerContent {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pad-20 {
  padding: 20px;
}
</style>
