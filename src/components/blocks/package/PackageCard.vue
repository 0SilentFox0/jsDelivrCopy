<template>
  <b-card :title="pack.name" class="mt-4 card" @click="choosePackage">
    <b-card-text class="d-flex">
      <span class="">{{ pack.name }}</span>
      <div class="border rounded px-1 mx-2">
        {{ pack.version }}
      </div>
    </b-card-text>
    <b-card-text>
      {{ pack.description }}
    </b-card-text>
  </b-card>
</template>

<script lang="ts">
import { Package } from '@/api/base/baseTypes';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'PackageCard',
  props: {
    pack: {
      type: Object as PropType<Package>,
      required: true,
    },
  },
  emits: ['choosePackage'],
  methods: {
    choosePackage() {
      this.$emit('choosePackage', this.pack);
    },
  },
});
</script>

<style lang="scss">
.card {
  cursor: pointer;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
}
</style>
