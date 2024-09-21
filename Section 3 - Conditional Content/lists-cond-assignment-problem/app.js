Vue.createApp({
  data() {
    return {
      task: "",
      tasks: [],
      showList: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
      this.task = "";
    },
    toggleShowList() {
      this.showList = !this.showList;
    },
  },
}).mount("#assignment");
