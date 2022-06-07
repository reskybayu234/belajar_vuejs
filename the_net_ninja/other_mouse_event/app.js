const app = Vue.createApp({
  data() {
    return {
      title: "Other mouse event",
      x: 0,
      y: 0,
      score: 0,
    };
  },
  methods: {
    handleEvent() {
      this.score++;
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
