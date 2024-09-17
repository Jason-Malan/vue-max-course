Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    display() {
      return this.count > 37
        ? "Too much!"
        : this.count < 37
        ? "Not there yet"
        : this.count;
    },
  },
  watch: {
    display() {
      setTimeout(() => {
        this.count = 0;
      }, 5000);
    },
  },
}).mount("#assignment");
