const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },
    submitForm() {
      alert("submitted");
    },
  },
});

app.mount("#events");
