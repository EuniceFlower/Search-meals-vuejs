<template>
  <section class="flex flex-col  p-8">
    <div class="flex gap-2 justify-center mt-2">
      <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters">{{ letter }}</router-link>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js';

const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const ingredients = ref([])

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response.data);
  ingredients.value = response.data; 
})

</script>