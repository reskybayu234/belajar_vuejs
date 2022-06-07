const app = Vue.createApp({
  // data, functions
  // template: "<h2> Resky BA</h2>",
  data() {
    return {
      title: "The Final Empire",
      author: "Resky Bayu Andhika",
      age: 27,
    };
  },
});
console.log(app);
app.mount("#app");
