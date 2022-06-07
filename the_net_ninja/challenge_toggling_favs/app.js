const app = Vue.createApp({
  data() {
    return {
      judul: "Hallo Vue :)",
      title: "Belajar VueJS",
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
    toggleFav(book) {
      book.isFav = !book.isFav;
      console.log(book.isFav);
    },
  },
});

app.mount("#app");
