<template>
  <div>
    <br />
    <button @click="$emit('submit')">{{ text }}</button>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  props: {
    text: { type: String, required: true },
  },
  //   setup() {},
});
</script>
