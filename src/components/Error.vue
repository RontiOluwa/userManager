<template>
  <div>
    <p class="text-red-600">{{ mssg }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    mssg: { type: String, required: true },
  },
});
</script>
