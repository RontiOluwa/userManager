<template>
  <div>
    <br />
    <button
      class="bg-black max-w-sm p-3 w-full text-white"
      @click="$emit('submit')"
    >
      {{ text }}
    </button>
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
