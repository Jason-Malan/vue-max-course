const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn vue.js!",
      vueUrl: "https://vuejs.org/",
    };
  },
});

app.mount("#user-goal");
