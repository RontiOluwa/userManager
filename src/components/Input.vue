<template>
  <div class="w-full p-3">
    <label>{{ label }}</label
    ><br />
    <input
      class="p-3 w-full mt-3 border-2"
      :type="type"
      :id="id"
      @change="$emit('changeValue', $event.target.value)"
    /><br />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    type: { type: String, required: true },
    id: { type: String, required: true },
    label: { type: String, required: true },
  },
  //   setup() {},
});
</script>
