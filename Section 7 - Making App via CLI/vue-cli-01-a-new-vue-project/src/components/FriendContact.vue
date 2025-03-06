<template>
  <li>
    <h2>{{ name }} {{ fav ? "(fav)" : "" }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "emailAddress", "phoneNumber"],
  props: {
    fav: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      // validator: function (value) {
      //   return value.length > 1;
      // },
      validator(value) {
        return value.length > 1;
      },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
