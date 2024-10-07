<template>
  <div>
    <v-card>
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab @click="navigateTo('/')" :key="0">Home</v-tab>
        <v-tab @click="navigateTo('/contact')" :key="1">Contact</v-tab>
      </v-tabs>
    </v-card>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";

const router = useRouter();
const route = useRoute();
const tab = ref(0);
const navigateTo = (path) => {
  router.push(path);
};
watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/") {
      tab.value = 0;
    } else if (newPath === "/contact") {
      tab.value = 1;
    }
  },
  { immediate: true }
);
</script>

<style></style>
