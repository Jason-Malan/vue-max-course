<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
export default {
  props: ["name", "age"],
};
</script>

<style></style>
