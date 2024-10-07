<template>
  <div>
    <v-btn
      class="mt-2"
      :color="currentRoute === '/' ? 'primary' : ''"
      @click="navigateTo('/')"
    >
      Home
    </v-btn>

    <v-btn
      class="mt-2"
      :color="currentRoute === '/product' ? 'primary' : ''"
      @click="navigateTo('/product')"
    >
      Product
    </v-btn>

    <v-btn
      class="mt-2"
      :color="currentRoute === '/detail' ? 'primary' : ''"
      @click="navigateTo('/detail')"
    >
      Detail
    </v-btn>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const route = useRoute();

const currentRoute = ref("/");

const navigateTo = (path) => {
  currentRoute.value = path;
  router.push(path);
};
</script>

<style></style>
