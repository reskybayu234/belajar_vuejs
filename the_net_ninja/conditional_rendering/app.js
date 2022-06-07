const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "Belajar VueJS",
      author: "Resky Bayu Andhika",
      age: 27,
    };
  },
  methods: {
    klikIni() {
      this.title = "Tanpa Parameter";
    },
    klikParam(param) {
      this.title = param;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
