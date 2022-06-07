const app = Vue.createApp({
  data() {
    return {
      url: "http://www.google.com",
      judul: "Hallo Vue :)",
      title: "belajar vueJS",
      author: "Resky Bayu Andhika",
      showOrNot: true,
      books: [
        { title: "naruto", author: "masashi", isFav: true },
        { title: "one piece", author: "oda", isFav: true },
        { title: "Conan", author: "aoyama", isFav: false },
      ],
    };
  },
  methods: {
    tombolShowOrNot() {
      this.showOrNot = !this.showOrNot;
    },
  },
});

app.mount("#app");
