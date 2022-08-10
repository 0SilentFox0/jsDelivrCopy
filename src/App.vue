<template>
  <div class="main">
    <b-container class="d-flex flex-column justify-center items-center">
      <PackageCards class="mt-4" />
    </b-container>
    <VFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PackageCards from './components/blocks/package/PackageCards.vue';
import VFooter from './components/blocks/footer/VFooter.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    PackageCards,
    VFooter,
  },
});
</script>

<style lang="scss">
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
