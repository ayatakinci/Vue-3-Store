<template>
  <div>
    <div>
      <h2>{{ cloth.title }}</h2>
      <img class="cloth-image" :src="cloth.image" :alt="cloth.title">
      <p>{{ cloth.description }}</p>
      <p>Price: {{ cloth.fiyat }}</p>
      <pre>{{ cloth }}</pre>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const cloth = ref({});
    const route = useRoute();

    onMounted(async () => {
      try {
        const response = await axios.get(`http://localhost:5000/clothes/${route.params.id}`);
        cloth.value = response.data;
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    });

    return { cloth };
  }
};
</script>

<style scoped>
.cloth-image {
  width: 50%;
}
</style>
