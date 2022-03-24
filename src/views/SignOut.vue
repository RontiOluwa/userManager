<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "SignOut",
  setup() {
    localStorage.clear();
    const router = useRouter();
    router.push("/sign-in");
  },
});
</script>
