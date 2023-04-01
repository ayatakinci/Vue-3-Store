
<template>
   <Layout>
      <router-view/>
   </Layout>

</template>
<script>
import { defineComponent } from 'vue';
import Layout from './layout/layout.vue';

export default defineComponent({
  name: 'App',
  components: {
    Layout
  },
  setup() {
    return {};
  }
});
</script>