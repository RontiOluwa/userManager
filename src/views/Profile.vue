<template>
  <div>
    <Header label="Profile Route" />
    <div
      class="max-w-md m-auto border-2 p-6 mt-11"
      v-for="user in getUser"
      :key="user.email"
    >
      <div>Email Address : <br />{{ user.email }}</div>
      <div class="mt-6">Username : <br />{{ user.username }}</div>
    </div>
    <div class="max-w-md m-auto mt-3 flex">
      <Link to="/change-password" class="w-1/2">Change Password</Link>
      <Link to="/sign-out" class="w-1/2 text-right">Sign Out</Link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Link from "../components/Link.vue";
import Header from "../components/Header.vue";

export default defineComponent({
  name: "Profile",
  components: { Link, Header },
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
