<template>
  <footer class="bg-primary p-4">
    <b-container>
      <div class="content w-full d-flex justify-content-around">
        <b-link
          href="https://github.com/0SilentFox0"
          target="_blank"
          class="text-dark text-decoration-none">
          0SilentFox0
        </b-link>

        <span class="text-dark">Andy Spizhavka</span>
        <b-link href="https://www.instagram.com/aspizhav/" target="_blank">
          <b-img
            :src="avatar"
            fluid
            alt="Responsive image"
            width="40"
            height="40"
            circle />
        </b-link>
      </div>
    </b-container>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import avatar from '@/assets/img/avatar.jpg';

export default defineComponent({
  data() {
    return {
      avatar,
    };
  },
});
</script>

<style lang="scss"></style>
