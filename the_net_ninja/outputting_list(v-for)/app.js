const app = Vue.createApp({
  data() {
    return {
      judul: "Hello, Vue :)",
      title: "Belajar Vue JS",
      author: "Resky Bayu Andhhika",
      showBooks: true,
      books: [
        { title: "naruto", author: "masashi kishimoto" },
        { title: "one piece", author: "eichiro oda" },
        { title: "Detectif Conan", author: "Lupa" },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
