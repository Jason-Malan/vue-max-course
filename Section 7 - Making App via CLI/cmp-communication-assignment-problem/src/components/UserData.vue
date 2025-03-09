<template>
  <form @submit.prevent="submit">
    <div>
      <label for="name">Name:</label>
      <input id="name" type="text" v-model="name" />
    </div>
    <div>
      <label for="age">Age:</label>
      <input id="age" type="text" v-model="age" />
    </div>
    <button>Save</button>
  </form>
</template>

<script>
export default {
  emits: ["set-user-data"],
  data() {
    return { name: "", age: "" };
  },
  methods: {
    submit() {
      this.$emit("set-user-data", this.name, this.age);
    },
  },
};
</script>

<style></style>
