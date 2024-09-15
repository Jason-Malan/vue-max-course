const app = Vue.createApp({
  data: () => ({
    courseGoalA: "Finish the course and learn vue.js!",
    courseGoalB: "Finish the course and master vue.js!",
    vueUrl: "https://vuejs.org/",
  }),
  methods: {
    outputGoal() {
      return Math.random() > 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});

app.mount("#user-goal");
