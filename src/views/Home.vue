<template>
  <div>
    <Header label="Home Route" />
    <ul>
      <li>
        <Link to="/sign-up" class="border-current">Sign Up</Link>
      </li>
      <li>
        <Link to="/sign-in">Sign In</Link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Link from "../components/Link.vue";
import Header from "../components/Header.vue";

export default defineComponent({
  name: "Home",
  components: { Link, Header },
});
</script>
