<template>
  <div>
    <Header label="Lost Password Route" />
    <div
      class="max-w-md m-auto border-2 p-6 mt-11"
      v-if="route.query.code && route.query.email == undefined"
    >
      <Input label="Enter Code" type="number" @changeValue="getCode" />
      <Button text="Submit" @submit="compareCode" />
    </div>
    <div
      class="max-w-md m-auto border-2 p-6 mt-11"
      v-else-if="route.query.email == undefined"
    >
      <Input label="Email Address" type="email" @changeValue="getEmail" />
      <Button text="Submit" @submit="sendCode" />
    </div>
    <div
      class="max-w-md m-auto border-2 p-6 mt-11"
      v-else-if="route.query.email"
    >
      <Link :to="`/lost-password?code=${random}`">Click to Get OTP Code</Link>
    </div>
    <br />
    <br />
    <div class="max-w-md m-auto">
      <Link to="/sign-in">Click to Sign In</Link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Link from "../components/Link.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import { useRouter, useRoute } from "vue-router";
import Header from "../components/Header.vue";

export default defineComponent({
  name: "LostPassword",
  components: { Link, Input, Button, Header },
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
