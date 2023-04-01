<template>
  <div>
    <h1 v-if="isLoggedIn">Hello {{ store.state.username }}</h1>
    <button @click="handleLogout">Logout</button>
    <p v-if="!isLoggedIn">Please log in to access this page.</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

   const isLoggedIn = computed(() => {
      console.log(store.state.username);
      return store.state.isLoggedIn;
    });

    const handleLogout = async () => {
      await store.dispatch('logout');
      router.push('/login');
    };

    return {
      store,
      isLoggedIn,
      handleLogout
    };
  }
};
</script>
