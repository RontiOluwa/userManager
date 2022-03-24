<template>
  <div class="w-full p-6 sticky border-b">
    <h4 class="text-lg font-medium">{{ label }}</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    label: { type: String, required: true },
  },
});
</script>
