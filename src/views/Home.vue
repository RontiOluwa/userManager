<template>
  <div>
    <p>Home Route</p>
    <ul>
      <li>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/sign-in">Sign In</Link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Link from "../components/Link.vue";

export default defineComponent({
  name: "Home",
  components: { Link },
});
</script>
