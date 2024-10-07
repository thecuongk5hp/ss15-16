<template>
  <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent="handleSubmit">
      <h1>Login account</h1>
      <label for="">Your email</label>
      <v-text-field
        density="compact"
        variant="outlined"
        v-model="userLogin.email"
      ></v-text-field>
      <label for="">Password</label>
      <v-text-field
        density="compact"
        variant="outlined"
        type="password"
        v-model="userLogin.password"
      ></v-text-field>

      <v-btn class="mt-2" color="primary" type="submit" block
        >Login an account</v-btn
      >
      <p>
        Already have an account?
        <router-link to="/register">Register</router-link>
      </p>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const userLogin = ref({
  email: "",
  password: "",
});
const users = JSON.parse(localStorage.getItem("users")) || [];

const handleSubmit = () => {
  const foundUser = users.find(
    (user) =>
      user.email === userLogin.value.email &&
      user.password === userLogin.value.password
  );

  if (foundUser) {
    localStorage.setItem("login", JSON.stringify(foundUser));
    alert("Đăng nhập thành công!");
    router.push("/");
  } else {
    alert("Email hoặc mật khẩu không đúng!");
  }
};
</script>

<style></style>
