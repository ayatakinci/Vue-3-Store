<template>
  <div>
    <h1>My Favorites</h1>
    <div v-if="favorites.length === 0">
      <p>You have no favorite items.</p>
    </div>
    <div v-else>
      <div v-for="favorite in favorites" :key="favorite.id">
        <h2>{{ favorite.title }}</h2>
        <img :src="favorite.image" :alt="favorite.title">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getFavorites']),
    favorites() {
      return this.getFavorites;
    }
  }
}
</script>
