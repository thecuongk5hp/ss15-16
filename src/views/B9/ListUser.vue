<template>
  <div>
    <div v-for="user in users" :key="user.id">
      <div>
        <p>id: {{ user.id }}</p>
        <p>userName: {{ user.userName }}</p>
        <p>email: {{ user.email }}</p>
        <p>address: {{ user.address }}</p>
        <v-btn color="primary" @click="handleDetail(user.id)"
          >xem chi tiết</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
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

const handleDetail = (id) => {
  router.push(`/userDetail/${id}`);
};
</script>

<style></style>
