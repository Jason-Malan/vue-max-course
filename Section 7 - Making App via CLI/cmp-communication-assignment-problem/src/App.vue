<template>
  <div>
    <active-user :name="name" :age="age" />
    <user-data @set-user-data="setUserData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    setUserData(name, age) {
      this.name = name;
      this.age = age;
    },
  },
};
</script>

<style></style>
