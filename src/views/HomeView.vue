<template>
  <div>
    <B6></B6>
    <B7></B7>
    <B8></B8>
    <h1>Đây là trang chủ</h1>
    <h1 v-if="isShow">Email: {{ user.email }}</h1>
    <router-view></router-view>
  </div>
</template>

<script setup>
import B6 from "../components/B6.vue";
import B7 from "../components/B7.vue";
import B8 from "../components/B8.vue";
import { ref } from "vue";

const isShow = ref(false);
const user = JSON.parse(localStorage.getItem("login")) || null;

if (user) {
  isShow.value = !isShow.value;
}
</script>

<style></style>
