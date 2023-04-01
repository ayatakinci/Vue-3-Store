<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Username</label>
        <input type="text" v-model="username" required>
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import axios from 'axios';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const error = ref('');
    const router = useRouter();
    const store = useStore();

    const handleSubmit = async () => {
  try {
    const response = await axios.post('http://localhost:5000/login', {
      username: username.value,
      password: password.value
    });

    if (response.status === 200 && response.data.success) {
      store.dispatch('login', {
        username: username.value,
        password: password.value
      });
      router.push('/home');
    } else {
      error.value = 'Invalid username or password';
    }
  } catch (error) {
    console.error(error);
  }
};


    return {
      username,
      password,
      error,
      handleSubmit
    };
  }
};

</script>
