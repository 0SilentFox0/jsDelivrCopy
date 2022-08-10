import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { BaseGateway } from '@/api/base/base.gateway';
import { Package, PackagesParamsType } from '@/api/base/baseTypes';

interface State {
  packages: Ref<Package[]>;
  total: Ref<number>;
}

export const usePackageStore = defineStore('packages', () => {
  const state: State = {
    packages: ref<[]>([]),
    total: ref(0),
  };

  const actions = {
    async getPackages({ packageName, from }: PackagesParamsType) {
      const { objects, total } = await BaseGateway.getPackagesInfo({
        packageName,
        from,
      });
      state.packages.value = objects.map(item => item.package);
      state.total.value = total;
    },
  };

  return {
    ...state,
    ...actions,
  };
});
