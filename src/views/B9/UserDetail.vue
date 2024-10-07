<template>
  <div>
    <p>id: {{ user.id }}</p>
    <p>userName: {{ user.userName }}</p>
    <p>email: {{ user.email }}</p>
    <p>address: {{ user.address }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const router = useRoute();
const { id } = router.params;

const users = [
  { id: 1, userName: "Mỹ Tâm", email: "tam@gmail.com", address: "Hà Nội" },
  {
    id: 2,
    userName: "Thanh Hưng",
    email: "hung@gmail.com",
    address: "Đà Nẵng",
  },
  { id: 3, userName: "Thanh Hùng", email: "hungne@gmail.com", address: "HCM" },
];

const user = users.find((user) => user.id == id);
</script>

<style></style>
