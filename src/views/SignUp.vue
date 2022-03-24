<template>
  <div>
    <p>Sign Up Route</p>
    <div>
      <Input label="Username" type="text" value="" @changeValue="getUsername" />
      <Input label="Email Address" type="email" @changeValue="getEmail" />
      <Input label="Password" type="password" @changeValue="getPassword" />
      <Error :mssg="errorMssg" v-show="error" />
      <Button text="Sign Up" @submit="signUp" />
    </div>
    <Link to="/sign-in">Click to Login</Link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Link from "../components/Link.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import Error from "../components/Error.vue";
import User from "../types/Users";

export default defineComponent({
  name: "SignUp",
  components: { Link, Input, Button, Error },
  setup() {
    const router = useRouter();

    var username: string;
    var email: string;
    var password: string;

    var error: any;
    var errorMssg: any;

    error = ref(false);
    errorMssg = ref("");
    const getUsername = (event: string) => {
      username = event;
    };

    const getEmail = (event: string) => {
      email = event;
    };

    const getPassword = (event: string) => {
      password = event;
    };

    const signUp = () => {
      if (
        username == undefined ||
        email == undefined ||
        password == undefined
      ) {
        error.value = true;
        errorMssg.value = "Please set up all fields";
      } else if (email.includes("@") == false) {
        error.value = true;
        errorMssg.value = "Please Enter a proper Email Address";
      } else {
        const user = ref<User[]>([{ username, email, password }]);
        localStorage.setItem("user", JSON.stringify(user.value));
        router.push("/profile");
      }
    };

    return { getUsername, getEmail, getPassword, signUp, error, errorMssg };
  },
});
</script>
