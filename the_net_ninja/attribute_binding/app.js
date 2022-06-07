const app = Vue.createApp({
  data() {
    return {
      url: "http://www.google.com",
      judul: "Hello, Vue :)",
      title: "Belajar Vue JS",
      author: "Resky Bayu Andhika",
      books: [
        { title: "naruto", author: "masashi", img: "./assets/naruto.jpg" },
        { title: "one piece", author: "oda", img: "./assets/onepiece.jpg" },
        { title: "Detective Conan", author: "aoyama gosho", img: "./assets/conan.jpg" },
      ],
      showBooks: true,
    };
  },
  methods: {
    showToggle() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
