<template>
  <div>
    <label>{{ label }}</label
    ><br />
    <input
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
