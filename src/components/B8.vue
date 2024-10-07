<template>
  <div>
    <ul>
      <li>
        <router-link to="/dashboard" exact-active-class="active">
          dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/account" exact-active-class="active">
          account
        </router-link>
      </li>
      <li>
        <router-link to="/product" exact-active-class="active">
          product
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const navigateTo = (path) => {
  router.push(path);
};
</script>

<style>
ul {
  margin: 10px;
  display: flex;
}
ul li {
  text-align: center;
  list-style: none;
}

ul li a {
  padding: 10px;
  text-decoration: none;
}

.active {
  background-color: blue;
  color: #fff;
  font-weight: 700;
}
</style>
