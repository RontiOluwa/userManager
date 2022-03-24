<template>
  <div>
    <p>Profile Route</p>
    <div v-for="user in getUser" :key="user.email">
      <div>Email Address :{{ user.email }}</div>
      <div>Username : {{ user.username }}</div>
    </div>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Link from "../components/Link.vue";

export default defineComponent({
  name: "Profile",
  components: { Link },
  setup() {
    const getUser = computed(() => {
      const rawUser: any = localStorage.getItem("user");
      const user: any = JSON.parse(rawUser);
      return user;
    });
    return { getUser };
  },
});
</script>
