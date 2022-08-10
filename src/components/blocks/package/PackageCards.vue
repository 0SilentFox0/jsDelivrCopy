import { Package } from '@/api/base/baseTypes'; import { Package } from
'@/api/base/baseTypes'; import { Package } from '@/api/base/baseTypes';
<template>
  <div class="packages">
    <b-input-group>
      <b-form-input
        size="lg"
        class="mt-4"
        placeholder="search all of npm"
        @input="searchPackage($event)" />
    </b-input-group>
    <div v-if="store.packages.length" class="cards">
      <PackageCard
        v-for="pack in store.packages"
        :key="pack"
        :pack="pack"
        @choose-package="choosePackage" />

      <b-pagination
        v-model="currentPage"
        class="pagination my-4"
        align="center"
        :total-rows="store.total"
        :per-page="PACKAGE_PER_PAGE" />

      <VPopup :is-opened="popupIsOpened" @close="popupIsOpened = false">
        <PackageInfo :pack="currentPack" />
      </VPopup>
    </div>
    <div v-else class="w-full mt-4 text-center">No packages</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import PackageInfo from './PackageInfo.vue';
import PackageCard from './PackageCard.vue';
import VPopup from '@/components/ui/VPopup/VPopup.vue';
import { usePackageStore } from '@/store/packages';
import { Package } from '@/api/base/baseTypes';
import { PACKAGE_PER_PAGE } from '@/utils/constants';

export default defineComponent({
  name: 'PackageCards',
  components: { PackageInfo, PackageCard, VPopup },
  setup() {
    const store = usePackageStore();

    const currentPack = ref({});
    const popupIsOpened = ref(false);
    const currentPage = ref(1);
    const search = ref('');

    const searchPackage = async (event: string) => {
      if (event) {
        search.value = event;
        await store.getPackages({
          packageName: search.value,
          from: (currentPage.value - 1) * PACKAGE_PER_PAGE,
        });
      }
    };

    const choosePackage = (pack: Package) => {
      currentPack.value = pack;
      popupIsOpened.value = true;
    };

    watch(
      () => currentPage.value,
      () => searchPackage(search.value),
    );

    return {
      store,
      search,
      currentPage,
      PACKAGE_PER_PAGE,
      currentPack,
      popupIsOpened,
      searchPackage,
      choosePackage,
    };
  },
});
</script>

<style lang="scss"></style>
