export type PackagesParamsType = {
  from: number;
  packageName: string;
};

export type Package = {
  name: string;
  version: string;
  description: string;
  keywords: string[];
  author: {
    name: string;
  };
  links: {
    npm?: string;
    repository?: string;
  };
};

export type JsdelivrResponse = {
  objects: { package: Package }[];
  total: number;
};
