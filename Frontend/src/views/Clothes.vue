<template>
  <div style="display:flex">
    <div v-for="cloth in filteredClothes" :key="cloth.id" class="mainDiv" >
      <router-link :to="{ name: 'Cloth', params: { id: cloth.id } }">
        <h2 class="hover-underline-animation">{{ cloth.title }}</h2>
        <img class="clthimg" :src="cloth.image" :alt="cloth.title">
      </router-link>
      <button @click="addFavorite(cloth)">Add to Favorites</button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { favoritesStore } from '../store/favoritesStore.js';

export default {
  setup() {
    const filteredClothes = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get("http://localhost:5000/clothes");
        filteredClothes.value = response.data;
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    });

    const addFavorite = (cloth) => {
      console.log('Adding to favorites:', cloth);
      favoritesStore.commit('addFavorite', cloth);
    };

    return { filteredClothes, addFavorite };
  }
};
</script>

