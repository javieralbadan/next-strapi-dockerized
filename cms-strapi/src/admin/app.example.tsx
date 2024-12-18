import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      'es',
      'nl',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
