Vue.createApp({
  data() {
    return { output1: "", output2: "" };
  },
  methods: {
    alert() {
      alert("Alert!");
    },
  },
}).mount("#assignment");
