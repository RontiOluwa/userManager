<template>
  <div>
    <Header label="Confirm Password" />
    <div class="max-w-md m-auto border-2 p-6 mt-11">
      <Input
        label="Old Password"
        type="password"
        @changeValue="getOldPassword"
      />
      <Input
        label="New Password"
        type="password"
        @changeValue="newOldPassword"
      />
      <Input
        label="Confirm New Password"
        type="password"
        @changeValue="confirmOldPassword"
      />
      <Button text="Submit" @submit="changePassword" />
      <Error :mssg="errorMssg" v-show="error" />
      <Link to="/profile" class="mt-6">Clcik to view Profile</Link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Link from "../components/Link.vue";
import Input from "../components/Input.vue";
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";
import Header from "../components/Header.vue";

export default defineComponent({
  name: "ChangePassword",
  components: { Link, Input, Button, Header },
  setup() {
    var oldPassword: string;
    var newpassword: string;
    var confirmpassword: string;

    var error: any;
    var errorMssg: any;

    error = ref(false);
    errorMssg = ref("");

    const router = useRouter();

    const getOldPassword = (event: string) => {
      oldPassword = event;
    };
    const newOldPassword = (event: string) => {
      newpassword = event;
    };
    const confirmOldPassword = (event: string) => {
      confirmpassword = event;
    };
    const changePassword = () => {
      const rawUser: any = localStorage.getItem("user");
      const user: any = JSON.parse(rawUser)[0];
      if (user["password"] !== oldPassword) {
        error.value = true;
        errorMssg.value = "wrong password";
      } else if (newpassword != confirmpassword) {
        error.value = true;
        errorMssg.value = "Password do not match";
      } else {
        user["password"] = newpassword;
        const userData = ref<any>([
          {
            username: user["username"],
            email: user["email"],
            password: newpassword,
          },
        ]);
        localStorage.setItem("user", JSON.stringify(userData.value));
        console.log(localStorage.getItem("user"));
        router.push("/profile");
      }
    };

    return {
      getOldPassword,
      newOldPassword,
      confirmOldPassword,
      changePassword,
      error,
      errorMssg,
    };
  },
});
</script>
