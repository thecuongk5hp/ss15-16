<template>
  <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent="handleSubmit">
      <h1>Create account</h1>

      <label for="">Your email</label>
      <v-text-field
        v-model="addUser.email"
        density="compact"
        variant="outlined"
        type="email"
        required
      ></v-text-field>

      <label for="">Password</label>
      <v-text-field
        v-model="addUser.password"
        density="compact"
        variant="outlined"
        type="password"
        required
      ></v-text-field>

      <label for="">Confirm Password</label>
      <v-text-field
        v-model="confirmPassword"
        density="compact"
        variant="outlined"
        type="password"
        required
      ></v-text-field>

      <v-btn class="mt-2" color="primary" type="submit" block
        >Create an account</v-btn
      >
      <p>
        Already have an account? <router-link to="/login">Login</router-link>
      </p>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const addUser = ref({
  email: "",
  password: "",
});
const confirmPassword = ref("");

const users = JSON.parse(localStorage.getItem("users")) || [];

const handleSubmit = () => {
  if (addUser.value.password !== confirmPassword.value) {
    alert("Mật khẩu không trùng!");
    return;
  }
  const emailExists = users.some((user) => user.email === addUser.value.email);
  if (emailExists) {
    alert("Email đã tồn tại!");
    return;
  }

  users.push(addUser.value);
  localStorage.setItem("users", JSON.stringify(users));
  addUser.value.email = "";
  addUser.value.password = "";
  confirmPassword.value = "";

  alert("Tạo tài khoản thành công!");
  router.push("/login");
};
</script>

<style></style>
