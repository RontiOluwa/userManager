<template>
  <div>
    <Header label="Sign In Route" />
    <div class="max-w-md m-auto border-2 p-6 mt-11">
      <Input label="Email Address" type="email" @changeValue="getEmail" />
      <Input label="Password" type="password" @changeValue="getPassword" />
      <Error :mssg="errorMssg" v-show="error" />
      <div class="flex mt-11">
        <Link to="/lost-password" class="w-1/2">Forgot Pasword?</Link>
        <Link to="/sign-up" class="w-1/2 text-right">Click to Sign Up</Link>
      </div>
      <Button text="Sign In" @submit="signIn" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Link from "../components/Link.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import Error from "../components/Error.vue";
import { useRouter } from "vue-router";
import Header from "../components/Header.vue";

export default defineComponent({
  name: "SignIn",
  components: { Link, Input, Button, Error, Header },
  setup() {
    var email: string;
    var password: string;

    const router = useRouter();

    var error: any;
    var errorMssg: any;

    error = ref(false);
    errorMssg = ref("");

    const getEmail = (event: string) => {
      email = event;
    };

    const getPassword = (event: string) => {
      password = event;
    };

    const signIn = () => {
      if (
        email == undefined ||
        password == undefined ||
        email == "" ||
        password == ""
      ) {
        error.value = true;
        errorMssg.value = "Please set up all fields";
      } else {
        const rawUser: any = localStorage.getItem("user");
        if (rawUser === undefined) {
          error.value = true;
          errorMssg.value = "No Such User Found";
        } else {
          const user: any = JSON.parse(rawUser)[0];
          if (user["email"] === email && user["password"] === password) {
            router.push("/profile");
          } else {
            error.value = true;
            errorMssg.value = "No Such User Found";
          }
        }
      }
    };

    return { getEmail, getPassword, signIn, error, errorMssg };
  },
});
</script>
