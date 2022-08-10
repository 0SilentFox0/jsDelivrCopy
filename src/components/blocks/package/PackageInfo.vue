<template>
  <div class="info p-4 d-flex flex-column">
    <div>
      {{ pack.name }}
    </div>
    <div class="d-flex my-2 flex-wrap gap-2">
      Keywords:
      <div v-for="tag in pack.keywords" :key="tag" class="border px-2 d-flex">
        {{ tag }}
      </div>
    </div>
    <span> Author: {{ pack.author.name }} </span>
    <div class="d-flex justify-content-between mt-2">
      <a
        v-if="pack.links.npm"
        :href="pack.links.npm"
        class="text-decoration-none text-danger">
        Npm
      </a>
      <a
        v-if="pack.links.repository"
        :href="pack.links.repository"
        class="text-decoration-none text-dark">
        Github
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Package } from '@/api/base/baseTypes';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'PackageInfo',
  props: {
    pack: {
      type: Object as PropType<Package>,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.info {
  background-color: ghostwhite;
}
</style>
