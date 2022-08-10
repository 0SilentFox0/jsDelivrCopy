import { api } from '@/plugins/axios';
import { PACKAGE_PER_PAGE } from '@/utils/constants';
import { JsdelivrResponse, PackagesParamsType } from './baseTypes';

async function getPackagesInfo({
  packageName,
  from,
}: PackagesParamsType): Promise<JsdelivrResponse> {
  const params = {
    text: packageName,
    size: PACKAGE_PER_PAGE,
    from,
  };

  const { data: packages } = await api.get<JsdelivrResponse>('search', {
    params,
  });

  return packages;
}

export const BaseGateway = {
  getPackagesInfo,
};
