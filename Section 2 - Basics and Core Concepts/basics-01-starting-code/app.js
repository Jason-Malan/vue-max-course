const app = Vue.createApp({
  data: () => ({
    courseGoal: "Finish the course and learn vue.js!",
    vueUrl: "https://vuejs.org/",
  }),
  methods: {
    outputGoal: () => (Math.random() > 0.5 ? "Master Vue" : "Learn Vue"),
  },
});

app.mount("#user-goal");
