<template>
  <div>
    <p>Lost Password In Route</p>
    <div v-if="route.query.code && route.query.email == undefined">
      <Input label="Enter Code" type="number" @changeValue="getCode" />
      <Button text="Submit" @submit="compareCode" />
    </div>
    <div v-else-if="route.query.email == undefined">
      <Input label="Email Address" type="email" @changeValue="getEmail" />
      <Button text="Submit" @submit="sendCode" />
    </div>
    <div v-else-if="route.query.email">
      <Link :to="`/lost-password?code=${random}`">Click to Enter Code</Link>
    </div>
    <br />
    <br />
    <Link to="/sign-in">Click to Sign In</Link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Link from "../components/Link.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "LostPassword",
  components: { Link, Input, Button },
  setup() {
    var email: string;
    var code: string;
    const router = useRouter();
    const route = useRoute();
    const random: any = localStorage.getItem("code");

    const getEmail = (event: string) => {
      email = event;
    };

    const getCode = (event: string) => {
      code = event;
    };

    const sendCode = () => {
      if (email === undefined || email === "") {
        console.log("error");
      } else {
        const value: number = Math.floor(Math.random() * 9999) + 1000;
        localStorage.setItem("code", value.toFixed());
        localStorage.setItem("email", email);
        router.push(`/lost-password?email=${email}`);
      }
    };

    const compareCode = () => {
      if (code === route.query.code) {
        router.push("/change-password");
      }
    };

    return { getEmail, sendCode, route, random, getCode, compareCode };
  },
});
</script>
