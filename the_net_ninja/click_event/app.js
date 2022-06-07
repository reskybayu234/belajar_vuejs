const app = Vue.createApp({
  data() {
    return {
      title: "Belajar VUEJS",
      author: "RBA",
      age: 27,
    };
  },
  methods: {
    klikIni() {
      this.title = "Klik dari method klikIni()";
    },
    klikParam(param) {
      this.title = param;
    },
  },
});
app.mount("#app");
